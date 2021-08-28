import React, { useState, useContext } from 'react';
import styles from './ColorPallet.module.scss';
import { colors } from '../../Models/ColorPallet';
import { AppContext } from '../../Context/AppContext';

const ColorPallet = () => {

    const { setcolorChange } = useContext(AppContext);

    const [openPallet, setopenPallet] = useState(false);

    if (document.documentElement.style.getPropertyValue('--color-primary') === "") {
        document.documentElement.style.setProperty('--color-primary', colors[1].primary);
        document.documentElement.style.setProperty('--color-primary-light', colors[1].light);
        document.documentElement.style.setProperty('--color-primary-dark', colors[1].dark);
        document.documentElement.style.setProperty('--color-primary-mild', colors[1].mild);
        document.documentElement.style.setProperty('--color-primary-transparent', colors[1].transparent);
    }


    const changeCSSrootColor = (color) => {
        setopenPallet(!openPallet);
        document.documentElement.style.setProperty('--color-primary', color.primary);
        document.documentElement.style.setProperty('--color-primary-light', color.light);
        document.documentElement.style.setProperty('--color-primary-dark', color.dark);
        document.documentElement.style.setProperty('--color-primary-mild', color.mild);
        document.documentElement.style.setProperty('--color-primary-transparent', color.transparent);
        setcolorChange(true);
    }

    const PalletBox = () => {
        return (<div className={styles.palletBoxContainer}>
            {
                colors.map(color => {
                    return (
                        <div className={styles.palletContainer} onClick={() => { changeCSSrootColor(color) }}>
                            <span className={styles.color} style={{ backgroundColor: `${color.color}` }}></span>
                            {/* <span>{color.name} </span> */}
                        </div>
                    )
                })
            }
        </div>)
    }

    return (

        <div className={styles.colorpalletContainer}>
            {
                openPallet ? <PalletBox /> : null
            }
            <div className={styles.colorpallet} onClick={() => setopenPallet(!openPallet)}>

            </div>
        </div>
    );
};

export default ColorPallet;