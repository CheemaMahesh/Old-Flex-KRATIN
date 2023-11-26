import React from "react";
import styles from '../Styles/Playlist.module.css';
import { useValue } from "../../ContextApi";

export default function Playlist(){
    const {data}=useValue()
    return(
        <div className={styles.Playlist}>
                <h1 className={styles.pList}>PlayList</h1>
                <div className={styles.wrapper}>
                    {/* <div className={styles.sleep}>
                        <div className={styles.htS}></div>
                        <div className={styles.sHeading}>Never Sleep Like This</div>
                    </div> */}
                    {data.map((d,i)=>{
                        return(
                             <div className={styles.sleep}>
                        <div className={styles.htS}></div>
                        <div className={styles.sHeading}>{d.title}</div>
                    </div>
                        )
                    })}
                    <br/>
                   
                </div>
        </div>
    )
}