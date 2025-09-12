export default function Dish({ rett }) {
  return (
    <div className="dish">
      <h2>{rett.tittel}</h2>
      <p>Pris: {rett.pris}</p>
      <p>Ingredienser: {rett.ingredienser}</p>
      <p>Kategori: {rett.kategori}</p>
    </div>
  );
}
