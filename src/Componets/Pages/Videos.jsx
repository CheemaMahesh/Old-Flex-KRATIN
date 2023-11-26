import React, { useEffect, useState } from "react";
import styles from "../Styles/Videos.module.css";
import { useValue } from "../../ContextApi";

export default function Video() {
    const { data, pageCount } = useValue();
    const [newCount, setNewCount] = useState(pageCount + 1);

    useEffect(() => {
        setNewCount(pageCount + 1);
    }, [pageCount]);

    return (
        <div className={styles.Video}>
           
               <>
               {data[pageCount].video.map((video, index) => (
                    <div key={index}>{video}</div>
                ))}
               </>
           <hr/>
        </div>
    );
}
