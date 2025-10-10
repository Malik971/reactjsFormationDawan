import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HeaderItem = ({ href, children}) => {

  const { pathname } = useLocation()
  return (
    <Link to={href} className={ pathname === href ? "myClass underline border-primary font-bold" : ""}>
    {children}
    </Link>
  );
};

export default HeaderItem;