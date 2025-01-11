import Button from "../components/Button";
import ButtonWarning from "../components/ButtonWarning";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";


export default function Signup(){
    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white h-max w-80 text-center p-2 rounded-lg px-4">
                    <Heading label={"Sign up"}/>
                    <SubHeading label={"Enter your information to create an account"}/>
                    <InputBox label={"First Name"} placeholder={"Adam"}/>
                    <InputBox label={"Last Name"} placeholder={"Smith"}/>
                    <InputBox label={"Email"} placeholder={"adam@gmail.com"}/>
                    <InputBox label={"Password"} placeholder={"123456"}/>
                    <div className="pt-4">
                        <Button label={"Sign up"}/>
                    </div>
                    <ButtonWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
                </div>
            </div>
        </div>
    )
}