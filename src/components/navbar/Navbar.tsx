import "./Navbar.css";

import { type FC, useEffect, useState } from "react";

interface NavbarProps {
  addCar: () => void;
}

const Navbar: FC<NavbarProps> = ({ addCar }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className={`navbar-brand ${scrolled ? "scrolled" : ""}`}>
          <a href="#">DCT</a>
        </div>
        <div className="navbar-menu">
          <ul>
            <li>
              <a className={scrolled ? "scrolled" : ""} href="#cars">
                Cars
              </a>
            </li>
            <li>
              <a
                className={scrolled ? "scrolled" : ""}
                href="/#cars"
                onClick={addCar}
              >
                Add Car
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
