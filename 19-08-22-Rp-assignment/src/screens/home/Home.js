import React from 'react';
import Card from '../../components/card/Card';
import styles from "./home.module.css";
import CardsData from "../../data";
import cardsData from '../../data';



const Home = ({darkMode}) => {
  return (
  <div id={styles.home}>
    <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80" alt="city pic" />
    <div></div>
   <div>
   <h1>Maintenance Videos</h1>
   </div>
   <div>
   {cardsData.map((item,index,arr) => {
    const props = {
      ...item,
      darkMode
    }
    return <Card  key={index} {...props}/>
   })}

 
   </div>

  </div>
  )
}

export default Home