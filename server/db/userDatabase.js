import mongoose from 'mongoose'

const usersBase = async () => {
    try {

        await mongoose.connect('mongodb+srv://Jude:102008@cluster0.fqm0tsd.mongodb.net/Cardio-users?retryWrites=true&w=majority&appName=Cluster0')
        console.log('connected')
        
    } catch (error) {
        console.error(error)
    }
}


export default usersBase;