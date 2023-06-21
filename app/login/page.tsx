import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center mt-10 '>
        <form action="" className='border border-grey-200 px-3 py-5'>
            <p className='text-center text-lg text-bold'>Login to your account</p>

            <div className='mt-8'>
                <label htmlFor="" className='block text-gray-700 text-sm'>Username</label>
                <input type='text' name='username' className='w-100 focus px-2 py-1 shadow appearance-none rounded focus:shadow-outline focus:outline-none focus:border-green-600'/>
            </div>
            <div>
                <label htmlFor="" className=' mt-2 block text-gray-700 text-sm'>Password</label>
                <input type='password' name='password' className='w-100 px-2 py-1 shadow appearance-none rounded focus:outline-none focus:border-green-600'/>
            </div>

            <div className='flex justify-center items-center'>
                <button className='bg-blue-500 text-white rounded px-4 py-1 my-3'>
                    Login
                </button>
            </div>

            <p>Already have an account? <Link href={'/signup'}><span className='text-blue-500 text-sm'>Signup</span></Link></p>
        
        </form>
    </div>
  )
}

export default Login