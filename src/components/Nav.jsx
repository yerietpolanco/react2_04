import { NavLink } from "react-router-dom";

export function Nav() {

    // esta funcion es para agregar la clase active a los links
    // en realidad no tiene sentido si se usa con la clase "active", pero
    // por defecto Navlink ya agrega la clase active.
    // serviría si se usa otra clase distinta a active, o si se quiere usar la propiedad "pending" según la documentación
    const setActiveClass = ({ isActive }) => {
        return isActive ? 'nav-link active' : "nav-link"
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <div className="container">
        <NavLink to="/" className={"navbar-brand"}>
          Mamma Mía
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="navbar-nav container d-flex gap-3 justify-content-end">
          <li className="nav-item">
            <NavLink className={ setActiveClass } to="/">Home</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
