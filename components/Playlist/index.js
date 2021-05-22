import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
function Playlist(props) {
  const { playlist } = props;
  const { items } = playlist;

  return (
    <div className={styles.container}>
      {items &&
        items.map((playlist, key) => {
          const { name } = playlist;
          return (
            // <Link>
            <div className={styles.playlistName} key={key}>
              {name}
            </div>
            // </Link>
          );
        })}
    </div>
  );
}

export default Playlist;
