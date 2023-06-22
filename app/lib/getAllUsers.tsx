import React from 'react'

async function getAllUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    if(!(res.ok))
        throw new Error("Failed to load data")
  return (res.json())
}

export default getAllUsers