import Item from "../Item";
import User from "../User";
import styles from "./style.module.scss";
import TitleType from "../TitleType";
function Search(props) {
  const { user, playlist, recentlyPlayed, podcast, artists, filter } = props;
  return (
    <div className={styles.container}>
      <User user={user} />
      <div className={styles.itemsContainer}>
        <TitleType category="Playlists" />
        <div className={styles.items}>
          {playlist.items &&
            playlist.items
              .filter(playlist => {
                const { name } = playlist;
                const lowerTitle = name.toLowerCase();
                const lowerFilter = filter.toLowerCase();
                return lowerTitle.includes(lowerFilter);
              })
              .map((playlist, key) => {
                return <Item key={key} playlist={playlist} />;
              })}
        </div>
      </div>
      <div className={styles.itemsContainer}>
        <TitleType category="Escuchados recientemente" />
        <div className={styles.items}>
          {recentlyPlayed.items &&
            recentlyPlayed.items
              .filter(recentlyPlayed => {
                const { track } = recentlyPlayed;
                const lowerTitle = track.name.toLowerCase();
                const lowerFilter = filter.toLowerCase();
                return lowerTitle.includes(lowerFilter);
              })
              .map((recentlyPlayed, key) => {
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
        <TitleType category="Artitas" />
        <div className={styles.items}>
          {artists.artists &&
            artists.artists
              .filter(artist => {
                const { name } = artist;
                const lowerTitle = name.toLowerCase();
                const lowerFilter = filter.toLowerCase();
                return lowerTitle.includes(lowerFilter);
              })
              .map((artist, key) => {
                return <Item key={key} artist={artist} />;
              })}
        </div>
      </div>
    </div>
  );
}

export default Search;
