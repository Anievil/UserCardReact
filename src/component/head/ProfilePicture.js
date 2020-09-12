import React, { Component } from 'react';
import style from './headStyle.module.css';

class ProfilePicture extends Component {
    render() {
        return (
            <div  className={style.cont}>
                <div className={style.cardBackgr}>
                
                </div>
                <div className={style.profPicCont}>
                    <img className={style.profPic} src='https://i.pinimg.com/280x280_RS/0e/02/c0/0e02c04aea068bfc3f3fc8b0162f34b3.jpg' />
                </div>
            </div>
        );
    }
}

export default ProfilePicture;
