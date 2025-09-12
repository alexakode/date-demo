import Dish from "./Dish.jsx";
export default function Menu({ retter }) {
  return (
    <div className="menu">
      {retter.map((rett) => (
        <Dish key={rett.id} rett={rett} />
      ))}
    </div>
  );
}
console.log("Menu component rendered");
