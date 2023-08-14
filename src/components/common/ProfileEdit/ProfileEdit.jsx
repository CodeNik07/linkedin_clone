import React, { useState } from 'react'
import "./ProfileEdit.scss"
import { editProfile } from '../../../api/FireStoreAPI';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function ProfileEdit({ currentUser, onEdit }) {
    const [editInputs, setEditInputs] = useState(currentUser);
    const getInput = (ev) => {
        let { name, value } = ev.target;
        let inp = { [name]: value };
        setEditInputs({ ...editInputs, ...inp })
    };

    const updateProfileData = async () => {
        await editProfile(currentUser.userId, editInputs)
        await onEdit();
    }

    return (
        <div className='profile-edit-card'>
            <div className='edit-btn'>
                <AiOutlineArrowLeft className='edit-icon' onClick={onEdit} />
            </div>
            <div className='profile-edit-inputs'>
                <label>Name</label>
                <input
                    onChange={getInput}
                    className='edit-input'
                    type="text"
                    placeholder='Name'
                    name='name'
                    value={editInputs.name} />
                <label>Headline</label>
                <input
                    onChange={getInput}
                    className='edit-input'
                    type="text"
                    placeholder='Headline'
                    name='headline'
                    value={editInputs.headline} />
                <label>Country</label>
                <input
                    onChange={getInput}
                    className='edit-input'
                    type="text"
                    placeholder='Country'
                    name='country'
                    value={editInputs.country} />
                <label>City</label>
                <input
                    onChange={getInput}
                    className='edit-input'
                    type="text"
                    placeholder='City'
                    name='city'
                    value={editInputs.city} />
                <label>Company</label>
                <input
                    onChange={getInput}
                    className='edit-input'
                    type="text"
                    placeholder='Company'
                    name='company'
                    value={editInputs.company} />
                <label>College</label>
                <input
                    onChange={getInput}
                    className='edit-input'
                    type="text"
                    placeholder='College'
                    name='college'
                    value={editInputs.college} />
                <label>Website</label>
                <input
                    onChange={getInput}
                    className='edit-input'
                    type="text"
                    placeholder='Website'
                    name='website'
                    value={editInputs.website} />
                <label>About</label>
                <textarea
                    onChange={getInput}
                    className='edit-textarea'
                    name="aboutme"
                    placeholder='About Me'
                    value={editInputs.aboutme}
                    rows={5} />
                <label>Skills</label>
                <input
                    onChange={getInput}
                    className='edit-input'
                    type="text"
                    placeholder='Skills'
                    name='skills'
                    value={editInputs.skills} />
            </div>
            <button className='profile-edit-save' onClick={updateProfileData}>Save</button>
        </div>
    )
}
