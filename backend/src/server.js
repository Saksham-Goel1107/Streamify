import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";

import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 5001;  // Fallback to 5001 if PORT is not set

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure express and cookie parser first
app.use(express.json());
app.use(cookieParser());

// Configure CORS
app.use(
  cors({
    origin: process.env.NODE_ENV === "production" 
      ? "https://streamify-rho-pearl.vercel.app"
      : ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Set-Cookie"],
    preflightContinue: true,
  })
);

// Configure global middleware for cookie settings
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chats", chatRoutes);

// Add a health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Serve frontend static files in production
if (process.env.NODE_ENV === "production") {
  const frontendBuildPath = path.resolve(__dirname, "../../frontend/dist");
  
  // Serve static files
  app.use(express.static(frontendBuildPath));
  
  // Handle client-side routing
  app.get("*", (req, res) => {
    const indexPath = path.join(frontendBuildPath, "index.html");
    if (!fs.existsSync(indexPath)) {
      console.error(`File not found: ${indexPath}`);
      return res.status(404).send("Frontend build not found");
    }
    res.sendFile(indexPath);
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
