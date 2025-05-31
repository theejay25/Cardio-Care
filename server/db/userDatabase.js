import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const usersBase = async () => {
    try {

        await mongoose.connect(process.env.DB)
        console.log('connected')
        
    } catch (error) {
        console.error(error)
    }
}


export default usersBase;