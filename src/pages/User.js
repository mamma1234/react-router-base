import React from 'react';
/*
const User = () => {
    return(
        <div>
            <h2>User Page</h2>
        </div>
    )
}
*/
const User = ({match}) => {
    return(
        <div>
            <h2>Hello! {match.params.name}</h2>
        </div>
    )
}
export default User;