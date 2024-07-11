const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from :{
        type:String,
        required:true, // hona he chahiye ye to 
    },
    to :{
        type:String,
        required:true,
    },
    msg :{
        type:String,
        maxLength:50,
    },
    created_at :{ 
        type:Date,
        required:true,  
    },
});

// ab name chat hai to by defalut collection form hoga chats (plural) name se
const Chat = mongoose.model("Chat" , chatSchema);
module.exports = Chat;