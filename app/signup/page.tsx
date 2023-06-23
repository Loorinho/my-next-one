'use client'
import Image from "next/image"
import Link from "next/link"
import InputField from "../components/InputField"
import { ChangeEvent, useRef, useState } from "react"

const Signup = () => {
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const contactRef = useRef<HTMLInputElement>(null)
    const genderRef = useRef<HTMLSelectElement>(null)
    const residenceRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const confirmRef = useRef<HTMLInputElement>(null)
    const userTypeRef = useRef<HTMLSelectElement>(null)


    console.log(userTypeRef.current?.value)

    const [userType, setUserType] = useState<HTMLSelectElement>()

  return (
    <div className='flex justify-center items-center mt-10 '>
        <form action="" method='post' className='signup-form rounded-md border border-grey-200 px-3 py-5'>
            <div className='flex justify-center items-center flex-col my-3 '>
                <Image
                    src={'/images/logo.png'}
                    width={50}
                    height={50}
                    alt='nextgig logo'
                />
                <p className='text-center'>My<span className='text-blue-500'>Next</span>One</p>
            </div>
            <p className='text-center text-xl mb-4 text-bold'>Create an account</p>
            <label htmlFor="">Register as: </label>
            <select ref={userTypeRef} name="userType" id="">
                <option value="employer">Employer</option>
                <option value="employee">Employee</option>
            </select>
            <div className="flex gap-2">
                <div className="w-1/2">
                    <InputField  ref={firstNameRef} type="text" label="First Name" name="firstName" placeholder=''/>
                </div>
                <div className="w-1/2">
                <InputField  ref={lastNameRef} type="text" label="Last Name" name="lastName" placeholder=''/>
                </div>
            </div>
            <div className="flex gap-2">
                <div className="w-full">
                    <InputField  ref={emailRef} type="email" label="Email" name="firstName" placeholder='Enter your email'/>
                </div>
            </div>
            <div className="flex gap-2">
            
                {
                    userTypeRef.current?.value === 'employer'?(
                    <>
                        <div className="w-1/2">
                            <label className="text-sm text-gray-700 mt-2 block">Gender</label>
                            <select ref={genderRef} name="gender" id="">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="w-1/2">
                            <InputField  ref={contactRef} type="number" label="Contact" name="contact" placeholder=''/>
                        </div>        
                    </>
                    ):(
                    <>
                        <div className="w-1/2">
                            <label className="text-sm text-gray-700 mt-2 block">Gender</label>
                            <select ref={genderRef} name="gender" id="">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="w-1/2">
                            <InputField  ref={contactRef} type="number" label="Contact" name="contact" placeholder=''/>
                        </div>  
                        <div className="w-1/3">
                            <InputField  ref={residenceRef} type="text" label="Place of residence" name="residence" placeholder=''/>
                         </div>      
                    </>
                    
                    )
                }
                
            </div>
            <div className="w-full">
                <InputField  ref={passwordRef} type="password" label="Password" name="password" placeholder='Enter a strong password'/>
            </div>
            <div className="w-full">
                <InputField  ref={confirmRef} type="password" label="Confirm Password" name="confirmPassword" placeholder='Confirm your password'/>
            </div>
            {/* <div className="flex gap-2">
                <div className="w-full">
                    <InputField  ref={firstNameRef} type="text" label="Email" name="firstName" placeholder='Enter your email'/>
                </div>
            </div> */}

            
        
            <div className='flex justify-center items-center my-3'>
                <button type='submit' className='bg-blue-500 text-white rounded px-4 py-1 '>
                    Register
                </button>
            </div>

            <p>Already have an account? <Link href={'/login'}><span className='text-blue-500 text-sm'>Login</span></Link></p>
        
        </form>
    </div>
  )
}

export default Signup