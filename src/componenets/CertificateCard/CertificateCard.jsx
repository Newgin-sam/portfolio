import React from 'react';
import styles from './CertificateCard.module.scss';
import {AiOutlineFileProtect,AiOutlineFileDone} from 'react-icons/ai';

function CertificateCard(props) {
    return (
        
        <div className={styles.card}>
        <div className={`${styles.card__front} ${styles.card__side}`}>
            <div className={styles.certificateContainer}>
                <div className={styles.iconContainer}>
                    {props.details.field === 'intern' ? (<AiOutlineFileProtect className={styles.icon}/>) : (<AiOutlineFileDone className={styles.icon}/>)}
                </div>
                <p className={styles.bhead}>{props.details.title}</p>
            </div>
        </div>
        <div className={`${styles.card__back} ${styles.card__side}`}>
            <div className={styles.detailsContainer}>
                <p className={styles.description}>{props.details.description}</p>
                <h2 className={styles.at}>@{props.details.organization}</h2>
            </div>
        </div>
    </div>
       
    );
}

export default CertificateCard;