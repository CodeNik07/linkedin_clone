import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./PostCard.scss";
import LikeButton from '../LikeButton/LikeButton';
import { getCurrentUser } from '../../../api/FireStoreAPI';

export default function PostCard({ posts }) {

    let navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({});
    useMemo(() => {
        getCurrentUser(setCurrentUser);
    }, [])
    return (
        <div className='posts-card'>
            <p className='name'
                onClick={() =>
                    navigate("/profile", {
                        state: { id: posts?.userId, email: posts.useremail }
                    })}>
                {posts.username}
            </p>
            <p className='timestamp'>{posts.timestamp}</p>
            <p className='status'>{posts.status}</p>
            <LikeButton userId={currentUser.userId} postId={posts.postid} />
        </div>
    )
}
