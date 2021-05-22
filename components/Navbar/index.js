import styles from "./style.module.scss";
import Playlist from "../Playlist";
import Section from "../Section";

function Navbar(props) {
  const { user, playlist, handleCategory } = props;

  function handleSection(text) {
    handleCategory(text);
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.sectionContainer}>
          <Section
            text="Inicio"
            icon="../home.svg"
            handleSection={handleSection}
          />
          <Section
            text="Buscar"
            icon="../search.svg"
            handleSection={handleSection}
          />
          <Section
            text="Tu Biblioteca"
            icon="../library.svg"
            handleSection={handleSection}
          />
        </div>
        <div className={styles.likeContainer}>
          <Section
            text="Tus me gusta"
            icon="../heart.svg"
            handleSection={handleSection}
          />
        </div>
        <div className={styles.playlistContainer}>
          <Playlist playlist={playlist} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
