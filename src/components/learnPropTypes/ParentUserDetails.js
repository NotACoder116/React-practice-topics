import React from 'react'
import UserDetails from './UserDetails';

export const ParentUserDetails = () => {
    const user = [
        { name: "Yad", id: 1 },
        { name: "Raj", id: 2 }
    ];
    return (
        <>
           {user.map(eachUser => {
             return <UserDetails id={eachUser.id} name={eachUser.name} key={eachUser.id} />
           })}
        </>
    )
}
