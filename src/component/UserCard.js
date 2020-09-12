import React, { Component } from 'react';
import ProfilePicture from './head/ProfilePicture';
import CardInfo from './info/CardInfo';
import style from './UserCard.module.css';

class UserCard extends Component {
    render() {
        return (
            <div className={style.userCard}>
                 <ProfilePicture />
                 <CardInfo />
            </div>
        );
    }
}

export default UserCard;
