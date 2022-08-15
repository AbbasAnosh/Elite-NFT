import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
    </div>
  );
}
