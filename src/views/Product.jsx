import { useParams } from "react-router-dom";
import { APIContext } from "../context/APIContext";
import { useContext } from "react";

export function Product() {
  const { name } = useParams();
  const { products, addToCart } = useContext(APIContext);

  const product = products.find((product) => product.name === name);

  return (
    product && (
      <div className="mx-auto flex gap-10 container">
        <div>
          <img src={product.img} alt="" />
        </div>

        <div className="flex flex-col gap-3">
          <div className="text-4xl uppercase font-bold">{product.name}</div>
          <hr />
          <p>{product.desc}</p>
          <ul className="pl-10 mt-5">
            {product.ingredients.map((ingredient, k) => (
              <li key={k}>🍕{ingredient}</li>
            ))}
          </ul>
          <div className="buttons mt-auto items-center ml-auto flex gap-5">
            <p className="text-2xl font-bold">
              {product.price.toLocaleString("es-CL")}{" "}
              <small className="text-sm">+ IVA</small>
            </p>

            <button className="bg-slate-800 rounded px-5 py-2 text-slate-50" onClick={() => addToCart(product)}>
              Agregar al carro
            </button>
          </div>
        </div>
      </div>
    )
  );
}
