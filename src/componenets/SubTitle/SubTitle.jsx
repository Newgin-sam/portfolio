import React from 'react';
import styles from './SubTitle.module.scss'

function SubTitle(props) {
    return (
        <div>
            <h2 className={styles.subTitle}>{props.children}</h2>
        </div>
    );
}

export default SubTitle;