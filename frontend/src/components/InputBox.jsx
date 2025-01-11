



export default function InputBox({label,placeholder}){
    return(
        <div className="text-sm text-left py-2 font-medium">
            <div>{label}</div>
            <input placeholder={placeholder} className="w-full px-2 py-1 border-slate-200 border rounded"/>
        </div>
    )
}