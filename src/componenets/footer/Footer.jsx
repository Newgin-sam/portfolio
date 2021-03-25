import React from 'react';
import styles from './Footer.module.scss';
const Footer = (props) => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>Designed and Developed by <span className={styles.span}>Newgin Sam</span></p>
        </div>
    );
}

export default Footer;