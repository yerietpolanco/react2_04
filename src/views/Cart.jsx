import { useContext } from "react";
import { APIContext } from "../context/APIContext";

export function Cart() {
  const { cartProducts, addToCart, removeFromCart, getTotal } =
    useContext(APIContext);

  return (
    <div>
      <div className="banner flex justify-center my-10 text-4xl font-bold">
        <h1>Carro</h1>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col container text-2xl uppercase gap-5">
          {cartProducts &&
            cartProducts.map((product, k) => (
              <div key={k} className="flex gap-10">
                <div className="max-w-[150px]">
                  <img src={product.img} alt="" />
                </div>
                <div className="flex-1 items-center justify-center flex">
                  {product.name}
                </div>

                <div className="flex-1 items-center justify-center flex gap-5">
                  <div>
                    $
                    {(product.price * product.quantity).toLocaleString("es-CL")}
                  </div>
                  <div>x{product.quantity}</div>
                  <div className="flex gap-3">
                    <div
                      className="p-5 bg-green-400 rounded hover:cursor-pointer"
                      onClick={() => addToCart(product)}
                    >
                      +
                    </div>
                    <div
                      className="p-5 bg-red-400 rounded hover:cursor-pointer"
                      onClick={() => removeFromCart(product)}
                    >
                      -
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {cartProducts.length > 0 && (
            <>
              <div className="ml-auto">Total: {getTotal()}</div>
              <div className="ml-auto bg-blue-600 rounded text-slate-200 p-2">
                Ir a pagar
              </div>
            </>
          )}

          {!cartProducts.length && (
            <div className="flex flex-col justify-center">
              <p className="text-2xl">No hay productos en el carro :( 🍕</p>
              <p className="text-2xl">
                Revisa nuestros productos para continuar
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
