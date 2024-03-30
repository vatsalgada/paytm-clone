export function InputBox({label, placeholder, onChange, type}){
    return(
        <>
        <p className="font-bold pt-2">{label}</p>
        <input onChange={onChange} type={type } className="border-2 rounded-md justify-center p-1 w-full" placeholder={placeholder}></input>
        </>
    )
}