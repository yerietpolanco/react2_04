import { useContext } from "react";
import { APIContext } from "../context/APIContext";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const { products, addToCart } = useContext(APIContext);

  return (
    <div>
      <div className="banner flex justify-center my-10 text-4xl font-bold">
        <h1>Pizzería Mamma Mía</h1>
      </div>

      <div className="flex justify-center">
        <div className="container grid grid-cols-3 gap-10 place-content-center w-full">
          {products.map((product, k) => (
            <div
              key={k}
              className="hover:shadow-xl"
            >
              <div className="hover:cursor-pointer" onClick={() => navigate(`/pizza/${product.name}`)}>
                <img src={product.img} alt="" />
              </div>

              <div className="p-3 flex flex-col gap-3 min-h-[200px]">
                <div className="uppercase font-bold text-2xl">
                  {product.name}
                </div>

                <p>
                  <span className="font-bold">Ingredientes:</span>{" "}
                  {product.ingredients.join(", ")}
                </p>

                <div className="buttons mt-auto items-center ml-auto flex gap-5">
                  <p className="text-2xl font-bold">
                    {product.price.toLocaleString("es-CL")}{" "}
                    <small className="text-sm">+ IVA</small>
                  </p>

                  <button className="bg-slate-800 rounded px-5 py-2 text-slate-50" onClick={(e) => addToCart(product)}>
                    Agregar al carro
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
