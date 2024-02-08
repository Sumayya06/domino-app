const express=require("express")
const dominoModel=require("../model/dominoModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let domino=new dominoModel(data)
    let result=await domino.save()
    res.json({
        status:"success"
    })
})

module.exports=router