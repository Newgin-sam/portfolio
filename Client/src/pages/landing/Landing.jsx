import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Landing.module.scss';

const Landing = () => {
    const location = window.location.pathname;

    const [home, sethome] = useState('');
    const [open, setopen] = useState(false);

    useEffect(() => {
        // console.log(location)
        if (location === '/') {
            sethome(true);
        }
        else {
            sethome(false);
        }
    }, [location])

    const handleClick = (ishome) => {
        if ((ishome === true && home === false) || (ishome === false && home === true)) {
            sethome(!home);
        }
    }

    const clickHam = () => {
        setopen(!open);

    }

    const hamclose = () => {
        setopen(false);
    }

    return (
        <React.Fragment>
            <div className={`${open === true ? styles.list__button_open : ''} ${styles.list__button}`} onClick={clickHam}>
                <div className={styles.list__button_ham}></div>
            </div>
            <div className={styles.header}>
                <div className={home === true ? `${styles.container}` : `${styles.container} ${styles.container__active}`}>
                    <h1 className={`${styles.heading1}  ${home === true ? styles.headingHome : styles.heading1__active}`}><span>NEWGIN SAM E</span>NEWGIN SAM E<span>NEWGIN SAM E</span></h1>
                    <h2 className={`${styles.heading2} ${home === true ? "" : styles.heading2__active}`}> A <span>Software Developer</span> with an Enthusiastic Attitude and Proficient Skills to make your <span> Ideas Live</span></h2>
                    <ul className={`${home === true ? "" : styles.listContainer__active} ${open === true ? styles.listContainer__open : ''} ${styles.listContainer}`}>
                        <li className={`${styles.list} ${styles.list__1} ${home === true ? "" : styles.list__active} `} onClick={hamclose}>
                            <NavLink exact activeClassName={styles.LinkActive} className={styles.link} to="/" onClick={() => handleClick(true)}>HOME</NavLink>
                        </li>
                        <li className={` ${styles.list} ${styles.list__2}  ${home === true ? "" : styles.list__active} `} onClick={hamclose}>
                            <NavLink activeClassName={styles.LinkActive} className={styles.link} to="/about" onClick={() => handleClick(false)}>ABOUT</NavLink>
                        </li>
                        <li className={` ${styles.list} ${styles.list__3} ${home === true ? "" : styles.list__active} `} onClick={hamclose}>
                            <NavLink activeClassName={styles.LinkActive} className={styles.link} to="/resume" onClick={() => handleClick(false)}>RESUME</NavLink>
                        </li>
                        <li className={` ${styles.list} ${styles.list__4}  ${home === true ? "" : styles.list__active} `} onClick={hamclose}>
                            <NavLink activeClassName={styles.LinkActive} className={styles.link} to="/certification" onClick={() => handleClick(false)}>CERTIFICATIONS</NavLink>
                        </li>
                        <li className={` ${styles.list} ${styles.list__5} ${home === true ? "" : styles.list__active} `} onClick={hamclose}>
                            <NavLink activeClassName={styles.LinkActive} className={styles.link} to="/contact" onClick={() => handleClick(false)}>CONTACT</NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </React.Fragment>
    )

}

export default Landing;