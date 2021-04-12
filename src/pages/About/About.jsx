import React from 'react';
import PageTitle from '../../componenets/PageTitle/PageTitle';
import PageContainer from '../../componenets/PageContainer/PageContainer';
import SecondaryTitle from '../../componenets/SecondaryTitle/SecondaryTitle';
import SkillSet from '../../componenets/SkillSet/SkillSet';

import { FaReact,FaNodeJs,FaNode,FaJava } from "react-icons/fa";
import { SiJavascript,SiMongodb,SiSass } from "react-icons/si";
import {AiOutlineConsoleSql} from "react-icons/ai";

import {aboutSkill} from '../../Models/skills';

import styles from './About.module.scss';
import img from '../../assets/newgin-2.jpeg';

function About(props) {
    return (
        <div>
            <PageContainer >
                <PageTitle>ABOUT</PageTitle>
                <div className={styles.spaceAbove}>
                    <SecondaryTitle >Who am i ?</SecondaryTitle>
                </div>
                <div className={styles.introductionContainer}>
                    <img alt="newgin sam" className={styles.image} src={img}></img>
                    <section className={styles.about}>
                        <h2 className={styles.aboutText}>Hello there!! This is Newgin</h2>
                        <h2 className={styles.aboutStatus}>Currently working as a Software Developer @ solartis.pvt.lmt</h2>
                    </section>
                    <section className={styles.aboutGuns}>
                        <div className={`${styles.aboutGuns__1} ${styles.aboutGuns__innercontainer}`}>
                            <div>
                                <h4 className = {styles.aboutGuns__head }>BIRTH PLACE</h4>
                                <h5 className = {styles.aboutGuns__value }>Kanyakumari, Tamil Nadu</h5>
                            </div>
                        </div>
                        <div className={`${styles.aboutGuns__1} ${styles.aboutGuns__innercontainer}`}>
                            <div>
                                <h4 className = {styles.aboutGuns__head }>RESIDENCE</h4>
                                <h5 className = {styles.aboutGuns__value }>Chennai, Tamil Nadu</h5>
                            </div>
                        </div>
                      {/*  <div className={`${styles.aboutGuns__1} ${styles.aboutGuns__innercontainer}`}>
                            <div>
                                <h4 className = {styles.aboutGuns__head }>HOBBIES</h4>
                                <h5 className = {styles.aboutGuns__value }></h5>
                            </div>
    </div> */}
                        <div className={`${styles.aboutGuns__1} ${styles.aboutGuns__innercontainer}`}>
                            <div>
                                <h4 className = {styles.aboutGuns__head }>BORN</h4>
                                <h5 className = {styles.aboutGuns__value }>28<sup>th</sup> feb' 1999</h5>
                            </div>
                        </div>
                        <div className={`${styles.aboutGuns__1} ${styles.aboutGuns__innercontainer}`}>
                            <div>
                                <h4 className = {styles.aboutGuns__head }>EDUCATION</h4>
                                <h5 className = {styles.aboutGuns__value }>Bachelor of Engineering</h5>
                            </div>
                        </div>
                        <div className={`${styles.aboutGuns__1} ${styles.aboutGuns__innercontainer}`}>
                            <div>
                                <h4 className = {styles.aboutGuns__head }>EMAIL</h4>
                                <h5 className = {styles.aboutGuns__value }>newginsam@gmail.com</h5>
                            </div>
                        </div>

                    </section>
                    <section className={styles.Objective}>
                        <p>
                            Positive driven and confident individual with an apt for learning new technology. Excellent problem solver with strong analytical skills.
                            I want to work with organizations where i can fully utilize my training and skills, while making a significant contribution to the success of the company.
                        </p>
                    </section>
                    <section className = {styles.skills}>
                        <PageTitle>SKILLS</PageTitle>
                        <div className={styles.skillContainer}>
                        {
                            aboutSkill.map(skill => {
                                return(
                                    <SkillSet className={styles.skill} skill={skill} />
                                )
                            })
                        }
                        </div>
                    </section>
                </div>
            </PageContainer>
            
        </div>
    );
}

export default About;