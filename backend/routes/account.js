const express=require("express")
const router=express.Router()
const {authMiddleware}=require("../middleware")
const {Account}=require("../db")
const mongoose=require("mongoose")

router.get("/balance",authMiddleware,async (req,res)=>{
    const account=await Account.findOne({
        userId:req.userId,
    })

    res.json({
        balance:account.balance,
    })
})

router.post("/transfer",authMiddleware,async (req,res)=>{
    const session=await mongoose.startSession()

    session.startTransaction()
    const {amount,to}=req.body
    console.log(req.body)

    const account=await Account.findOne({userId:req.userId}).session(session)

    if(!amount || account.balance<amount){
        await session.abortTransaction()
        return res.status(400).json({
            message:"Insufficient balance"
        })
    }

    const toAccount=await Account.findOne({userId:to}).session(session)

    if(!toAccount){
        await session.abortTransaction()
        return res.status(400).json({
            message:"Account not found"
        })
    }

    await Account.updateOne({userId:req.userId},{$inc:{balance:-amount}}).session(session)
    await Account.updateOne({userId:to},{$inc:{balance:amount}}).session(session)

    await session.commitTransaction()
    res.json({
        message:"Transaction successful"
    })
})

module.exports=router