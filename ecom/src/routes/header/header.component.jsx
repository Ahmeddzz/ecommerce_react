import "./header.styles.scss";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
const Header = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Shop
          </Link>
          <Link className="nav-link" to="/">
            Contact
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Header;
