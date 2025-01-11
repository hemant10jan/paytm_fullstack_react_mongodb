import Button from "./Button";




export default function Appbar(){
    return(
        <div className="h-14 shadow flex justify-between">
            <div className="flex flex-col justify-center ml-4 h-full">
                PayTM App
            </div>
            <div className="flex ">
                <div className="h-full mr-4 flex flex-col justify-center">Hello User</div>
                <div className="rounded-full bg-slate-200 w-12 h-12 flex justify-center mt-1 mr-2">
                    <div className="text-xl h-full flex flex-col justify-center">U</div>
                </div>
                <div className="flex mt-2 justify-center items-center">
                    <Button label={"Signout"}/>
                </div>
            </div>
        </div>
    )
}