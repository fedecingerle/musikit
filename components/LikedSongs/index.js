import styles from "./style.module.scss";
import React from "react";
import User from "../User";
function LikedSongs(props) {
  const { likedSongs, user } = props;
  const { items, total } = likedSongs;
  const { display_name } = user;

  return (
    <div className={styles.likeContainer}>
      <User user={user} />
      <div className={styles.titleSection}>
        <div className={styles.heartContainer}>
          <i className="fas fa-heart" />
        </div>
        <div className={styles.textsContainer}>
          <div className={styles.subtitle}>Playlist</div>
          <div className={styles.title}>Tus me gusta</div>
          <div className={styles.userInfo}>
            <img src={user.images[0].url} />
            <div>{display_name}</div>
            <div>{total} canciones</div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.properties}>
          <div>TÍTULO</div>
          <div>ÁLBUM</div>
          <div>AGREGADO EL</div>
          <i className="far fa-clock" />
        </div>
        {items.map((songs, key) => {
          const { track, added_at } = songs;
          const { name, album, duration_ms } = track;

          const newDate = added_at.split("T");
          const duration = duration_ms / 60000;
          const timeString = JSON.stringify(duration);
          const divTime = timeString.split(".");
          const sencods = divTime[1] * 60;
          const stringSec = JSON.stringify(sencods);
          const divSec = stringSec.split("0");
          const unir = divTime[0].concat(".", divSec[0]);
          const toNumber = unir * 1;
          const reduce = toNumber.toFixed(2);
          const finish = reduce.replace(".", ":");

          return (
            <div className={styles.songsContainer}>
              <div className={styles.title}>
                <div>{name}</div>
                <div>{album.name}</div>
              </div>
              <div className={styles.album}>{album.name}</div>
              <div className={styles.date}>{newDate[0]}</div>
              <div className={styles.time}> {finish}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LikedSongs;
