import React from 'react';
import styles from './Footer.module.scss';
import {FaHandHoldingHeart} from 'react-icons/fa'
const Footer = (props) => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>Designed and Developed with <FaHandHoldingHeart className={styles.icon}/>by <span className={styles.span}>Newgin Sam</span></p>
        </div>
    );
}

export default Footer;