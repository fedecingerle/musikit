import styles from "./style.module.scss";
import User from "../User";
import React from "react";
import Item from "../Item";
import Input from "../Input";
import { useState } from "react";
import UserSelect from "../UserSelect";
import Home from "../Home";
import Search from "../Search";
import NoContent from "../NoContent";
import TitleType from "../TitleType";
import LikedSongs from "../LikedSongs";
function Content(props) {
  const {
    user,
    playlist,
    albums,
    podcast,
    likedSongs,
    recentlyPlayed,
    artists,
    dataSection
  } = props;

  const [searchParam, setSearchParam] = useState("");
  const [category, setCategory] = useState("Playlist");

  function userSelect(text) {
    setCategory(text);
  }

  function handleSearch(searchParam) {
    setSearchParam(searchParam);
  }

  return (
    <React.Fragment>
      {dataSection == "Inicio" && (
        <Home
          playlist={playlist}
          artists={artists}
          recentlyPlayed={recentlyPlayed}
          user={user}
          podcast={podcast}
        />
      )}
      {dataSection == "Buscar" && (
        <React.Fragment>
          <Input handleSearch={serchParam => handleSearch(serchParam)} />
          <Search
            playlist={playlist}
            artists={artists}
            recentlyPlayed={recentlyPlayed}
            user={user}
            podcast={podcast}
            filter={searchParam}
          />
        </React.Fragment>
      )}
      {dataSection == "Tus me gusta" && (
        <React.Fragment>
          <LikedSongs likedSongs={likedSongs} user={user} />
        </React.Fragment>
      )}
      {dataSection == "Tu Biblioteca" && (
        <React.Fragment>
          <div className={styles.userSelectContainer}>
            <User user={user} />
            <div className={styles.userSelect}>
              <UserSelect text="Playlist" userSelect={userSelect} />
              <UserSelect text="Podcasts" userSelect={userSelect} />
              <UserSelect text="Albums" userSelect={userSelect} />
              <UserSelect text="Artists" userSelect={userSelect} />
            </div>
            {category === "Playlist" && (
              <React.Fragment>
                <TitleType category="Playlists" />
                <div className={styles.myContainer}>
                  <div className={styles.likeContainer}>
                    <div className={styles.div}>
                      {likedSongs.items.slice(0, 4).map((likedSongs, key) => {
                        const { track } = likedSongs;
                        const { name, artists } = track;
                        return (
                          <div className={styles.likedSongs}>
                            {artists[0].name} - {name}{" "}
                          </div>
                        );
                      })}
                    </div>
                    <div className={styles.likeTitle}>Tus Me gusta</div>
                    <div className={styles.likeTotal}>
                      {likedSongs.total} tus me gusta
                    </div>
                  </div>
                  {playlist.items && playlist.items.length > 0 ? (
                    playlist.items.map((playlist, key) => {
                      return (
                        <Item
                          key={key}
                          playlist={playlist}
                          className="container"
                        />
                      );
                    })
                  ) : (
                    <NoContent
                      icon="a-play-circle"
                      title="Playlist"
                      subtitle="Sigue a tu primer Playlist"
                    />
                  )}
                </div>
              </React.Fragment>
            )}
            {category === "Podcasts" && (
              <React.Fragment>
                <TitleType category="Podcasts" />
                <div className={styles.myContainer}>
                  {podcast.items && podcast.items.length > 0 ? (
                    podcast.items.map((podcast, key) => {
                      return <Item key={key} podcast={podcast} />;
                    })
                  ) : (
                    <NoContent
                      icon="fas fa-podcast"
                      title="Podcast"
                      subtitle="Sigue a tu primer Podcast"
                    />
                  )}
                </div>
              </React.Fragment>
            )}
            {category === "Albums" && (
              <div className={styles.myContainer}>
                {albums.items && albums.items.length > 0 ? (
                  albums.items.map((album, key) => {
                    return <Item key={key} album={album} />;
                  })
                ) : (
                  <NoContent
                    icon="fas fa-compact-disc"
                    title="Album"
                    subtitle="Sigue álbumes pulsando el ícono de corazón"
                  />
                )}
              </div>
            )}
            {category === "Artists" && (
              <NoContent
                icon="fas fa-music"
                title="Album"
                subtitle="Sigue álbumes pulsando el ícono de corazón"
              />
            )}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Content;
