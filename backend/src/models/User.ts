import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // 剔除空白字元
  },

  email: {
    type: String,
    required: true,
    unique: true, // 不重複
    trim: true,
  },

  passwordHash: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: () => new Date(), // 預設值
  },
});

// 把 Schema 實體化
const User = mongoose.model("User", userSchema); // 自動建立 MongoDB 裡的 collection
export default User;
