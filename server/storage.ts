import { 
  users, type User, type InsertUser,
  contactSubmissions, type ContactSubmission, type InsertContactSubmission,
  blogPosts, type BlogPost, type InsertBlogPost 
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// The interface remains the same as it defines what methods any storage implementation must provide
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form submission operations
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Blog post operations
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

// DatabaseStorage implementation for PostgreSQL using Drizzle ORM
export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result.length > 0 ? result[0] : undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result.length > 0 ? result[0] : undefined;
  }

  async createUser(user: InsertUser): Promise<User> {
    const result = await db.insert(users).values(user).returning();
    return result[0];
  }
  
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const result = await db.insert(contactSubmissions).values(submission).returning();
    return result[0];
  }
  
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions);
  }
  
  async getBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts);
  }
  
  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    const result = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return result.length > 0 ? result[0] : undefined;
  }
  
  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const result = await db.insert(blogPosts).values(post).returning();
    return result[0];
  }

  // Method to initialize demo blog posts if none exist
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

// Create and export a storage instance
export const storage = new DatabaseStorage();
