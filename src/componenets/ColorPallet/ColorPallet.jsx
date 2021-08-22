import React, { useState } from 'react';
import styles from './ColorPallet.module.scss';
import { colors } from '../../Models/ColorPallet';

const ColorPallet = () => {

    const [openPallet, setopenPallet] = useState(false);

    const changeCSSrootColor = (color) => {
        setopenPallet(!openPallet);
        document.documentElement.style.setProperty('--color-primary', color.primary);
        document.documentElement.style.setProperty('--color-primary-light', color.light);
        document.documentElement.style.setProperty('--color-primary-dark', color.dark);
        document.documentElement.style.setProperty('--color-primary-mild', color.mild);
    }

    const PalletBox = () => {
        return (<div className={styles.palletBoxContainer}>
            {
                colors.map(color => {
                    return (
                        <div className={styles.palletContainer} onClick={() => { changeCSSrootColor(color) }}>
                            <span className={styles.color} style={{ backgroundColor: `${color.color}` }}></span>
                            <span>{color.name} </span>
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
                Colour Pallets
            </div>
        </div>
    );
};

export default ColorPallet;