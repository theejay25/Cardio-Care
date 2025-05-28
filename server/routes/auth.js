import express from 'express'

const router = express.Router()

router.post('/register', () => {
    console.log('works')
})

router.get('/get', (req,res) => {
    res.json({
        success: true,
        text: 'i am a ok'
    })
})

export default router