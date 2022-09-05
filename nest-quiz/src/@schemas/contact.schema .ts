import mongoose from 'mongoose';

export const ContactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  subject: { type: String, required: true },
});
