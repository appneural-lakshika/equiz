import mongoose from 'mongoose';

export const QuizSchema = new mongoose.Schema({
    title: String,
    status: String,
    category: String,
    description: String,
    language: String,  
    duration: Number,
    insertDate: Date,
    datetime: Date
});