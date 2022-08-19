import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import About from "../components/About";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <About />
    </div>
  );
}
