import mongoose, {Schema} from "mongoose"

const busSchema = new Schema({

    busNumber:{
        type:String,
        required :true,
        unique:true,
        uppercase:true,
    },

    operatorId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required :true,
    },

    busType:{
        type:[String],
        required :true,
        enum:["AC Sleeper", "Non-AC Sleeper", "Non-AC Seater", "AC Seater"],
    },

    busCapacity:{
        type:Number,
        required :true,
        min:10,
        max:100,
    },

    amenities:{
        type:[String],
        enum:["WiFi", "Charging Ports", "Reclining Seats", "Onboard Restroom", "Entertainment System", "Air Conditioning", "Live Tracking"],
    },

    registrationNumber:{
        type:String,
        required :true,
        unique:true,
        uppercase:true,
    },

    insuranceDetails:[{
       type:String,
        required :true,
        unique:true,
        uppercase:true,
    },
    {insuranceValidTill: Date}],

    SeatLayout:{
        type:mongoose.Schema.SeatLayoutSchema
    },

    imageUrls:{
        type:[String],
        required :true,
        unique:true,
        uppercase:true,
    },

    relationshipWithOperator:{
        type:String,
        required :true,
        enum:["Owned", "Leased", "Partnership"],
    }


}, {timestamps:true})

const Bus = mongoose.model("Bus", busSchema)

export default Bus

