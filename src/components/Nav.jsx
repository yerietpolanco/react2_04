import { NavLink } from "react-router-dom";
import { APIContext } from "../context/APIContext";
import { useContext } from "react";

export function Nav() {
  const { cartProducts, getTotal } = useContext(APIContext);

  return (
    <nav>
      <div className="px-20 flex justify-between">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/cart">
          🛒 {getTotal()}
        </NavLink>
      </div>
    </nav>
  );
}
