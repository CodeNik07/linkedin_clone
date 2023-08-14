import React, { useEffect, useState } from 'react'
import HomeComponent from '../components/HomeComponent'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import Loader from '../components/common/Loader/Loader'


export default function HomePage({ currentUser }) {

    const [loading, setLoading] = useState(true);

    let navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, res => {
            console.log(res)
            if (!res?.accessToken) {
                navigate("/")
            } else {
                navigate("/home")
                setLoading(false)
            }
        })
    }, []);


    return loading ? <Loader /> : <HomeComponent currentUser={currentUser} />;
}
