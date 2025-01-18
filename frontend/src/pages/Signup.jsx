import Button from "../components/Button";
import ButtonWarning from "../components/ButtonWarning";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import React from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";


export default function Signup(){
    const [firstname,setFirstname]=React.useState("");
    const [lastname,setLastname]=React.useState("");
    const [username,setUsername]=React.useState("");
    const[password,setPassword]=React.useState("")
    const navigate=useNavigate()

    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white h-max w-80 text-center p-2 rounded-lg px-4">
                    <Heading label={"Sign up"}/>
                    <SubHeading label={"Enter your information to create an account"}/>
                    <InputBox label={"First Name"} placeholder={"Adam"} onChange={e=>setFirstname(e.target.value)}/>
                    <InputBox label={"Last Name"} placeholder={"Smith"} onChange={e=>setLastname(e.target.value)}/>
                    <InputBox label={"Email"} placeholder={"adam@gmail.com"} onChange={e=>setUsername(e.target.value)}/>
                    <InputBox label={"Password"} placeholder={"123456"} onChange={e=>setPassword(e.target.value)}/>
                    <div className="pt-4">
                        <Button label={"Sign up"} onClick={ async ()=>{
                            const response=await axios.post("http://localhost:3000/api/v1/user/signup",{
                            username,
                            firstname,
                            lastname,
                            password
                        })
                        localStorage.setItem("token",response.data.token)
                        navigate("/dashboard")
                        }}/>
                    </div>
                    <ButtonWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
                </div>
            </div>
        </div>
    )
}