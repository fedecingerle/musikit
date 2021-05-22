import Item from "../Item";
import User from "../User";
import TitleType from "../TitleType";
import styles from "./style.module.scss";
function Home(props) {
  const { playlist, recentlyPlayed, podcast, artists, user } = props;
  return (
    <div className={styles.container}>
      <User user={user} />
      <div className={styles.itemsContainer}>
        <TitleType category="Playlists" />
        <div className={styles.items}>
          {playlist.items &&
            playlist.items.slice(0, 4).map((playlist, key) => {
              return <Item key={key} playlist={playlist} />;
            })}
        </div>
      </div>
      <div className={styles.itemsContainer}>
        <TitleType category="Escuchados recientemente" />
        <div className={styles.items}>
          {recentlyPlayed.items &&
            recentlyPlayed.items.slice(0, 8).map((recentlyPlayed, key) => {
              return <Item key={key} recentlyPlayed={recentlyPlayed} />;
            })}
        </div>
      </div>
      <div className={styles.itemsContainer}>
        <TitleType category="Podcasts" />
        <div className={styles.items}>
          {podcast.items &&
            podcast.items.map((podcast, key) => {
              return <Item key={key} podcast={podcast} />;
            })}
        </div>
      </div>
      <div className={styles.itemsContainer}>
        <TitleType category="Artitas favoritos" />
        <div className={styles.items}>
          {artists.artists &&
            artists.artists.slice(0, 8).map((artist, key) => {
              return <Item key={key} artist={artist} />;
            })}
        </div>
      </div>
      <div className={styles.itemsContainer}>
        <TitleType category="Artistas populares" />
        <div className={styles.items}>
          {artists.artists &&
            artists.artists.slice(8, 12).map((artist, key) => {
              return <Item key={key} artist={artist} className="populars" />;
            })}
        </div>
      </div>
      <div className={styles.itemsContainer}>
        <TitleType category="Artistas" />
        <div className={styles.items}>
          {artists.artists &&
            artists.artists.slice(12, 16).map((artist, key) => {
              return <Item key={key} artist={artist} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
