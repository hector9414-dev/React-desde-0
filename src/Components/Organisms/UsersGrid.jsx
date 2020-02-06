import React from 'react'
import UserCard from '../Molecules/UserCard'
import withLoader from '../HOC/withLoader'

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

export default withLoader(UsersGrid, "users") 