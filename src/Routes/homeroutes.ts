import { NextFunction, Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) =>{
    try {
        res.status(200).json({
            message: "Welcome to Set06 Standard API"
        })
    } catch (error) {
        next(error)
    }
})

export default router