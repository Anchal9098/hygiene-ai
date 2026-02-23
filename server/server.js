import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// ⭐ Middlewares
app.use(cors());
app.use(express.json());

// ⭐ MongoDB Connection (VERY IMPORTANT)
mongoose.connect("mongodb+srv://anchalgupta0725:<db_password>@anchal.bpnq8.mongodb.net/?appName=Anchal")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// ⭐ Auth Routes (OTP Login)
app.use("/api/auth", authRoutes);

// ⭐ Translate API
app.post("/translate", async (req, res) => {
  const { text, lang } = req.body;

  let translatedText = text;

  if (lang === "hi") {
    if (text === "Smart Hygiene AI") translatedText = "स्मार्ट हाइजीन एआई";
    if (text.includes("Search")) translatedText = "स्थान खोजें...";
  }

  if (lang === "mr") {
    if (text === "Smart Hygiene AI") translatedText = "स्मार्ट हायजीन एआय";
    if (text.includes("Search")) translatedText = "ठिकाण शोधा...";
  }

  res.json({ translation: translatedText });
});

// ⭐ Test route (optional but useful)
app.get("/", (req, res) => {
  res.send("Server is working!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});