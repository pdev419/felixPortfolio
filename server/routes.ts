import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactData.email)) {
        return res.status(400).json({ 
          message: "Please provide a valid email address" 
        });
      }

      // Additional validation
      if (contactData.name.trim().length < 2) {
        return res.status(400).json({ 
          message: "Name must be at least 2 characters long" 
        });
      }

      if (contactData.message.trim().length < 10) {
        return res.status(400).json({ 
          message: "Message must be at least 10 characters long" 
        });
      }

      const contact = await storage.createContact(contactData);
      
      res.status(201).json({ 
        message: "Thank you for your message! I'll get back to you soon.",
        contact: {
          id: contact.id,
          name: contact.name,
          subject: contact.subject,
          createdAt: contact.createdAt
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Please fill in all required fields correctly",
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      }
      
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "There was an error sending your message. Please try again later." 
      });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ 
        message: "Error retrieving contacts" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
