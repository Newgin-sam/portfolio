import React, { useState,useEffect } from 'react';
import {NavLink} from 'react-router-dom'
import styles from './Landing.module.scss';

const Landing = () => {
    const location = window.location.pathname;

    const [home,sethome] = useState('');

    useEffect(() => {
        // console.log(location)
        if(location === '/'){
            sethome(true);
        }
        else {
            sethome(false);
        }
    }, [])

    const handleClick = (ishome) => {
        if((ishome === true && home === false) || (ishome === false && home === true) ){
            sethome(!home);
        }
    }
    
    return(
            <React.Fragment>
                <div className={styles.header}>
                <div className={ home === true ? `${styles.container}` : `${styles.container} ${styles.container__active}`}>
                    <h1 className={  home === true ? `${styles.heading1} ${styles.headingHome}` : `${styles.heading1} ${styles.heading1__active}` }><span>NEWGIN SAM E</span>NEWGIN SAM E<span>NEWGIN SAM E</span></h1>
                    <h2 className={home === true ? `${styles.heading2}` : `${styles.heading2} ${styles.heading2__active}` }> A <span>Software Developer</span> with An Enthusiastic Attitude</h2>
                    <ul className={ home === true ? `${styles.listContainer}` : `${styles.listContainer} ${styles.listContainer__active}` }>
                        <li className={home === true ? `${styles.list} ${styles.list__1}` : `${styles.list__active} ${styles.list} ${styles.list__1}` }>
                            <NavLink exact activeClassName = {styles.LinkActive} className={styles.link} to="/" onClick={() => handleClick(true)}>HOME</NavLink>
                        </li>
                        <li className={home === true ? `${styles.list} ${styles.list__2}` : `${styles.list__active} ${styles.list} ${styles.list__2}` }>
                            <NavLink activeClassName = {styles.LinkActive} className={styles.link} to="/about" onClick={() => handleClick(false)}>ABOUT</NavLink>
                        </li>
                        <li className={home === true ? `${styles.list} ${styles.list__3}` : `${styles.list__active} ${styles.list} ${styles.list__3}` }>
                            <NavLink activeClassName = {styles.LinkActive} className={styles.link} to="/resume" onClick={() => handleClick(false)}>RESUME</NavLink>
                        </li>
                        <li className={home === true ? `${styles.list} ${styles.list__4}` : `${styles.list__active} ${styles.list} ${styles.list__4}` }>
                            <NavLink activeClassName = {styles.LinkActive} className={styles.link} to="/certification" onClick={() => handleClick(false)}>CERTIFICATIONS</NavLink>
                        </li>
                        <li className={home === true ? `${styles.list} ${styles.list__5}` : `${styles.list__active} ${styles.list} ${styles.list__5}` }>
                            <NavLink activeClassName = {styles.LinkActive} className={styles.link} to="/contact" onClick={() => handleClick(false)}>CONTACT</NavLink>
                        </li>
                        
                    </ul>
                    
                </div>
                </div>
            </React.Fragment>
    )

}

export default Landing;