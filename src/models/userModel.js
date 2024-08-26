import { verify } from "crypto";
import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    nama_lengkap: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    nim: {
        type: String,
        required: [true, "Please provide a NIM"],
        unique: true,
    },
    jenis_kelamin: {
        type: String,
        required: [true, "Please provide jenis kelamin"],
    },
    asal_daerah: {
        type: String,
        required: [true, "Please provide asal daerah"],
    },
    golongan_darah: {
        type: String,
        required: [true, "Please provide golongan darah"],
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model
("users", userSchema);

export default User;