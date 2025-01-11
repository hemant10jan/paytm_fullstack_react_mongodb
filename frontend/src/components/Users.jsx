import Button from "./Button"




export default function Users(){
    return(
        <>
        <div className="font-bold text-lg mt-6">Users</div>
        <div className="mb-6">
            <input
            type="text"
            placeholder="Search users..."
            className="w-full px-2 py-1 border-slate-200 border rounded"/>
        </div>
        <div>
            <User/>
        </div>
        </>
    )
}


function User(){
    return(
        <div className="flex justify-between  m-1 w-full">
            <div className="flex justify-center">
                <div className="bg-gray-100 rounded-full  h-8 w-8 m-2 flex justify-center">
                    <div className="flex flex-col justify-center p-1">U1</div>
                </div>
                <div className="flex flex-col justify-center m-2">User 1</div>
            </div>
            <div className="flex flex-col justify-center mt-2 mr-2">
                <Button label={"Send Money"}/>
            </div>
        </div>
    )
}