import { Router } from "express"
import { Registration } from "../Controller/UserController"
import { RegisterValidation } from "../Middlewares/Validator/UserValidation/UserValidation"


const router = Router()

router.post("/register", RegisterValidation, Registration)


export default router