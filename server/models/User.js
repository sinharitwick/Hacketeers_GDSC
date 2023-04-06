const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    desc: {
        type: String,
        max: 60
    },
    city: {
        type: String,
        max: 25
    },
    from: {
        type: String,
        max: 50
    },
    blogs: [{type: mongoose.Types.ObjectId, ref:"Blog", required:true}],
},
    {timestamps: true}
);

module.exports=mongoose.model("User", userSchema);