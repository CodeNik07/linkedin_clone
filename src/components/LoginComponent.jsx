import React, { useState } from 'react'
import { LoginAPI, GoogleSignInAPI } from '../api/AuthAPI'
import LinkedinLogo from "../assets/LinkedinLogo.png"
import GoogleLogo from "../assets/GoogleLogo.png"
import { useNavigate } from 'react-router-dom'
import '../sass/LoginComponent.scss'
import { toast } from 'react-toastify'

export default function LoginComponent() {
    let navigate = useNavigate()
    const [credentails, setCredentails] = useState({});

    const login = async () => {
        try {
            let res = await LoginAPI(credentails.email, credentails.password);
            // console.log(res);
            toast.success('Signed in to Linkedin!');
            localStorage.setItem("userEmail", res.user.email);
            navigate("/home");
        } catch (err) {
            toast.error('Please check your credentails');
        }

    };

    const googleSignIn = async () => {
        let responce = await GoogleSignInAPI();
        console.log(responce);
    }

    return (
        <div className='login-wrapper'>
            <p className='text-logo'>Linked <img src={LinkedinLogo} className='linkedinlogo' alt='logo'/></p>
            <div className='container'>
                <div className='sign-in'>
                    <h1 className='heading'>Sign in</h1>
                    <p className='sub-heading'>Stay updated on your professional world</p>

                    <div className='auth-input'>
                        <input
                            onChange={(event) => setCredentails({ ...credentails, email: event.target.value })}
                            className='common-input'
                            placeholder='Enter your Email'
                            type='email' />
                        <input
                            onChange={(event) => setCredentails({ ...credentails, password: event.target.value })}
                            className='common-input'
                            placeholder='Enter your Password'
                            type='password' />
                    </div>
                    <p className='forgot-pass'>Forgot Password?</p>
                    <button onClick={login} className='login-btn'>
                        Sign in
                    </button>
                    <p className='text-center'>or</p>
                    <button className='google-btn' onClick={googleSignIn}>
                        <img src={GoogleLogo} alt="" className='google-logo'/>
                        Continue with Google
                    </button>

                    <p className='go-to-signup text-center'> 
                        New to Linkedin? <span className='join-now' onClick={() => navigate("/register")}>Join now</span>
                    </p>
                </div>

            </div>
            {/* 
            
            */}
        </div>
    )
}
