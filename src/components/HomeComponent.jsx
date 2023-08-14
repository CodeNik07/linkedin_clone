import React from 'react';
import PostUpdate from './common/PostUpdate/PostUpdate';
import "../sass/HomeComponent.scss";

export default function HomeComponent({ currentUser }) {
  return (
    <div className='home-component'>
      <PostUpdate currentUser={currentUser} />
    </div>
  )
}
