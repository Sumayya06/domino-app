const mongoose=require("mongoose")
const dominoSchema=new mongoose.Schema(
    {
        name:String,
        address:String,
        phone:String,
        oderId:String
    }
)

module.exports=mongoose.model("domino",dominoSchema)