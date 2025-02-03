import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.head}>Celebrate Vasant Panchami</h1>
        <p className={styles.dep}>Vasant Panchami is a festival that marks the arrival of spring. It is dedicated to Goddess Saraswati, the goddess of knowledge, music, and arts.</p>
        <Image src="/images/goddess.jpg" alt="Vasant Panchami" width={1920} height={1080} className={styles.image} />
        <p className={styles.dep}>On this day, people worship Goddess Saraswati and celebrate the vibrancy of life and learning. It's a time for new beginnings and bright futures!</p>
      </main>
    </div>
  );
}





