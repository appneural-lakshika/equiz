import mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
    question: { type: String, required: true },
    // topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
    answers: [],
    status: {  type: Boolean, required: true },
    answerRight: String,
    answered: String,
});