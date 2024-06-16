import React, { useState } from "react";
import style from "./style.module.scss";
import { pages } from "./pages";
import { CombineClassnames } from "../../helpers/helpers";
import { Link } from "react-router-dom";
type Props = {};

const Navbar = (props: Props) => {
  const [active, setActive] = useState(0);
  return (
    <div
      className={style.navbarContainer}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div>
        <img src="/assets/logos/logo.png" alt="" className={style.logo} />
      </div>
      <div className={style.navContainer}>
        {pages.map((items, idx) => (
          <Link
            to={items.path}
            key={idx}
            onClick={() => setActive(idx)}
            className={CombineClassnames([
              style.navItem,
              active === idx ? style.navActive : null,
            ])}
          >
            {items.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
