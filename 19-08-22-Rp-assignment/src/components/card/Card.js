import React from 'react';
import styles from "./card.module.css";
import {Link} from "react-router-dom";

const Card = ({title,text,image, darkMode}) => {
  return (
    <div id={styles.card} style={{backgroundColor : darkMode && "#000"}}>
      <img src={image} alt="nature pic" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <a href="">View Card</a>
        
      </div>
      
    </div>
  )
}

export default Card