import mongoose from 'mongoose';

export const SummarySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    totalScore: Number,
    totalDuration: Number,
    quizType: {
        type: String,
        enum: ['Live', 'Practice']
    }


});