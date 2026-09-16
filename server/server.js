const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./src/config/db");

const projectRoutes = require("./src/routes/project.routes");
const skillRoutes = require("./src/routes/skill.routes");
const educationRoutes = require("./src/routes/education.routes");
const contactRoutes = require("./src/routes/contact.routes");
const certificationRoutes = require("./src/routes/certification.routes");
const adminRoutes = require("./src/routes/admin.routes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/certifications", certificationRoutes);
app.use("/api/admin", adminRoutes);

app.get("/api/health", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT 1 AS result");

        res.json({
            success: true,
            message: "Personal Website API is running",
            database: rows[0].result === 1 ? "connected" : "error"
        });


    } catch (error) {
        console.error("Database connection error:", error);

        res.status(500).json({
            success: false,
            message: "Database connection failed"
        });
    }
});

const PORT = process.env.PORT || 5000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;