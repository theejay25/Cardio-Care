import mongoose from "mongoose";
import { Schema } from "mongoose";

const tokenSchema = new mongoose.Schema({
    userId: {
        type:Schema.Types.ObjectId,
        required:true,
        ref:'user',
        unique: true
    },
    token:{
        type:String,
        require: true
    },
    createdAt: {
        type: Date, default: Date.now(), expires:3600//1h
    }

})

const tokenModel = mongoose.model('Tokens', tokenSchema)

export default tokenModel