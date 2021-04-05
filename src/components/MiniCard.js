/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

const MiniCard = ({ user, toggleFollow }) => (
  <div className="section minicard">
    <div className="section">
      <img
        className="user-profile"
        src={user.avatar}
        width="100%"
        alt={user.name}
      />
      <div>
        <h3 className="bold">{user.username}</h3>
        <p>{user.name}</p>
      </div>
    </div>
    {user.button_visible && (
      <div
        className={user.is_followed ? 'followed-button' : 'follow-button'}
        onClick={() => toggleFollow(user)}
      >
        {user.is_followed ? 'Following' : 'Follow'}
      </div>
    )}
  </div>
);

export default MiniCard;
