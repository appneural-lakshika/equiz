import mongoose from 'mongoose';

export const LanguageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: Boolean, required: true },
});
