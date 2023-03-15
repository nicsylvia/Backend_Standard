import { Schema, model } from "mongoose";

import { IUSER } from "../Interfaces/UserInterface";

import isEmail from "validator/lib/isEmail"

const UserSchema: Schema<IUSER> = new Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        lowercase: true,
        trim: true,
        validate: [isEmail, "Please enter a valid email"],
    },
    password: {
        type: String,
        required: [true, "Please enter your Password"]
    },
    confirmPassword: {
        type: String,
        required: [true, "Please confirm your password"]
    },
    role: {
        type: String,
        required: [true, "Please enter your role"],
        message: "You must either be a User, Manager or Admin",
        enum: ["User", "Admin", "Manager"],
        default: "User"
    },
},
{
    timestamps: true
})

const UserModel = model<IUSER>("User", UserSchema);

export default UserModel;