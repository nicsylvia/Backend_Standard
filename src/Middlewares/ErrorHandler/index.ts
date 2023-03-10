import { Request, Response, NextFunction } from "express";

import { AppError, HTTPCODES } from "../../Utils/AppError";

export const ErrorHandler = ( 
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) =>{}