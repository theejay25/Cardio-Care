import express from 'express'
import Users from '../models/user-model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import tokenModel from '../models/token.js'
import emailfunct from '../email/email.js'
import crypto from 'crypto'

dotenv.config()

const router = express.Router()

router.post('/register', async (req, res) => {

   try {
     const {name, email, password} = req.body 
 
     const existingUser = await Users.findOne({email})
 
     if(existingUser) {
         res.status(401).json({success: false, message:'User exists'})
     }
 
     const hashedPassword = await bcrypt.hash(password, 10)
     
     const token = jwt.sign({email, name}, process.env.SECRET_USER_KEY, {expiresIn: '2h'})

     //send verification email
    

     const newUser = new Users ({
        name, email, password: hashedPassword
     })

     await newUser.save()

     const tokendb = await new tokenModel({
        userId: newUser._id,
        token: crypto.randomBytes(32).toString('hex')
     }).save()

     const url = `${process.env.BASE_URL}users/${newUser._id}/verify/${tokendb.token}`

     try {
         await emailfunct(newUser.email, 'verify Email', url)
         return res.status(200).json({success: true, message: 'email sent to your account'})
     } catch (emailError) {
         return res.status(500).json({success: false, message: 'User created, but failed to send email', error: emailError.message})
     }

   } catch (error) {
        res.status(500).json({success: false, message: 'Sign up error'} )
   }


})



router.post('/login', async (req, res) => {

   try {
     const {email, password} = req.body
 
     const sameEmail = await Users.findOne({email})

     if(!sameEmail) {
         return res.status(401).json({success: false, message:'Wrong email'})
     }
     
     const samePassword = await bcrypt.compare(password, sameEmail.password)
     
     if(!samePassword) {
         return res.status(401).json({success: false, message:'Wrong password'})
     }


     return res.status(200).json({success: true, message:'Successfully logged in', user:{name: sameEmail.name}})
    } catch (error) {
        
        return res.status(500).json({success: false, message:'Unsuccessful login'})

   }


})



router.get('/get', (req,res) => {
    res.json({
        success: true,
        text: 'i am a ok'
    })
})

export default router