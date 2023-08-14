import React, { useState } from 'react'
import ProfileEdit from './common/ProfileEdit/ProfileEdit';
import ProfileCard from './common/ProfileCard/ProfileCard'
import "../sass/ProfileComponent.scss"

export default function ProfileComponent({ currentUser }) {
    const [isEdit, setIsEdit] = useState(false);

    const onEdit = () => {
        setIsEdit(!isEdit)
    }
    return (
        <div className='profile-card-main'>
            {isEdit ? <ProfileEdit currentUser={currentUser} onEdit={onEdit} /> : <ProfileCard currentUser={currentUser} onEdit={onEdit} />}
        </div>
    )
}
