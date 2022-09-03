import mongoose from 'mongoose';

export const QuizSchema = new mongoose.Schema({
    name: String,
    questionSet: [],
    scheduleDate: Date,
    questionCountdown: Number,      
    perQuestionMarks: Number,
    isMinusMarking: Number,
    isMinusMarkingRatio: Number,
    duration: Number,
});