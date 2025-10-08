import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section>
      <nav>
        {/* Ne pas utiliser a pour changer de page en interne */}
        {/* <a href="/"> Acceuil </a>
        <a href="/"> Exercice React </a>
        <a href="/"> Acceuil </a>
        <a href="/"> Acceuil </a>
        <a href="/"> Acceuil </a>
        <a href="/"> Acceuil </a> */}

        <Link to="/"> acceuil </Link>
        <Link to="/ma-page"> Exercice React </Link>
        <Link to="/formulaire"> formulaire </Link>
        <Link to="/"> acceuil </Link>
        <Link to="/"> acceuil </Link>
        <Link to="/"> acceuil </Link>
      </nav>
    </section>
  );
};

export default Navbar;