import { useState } from "react";
import "./styles.css";
const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Peynir",
    count: 5,
  },
  {
    id: 2,
    name: "Makarna",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);
  // "+"" butonuna tıkladığınızda ilgili sayıyı artıran
  // handleIncreaseClick mantığını doldurun:
  function handleIncreaseClick(productId) {
    const updatedFood = products.map((product) => {
      if (product.id === productId) {
        let count = product.count + 1;
        return { ...product, count };
      }
      return product;
    });

    setProducts(updatedFood);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
