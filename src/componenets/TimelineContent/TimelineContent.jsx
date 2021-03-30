import React from 'react';
import styles from './TimelineContent.module.scss'
function TimelineContent(props) {
    return (
        <React.Fragment>
        {
            props.list.map(el => {
                return (
                    <div className={styles.contentContainer}>
                        <h2 className={styles.timelineHead}>{el.title}</h2>
                        <span className={styles.period}>{el.span}</span>
                        <p className={`${styles.summaryContent} ${styles.I} ${styles.spaceAbove}`}>{el.location}</p>
                        { el.content !== undefined ? 
                            (   <div className={`${styles.summaryContent} ${styles.mtb}`}>
                                    {el.content}
                                </div>
                            ):null
                        }
                        {
                            el.List !== undefined ? 
                            (   <ul className={styles.List}>
                                    {el.List.map( e =>{
                                        return(
                                            <li>{e}</li>
                                        )
                                    })}
                                </ul>
                            ) : null
                        }
                    </div>  
                    )
                })
            }
        </React.Fragment>
    );
}

export default TimelineContent;