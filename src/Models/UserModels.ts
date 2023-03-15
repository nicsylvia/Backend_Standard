import { Schema, model } from "mongoose";

import { IUSER } from "../Interfaces/UserInterface";

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
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please enter your Password"]
    },
    role: {
        type: String,
        required: [true, "Please enter your name"]
    },
})