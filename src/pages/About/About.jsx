import React, { useEffect, useState } from 'react';
import PageTitle from '../../componenets/PageTitle/PageTitle';
import PageContainer from '../../componenets/PageContainer/PageContainer';
import SecondaryTitle from '../../componenets/SecondaryTitle/SecondaryTitle';
import SkillSet from '../../componenets/SkillSet/SkillSet';
import GitHubCalendar from 'react-github-calendar';

import { aboutSkill } from '../../Models/skills';
import { Info } from '../../Models/aboutInfo'

import styles from './About.module.scss';
import img from '../../assets/newgin-2.jpeg';
import Loading from '../../assets/Loading.svg'

import parse from 'html-react-parser';


const About = (props) => {
    const [colorset, setcolorset] = useState(document.documentElement.style.getPropertyValue('--color-primary'));
    const [loading, setloading] = useState(true);

    const colorTheme = {
        "level4": document.documentElement.style.getPropertyValue('--color-primary-dark'),
        "level3": document.documentElement.style.getPropertyValue('--color-primary'),
        "level2": document.documentElement.style.getPropertyValue('--color-primary-light'),
        "level1": document.documentElement.style.getPropertyValue('--color-primary-mild'),
        "level0": '#747474ce',
    };

    useEffect(() => {
        setInterval(setloading(false), 3000);
    }, [loading])

    // useEffect(() => {
    //     if (colorset !== document.documentElement.style.getPropertyValue('--color-primary')) {
    //         setcolorset(document.documentElement.style.getPropertyValue('--color-primary'));
    //         console.log("2");
    //     }
    //     console.log('1', colorset, document.documentElement.style.getPropertyValue('--color-primary'));

    // }, []);

    const aboutInfo = (infos) => (
        infos.map(info => (
            <div className={`${styles.aboutGuns__1} ${styles.aboutGuns__innercontainer}`}>
                <div>
                    <h4 className={styles.aboutGuns__head}>{info.title}</h4>
                    <h5 className={styles.aboutGuns__value}>{info.html ? parse(info.value, "text/html") : info.value}</h5>
                </div>
            </div>
        ))
    )


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
                        {aboutInfo(Info)}
                    </section>

                    <section className={styles.Objective}>
                        <p>
                            Positive driven and confident individual with an apt for learning new technology. Excellent problem solver with strong analytical skills.
                            I want to work with organizations where i can fully utilize my training and skills, while making a significant contribution to the success of the company.
                        </p>
                    </section>

                    <section className={styles.skills}>
                        <PageTitle>SKILLS</PageTitle>
                        <div className={styles.skillContainer}>
                            {
                                aboutSkill.map(skill => {
                                    return (
                                        <SkillSet className={styles.skill} skill={skill} />
                                    )
                                })
                            }
                        </div>
                    </section>

                    <section className={styles.skills}>
                        <PageTitle>GitHub</PageTitle>
                        <div className={styles.gitContainer}>
                            {loading ?
                                <img src={Loading} alt='loading git-hub activity' />
                                :
                                <GitHubCalendar className="git-hub-calendar"
                                    username="newgin-sam"
                                    blockSize={20}
                                    style={{ backgroundColor: '#191919', padding: '2rem' }}
                                    blockMargin={5}
                                    color={document.documentElement.style.getPropertyValue('--color-primary')}
                                    theme={colorTheme}
                                    fontSize={15}
                                />
                            }
                        </div>
                        <div>
                        </div>
                    </section>
                </div>
            </PageContainer>

        </div>
    );
}

export default About;