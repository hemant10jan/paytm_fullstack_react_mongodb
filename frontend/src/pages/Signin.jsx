import { useState } from "react";
import Button from "../components/Button";
import ButtonWarning from "../components/ButtonWarning";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export default function Signin(){
    const navigate=useNavigate()
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white h-max w-80 text-center p-2 rounded-lg px-4">
                    <Heading label={"Sign in"}/>
                    <SubHeading label={"Enter your credentials to access your account"}/>
                    <InputBox label={"Email"} placeholder={"adam@gmail.com"} onChange={(e)=>setUsername(e.target.value)}/>
                    <InputBox label={"Password"} placeholder={"123456"} onChange={(e)=>setPassword(e.target.value)}/>
                    <div className="pt-4">
                        <Button onClick={async ()=>{
                            const res=await axios.post("http://localhost:3000/api/v1/user/signin",{
                                username,
                                password
                            });
                            if(res.data.token){
                                localStorage.setItem("token",res.data.token)
                                navigate("/dashboard")
                            }
                            else{
                                alert("Invalid credentials")
                            }
                        }} label={"Sign in"}/>
                    </div>
                    <ButtonWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
                </div>
            </div>
        </div>
    )
}