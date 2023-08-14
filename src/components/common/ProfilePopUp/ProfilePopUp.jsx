import React, { useMemo, useState } from 'react'
import { onLogout } from '../../../api/AuthAPI'
import { useNavigate } from 'react-router-dom'
import "./ProfilePopUp.scss"
import { getCurrentUser } from '../../../api/FireStoreAPI';
import Button from '../Button/Button';

export default function ProfilePopUp() {
    const [currentUser, setCurrentUser] = useState({});
    useMemo(() => {
        getCurrentUser(setCurrentUser);
    }, []);

    let navigate = useNavigate();

    const logOut = async () => {
        let res = await onLogout();
        if (res) {
            navigate('/');
        }
    }

    return (
        <div className='popup-card'>
            <p className='name'>{currentUser.name}</p>
            <p className='headline'>{currentUser.headline}</p>
            <Button title="View Profile" onClick={() => {
                navigate("/profile", {
                    state: {
                        id: currentUser.userId,
                    },
                })
            }} />
            <Button title="Logout" onClick={logOut} />
        </div>
    )
}
