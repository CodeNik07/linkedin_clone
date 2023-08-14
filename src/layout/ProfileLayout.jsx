import React, { useState, useMemo } from 'react'
import Topbar from '../components/common/Topbar/Topbar'
import { getCurrentUser } from '../api/FireStoreAPI'
import ProfilePage from '../Pages/ProfilePage';

export default function ProfileLayout() {
    const [currentUser, setCurrentUser] = useState({});

    useMemo(() => {
        getCurrentUser(setCurrentUser);
    }, []);
    return (
        <div>
            <Topbar currentUser={currentUser} />
            <ProfilePage currentUser={currentUser} />
        </div>
    )
}
