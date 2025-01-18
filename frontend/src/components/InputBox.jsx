



export default function InputBox({label,placeholder,onChange}){
    return(
        <div className="text-sm text-left py-2 font-medium">
            <div>{label}</div>
            <input placeholder={placeholder} onChange={onChange} className="w-full px-2 py-1 border-slate-200 border rounded"/>
        </div>
    )
}