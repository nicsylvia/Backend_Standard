import { RequestHandler } from "express";
import { validator } from "../Validator";
import { UserSchemaValidation } from "./UserSchema";

export const RegisterValidation: RequestHandler = ( req, res, next ) => validator(UserSchemaValidation.Register, req.body, next);

export const LoginValidation: RequestHandler = (req, res, next) => validator(UserSchemaValidation.Login, req.body, next)