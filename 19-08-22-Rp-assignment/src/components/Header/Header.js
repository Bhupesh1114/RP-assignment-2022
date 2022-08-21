import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";
import { BsFillMoonFill , BsFillSunFill} from "react-icons/bs";

const Header = ({darkMode,setDarkMode}) => {

  return (
    <header id={styles.header}>
      <Link to="/"><span>R</span>P</Link>

      <div className={styles.headerContainer}>

        <div className={styles.headerInner}> 
        
        <Link to="/">Home</Link>
        <div className={styles.toolTip}>
         <a href="">Hello</a>
         <a href="">Hello</a>
         <a href="">Hello</a>
        </div>
        </div>
    <div>
    <Link to="/about">About</Link>
    </div>
  <div>
  <Link to="/contact">Contact</Link>
  </div>
    
      </div>
      <div className={styles.darkMode} onClick={()=> setDarkMode(!darkMode)}>
        {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
      </div>
      
    </header>
  )
}

export default Header