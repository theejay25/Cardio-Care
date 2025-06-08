import express from 'express'
import { signup, test, login, verifyEmail } from "../controllers/authControllers.js";

const router = express.Router()

router.post('/register', signup)

router.post('/login', login)

router.post('/verify-email', verifyEmail)
router.get('/verify',  async(req, res) => {
    res.status(200).json({success: true, message: "workers"})
})

router.get('/test', test)

export default router