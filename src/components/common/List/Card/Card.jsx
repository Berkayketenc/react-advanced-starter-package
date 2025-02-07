import React from "react";
import styles from "./Card.module.scss";

function Card({ item }) {
  return (
    <div className={styles.cardContainer}>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </div>
  );
}

export default Card;
