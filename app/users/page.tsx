import React from 'react'
import getAllUsers from '../lib/getAllUsers'


// The function is asynchronous because e are going to await data
// when we call the getAllUsers() function
async function Users() {
    const usersData: Promise<User[]>= getAllUsers();

    const users = await usersData

    const content = (
        <div>
            {
                users?.map(user => {
                    return(
                        <>
                        <p key={user.id}>{user.name}</p>
                        </>
                    )
                })
            }
           
        </div>
    )

  return content
}

export default Users