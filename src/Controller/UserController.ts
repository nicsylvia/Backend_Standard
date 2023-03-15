import { Request, Response, NextFunction } from "express";

import UserModel from "../Models/UserModels";

import {AsyncHandler} from "../Utils/AsyncHandler"

import { IUSER } from "../Interfaces/UserInterface";
import { AppError, HTTPCODES } from "../Utils/AppError";

// Registration:
export const Registration = AsyncHandler(async(
    req: Request<{}, {}, IUSER>,
    res: Response,
    next: NextFunction
) =>{
    const { name, email, password, confirmPassword } = req.body;

    const User = await UserModel.create({
        name,
        email,
        password,
        confirmPassword
    })

    if(User){
        next(new AppError({
            message: "Account Not Created",
            httpcode: HTTPCODES.BAD_REQUESTED,
        }))
    }
return res.status(HTTPCODES.CREATED).json({
    message: "Successfully Created User",
    data: User,
})
})