import React from 'react';
import PageTitle from '../../componenets/PageTitle/PageTitle';
import PageContainer from '../../componenets/PageContainer/PageContainer';
import styles from './About.module.scss';

function About(props) {
    return (
        <div>
            <PageContainer className={styles.container}>
                <PageTitle>ABOUT</PageTitle>
                
            </PageContainer>
            
        </div>
    );
}

export default About;