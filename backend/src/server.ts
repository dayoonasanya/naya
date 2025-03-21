import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Alert from "./models/alert.model";
import predictionRouter from "./routes/predict.route";

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // ✅ Parse body first

// Routes
app.use("/api/predict", predictionRouter); // ✅ Register prediction route

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");

    // Start the server after successful DB connection
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err: unknown) => {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error("❌ Failed to connect to MongoDB:", errorMessage);
  });

// GET: Fetch all alerts
app.get("/api/alerts", async (req, res) => {
  try {
    const alerts = await Alert.find();
    res.json(alerts);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: errorMessage });
  }
});

// Default route
app.get("/", (req, res) => {
  res.send("Naya Backend is Running!");
});

