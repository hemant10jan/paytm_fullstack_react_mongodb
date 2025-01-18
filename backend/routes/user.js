const express=require("express");
const router=express.Router()
const z=require("zod");
const jwt=require("jsonwebtoken")
const {JWT_SECRET}=require("../config")
const {User,Account}=require("../db")
const {authMiddleware}=require("../middleware")

const signupBody=z.object({
    username:z.string().email(),
    password:z.string().min(8).max(24),
    firstname:z.string().min(1),
    lastname:z.string().min(1)
})

const signinBody=z.object({
    username:z.string().email(),
    password:z.string().min(8).max(24)
})

router.post("/signup",async (req,res)=>{
    const {success} = signupBody.safeParse(req.body)
    console.log(success)

    if(!success){
        return res.status(411).json({
            message:"Invalid Input"
        })
    }

    const existingUser = await User.findOne({username:req.body.username})

    if(existingUser){
        return res.status(409).json({
            messgage:"User already exists"
        })
    }

    const user=await User.create({
        username:req.body.username,
        password:req.body.password,
        firstname:req.body.firstname,
        lastname:req.body.lastname
    })

    const userId=user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token=jwt.sign({
        userId
    },JWT_SECRET)

    res.json({
        message:"User created successfully",
        token
    })

})

router.post("/signin",async(req,res)=>{
    const {success} = signinBody.safeParse(req.body);
    console.log(success)

    if(!success){
        return res.status(411).json({
            message:"Invalid Input"
        })
    }

    const UserDetails=await User.findOne({
        username:req.body.username,
        password:req.body.password
    })

    if(UserDetails){
        const token=jwt.sign({
            userId:UserDetails._id
        },JWT_SECRET)

        res.json({
            token
        })

        return;
    }

    return res.status(411).json({
        message:"Invalid Credentials/Error while logging in"
    })
})

const updateBody=z.object({
    password:z.string().optional(),
    firstname:z.string().optional(),
    lastname:z.string().optional()
})

router.put("/", authMiddleware, async (req,res)=>{
    console.log("ddfdvd")
    const {success}=updateBody.safeParse(req.body)

    if(!success){
        return res.status(411).json({message:"Invalid Input/Error while updating user"})
    }

    await User.updateOne({_id:req.userId},req.body)

    res.json("User updated successfully")
})


router.get("/bulk",async (req,res)=>{
    const filter = req.query.filter || ""

    const users = await User.find({
    $or: [
        {
            firstname: {
                $regex: `^${filter}`,
                $options: "i"
            },
        },
        {
            lastname: {
                $regex: `^${filter}`,
                $options: "i"
            },
        },
        {
            $expr: {
                $regexMatch: {
                    input: { $concat: ["$firstname"," ","$lastname"] },
                    regex: `^${filter}`,
                    options: "i"
                }
            }
        }
    ]
});


    res.json({
        user:users.map((user)=>(
           { _id:user.userId,
            firstname:user.firstname,
            lastname:user.lastname,
            username:user.username,
            _id:user._id
        }
        ))
    })
})


module.exports=router