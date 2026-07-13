import { mongoose, Schema } from "mongoose";

const routeSchema = new Schema({

    source: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    distance: {
        type: String,
        required: true
    },
    estimateDuration: {
        type: String,
        required: true
    },
    tolls: {
        type: String,
        require: true,
        default: null
    },
    stops: [
        {
            sourceCityName: {
                cityStops: [
                    {
                        stopName: {
                            type: String,
                            require: true,
                        },
                        stopNo: {
                            type: Number,
                            required: true
                        },
                        arrivalTime: {
                            type: String,
                            required: true
                        },
                        sequence: {
                            type: String,
                            required: true
                        }
                    }
                ]
            },
        },
        {
            destinationCityName: {
                cityStops: [
                    {
                        stopName: {
                            type: String,
                            require: true,
                        },
                        stopNo: {
                            type: Number,
                            required: true
                        },
                        arrivalTime: {
                            type: String,
                            required: true
                        },
                        sequence: {
                            type: String,
                            required: true
                        }
                    }
                ]
            },
        },
        {
         breakStops:{
            stopName:{
                type:String,
                required:true
            },
            stopType:{
                type:String,
                required:true
            }
         }
        }
    ]


}, { timestamps: true })