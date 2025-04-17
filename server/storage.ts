import { 
  users, type User, type InsertUser,
  contactSubmissions, type ContactSubmission, type InsertContactSubmission,
  blogPosts, type BlogPost, type InsertBlogPost 
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

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

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private blogPosts: Map<number, BlogPost>;
  private userIdCounter: number;
  private submissionIdCounter: number;
  private blogPostIdCounter: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.blogPosts = new Map();
    this.userIdCounter = 1;
    this.submissionIdCounter = 1;
    this.blogPostIdCounter = 1;
    
    // Initialize with some blog posts
    this.initializeBlogPosts();
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.submissionIdCounter++;
    const contactSubmission: ContactSubmission = { ...submission, id };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }
  
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }
  
  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }
  
  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }
  
  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = this.blogPostIdCounter++;
    const blogPost: BlogPost = { ...post, id };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }
  
  private initializeBlogPosts() {
    const posts: InsertBlogPost[] = [
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
    
    posts.forEach(post => {
      const id = this.blogPostIdCounter++;
      const blogPost: BlogPost = { ...post, id };
      this.blogPosts.set(id, blogPost);
    });
  }
}

export const storage = new MemStorage();
