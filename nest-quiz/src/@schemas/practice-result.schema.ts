import mongoose from 'mongoose';

export const PracticeResultSchema = new mongoose.Schema({
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'question' },
    uId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    completedQuestions: Object,
    correctAnswers: Number,
    wrongAnswers: Number,
    marksScore: Number,
    timeScore: Number,
});