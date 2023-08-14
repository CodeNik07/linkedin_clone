import React, { useState, useMemo } from 'react'
import PostCard from '../PostsCard/PostCard';
import { GetStatus, getSingleStatus, getSingleUser } from '../../../api/FireStoreAPI';
import "./ProfileCard.scss"
import { useLocation } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';

export default function ProfileCard({ currentUser, onEdit }) {
    let location = useLocation();
    const [allStatus, setAllStatus] = useState([]);
    const [currentProfile, setCurrentProfile] = useState({});

    useMemo(() => {
        console.log(location.state.email);
        if (location?.state?.id) {
            getSingleStatus(setAllStatus, location?.state?.id);
        }

        if (location?.state?.email) {
            getSingleUser(setCurrentProfile, location?.state?.email);
        }
    }, []);

    // console.log(currentProfile)
    return (
        <>
            <div className='profile-card'>
                <div className='edit-btn'>
                    <BsPencil className='edit-icon' onClick={onEdit} />
                    {/* <button onClick={onEdit}>Edit</button> */}
                </div>
                <div className='profile-info'>
                    <div className='left-info'>
                        <h3 className='username'>
                            {Object.values(currentProfile).length === 0 ? currentUser.name : currentProfile?.name}
                        </h3>
                        <p className='user-headline'>
                            {Object.values(currentProfile).length === 0 ? currentUser.headline : currentProfile?.headline}
                        </p>
                        <p className='user-location'>
                            {Object.values(currentProfile).length === 0
                                ? `${currentUser.city}, ${currentUser.country}`
                                : `${currentProfile.city}, ${currentProfile.country}`}
                        </p>
                        <a
                            className='user-website'
                            target='_blank'
                            href={Object.values(currentProfile).length === 0
                                ? currentUser.website
                                : currentProfile.website}>
                            {Object.values(currentProfile).length === 0
                                ? currentUser.website
                                : currentProfile.website}
                        </a>

                        <p className='user-aboutme'>
                            {Object.values(currentProfile).length === 0 ? currentUser.aboutme : currentProfile?.aboutme}
                        </p>
                        <p className='user-skills'>
                            <span className='skill-label'>Skills</span>:&nbsp;
                            {Object.values(currentProfile).length === 0 ? currentUser.skills : currentProfile?.skills}
                        </p>
                    </div>
                    <div className='right-info'>
                        <p className='user-company'>
                            {Object.values(currentProfile).length === 0 ? currentUser.company : currentProfile?.company}
                        </p>
                        <p className='user-college'>
                            {Object.values(currentProfile).length === 0 ? currentUser.college : currentProfile?.college}
                        </p>
                    </div>
                </div>

            </div>

            <div className='profile-cards-posts'>
                {allStatus.filter((item) => {
                    return item.useremail === localStorage.getItem("userEmail");
                }).map((posts) => {
                    return (
                        <PostCard posts={posts} />
                    )
                })}
            </div>
        </>
    )
}
