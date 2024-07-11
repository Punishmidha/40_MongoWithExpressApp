const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection successfull")
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from:"rahul",
    to:"anuj",
    msg:"send me notes of rohit",
    created_at: new Date()
    },

    {
    from:"anu",
    to:"aman",
    msg:"Good morning!",
    created_at: new Date()
    },

    {
    from:"radha",
    to:"alice",
    msg:"your",
    created_at: new Date()
    },

    {
    from:"g",
    to:"g",
    msg:"extra sheets",
    created_at: new Date()
    },

]
Chat.insertMany(allChats);
