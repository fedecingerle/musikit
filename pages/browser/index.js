import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./style.module.scss";
import Navbar from "../../components/Navbar";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import FollowingUsers from "../../components/FollowingUsers";
function Browser() {
  async function fetchData(api, setData) {
    const location = window.location;
    const [fullHash] = location.hash.split("&");
    const [, accessToken] = fullHash.split("=");
    const data = await fetch(api, {
      headers: {
        Authorization: `Bearer  ${accessToken}`
      }
    });
    const jsonData = await data.json();
    setData(jsonData);
  }

  const router = useRouter();
  const [userInfo, setUserInfo] = useState({});
  const [playlistData, setPlaylistData] = useState({});

  const [albumsData, setAlbumsData] = useState({});
  const [podcastData, setPodcastData] = useState({});
  const [recentlyPlayed, setRecentlyPlayed] = useState({});
  const [likedSongs, setLikedSongs] = useState({});
  const [artistsData, setArtistsData] = useState({});
  const [section, setSection] = useState("Inicio");

  useEffect(() => {
    const location = window.location;
    const [fullHash] = location.hash.split("&");
    const [, accessToken] = fullHash.split("=");

    fetchData("https://api.spotify.com/v1/me", setUserInfo);
    fetchData("https://api.spotify.com/v1/me/playlists", setPlaylistData);
    fetchData("https://api.spotify.com/v1/me/albums", setAlbumsData);
    fetchData("https://api.spotify.com/v1/me/shows", setPodcastData);
    fetchData("https://api.spotify.com/v1/me/tracks?limit=50", setLikedSongs);
    fetchData(
      "https://api.spotify.com/v1/me/player/recently-played",
      setRecentlyPlayed
    );
    fetchData(
      "https://api.spotify.com/v1/artists?ids=7vXDAI8JwjW531ouMGbfcp,22P1OY4TRFRwhP0q29loQ8,3qm84nBOXUEQ2vnTfUTTFC,4mncDFjVLUa3s025Tct3Ry,2QsynagSdAqZj3U9HgDzjD,1SupJlEpv7RS2tPNRaHViT,1dfeR4HaWDbWqFHLkxsg1d,5YGY8feqx7naU7z4HrwZM6,4VMYDCV2IEDYJArk749S6m,790FomKkXshlbRYZFtlgla,1uNFoZAHBGtllmzznpCI3s,77ziqFxp5gaInVrF2lj4ht,2nszmSgqreHSdJA3zWPyrW,1DxLCyH42yaHKGK3cl5bvG,716NhGYqD1jl2wI1Qkgq36,04XdCDDrPnnqidaVBTOQjt",
      setArtistsData
    );

    if (!accessToken) {
      router.push("/");
    }
  }, []);

  function handleSection(text) {
    setSection(text);
  }

  return (
    <React.Fragment>
      <div className={styles.container}>
        <Navbar
          user={userInfo}
          playlist={playlistData}
          handleCategory={handleSection}
        />
        <Content
          dataSection={section}
          user={userInfo}
          playlist={playlistData}
          albums={albumsData}
          podcast={podcastData}
          artists={artistsData}
          likedSongs={likedSongs}
          recentlyPlayed={recentlyPlayed}
        />
        <FollowingUsers user={userInfo} />
      </div>
      <Footer />
    </React.Fragment>
  );
}

// export async function getStaticProps(api, setter) {}

export default Browser;
