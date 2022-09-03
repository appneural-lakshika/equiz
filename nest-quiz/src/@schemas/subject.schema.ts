import mongoose from 'mongoose';

export const SubjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: Boolean, required: true },
});
