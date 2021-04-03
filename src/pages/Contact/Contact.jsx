import React from 'react';
import PageContainer from '../../componenets/PageContainer/PageContainer';
import PageTitle from '../../componenets/PageTitle/PageTitle';
import SecondaryTitle from '../../componenets/SecondaryTitle/SecondaryTitle';
import styles from './Contact.module.scss';
import {IoLocationOutline,IoShareSocialOutline} from 'react-icons/io5';
import {HiOutlineMail} from 'react-icons/hi'
import {IoLogoInstagram,IoLogoGithub,IoLogoLinkedin} from 'react-icons/io'

function Contact(props) {
    return (
        <div>
        <PageContainer >
            <PageTitle>CONTACT</PageTitle> 
            <div className={styles.spaceAbove}>
                <SecondaryTitle>Contact details</SecondaryTitle>
            </div>
            <section className={styles.contact}>
                <div className={styles.part}>
                    <span className={styles.iconContainer}><IoLocationOutline className={styles.icon}/></span>
                    <h2 className={styles.contactDetail}>my address</h2>
                    <p className={styles.contactExtraDetail}>chennai, Tamil Nadu, India</p>
                    
                </div>
                <div className={styles.part}>
                    <span className={styles.iconContainer}><IoShareSocialOutline className={styles.icon}/></span>
                    <h2 className={styles.contactDetail}>social account</h2>
                    <p className={styles.contactExtraDetail}>
                        <a href="https://www.instagram.com/black_man_white_heart/" rel="noreferrer noopener" target="_blank" className={styles.media}><IoLogoInstagram className={styles.mediaIcon}/></a>
                        <a href="https://github.com/Newgin-sam" rel="noreferrer noopener" target="_blank" className={styles.media}><IoLogoGithub className={styles.mediaIcon}/></a>
                        <a href="https://www.linkedin.com/in/newgin-sam-5522b7171/" rel="noreferrer noopener" target="_blank" className={styles.media}><IoLogoLinkedin className={styles.mediaIcon}/></a>
                    </p>
                    
                </div>
                <div className={styles.part}>
                    <span className={styles.iconContainer}><HiOutlineMail className={styles.icon}/></span>
                    <h2 className={styles.contactDetail}>Email me</h2>
                    <p className={styles.contactExtraDetail}>newginsam@gmail.com</p>
                </div>
            </section>
            <section className={styles.writeToMe}>
                <div className={styles.spaceAbove}>
                    <PageTitle>WRITE TO ME</PageTitle> 
                </div>
            </section>
        </PageContainer>
        </div>
    );
}

export default Contact;