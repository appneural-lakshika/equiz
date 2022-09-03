import mongoose from 'mongoose';

export const TopicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }
});