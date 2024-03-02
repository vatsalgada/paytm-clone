export function InputBox({label, placeholder}){
    return(
        <>
        <p className="font-bold pt-2">{label}</p>
        <input className="border-2 rounded-md justify-center p-1 w-full" placeholder={placeholder}></input>
        </>
    )
}