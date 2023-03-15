import { Request, Response, NextFunction } from "express";

import UserModel from "../Models/UserModels";

import {AsyncHandler} from "../Utils/AsyncHandler"

import { IUSER } from "../Interfaces/UserInterface";

// Registration:
export const Registration = AsyncHandler(async(
    req: Request<{}, {}, IUSER>,
    res: Response,
    next: NextFunction
) =>{
    const { name, email, password, confirmPassword } = req.body;
})