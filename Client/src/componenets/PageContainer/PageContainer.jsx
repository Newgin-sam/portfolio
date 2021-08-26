import React from 'react';
import styles from './PageContainer.module.scss';

function PageContainer(props) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
}

export default PageContainer;