import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema remains the same as it might be needed for admin functionality
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Contact form submission schema
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  service: true,
  message: true,
  createdAt: true,
});

// Blog post schema
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  date: text("date").notNull(),
  summary: text("summary").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).pick({
  title: true,
  category: true,
  date: true,
  summary: true,
  content: true,
  imageUrl: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  customerName: text('customer_name').notNull(),
  address: text('address').notNull(),
  phone: text('phone').notNull(),
  email: text('email').notNull(),
  items: text('items').notNull(),
  status: text('status').notNull().default('pending'),
  createdAt: timestamp('created_at').defaultNow(),
});

export type Order = typeof orders.$inferSelect;
export type InsertOrder = typeof orders.$inferInsert;