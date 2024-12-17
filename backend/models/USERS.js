import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true,
    },
    mobileno: {
        type: String,
        required: true,
    },
    userid: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    company_name: {
        type: String,
        required: true,
    },
    user_type: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export default mongoose.model('User', usersSchema);
