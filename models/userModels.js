const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userEmail:{
        type:String,
        reuired:[true,]
    },
    userPassword:{
        type:String,
        require:[true]
    }
}
)
module.exports = mongoose.model("users",userSchema);