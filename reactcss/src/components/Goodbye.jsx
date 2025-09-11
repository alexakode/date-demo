import styles from "../styles/Greeting.module.css";
console.log(styles);
export default function Goodbye() {
  return <h1 className={styles.box}>Goodbye!</h1>;
}
