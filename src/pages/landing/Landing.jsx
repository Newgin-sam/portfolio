import React from 'react';
import styles from './Landing.module.scss';

const Landing = () => {

    return(
            <React.Fragment>
                <div className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles.heading1}>NEWGIN SAM E</h1>
                    <h2 className={styles.heading2}> A <span>Software Developer</span> with An Enthusiastic Attitude</h2>
                    <ul className={styles.listContainer}>
                        <li className={styles.list}>
                            <a className={styles.link} href="/">HOME</a>
                        </li>
                        <li className={styles.list}>
                            <a className={styles.link} href="/">ABOUT</a>
                        </li>
                        <li className={styles.list}>
                            <a className={styles.link} href="/">RESUME</a>
                        </li>
                        <li className={styles.list}>
                            <a className={styles.link} href="/">CERTIFICATIONS</a>
                        </li>
                        <li className={styles.list}>
                            <a className={styles.link} href="/">CONTACT</a>
                        </li>
                        
                    </ul>

                </div>
                </div>
            </React.Fragment>
    )

}

export default Landing;