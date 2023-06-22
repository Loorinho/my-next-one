'use client'
import Link from 'next/link'
import {useRef} from 'react'
import { Metadata } from 'next'
import InputField from '../components/InputField'

import Image from 'next/image'

const metadata: Metadata = {
    title: 'Login',
    description: 'This is the login page'

}

// const handleLogin = (e) => {
//     e.preventDefault()
//     console.log()
    
// }

const Login = () => {
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

   const formRef = document.querySelector('.login-form') as HTMLFormElement

    formRef?.addEventListener('submit', (e: Event)=>{
            e.preventDefault()

            console.log(usernameRef.current?.value, passwordRef.current?.value)
            console.log('submitted...')
    })

  return (
    <div className='flex justify-center items-center mt-10 '>
        <form action="" method='post' className='login-form rounded-md border border-grey-200 px-3 py-5'>


            <div className='flex justify-center items-center flex-col my-3 '>
                <Image
                    src={'/images/logo.png'}
                    width={50}
                    height={50}
                    alt='nextgig logo'
                />
                <p className='text-center'>My<span className='text-blue-500'>Next</span>One</p>
            </div>
           
            
            
            <p className='text-center text-xl mb-4 text-bold'>Login to your account</p>

            <InputField  ref={usernameRef} type="text" label="Username" name="username" placeholder='Enter your username...'/>
            <InputField  ref={passwordRef} type="password" label="Password" name="password" placeholder='Enter your password...'/>
        
            <div className='flex justify-center items-center my-3'>
                <button type='submit' className='bg-blue-500 text-white rounded px-4 py-1 '>
                    Login
                </button>
            </div>

            <p>Already have an account? <Link href={'/signup'}><span className='text-blue-500 text-sm'>Signup</span></Link></p>
        
        </form>
    </div>
  )
}

export default Login