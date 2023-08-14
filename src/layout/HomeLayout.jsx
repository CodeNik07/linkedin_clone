import React, { useMemo, useState } from 'react'
import HomePage from '../Pages/HomePage'
import { getCurrentUser } from '../api/FireStoreAPI'
import Topbar from '../components/common/Topbar/Topbar'

export default function HomeLayout() {
    const [currentUser, setCurrentUser] = useState({});

    useMemo(() => {
        getCurrentUser(setCurrentUser);
    }, []);

    return (
        <div>
            <Topbar currentUser={currentUser} />
            <HomePage currentUser={currentUser} />
        </div>
    )
}
