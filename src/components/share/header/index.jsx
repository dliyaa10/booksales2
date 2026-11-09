import { Link, NavLink } from "react-router";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="fa-solid fa-book-open me-2"></i>
          Book Sales
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/books"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
              >
                Book
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
              >
                Team
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="d-flex gap-2">
            <Link className="btn btn-outline-primary" to="/login">
              Login
            </Link>

            <Link className="btn btn-primary" to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;