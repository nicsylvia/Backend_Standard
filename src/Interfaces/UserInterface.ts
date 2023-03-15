import { Document } from "mongoose";

export interface IUSER extends Document{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string
}

export interface IUserDocument extends Document, IUSER{
    comparePassword(password: string): Promise<boolean>;
}