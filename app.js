const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const dominoRouter=require("./controller/dominoRoute")
const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://sumayyasalam06:Sumayyasalam06@cluster0.r19czfd.mongodb.net/dominoDb?retryWrites=true&w=majority",
{useNewUrlParser:true})
app.use("/api/domino",dominoRouter)


app.listen(3001,()=>{
    console.log("server running")
})