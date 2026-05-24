import { Schema } from "mongoose"
import mongoose, {Schema} from "mongoose"

const passengerSchema = new Schema({

    username: {
        type:String,
        required: true,
        unique:true,
        lowercase:true
    },

    fullName :{
        type : String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    phone :{
        type : Number,
        required: true,
        unique:true,
    },

    age:{
        type:Number,
        required: true,

    },

    gender:{
        type:String,
        enum: ["male", "female", "other"]
    },

    password:{
        type:String,
        required:true,
        minLength:6,
    }

}, {timestamps:true})

const Passenger = mongoose.model("Passenger",passengerSchema)

export default Passenger