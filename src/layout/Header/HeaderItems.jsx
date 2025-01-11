import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const HeaderItems = ({ navbarItems }) => {
  return (
    <ul className="flex space-x-8">
      {navbarItems &&
        navbarItems.map((item, index) => (
          <React.Fragment key={index}>
            <li className='names'><Link to={item.url} className="hover:text-primary transition-colors duration-300">{item.name}</Link></li>
          </React.Fragment>
        ))}
    </ul>
  );
};

export default HeaderItems;
