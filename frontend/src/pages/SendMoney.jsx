import axios from "axios"
import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"



export default function SendMoney(){
    const[serachParams]=useSearchParams()
    console.log(serachParams)

    const id=serachParams.get("id")
    const name=serachParams.get("name")

    const [amount,setAmount]=useState(0);
    const navigate=useNavigate();

    return(
        <div className="bg-gray-100 h-screen flex justify-center">
            <div className="flex flex-col h-full justify-center">
                <div className="w-96 max-w-md bg-white h-min p-2 border shadow-lg rounded-lg text-card-foreground">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h2 className="text-center font-bold text-3xl">Send Money</h2>
                    </div>
                    <div className="p-2">
                        <div className="space-x-4 items-center flex">
                            <div className="h-12 w-12 rounded-full bg-green-500 flex justify-center items-center">
                                <span className="text-2xl text-white">{name.charAt(0)}</span>
                            </div>
                            <h2 className="text-2xl font-semibold">{name}</h2>
                        </div>
                        <div className="space-y-4 mt-4">
                            <div className="space-y-2 flex flex-col">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="amount">Amount (in Rs)</label>
                                <input placeholder="Enter amount" type="number" className="px-3 py-2 text-sm bg-background border border-input rounded-md w-full h-10 flex" onChange={(e)=>setAmount(e.target.value)}/>
                            </div>
                            <button className="bg-green-500 w-full font-medium px-4 py-2 text-white h-10 text-sm justify-center rounded-md ring-offset-background transition-colors"
                            onClick={async ()=>{
                                const res=await axios.post("http://localhost:3000/api/v1/account/transfer",{                           
                                    to:id,
                                    amount
                                },{
                                    headers:{
                                        Authorization:"Bearer "+localStorage.getItem("token")
                                    }
                                })
                                console.log(localStorage.getItem("token"))
                                navigate("/dashboard")
                            }}
                            >Initiate Transfer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}