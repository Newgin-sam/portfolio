import React, { useState } from 'react';

import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import {IoLocationOutline,IoShareSocialOutline} from 'react-icons/io5';
import {HiOutlineMail} from 'react-icons/hi'
import {IoLogoInstagram,IoLogoGithub,IoLogoLinkedin} from 'react-icons/io'

import PageContainer from '../../componenets/PageContainer/PageContainer';
import PageTitle from '../../componenets/PageTitle/PageTitle';
import SecondaryTitle from '../../componenets/SecondaryTitle/SecondaryTitle';

import styles from './Contact.module.scss';

function Contact(props) {
    const initialState = {name:'',email:'',message:'',subject:''};
    const [value,setValue] = useState({...initialState});

    const handleChange = (event) => {
        setValue({...value,[event.target.name] : event.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, e.target, process.env.REACT_APP_YOUR_USER_ID)
          .then((result) => {
              swal("Your Message just logged in", `Will respond as soon as possible ${value.name} !!`, "success");
              setValue({...initialState});
              e.target.reset();
          }, (error) => {
              swal("oops something went wrong!!", `please try later`, "error");
              
          });
          
    }
    

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
                    <p className={styles.contactExtraDetail}>Chennai, Tamil Nadu, India</p>
                    
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
                <div className={styles.spaceAbove}>
                    <div className={styles.writeContainer}>
                        <h1 className={styles.textHeadWrite}> Freelance your Project | Hire Me</h1>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formContainer}>
                                <input type='text' name="name" placeholder='<name>' value= {value.name} className={`${styles.inputs} ${styles.text}`}  onChange={handleChange} required/>
                                <input type='email' name="email" placeholder='<email>' value= {value.email} className={`${styles.inputs} ${styles.text}`} onChange={handleChange} required />
                                <input type='text' name="subject" placeholder='<subject>' value= {value.subject} className={`${styles.inputs} ${styles.text}`} onChange={handleChange} required />
                                <textarea name="message" placeholder='<message>' rows="5"  value= {value.message} className={`${styles.inputs} ${styles.area}`} onChange={handleChange} required/>
                                <button type='submit' className={styles.button}>submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </PageContainer>
        </div>
    );
}

export default Contact;