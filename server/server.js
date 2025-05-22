import express from 'express'
import cors from 'cors'

const app = express()

const corsOptions = {
    origin: 'http://localhost:5173'
}

app.use(cors(corsOptions))
app.use(express.json())

app.get('/fruits', (req, res) => {
    res.status(200).json({
        fruits: ['mango', 'pineapple', 'orange', '...']
    })
})

app.listen(8080, () => {
    console.log('A GREAT GOD!!!!!!!')
})
