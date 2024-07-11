import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import Icon from "../images/mc.png";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className="p-3 text-bg-dark navBarContainer">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <NavLink
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <img src={Icon} alt="icon" className={classes.iconimage} />
          </NavLink>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 navbar navbar-expand-lg navbar-dark bg-dark">
            <li>
              <NavLink to="/" className="nav-link px-2 text-light">
                Home
              </NavLink>
            </li>

            <Dropdown className="btn-group">
              <Dropdown.Toggle
                className="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Motorcycles
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Dropdown.Item>
                  <NavLink className="dropdown-item" to="/enfield">
                    Royal Enfield
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink className="dropdown-item" to="/triumph">
                    Triumph
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink className="dropdown-item" to="/kawasaki">
                    Kawasaki
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink className="dropdown-item" to="/yamaha">
                    Yamaha
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink className="dropdown-item" to="/superior">
                    Brough Superior
                  </NavLink>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="btn-group">
              <Dropdown.Toggle
                className="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Motorcycle Tours
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Dropdown.Item>
                  <NavLink className="dropdown-item" to="/tourMindoro">
                    Mindoro Loop
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink className="dropdown-item" to="/tourFuji">
                    Kanto (Fuji) Loop
                  </NavLink>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <li>
              <NavLink to="/faq" className="nav-link px-2 text-white">
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link px-2 text-white">
                About
              </NavLink>
            </li>
          </ul>
          <div class="text-end"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
