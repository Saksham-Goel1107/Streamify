import { generateStreamToken } from "../lib/stream.js";

export async function getStreamToken(req, res) {
  try {
    if (!req.user?.id) {
      return res.status(401).json({ message: "Unauthorized - User ID missing" });
    }

    const token = generateStreamToken(req.user.id);
    if (!token) {
      return res.status(500).json({ message: "Failed to generate Stream token" });
    }

    // Cache for 5 minutes
    res.set('Cache-Control', 'private, max-age=300');
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error in getStreamToken controller:", error);
    res.status(500).json({ 
      message: error.message || "Failed to generate Stream token",
      error: process.env.NODE_ENV === "development" ? error.stack : undefined 
    });
  }
}
