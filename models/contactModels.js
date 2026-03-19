const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, "Please add a name"]
    },
    email:{
        type:String,
        required: [true,"Email is a req field"]
    },
    id:{
        type:Number,
        required :[true],
    },
    address:{
        type: String,
        required:[true]
    }
});

module.exports = mongoose.model("Contact",contactSchema);