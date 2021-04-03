import React from 'react';
import PageTitle from '../../componenets/PageTitle/PageTitle';
import PageContainer from '../../componenets/PageContainer/PageContainer';
import SecondaryTitle from '../../componenets/SecondaryTitle/SecondaryTitle';
import CertificateCard from '../../componenets/CertificateCard/CertificateCard';

import certification from '../../Models/Certification';
import styles from './Certification.module.scss';

function Certification(props) {
    return (
        <div>
        <PageContainer >
            <PageTitle>CERTIFICATIONS</PageTitle>
            <div className={styles.spaceAbove}>
                <SecondaryTitle>My Certifiacations</SecondaryTitle>
            </div>
            <div className={styles.container}>

                {certification.map(el => {
                    return(<CertificateCard details={el} />)
                })}    
                
            </div>
        </PageContainer>
        </div>
    );
}

export default Certification;