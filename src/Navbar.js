import { useState } from "react";

import { HambergerMenu } from "iconsax-react";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleHandler = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <nav className={classes.navbar}>
      <a className={classes.logo} href="#">
        <img src="logo.jpg" />
      </a>
      <a className={classes.toggleButton} onClick={toggleHandler}>
        <HambergerMenu color="#cf5260"
        size="32" />
      </a>
      <div
        className={
          isActive
            ? `${classes.navLinks} ${classes.active}`
            : `${classes.navLinks}`
        }
      >
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
