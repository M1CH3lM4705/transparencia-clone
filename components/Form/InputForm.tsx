import { InputHTMLAttributes, useState } from "react"

type InputFormProps = InputHTMLAttributes<HTMLInputElement> & {
    type:string,
}
export function InputForm({ type, ...rest }: InputFormProps){

    return(
        <input {
            ...rest} 
            className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" 
            type={type} 
            placeholder="DIGITE O QUE DESEJA ENCONTRAR" 
        />
    )
}