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

router.get("/view",async(req,res)=>{
    let data=await dominoModel.find()
    res.json(data)
})

module.exports=router