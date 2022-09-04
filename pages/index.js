import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import About from "../components/About";
import Transaction from "../components/Transaction";
import Auctions from "../components/Auctions";
import Artwork from "../components/Artwork";
import Collection from "../components/Collection";
import Aos from "aos";
import "aos/dist/aos.css";
import PopularArtist from "../components/PopularArtist";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import NavMobile from "../components/NavMobile";
import { useEffect, useState } from "react";

export default function Home() {
  const [navMobile, setNavMobile] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (
    <div className={styles.container}>
      <Header setNavMobile={setNavMobile} />
      <Banner />
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-48 transition-all`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <About />
      <Transaction />
      <Auctions />
      <Artwork />
      <Collection />

      <PopularArtist />
      <NewsLetter />
      <Footer />
    </div>
  );
}
