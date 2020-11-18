import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="menu">
            <Link to="/">
            <button>Home</button>
            </Link>
            <Link to="/catalog">
            <button>Catalog</button>
            </Link>            
        </nav>
    );
};

export { Nav as default };
