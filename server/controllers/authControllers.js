import Users from '../models/user-model.js'
import bcrypt from 'bcrypt'
import { generateVerificationToken } from '../utils/generateVerificationToken.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import tokenModel from '../models/token.js'
import {welcomeEmail} from '../email/email.js'
import crypto from 'crypto'

export const signup = async (req, res) => {
    const {name, email, password} = req.body

    try {

        const user = await Users.findOne({email})

        if(user) {
            return res.status(401).json({success: false, message: 'User already exists'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const verificationToken = generateVerificationToken()

        const verificationTokenExpiresAT = Date.now() + 1 * 60 * 60 * 1000

        const newUser = new Users({
            name,
            email,
            password: hashedPassword,
            verificationToken: verificationToken,
            verificationTokenExpiresAT: verificationTokenExpiresAT
        })

        await newUser.save()

        await welcomeEmail(newUser.email, 'Verify Your Account', newUser.verificationToken)


            return res.status(200).json({
                success: true, 
                message: 'User successfully signed up. Please Verify email Account', 
                user: {...newUser._doc, password: undefined}
            })

   } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: 'Sign up error'})
        throw error
   }
}

export const login = async (req, res) => {

    const {email, password} = req.body

    try {
        const user = await Users.findOne({email})
    
        if(!user) {
            return res.status(401).json({success: false, message: 'wrong Email'})
        }
        
        const isPassword = bcrypt.compare(password, user.password)
        
        if(!isPassword) {
            return res.status(401).json({success: false, message: 'wrong Password'})
        }

        if(!user.isVerified) {
            return res.status(401).json({success: false, message: 'account not verified'})
        }

            return res.status(200).json({success: true, message: 'successful login'})
    } catch (error) {
        console.log(error)
    }

}

export const verifyEmail = async (req, res) => {
    const { code } = req.body

    try {
        
        const user = await Users.findOne({verificationToken: code})

        if(!user) {
            return res.status(401).json({ success: false, message: 'invalid token'})
        }

        
            user.verificationToken = undefined,
            user.verificationTokenExpiresAT = undefined,
            user.isVerified = true,      

        await user.save()

        res.status(200).json({success: true, message: 'email verified successfully'})

    } catch (error) {
        
    }
}

export const test = async (req, res) => {
    res.status(200).json({success: true, message: "works"})
}