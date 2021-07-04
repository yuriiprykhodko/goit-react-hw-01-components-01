import React from "react";
import PropTypes from "prop-types";
import "./friendListItem.css"
const FriendListItem = ({ name, avatar, isOnline }) => (
  <>
    <span className="status">{isOnline ? "online" : "" }</span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="avatar-name">{name}</p>
  </>
);
FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
