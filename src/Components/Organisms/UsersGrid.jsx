import React from 'react'
import UserCard from '../Molecules/UserCard'

const UsersGrid = ({users})=>{

    return(
        users.map(user => 
            <UserCard 
                key = {user.id}
                name = {user.name}
                username = {user.username}
                email = {user.email}
            
                />
        )
    )

}

export default UsersGrid 