import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/friendListItem";
import './friendList.css';
const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ id, name, avatar, isOnline }) => (
      <li className="friend-item" key={id}>
        <FriendListItem name={name} avatar={avatar} isOnline={isOnline}/>
      </li>
    ))}
  </ul>
);
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default FriendList;
