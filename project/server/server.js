const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// Database & routes
const { initializeDatabase } = require("./config/database");
const authRoutes = require("./routes/auth");
const chatRoutes = require("./routes/chat");
const collegeRoutes = require('./routes/colleges');
// Add this import
const quizRoutes = require('./routes/quiz');

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(
  helmet({
    contentSecurityPolicy: false, // Disable CSP for dev
  })
);

// CORS: allow frontend + cookies
const allowedOrigins = ["http://localhost:5173", "http://localhost:3000"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // ✅ allow cookies
  })
);

// Body parsing & cookies
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());


// Request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "Server is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use('/api/colleges', collegeRoutes);
app.use('/api/quiz', quizRoutes);

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({ success: false, message: "API endpoint not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  const message =
    process.env.NODE_ENV === "production" ? "Internal server error" : err.message;
  res.status(err.status || 500).json({
    success: false,
    message,
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
});

// Graceful shutdown
process.on("SIGTERM", () => process.exit(0));
process.on("SIGINT", () => process.exit(0));

// Start server
const startServer = async () => {
  try {
    await initializeDatabase();

    if (process.env.NODE_ENV !== "production") {
      try {
        const { seedQuizData } = require('./seeders/quizSeeder');
        await seedQuizData();
      } catch (error) {
        console.log('Quiz data already exists or seeder failed:', error.message);
      }
    }

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🔗 API URL: http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
