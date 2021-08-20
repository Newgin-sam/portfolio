import React from 'react';
import styles from './Footer.module.scss';
import { FaHandHoldingHeart } from 'react-icons/fa'
import ColorPallet from '../ColorPallet/ColorPallet';

const Footer = (props) => {
    return (
        <div>
            <ColorPallet />
            <div className={styles.container}>
                <p className={styles.text}>Designed and Developed with <FaHandHoldingHeart className={styles.icon} />by <span className={styles.span}>Newgin Sam</span></p>
            </div>
        </div>
    );
}

export default Footer;