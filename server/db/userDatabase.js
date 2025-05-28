import mongoose from "mongoose";

const mongooseConnect = async () => {
    
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/Cardio-users')
        console.log('connected')

    } catch (error) {
        console.log('erro connecting', error)
    }

}

export default mongooseConnect