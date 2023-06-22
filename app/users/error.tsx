'use client'
import React, { useEffect } from 'react'


type ErrorProps = {
    error: Error,
    reset: ()=>void
}
const Error = ({error, reset}: ErrorProps) => {

    useEffect(()=>{
        console.log(error)
    }, [error])

  return (
    <div>
        <p>Sorry, an error occured. </p>
        <button onClick={()=>reset()}>Try Again</button>
    </div>
  )
}

export default Error