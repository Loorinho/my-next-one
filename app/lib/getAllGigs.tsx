import React from 'react'

export default async function getAllGigs() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    if(!(res.ok))
        throw new Error("Failed to load data")
  return (res.json())

}
