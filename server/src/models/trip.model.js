 import  mongoose, {Schema} from "mongoose"

const tripSchema = new Schema({
    busId:{
        type:Schema.Types.ObjectId,
        ref:"Bus",
        required:true,
    },
    operatorId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    departureLocation:{
        type:String,
        required:true,
        uppercase:true,
    },

    arrivalLocation:{
        type:String,
        required:true,
        uppercase:true,
    },

    departureTime:{
        type:Date,
        required:true,
    },

    arrivalTime:{
        type:Date,
        required:true,
    },
    ticketPrice:{
        type:Number,
        required:true,
        min:50,
        max:5000,
    },
    availableSeats:{
        type:Number,
        required:true,
        min:0,
        max:100,
    },

    tripDate:{
        type:Date,
        required:true,
    },
},
{
    timestamps:true,
}
);  

const Trip = mongoose.model("Trip", tripSchema);

export default Trip;