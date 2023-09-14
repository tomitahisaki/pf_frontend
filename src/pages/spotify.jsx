import styles from "@/styles/Home.module.scss";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";

export default function Spotify() {
  const REDIRECT_URI = process.env.REDIRECT_URI;
  const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
  const SPOTIFY_AUTH_ENDPOINT = process.env.SPOTIFY_AUTH_ENDPOINT;
  const RESPONCE_TYPE = "token"

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token")
    console.log("hash", hash)
    console.log("token", token)

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token);
      setToken(token);
    }
    
  }, [])

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token")
  }

  return (
    <>
      <div className={styles.main}>
        <Header />
        <h1>Spotify React</h1>
        { !token ? 
          <a href={`${SPOTIFY_AUTH_ENDPOINT}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONCE_TYPE}`}>Login to spotify</a>
        : <button onClick={logout}>Logout</button> }

        <Footer />
      </div>
    </>
  );
}
