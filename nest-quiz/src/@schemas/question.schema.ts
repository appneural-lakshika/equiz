import mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
    options: [],
    answer: String,
});