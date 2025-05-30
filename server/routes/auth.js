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

     const sameUser = await Users.findOne({email})

     if(!sameUser) {
        return res.status(401).json({success: false, message:'User doesnt exist'})
     }
    
     const samePassword = await bcrypt.compare(password, sameUser.password)
    
     if(!samePassword) {
         return res.status(401).json({success: false, message:'wrong password'})
     }

     const token = jwt.sign(
        {email, user_id: sameUser._id}, 
        process.env.VITE_SECRET_USER_KEY || 'fallback_key1275639', 
        {expiresIn:'2h'} 
    )

     return res.status(200).json({success: true, message:'Login successful', token, user:{name: sameUser.name}})

   } catch (error) {
        res.status(500).json({success: false, message:'login errors', error: error.message})
   }

})

router.get('/get', (req,res) => {
    res.json({
        success: true,
        text: 'i am a ok'
    })
})

export default router