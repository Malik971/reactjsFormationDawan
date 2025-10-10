import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeaderItem from './HeaderItem';

const NavBar = () => {

  

    return (
    <header className="navbar px-5 shadow-lg navbar bg-neutral txt-neutral-content">
      <nav className="w-full">
        <div className="m-auto w-fit">
          <ul className="flex items-center gap-10 text-primary">
            <li>
              <HeaderItem href="/">Accueil</HeaderItem>
            </li>
            <li>
              <HeaderItem href="/produits">Produits</HeaderItem>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
 
};

export default NavBar;