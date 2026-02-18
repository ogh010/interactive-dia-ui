import { Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import MyButton from "../../components/MyButton";

const Layout = () => {
  return (
    <>
      <header className="header">
        <a href="#" className="header__logo"></a>
        <nav className="header__nav">
          <ul className="nav-list">
            <li className="nav-list__item">Works</li>
            <li className="nav-list__item">News</li>
            <li className="nav-list__item">Service</li>
            <li className="nav-list__item">About</li>
          </ul>
        </nav>
      </header>
      <>
        <Button variant="contained">Hello world</Button>
        <MyButton label="test" />

        <Outlet />
      </>
      <footer>2</footer>
    </>
  );
};

export default Layout;
