import React from "react";
import styles from "../Styles/Navbar.module.css";
import LogoImage from "../Assets/Logo.png"; 
import { Outlet ,Link} from "react-router-dom";
import { useValue } from "../../ContextApi";

export default function Navbar() {
  const {userSignOut,email}=useValue();
  return (
   <>
    <nav className={styles.Navbar}>
      <div className={styles.logoDiv}>
        <Link className={styles.logo} to="/">
          <img src={LogoImage} alt="Logo" />
        </Link>
      </div>
      <div className={styles.MenuDiv}>
        <Link to='/Playlist' className={styles.MenuItem}>Playlist</Link>
        <Link to='/Contact' className={styles.MenuItem}>Contact</Link>
        <Link to="/Playlist/:id" className={styles.MenuItem}>Videos</Link>
      </div>
      
    </nav>
   </>
  );
}
