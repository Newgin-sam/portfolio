import React from 'react';
import styles from './PageTitle.module.scss';
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

function PageTitle(props) {
    return (
        <div>
            <h2 className={styles.titles}><HiOutlineChevronDoubleRight className={styles.icon}/>{props.children}</h2>
        </div>
    );
}

export default PageTitle;