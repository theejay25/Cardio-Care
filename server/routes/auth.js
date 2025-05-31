import express from 'express'
import Users from '../models/user-model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/register', async (req, res) => {

   try {
     const {name, email, password} = req.body 
 
     const existingUser = await Users.findOne({email})
 
     if(existingUser) {
         res.status(401).json({success: false, message:'User exists'})
     }
 
     const hashedPassword = await bcrypt.hash(password, 10)

     const newUser = new Users ({
        name, email, password: hashedPassword
     })

     await newUser.save()

     return res.status(200).json({success: true, message: 'successfully Signed up'})

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

     const token = jwt.sign({email, userID: sameEmail._id}, process.env.SECRET_USER_KEY || 'FallbaCk_kEy22y2', {expiresIn: '2h'})

     return res.status(200).json({success: true, message:'Successfully logged in', token, user:{name: sameEmail.name}})
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