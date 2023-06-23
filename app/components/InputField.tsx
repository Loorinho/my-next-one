'use client'
import React, { MutableRefObject, forwardRef } from 'react'

interface InputProps {
    type: string,
    label: string,
    placeholder?: string,
    name: string,
    ref: MutableRefObject<null>
    options?: string[]
}

const InputField = forwardRef<HTMLInputElement, InputProps>(({type, label, placeholder, name, options }, ref) => {
    return(
    <>

        <label htmlFor={name} className='text-sm text-gray-700 mt-2 block'>{label}</label>
        {
            type !== 'select'?(
                <input 
                ref ={ref}
                type={type}
                placeholder={placeholder}
                name={name} 
                className='w-full focus px-2 py-1 shadow appearance-none rounded focus:shadow-outline focus:outline-none focus:border-blue-500'
                />
            ): (
                <>
                {/* <select name={name} id="">
                    options.map(function(opt){(
                        <option value="">{opt}</option>
                    )})
                    
                </select> */}
                
                </>
            )
        }
        
    </>
)})

export default InputField