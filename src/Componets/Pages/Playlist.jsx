import React from "react";
import styles from '../Styles/Playlist.module.css';
import { useValue } from "../../ContextApi";
import { Link } from "react-router-dom";

export default function Playlist(){
    const {data,handleClick}=useValue()
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
                             <Link className={styles.sleep} key={i} onClick={()=>handleClick(d.id)} to="/Playlist/:id">
  <div className={styles.htS}></div>
                        <div className={styles.sHeading}>{d.title}</div>
                                            </Link>
                        )
                    })}
                    <br/>
                   
                </div>
        </div>
    )
}