import React from 'react';
import styles from './SkillSet.module.scss'

function SkillSet(props) {
    return (
        <div>
        <div className={styles.skill}>
        <div className={styles.skill__iconContainer}>
            <props.skill.Icon className={styles.skill__icon}/>
        </div>
        <h3 className={styles.skill__iconLegend}>{props.skill.name}</h3>
        </div>
        </div>
    );
}

export default SkillSet;