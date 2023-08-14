import React, { useState } from 'react'
import "./topbar.scss"
import LinkedinLogo from '../../../assets/LinkedinLogo.png'
import { AiFillMessage, AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import { BsBriefcaseFill, BsBellFill } from "react-icons/bs";
import { ImHome3 } from "react-icons/im";
import { HiUsers } from "react-icons/hi";
import searchLogo from "../../../assets/search-logo.png";
import userLogo from "../../../assets/user-logo.png";
import { useNavigate } from 'react-router-dom';
import ProfilePopUp from '../ProfilePopUp/ProfilePopUp';

export default function Topbar({currentUser}) {
  const [popUpProfile, setPopUpProfile] = useState(false);
  let navigate = useNavigate();

  const goToRoutes = (route) => {
    navigate(route);
  };

  const showPopUp = () => {
    if (popUpProfile) {
      setPopUpProfile(false);
    } else {
      setPopUpProfile(true);
    }

  }

  return (
    <div className='topbar-main'>
      <img className='linkedin-logo' src={LinkedinLogo} alt="linkedinlogo" />
      <div className='inp-search'>
        <img src={searchLogo} alt="" />
        <input type="text" className='inp-hm-search' placeholder='Search' />
      </div>
      <div className='react-icons'>
        <div className='react-sub-icon' onClick={() => goToRoutes("/home")}>
          <ImHome3 size={30} className='react-icon' />
          <p>Home</p>
        </div>
        <div className='react-sub-icon'>
          <HiUsers size={30} className='react-icon' />
          <p>My Network</p>
        </div>
        <div className='react-sub-icon'>
          <BsBriefcaseFill size={30} className='react-icon' />
          <p>Jobs</p>
        </div>
        <div className='react-sub-icon'>
          <AiFillMessage size={30} className='react-icon' />
          <p>Messaging</p>
        </div>

        <div className='react-sub-icon'>
          <BsBellFill size={30} className='react-icon' />
          <p>Notification</p>
        </div>
        <div className='react-sub-icon' onClick={showPopUp}>
          <img src={userLogo} alt="user" className='user-logo-main' />
          <p>Me</p>
        </div>
        {popUpProfile ? <ProfilePopUp /> : <div></div>}
      </div>

    </div>
  )
}
