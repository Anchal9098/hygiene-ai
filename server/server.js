import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

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

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});