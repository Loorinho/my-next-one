import getGig from '@/app/lib/getGig'
import React from 'react'

type GigParams = {
    params: {
        gigId: string
    }
}

const Gig = async ({params: {gigId}}: GigParams) => {
    const gigData: Promise<Gig> = getGig(gigId)
    const gig = await gigData
  return (
    <div className='border border-b-sky-500'>
        <p>{gig.title}</p>
        <p>{gig.body}</p>
    </div>
  )
}

export default Gig