import express from 'express'
import Users from '../models/user-model.js'
import bcrypt from 'bcrypt'

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

router.get('/get', (req,res) => {
    res.json({
        success: true,
        text: 'i am a ok'
    })
})

export default router