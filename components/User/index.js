import React from "react";
import styles from "./style.module.scss";

function User(props) {
  const { user } = props;
  const { display_name, images } = user;

  return (
    <div className={styles.container}>
      {images &&
        images.map((photo, key) => {
          return <img key={key} src={photo.url} />;
        })}
      <div className={styles.userName}>{display_name}</div>
    </div>
  );
}

export default User;
