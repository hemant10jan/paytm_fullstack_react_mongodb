import { Link } from "react-router-dom"

export default function ButtonWarning({label,buttonText,to}){
    return(
        <div className="text-sm py-2 flex justify-center">
            <div>{label}</div>
            <Link to={to} className="underline cursor-pointer pl-1">{buttonText}</Link>
        </div>
    )
}