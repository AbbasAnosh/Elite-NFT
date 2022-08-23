import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import About from "../components/About";
import Transaction from "../components/Transaction";
import Auctions from "../components/Auctions";
import Artwork from "../components/Artwork";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <About />
      <Transaction />
      <Auctions />
      <Artwork />
    </div>
  );
}
