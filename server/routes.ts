import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // API route for handling contact form submissions
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate request body using Zod
      const contactSchema = insertContactSubmissionSchema.extend({
        terms: z.boolean().refine(val => val === true, {
          message: "KVKK koşullarını kabul etmeniz gerekmektedir."
        })
      });
      
      const { terms, ...validatedData } = contactSchema.parse({
        ...req.body,
        createdAt: new Date().toISOString()
      });
      
      // Save to storage
      const submission = await storage.createContactSubmission(validatedData);
      
      res.status(201).json({ 
        success: true,
        message: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
        data: submission
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false,
          message: "Formda hatalar var, lütfen kontrol edin.",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false,
          message: "Bir hata oluştu, lütfen daha sonra tekrar deneyin." 
        });
      }
    }
  });

  // API route for getting all blog posts
  app.get('/api/blog', async (req, res) => {
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

  // API route for getting a specific blog post
  app.get('/api/blog/:id', async (req, res) => {
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

  const httpServer = createServer(app);

  return httpServer;
}
