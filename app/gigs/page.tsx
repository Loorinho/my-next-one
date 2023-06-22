import React from 'react'
import getAllGigs from '../lib/getAllGigs'
import Link from 'next/link'

 const  Gigs = async () => {
    const gigsData: Promise<Gig[]> = getAllGigs()

    const gigs = await gigsData
    
    const content = (
        <div className='px-4'>
        {
            gigs.map(gig => {
                return (
                    <p key={gig.id}>
                        <Link href={`/gigs/${gig.id}`}>{gig.title}</Link>
                    </p>
                )
            })
        }
        </div>
    )
  return content
}

export default Gigs