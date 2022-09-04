import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    email: String,
    username: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    
});