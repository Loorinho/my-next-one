import React from 'react'

async function getGig(gig: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${gig}`)

    if(!(res.ok))
        throw new Error("Failed to load data")
  return (res.json())
}

export default getGig