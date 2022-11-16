import React from 'react'
import { useAuth } from '../auth';

const Profile = () => {
    const auth = useAuth();
 
    return (
        <div>Hello ,{auth.user.email} </div>
    )
}

export default Profile