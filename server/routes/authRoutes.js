import express from "express";
import jwt from "jsonwebtoken";

import { otpStore } from "../utils/otpStore.js";
import User from "../models/User.js";


const router = express.Router();

const JWT_SECRET = "hackathon_secret";

router.post("/send-otp", (req,res)=>{
  const contact = req.body.contact.trim().toLowerCase(); // ⭐ add this

  const otp = Math.floor(100000 + Math.random()*900000);
  otpStore.set(contact, otp);

  console.log("OTP (demo):", otp);
  res.json({ message:"OTP sent" });
});

router.post("/verify-otp", async (req,res)=>{
  const contact = req.body.contact.trim().toLowerCase(); // ⭐ same change
  const { otp } = req.body;

  console.log("Stored OTP:", otpStore.get(contact)); // debug
  console.log("Entered OTP:", otp);

  if(Number(otpStore.get(contact)) !== Number(otp)){
    return res.status(400).json({ error:"Invalid OTP"});
  }

  // rest same...
});

export default router;