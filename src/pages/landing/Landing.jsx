import React from 'react';
import styles from './Landing.module.scss';

const Landing = () => {
    const location = window.location.pathname;
    return(
            <React.Fragment>
            {console.log(location)}
                <div className={styles.header}>
                <div className={ location === '/' ? `${styles.container}` : `${styles.container} ${styles.container__active}`}>
                    <h1 className={  location === '/' ? `${styles.heading1}` : `${styles.heading1} ${styles.heading1__active}` }><span>NEWGIN SAM E</span>NEWGIN SAM E<span>NEWGIN SAM E</span></h1>
                    <h2 className={location === '/' ? `${styles.heading2}` : `${styles.heading2} ${styles.heading2__active}` }> A <span>Software Developer</span> with An Enthusiastic Attitude</h2>
                    <ul className={ location === '/' ? `${styles.listContainer}` : `${styles.listContainer} ${styles.listContainer__active}` }>
                        <li className={location === '/' ? `${styles.list} ${styles.list__1}` : `${styles.list__active} ${styles.list} ${styles.list__1}` }>
                            <a className={styles.link} href="/">HOME</a>
                        </li>
                        <li className={location === '/' ? `${styles.list} ${styles.list__2}` : `${styles.list__active} ${styles.list} ${styles.list__2}` }>
                            <a className={styles.link} href="/about">ABOUT</a>
                        </li>
                        <li className={location === '/' ? `${styles.list} ${styles.list__3}` : `${styles.list__active} ${styles.list} ${styles.list__3}` }>
                            <a className={styles.link} href="/resume">RESUME</a>
                        </li>
                        <li className={location === '/' ? `${styles.list} ${styles.list__4}` : `${styles.list__active} ${styles.list} ${styles.list__4}` }>
                            <a className={styles.link} href="/certification">CERTIFICATIONS</a>
                        </li>
                        <li className={location === '/' ? `${styles.list} ${styles.list__5}` : `${styles.list__active} ${styles.list} ${styles.list__5}` }>
                            <a className={styles.link} href="/contact">CONTACT</a>
                        </li>
                        
                    </ul>
                    
                </div>
                </div>
            </React.Fragment>
    )

}

export default Landing;