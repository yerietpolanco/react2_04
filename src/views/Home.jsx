import { useContext } from "react";
import { APIContext } from "../context/APIContext";

export function Home() {
  const { products } = useContext(APIContext);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <h1>Pizzería Mamma Mía</h1>

      <div className="container grid grid-cols-4">
        {products.map((product, k) => (
          <div className="product">
            <div className="card-image">
                <img src={product.img} alt="" />
                </div>
            <div className="card-title">{product.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
