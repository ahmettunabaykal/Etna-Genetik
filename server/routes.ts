import type { Express } from "express";
import { createServer, type Server } from "http";
import { DatabaseStorage } from "./storage";
import { z } from "zod";
import type { Request, Response } from "express"; // ✅
import { insertContactSubmissionSchema } from "@shared/schema";
import jwt from "jsonwebtoken";
import { authMiddleware } from "./middleware/auth"; // or wherever it's defined
import { insertBlogPostSchema } from "@shared/schema";
import { eq } from "drizzle-orm";
import { blogPosts } from "@shared/schema";
import type { BlogPost } from "@shared/schema";
import bcrypt from 'bcrypt';
import { users } from '@shared/schema'; // ✅ your user schema

export async function registerRoutes(app: Express, storage: DatabaseStorage): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)
// API route for handling contact form submissions
app.post("/api/contact", async (req, res) => {
  console.log("🛬 Incoming body:", req.body); // <-- ADD THIS
  try {
    /* ---------------- Zod şeması --------------- */
    const contactFormSchema = z.object({
      firstName: z.string().min(2, "Ad en az 2 karakter olmalıdır"),
      lastName:  z.string().min(2, "Soyad en az 2 karakter olmalıdır"),
      email:     z.string().email("Geçerli bir e-posta giriniz"),
      phone:     z.string().min(10, "Telefon en az 10 karakter olmalıdır"),
      service:   z.string().min(1, "Bir hizmet seçiniz"),
      message:   z.string().min(10, "Mesaj en az 10 karakter olmalıdır"),
      /* front-end gönderebilir; göndermiyorsa sunucu ekler */
      createdAt: z.string().optional(),
      /* KVKK onayı zorunlu */
      terms:     z.boolean().refine(val => val === true, {
        message: "KVKK koşullarını kabul etmeniz gerekmektedir."
      }),
    });

    /* ----------- Doğrulama & ayrıştırma ---------- */
    const parsed = contactFormSchema.parse(req.body);

    /* terms’i DB’ye kaydetmiyoruz */
    const { terms, createdAt, ...data } = parsed;

    const submissionData = {
      ...data,
      createdAt: createdAt ?? new Date().toISOString(), // varsa kullan, yoksa ekle
    };

    /* -------------- Veritabanına yaz ------------- */
    const submission = await storage.createContactSubmission(submissionData);

    res.status(201).json({
      success: true,
      message: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
      data: submission,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Formda hatalar var, lütfen kontrol edin.",
        errors:  error.errors,
      });
    }

    console.error("Contact route error:", error);
    res.status(500).json({
      success: false,
      message: "Bir hata oluştu, lütfen daha sonra tekrar deneyin.",
    });
  }
});

app.get('/api/blog', async (req, res) => {
  try {
    const posts = await storage.getBlogPosts();

    // 🔥 This disables browser/proxy caching
    res.setHeader('Cache-Control', 'no-store');

    res.json(posts);
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Blog yazıları alınırken bir hata oluştu." 
    });
  }
});


app.post('/api/auth/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const dbUser = await storage.getUserByUsername(username); // ✅ using public method

  if (!dbUser) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const passwordMatch = await bcrypt.compare(password, dbUser.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: dbUser.id, username: dbUser.username }, process.env.JWT_SECRET!, {
    expiresIn: '1h',
  });

  return res.json({ token });
});



  // Admin routes
  app.get('/api/admin/messages', authMiddleware, async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: "Failed to fetch contact submissions" 
      });
    }
  });
  // Protected version (for admin)
app.get('/api/admin/blog', authMiddleware, async (req, res) => {
  try {
    const posts = await storage.getBlogPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Blog yazıları alınırken bir hata oluştu." 
    });
  }
});


  app.post('/api/admin/blog', authMiddleware, async (req, res) => {
    try {
      const post = await storage.createBlogPost(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: "Failed to create blog post" 
      });
    }
  });

  // Order routes
  app.get('/api/admin/orders', authMiddleware, async (req, res) => {
    try {
      const orders = await storage.getOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch orders" });
    }
  });

  app.post('/api/admin/orders', authMiddleware, async (req, res) => {
    try {
      const order = await storage.createOrder(req.body);
      res.status(201).json(order);
    } catch (error) {
      console.error("❌ Order Creation Error:", error); // <- ADD THIS LINE
      res.status(500).json({ message: "Failed to create order" });
    }
  });
  

  app.patch('/api/admin/orders/:id/status', authMiddleware, async (req, res) => {
    try {
      const { status } = req.body;
      const order = await storage.updateOrderStatus(parseInt(req.params.id), status);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ message: "Failed to update order status" });
    }
  });

  app.delete('/api/admin/orders/:id', authMiddleware, async (req: Request<{ id: string }>, res: Response) => {
    try {
      await storage.deleteOrder(parseInt(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete order" });
    }
  });
  

// GET blog post by ID
app.get('/api/blog/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Geçersiz blog ID" });
    }

    const post = await storage.getBlogPost(id);
    if (!post) {
      return res.status(404).json({ message: "Blog yazısı bulunamadı" });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Blog yazısı alınırken bir hata oluştu."
    });
  }
});

app.delete('/api/admin/blog/:id', authMiddleware, async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

  const deletedPost = await storage.delBlogPost(id);

  if (!deletedPost) {
    return res.status(404).json({ message: "Post not found or not deleted" });
  }

  res.json({ success: true });
});

app.post("/api/setup-user", async (_req, res) => {
  try {
    const existing = await storage.getUserByUsername("etna2025");

    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    await storage.createUser({
      username: "etna2025",
      password: "etna.health2025",
    });

    return res.status(201).json({ message: "User etna2025 created successfully" });
  } catch (error) {
    console.error("Failed to create user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});





// Finalize HTTP server creation and return
const httpServer = createServer(app);
return httpServer;  
}
