import {
  users, type User, type InsertUser,
  contactSubmissions, type ContactSubmission, type InsertContactSubmission,
  blogPosts, type BlogPost, type InsertBlogPost,
  orders, type Order, type InsertOrder // ✅ Add these
} from "@shared/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";


import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import type { NeonDatabase } from "drizzle-orm/neon-serverless";

type DB = NodePgDatabase<typeof import("@shared/schema")> | NeonDatabase<typeof import("@shared/schema")>;

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  delBlogPost(id: number): Promise<BlogPost | undefined>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class DatabaseStorage implements IStorage {
  constructor(private db: DB) {}

  async getUser(id: number): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username));
    return result[0];
  }
  async createUser(user: InsertUser): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const [createdUser] = await this.db
      .insert(users)
      .values({ ...user, password: hashedPassword })
      .returning(); // assuming you're using PostgreSQL

    return createdUser;
  }



  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const result = await this.db.insert(contactSubmissions).values(submission).returning();
    return result[0];
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await this.db.select().from(contactSubmissions);
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return await this.db.select().from(blogPosts);
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    const result = await this.db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return result[0];
  }


  async delBlogPost(id: number): Promise<BlogPost | undefined> {
    // Step 1: Get the post first (so we can return it if deleted)
    const post = await this.db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.id, id))
      .then(rows => rows[0]);
  
    if (!post) {
      console.warn(`No post found with ID ${id}`);
      return undefined;
    }
  
    // Step 2: Delete the post
    const result = await this.db
      .delete(blogPosts)
      .where(eq(blogPosts.id, id));
  
    console.log("Delete result:", result);
  
    // Optional: Check if result confirms deletion (depends on DB driver)
    if ('rowCount' in result && result.rowCount === 0) {
      console.warn(`Delete failed for ID ${id}`);
      return undefined;
    }
  
    return post;
  }
  

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const result = await this.db.insert(blogPosts).values(post).returning();
    return result[0];
  }

  async getOrders(): Promise<Order[]> {
    return await this.db.select().from(orders).orderBy(orders.createdAt);
  }

  async createOrder(order: InsertOrder): Promise<Order> {
    const result = await this.db.insert(orders).values(order).returning();
    return result[0];
  }

  async updateOrderStatus(id: number, status: string): Promise<Order | undefined> {
    const result = await this.db
      .update(orders)
      .set({ status })
      .where(eq(orders.id, id))
      .returning();
    return result[0];
  }

  async deleteOrder(id: number): Promise<void> {
    await this.db.delete(orders).where(eq(orders.id, id));
  }

  async initializeBlogPostsIfEmpty() {
    const posts = await this.getBlogPosts();

    if (posts.length === 0) {
      const demoPosts: InsertBlogPost[] = [
        {
          title: "Genetik Testler Kanserin Erken Teşhisinde Nasıl Rol Oynar?",
          category: "Bilim",
          date: "15 Haziran 2023",
          summary: "Modern genetik testlerin kanser riskini belirlemedeki rolü ve erken teşhisin önemi hakkında kapsamlı bir bakış.",
          content: "Genetik testler, kanserin erken teşhisinde giderek daha önemli bir rol oynamaktadır...",
          imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
          title: "Genetik Yapınız Beslenme Şeklinizi Nasıl Etkiler?",
          category: "Sağlık",
          date: "2 Haziran 2023",
          summary: "Nutrigenetik ve kişiselleştirilmiş beslenme planları hakkında bilmeniz gereken her şey bu yazıda.",
          content: "Genetik yapınız, besinleri nasıl metabolize ettiğinizi ve hangi besinlere nasıl tepki verdiğinizi belirleyen faktörlerden biridir...",
          imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
          title: "Doğum Öncesi Genetik Testler: Hangi Aşamada, Hangi Test?",
          category: "Aile",
          date: "20 Mayıs 2023",
          summary: "Hamilelik döneminde yapılabilecek genetik testler ve bunların sağladığı bilgiler hakkında uzman görüşü.",
          content: "Doğum öncesi genetik testler, bebeğinizin sağlığı hakkında önemli bilgiler sağlayabilir ve olası genetik bozuklukları erken aşamada tespit etmenize yardımcı olabilir...",
          imageUrl: "https://images.unsplash.com/photo-1631563019676-dade0dfbcc2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
      ];

      for (const post of demoPosts) {
        await this.createBlogPost(post);
      }
    }
  }
}
