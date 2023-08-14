import React, { useState } from 'react'
import { RegisterAPI, GoogleSignInAPI } from '../api/AuthAPI'
import LinkedinLogo from "../assets/LinkedinLogo.png"
import GoogleLogo from "../assets/GoogleLogo.png"
import { useNavigate } from 'react-router-dom'
import '../sass/RegisterComponent.scss'
import { toast } from 'react-toastify'
import { getUniqueId } from '../helpers/getUniqueId'
import { postUserData } from '../api/FireStoreAPI'

export default function RegisterComponent() {
  let navigate = useNavigate()
  const [credentails, setCredentails] = useState({});

  const register = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password)
      postUserData({
        userId: getUniqueId(),
        name: credentails.name,
        email: credentails.email,
      })
      toast.success('Account Created');
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
      // console.log(res);
    } catch (err) {
      toast.error('Cannot Create your Account')
    }

  };

  const googleSignIn = async () => {
    let responce = await GoogleSignInAPI();
    console.log(responce);
  }

  return (
    <div className='login-wrapper'>
      <p className='text-logo'>Linked <img src={LinkedinLogo} className='linkedinlogo' alt='logo' /></p>
      <h1 className='text-center reg-head'>Make the most of your professional life</h1>
      <div className='container'>
        <div className='sign-in'>
          <div className='auth-input'>
            <input
              onChange={(event) => setCredentails({ ...credentails, name: event.target.value })}
              className='common-input'
              placeholder='Enter your Name'
              type='text' />
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
          <button onClick={register} className='login-btn'>
            Agree & Join
          </button>
          <p className='text-center'>or</p>
          <button className='google-btn' onClick={googleSignIn}>
            <img src={GoogleLogo} alt="" className='google-logo' />
            Continue with Google
          </button>

          <p className='go-to-signup text-center'>
            Already on Linkedin? <span className='join-now' onClick={() => navigate("/")}>Sign in</span>
          </p>
        </div>

      </div>
      {/* 
            
            */}
    </div>
  )
}

