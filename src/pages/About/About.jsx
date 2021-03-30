import React from 'react';
import PageTitle from '../../componenets/PageTitle/PageTitle';
import PageContainer from '../../componenets/PageContainer/PageContainer';
import SecondaryTitle from '../../componenets/SecondaryTitle/SecondaryTitle';
import { FaReact,FaNodeJs,FaNode,FaJava } from "react-icons/fa";
import { SiJavascript,SiMongodb,SiSass } from "react-icons/si";
import {AiOutlineConsoleSql} from "react-icons/ai";

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
                        <div className={styles.aboutGuns__1}>
                            <div className={styles.aboutGuns__innercontainer}>
                                <h4 className = {styles.aboutGuns__head }>BIRTH PLACE</h4>
                                <h5 className = {styles.aboutGuns__value }>Kanyakumari, Tamil Nadu</h5>
                            </div>
                        </div>
                        <div className={styles.aboutGuns__2}>
                            <div className={styles.aboutGuns__innercontainer}>
                                <h4 className = {styles.aboutGuns__head }>RESIDENCE</h4>
                                <h5 className = {styles.aboutGuns__value }>Chennai, Tamil Nadu</h5>
                            </div>
                        </div>
                      {/*  <div className={styles.aboutGuns__3}>
                            <div className={styles.aboutGuns__innercontainer}>
                                <h4 className = {styles.aboutGuns__head }>HOBBIES</h4>
                                <h5 className = {styles.aboutGuns__value }></h5>
                            </div>
    </div> */}
                        <div className={styles.aboutGuns__4}>
                            <div className={styles.aboutGuns__innercontainer}>
                                <h4 className = {styles.aboutGuns__head }>BORN</h4>
                                <h5 className = {styles.aboutGuns__value }>28<sup>th</sup> feb' 1999</h5>
                            </div>
                        </div>
                        <div className={styles.aboutGuns__5}>
                            <div className={styles.aboutGuns__innercontainer}>
                                <h4 className = {styles.aboutGuns__head }>EDUCATION</h4>
                                <h5 className = {styles.aboutGuns__value }>Bachelor of Engineering</h5>
                            </div>
                        </div>
                        <div className={styles.aboutGuns__6}>
                            <div className={styles.aboutGuns__innercontainer}>
                                <h4 className = {styles.aboutGuns__head }>EMAIL</h4>
                                <h5 className = {styles.aboutGuns__value }>newginsam@gmail.com</h5>
                            </div>
                        </div>

                    </section>
                    <section className={styles.Objective}>
                        <p>
                            Positive driven and confident individual with an apt for learning new technology. Excellent problem solver with strong analytical skills.
                            I want to work with an organization where i can fully utilize my training and skills, while making a significant contribution to the success of the company.
                        </p>
                    </section>
                    <section className = {styles.skills}>
                        <PageTitle>SKILLS</PageTitle>
                        <div className={styles.skillContainer}>
                            <div className={styles.skill}>
                                <div className={styles.skill__iconContainer}>
                                    <FaReact className={styles.skill__icon}/>
                                </div>
                                <h3 className={styles.skill__iconLegend}>REACT</h3>
                            </div>
                            <div className={styles.skill}>
                                <div className={styles.skill__iconContainer}>
                                    <FaNode className={styles.skill__icon}/>
                                </div>
                                <h3 className={styles.skill__iconLegend}>NODE</h3>
                            </div>
                            <div className={styles.skill}>
                                <div className={styles.skill__iconContainer}>
                                    <FaNodeJs className={styles.skill__icon}/>
                                </div>
                                <h3 className={styles.skill__iconLegend}>EXPRESS</h3>
                            </div>
                            <div className={styles.skill}>
                                <div className={styles.skill__iconContainer}>
                                    <SiSass className={styles.skill__icon}/>
                                </div>
                                <h3 className={styles.skill__iconLegend}>SCSS</h3>
                            </div>
                            <div className={styles.skill}>
                                <div className={styles.skill__iconContainer}>
                                    <SiJavascript className={styles.skill__icon}/>
                                </div>
                                <h3 className={styles.skill__iconLegend}>JAVASCRIPT</h3>
                            </div>
                            <div className={styles.skill}>
                                <div className={styles.skill__iconContainer}>
                                    <FaJava className={styles.skill__icon}/>
                                </div>
                                <h3 className={styles.skill__iconLegend}>JAVA</h3>
                            </div>
                            <div className={styles.skill}>
                                <div className={styles.skill__iconContainer}>
                                    <SiMongodb className={styles.skill__icon}/>
                                </div>
                                <h3 className={styles.skill__iconLegend}>MONGODB</h3>
                            </div>
                            <div className={styles.skill}>
                                <div className={styles.skill__iconContainer}>
                                    <AiOutlineConsoleSql className={styles.skill__icon}/>
                                </div>
                                <h3 className={styles.skill__iconLegend}>SQL</h3>
                            </div>

                        </div>
                    </section>
                </div>
            </PageContainer>
            
        </div>
    );
}

export default About;