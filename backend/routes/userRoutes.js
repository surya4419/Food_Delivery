import express from "express"
import { authenticateToken, loginUser,registerUser, userDetails } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get("/profile",authenticateToken,userDetails)

export default userRouter;