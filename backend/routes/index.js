const userRouter=require("./user");
const accountRouter=require("./account")

const express=require("express")
const router=express.Router()

console.log("hjio")
router.use("/user",userRouter)
router.use("/account",accountRouter)

module.exports=router

