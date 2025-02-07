import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  const navigate = useNavigate();

  return (
    <div className={styles.headerContainer}>
      <h1>Header Component</h1>
      <nav>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/list")}>List</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;