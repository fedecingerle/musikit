import React from "react";
import styles from "./style.module.scss";

function Item(props) {
  const { playlist, recentlyPlayed, podcast, artist, className } = props;

  return (
    <React.Fragment>
      {playlist && (
        <div className={`${styles.playlistContainer} ${styles[className]}`}>
          <img src={playlist.images[0].url} />
          <div className={styles.name}>{playlist.name}</div>
        </div>
      )}
      {recentlyPlayed && (
        <div className={styles.container}>
          <img src={recentlyPlayed.track.album.images[0].url} />
          <div>{recentlyPlayed.track.album.artists[0].name}</div>
          <div className={styles.name}>{recentlyPlayed.track.name}</div>
        </div>
      )}
      {podcast && (
        <div className={styles.container}>
          <img src={podcast.show.images[0].url} />{" "}
          <div className={styles.podcastName}>{podcast.show.name}</div>
          <div className={styles.podcastPublisher}>
            {podcast.show.publisher}
          </div>
        </div>
      )}
      {artist && (
        <div className={`${styles.container} ${styles[className]}`}>
          <img src={artist.images[0].url} />
          <div className={styles.artists}>{artist.name}</div>
          <div>{artist.type.toUpperCase()}</div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Item;
