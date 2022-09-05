import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    email: String,
    userName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    
});