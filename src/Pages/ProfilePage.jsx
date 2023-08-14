import React, { useEffect, useState } from 'react'
import ProfileComponent from '../components/ProfileComponent'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import Loader from '../components/common/Loader/Loader'

export default function ProfilePage({ currentUser }) {
    const [loading, setLoading] = useState(true);

    let navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, res => {
            console.log(res);
            if (!res?.accessToken) {
                navigate("/");
            } else {
                // navigate("/profile")
                setLoading(false);
            }
        })
    }, []);

    return loading ? <Loader /> : <ProfileComponent currentUser={currentUser} />
}
