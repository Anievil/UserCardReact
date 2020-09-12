import React, { Component } from 'react';
import style from './cardInfo.module.css'

class CardInfo extends Component {
    render() {
        return (
            <div className={style.info}>
                <h2 className={style.name}> Bazilevskiy Alexey </h2>
                <h3 className={style.job}> Front-end Dev </h3>
                <p className={style.description}> Syntax error " ( " unexpected at line 6. </p>
                <button className={style.button}> View Profile </button> 
            </div>
        );
    }
}

export default CardInfo;
