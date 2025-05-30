import express from 'express'
import cors from 'cors'
import router from './routes/auth.js'
import usersBase from './db/userDatabase.js'

const app = express()

const corsOptions = {
    origin: 'http://localhost:5173'
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api/auth', router)

app.get('/fruits', (req, res) => {
    res.status(200).json({
        fruits: ['mango', 'pineapple', 'orange', '...']
    })
})

app.listen(8080, () => {
    usersBase()
    console.log('A GREAT GOD!!!!!!!')
})
