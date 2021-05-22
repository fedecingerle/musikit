import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const baseUrl = "https://accounts.spotify.com/authorize";
  const clientId = "c2c30fca33d0484585b9f079e2fb495f";
  const responseType = "token";
  const redirectUri = "http://localhost:3000/browser";

  //scopes
  const scopes = [
    "user-follow-read",
    "playlist-read-private",
    "user-read-recently-played",
    "streaming user-read-email",
    "user-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-library-read"
  ];

  return (
    <div className={styles.container}>
      <a
        href={`${baseUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=user-library-modify user-follow-read user-follow-modify playlist-read-private user-read-recently-played streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state user-library-read playlist-read-collaborative`}
      >
        <div>Login to Musikit</div>
      </a>
    </div>
  );
}
