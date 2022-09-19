import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  email: String,
  name: { type: String, required: true },
  userName: { type: String },
  firstName: { type: String },
  lastName: { type: String },
});
