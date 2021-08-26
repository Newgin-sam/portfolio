import React from 'react';

//componenets
import PageTitle from '../../componenets/PageTitle/PageTitle';
import PageContainer from '../../componenets/PageContainer/PageContainer';
import SecondaryTitle from '../../componenets/SecondaryTitle/SecondaryTitle';
import SubTitle from '../../componenets/SubTitle/SubTitle';
import TimelineContent from '../../componenets/TimelineContent/TimelineContent';

//models
import Education,{summary} from '../../Models/Education';
import ProfessionalExperience from '../../Models/ProfessionalExperience';
import Skills from '../../Models/skills';

//style
import styles from './Resume.module.scss';


function Resume(props) {
    return (
        <div>
        <PageContainer >
            <PageTitle>RESUME</PageTitle>
            <div className={styles.spaceAbove}>
                <SecondaryTitle >Check out my Résumé</SecondaryTitle>
            </div>
            <section className={styles.resumeContainer}>
                <div className={styles.left}>
                    <div className={styles.partContainer}>
                        <SubTitle>Summary</SubTitle>
                        <div className={styles.contentContainer}>
                            <p className={ `${styles.summaryContent} ${styles.I}`}>
                                {summary}
                            </p>
                        </div>
                    </div>
                    <div className={styles.skillContainer}>
                        <SubTitle>Skill Set</SubTitle>
                        <div className={styles.contentContainer}>
                            <div className={styles.summaryContent}>

                                {
                                    Skills.map(el => {
                                        return(
                                        <React.Fragment>
                                            <li className={styles.ul}>{el.head}</li> 
                                            <span className={styles.subText}>{el.value}</span>
                                        </React.Fragment>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                    </div>
                    <div className={styles.skillContainer}>
                        <SubTitle>Education</SubTitle>
                        <TimelineContent list={Education}/>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.ExperienceContainer}>
                        <SubTitle>Professional Experience</SubTitle>
                        <TimelineContent list={ProfessionalExperience}/>
                    </div>
                </div>
            </section>
        </PageContainer>
        </div>
    );
}

export default Resume;