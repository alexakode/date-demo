import styles from "./Menu.module.css";
import Dish from "./Dish.jsx";
export default function Menu({ retter }) {
  return (
    <div className={styles.grid}>
      {retter.map((rett) => (
        <Dish key={rett.id} rett={rett} />
      ))}
    </div>
  );
}
console.log("Menu component rendered");
