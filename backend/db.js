const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://hemant_1001:Hemant%401001@cluster0.6ea4z.mongodb.net/paytm?retryWrites=true&w=majority&appName=Cluster0")

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    password:{
        type:String,
        required:true,
        minLength:3
    },
    firstname:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    lastname:{
        type:String,
        require:true,
        trim:true,
        maxLength:50
    }
})

const accountSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})

const User=mongoose.model("User",userSchema)
const Account=mongoose.model("Account",accountSchema)

module.exports={User,Account}