import styles from "./style.module.scss";
import { useState } from "react";

function UserSelect(props) {
  const { text, userSelect } = props;

  function handleClick() {
    userSelect(text);
  }

  return (
    <div onClick={handleClick} className={styles.userSelect}>
      <div className={styles.text}>{text}</div>
    </div>
  );
}

export default UserSelect;
