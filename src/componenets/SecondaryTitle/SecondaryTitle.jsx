import React from 'react';
import styles from './SecondaryTitle.module.scss';

function SecondaryTitle(props) {
    return (
        <div>
                <h1 className={styles.secondHeader}>{props.children}</h1>
        </div>
    );
}

export default SecondaryTitle;