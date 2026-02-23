import express from "express";
import jwt from "jsonwebtoken";

import { otpStore } from "../utils/otpStore.js";
import User from "../models/User.js";


const router = express.Router();

const JWT_SECRET = "hackathon_secret";

router.post("/send-otp", (req,res)=>{
  const contact = req.body.contact.trim().toLowerCase();

  const otp = Math.floor(100000 + Math.random()*900000);
  otpStore.set(contact, otp);

  console.log("OTP (demo):", otp);
  res.json({ message:"OTP sent" });
});

router.post("/verify-otp", (req,res)=>{
  const contact = req.body.contact.trim().toLowerCase();
  const { otp } = req.body;

  console.log("Stored OTP:", otpStore.get(contact));
  console.log("Entered OTP:", otp);

  if(Number(otpStore.get(contact)) !== Number(otp)){
    return res.status(400).json({ error:"Invalid OTP"});
  }

  console.log("OTP verified ✅");

  // ⭐ DIRECT TOKEN (NO DATABASE)
  const token = jwt.sign({ contact }, JWT_SECRET);

  res.json({
    message: "OTP verified successfully",
    token
  });
});

export default router;