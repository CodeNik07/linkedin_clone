import React, { useMemo, useState } from 'react'
import "./LikeButton.scss"
import { AiOutlineLike, AiFillLike } from "react-icons/ai"
import { FaRegCommentDots } from "react-icons/fa"
import { getLikesByUser, likePost, postComment, getComments } from '../../../api/FireStoreAPI'
import { getCurrentTimeStamp } from '../../../helpers/useMoments'

export default function LikeButton({ userId, postId }) {

    const [likesCount, setLikesCount] = useState(0);
    const [liked, setLiked] = useState(false);
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [ comment, setComment ] = useState('');
    const [ comments, setComments ] = useState([]);

    const handleLike = () => {
        likePost(userId, postId, liked)
    }

    const getComment = (ev) => {
        setComment(ev.target.value);
    }

    const addComment = () => {
        let obj = {
            postId: postId,
            comment: comment,
            timestamp: getCurrentTimeStamp("LLL")
        }
        postComment(obj);
        setComment('');
    }

    useMemo(() => {
        getLikesByUser(userId, postId, setLiked, setLikesCount);
        getComments(postId, setComments);
    }, [userId, postId]);

    return (
        <div>
            <div className='like-count-sec'>
                {likesCount != 0 ?
                    <div className='like-count'>
                        <AiFillLike className='like-on' size={15} />
                        <p>&nbsp;{likesCount}</p>
                    </div> : <div></div>}
            </div>
            <div className='like-sec-seperator'>
                <hr />
            </div>
            <div className='like-container'>
                <div className='like-container-sub'>
                    {liked ?
                        <div className='like-inner' onClick={handleLike}>
                            <AiFillLike className='like-on' size={25} />
                            <p className='like-on'>Like</p>
                        </div> :
                        <div className='like-inner' onClick={handleLike}>
                            <AiOutlineLike size={25} />
                            <p>Like</p>
                        </div>}

                    <div className='comment-inner' onClick={() => setShowCommentBox(!showCommentBox)}>
                        <FaRegCommentDots />
                        <p>Comment</p>
                    </div>

                </div>

                {showCommentBox ?
                    <div className='comment-btn-post'>
                        <input
                            onChange={getComment}
                            type="text"
                            placeholder='Add a Comment'
                            className='comment-input'
                            name='comment'
                            value={comment} />
                        <button
                            className='add-comment-btn'
                            onClick={addComment}>
                            Add Comment</button>

                            {comments.length > 0 ? (comments.map((comment) => {
                                return (
                                    <div className='comments-block'>
                                        <p className='comment-text'>{comment.comment}</p>
                                        <p>•</p>
                                        <p className='comment-timestamp'>{comment.timestamp}</p>
                                    </div>
                                )
                            })):<></>}
                    </div> :
                    <div></div>}


            </div>




        </div>
    )
}
