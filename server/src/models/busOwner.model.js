import mongoose, {Schema} from "mongoose";

const busOwnerSchema = new Schema({

    fullName:{
        type: String,
        required: true
    },
   
    busNumber:{
        type:mongoose.busSchema.busNumber,
        required:true
    },

    companyName:{
        type:String,
        required: true
    },

    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
     
    phone:{
        type: Number,
        required:true,
        unique:true
    },

    alternatePhone:{
        type: Number,
        unique: true
    },

    license:{
        type: String,
        required:true
    },

    rating:{
        type: Number,
    }



},{timestamps:true})


const busOwner = mongoose.model("busOwner", busOwnerSchema)

export default busOwner