import React from "react";
import styles from "../Styles/Navbar.module.css"


export default function Navbar(){
    return(
        <div className={styles.Navbar}> 
        <div className={styles.logoDiv}>
            <div className={styles.logo}></div>
        </div>
        <div className={styles.MenuDiv}>
            <div className={styles.Mv}> Videos</div>
            <div className={styles.Mp}> Programm</div>
            <div className={styles.Ml}>Live</div>
        </div>
        <div className={styles.AuthDiv}>
        <button className={styles.AuthButton}>Login</button>
        </div>

        </div>
    )
}