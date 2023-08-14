import React, { useState, useMemo } from 'react'
import ModalComponent from '../Modal/Modal';
import { PostStatus, GetStatus } from '../../../api/FireStoreAPI';
import PostCard from '../PostsCard/PostCard';
import { getCurrentTimeStamp } from '../../../helpers/useMoments';
import { getUniqueId } from '../../../helpers/getUniqueId';
import "./postUpdate.scss";

export default function PostUpdate({currentUser}) {
    let userEmail = localStorage.getItem("userEmail");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [status, setStatus] = useState("");
    const [allStatus, setAllStatus] = useState([]);
    const sendStatus = async () => {
        let obj = {
            status: status,
            timestamp: getCurrentTimeStamp("LLL"),
            useremail: currentUser.email,
            username: currentUser.name,
            postid: getUniqueId(),
            userId: currentUser.userId,
        }

        await PostStatus(obj);
        await setIsModalOpen(false);
        await setStatus("");
    };

    useMemo(() => {
        GetStatus(setAllStatus);
    }, []);
    return (
        <div className='post-status-main'>
            <div className='post-status'>
                <button className='open-post-model' onClick={() => setIsModalOpen(true)}>Start a Post</button>
            </div>

            <ModalComponent
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                setStatus={setStatus}
                status={status}
                sendStatus={sendStatus} />

            <div className='post-cards-main'>
                {allStatus.map((posts) => {
                    return (
                        <PostCard posts={posts}/>
                    )
                })}
            </div>
        </div>
    )
}
