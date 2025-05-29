import mongoose from 'mongoose'

const usersBase = async () => {
    try {

        await mongoose.connect('mongodb://localhost:27017/Cardio-care-users')
        console.log('connected')
        
    } catch (error) {
        console.error(error)
    }
}

export default usersBase;