import mongoose from "mongoose";

const userData = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    phone: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const userModel = mongoose.model('User', userData);

export default userModel;
