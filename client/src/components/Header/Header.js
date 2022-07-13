import { Link } from 'react-router-dom';

import style from './Header.module.css';
import NavigationItem from './NavigationItem';

const Header = () => {
  return (
    <nav className={style.navigation}>
      <ul>
        <li className="listItem"><img src="white-origami-bird.png" alt="White origami" /></li>
        <Link to="/"><NavigationItem>Home</NavigationItem></Link>
        <Link to="/about"><NavigationItem>About</NavigationItem></Link>
        <Link to="/contact-us"><NavigationItem>Contact Us</NavigationItem></Link>
        <Link to="/about/Yanko"><NavigationItem>Yanko</NavigationItem></Link>
        <Link to="/about/Nokolcho"><NavigationItem>Nokolcho</NavigationItem></Link>
        <Link to="/about/Ivo"><NavigationItem>Ivo</NavigationItem></Link>
        <Link to="/about/Rumenige"><NavigationItem>Rumenige</NavigationItem></Link>
        <Link to="/about/Mimito"><NavigationItem>Mimito</NavigationItem></Link>
        <Link to="/about/Dea"><NavigationItem>DEA</NavigationItem></Link>
        <Link to="/about/Kresito"><NavigationItem>Kresito</NavigationItem></Link>
        <Link to="/about/Pancho"><NavigationItem>Pancho</NavigationItem></Link>
      </ul>
    </nav>
  );
};

export default Header;