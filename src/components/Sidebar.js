import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Sidebar = () => {
  return (
    <nav id="sidebar" className="light">
      <div className="sidebar-header">
        <h3>Menu</h3>
      </div>
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="">Home</Link>
        </li>
        <li>
          <Link to="/search-results" className="">Search Results</Link>
        </li>
        <li> <Link to="/favorites">Favorites</Link>
</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
