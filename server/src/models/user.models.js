import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    userRole: {
        type: String,
        required: true,
        enum: ["passenger", "staff", "admin","owner"],
        default: "passenger"
    },

    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    contact: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    },

    password: {
    type: String,
    required: true,
    select: false
    },

    gender: {
        type: String,
        enum: ["Male", "Female", "Other","Prefer Not to Say"],
        default: 'Prefer Not to Say'
    }
}, { timestamps: true, versionKey:false})

userSchema.set("toJSON", {
    transform: (doc, ret) => {
        delete ret.password;
        return ret;
    }
});

export const User = mongoose.model("User", userSchema)