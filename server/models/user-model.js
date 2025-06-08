import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    verificationToken: String,
    verificationTokenExpiresAT: Date,
    isVerified:{type: Boolean, default: false}
})

const Users = mongoose.model('Cardio-Users', userSchema)

export default Users