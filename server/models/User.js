import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  phone: String,
  googleId: String
});

const User = mongoose.model("User", userSchema);

export default User;   // ⭐ VERY IMPORTANT LINE