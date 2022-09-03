import mongoose from 'mongoose';

export const LiveResultSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
    answer: [],
    duration: Number,
    date: Date,
    score: Number,
});