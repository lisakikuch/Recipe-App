import React from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function NavBar() {

    const navigate = useNavigate();

    const handleScrollToKeep = () => {
      navigate('/recipes');
      setTimeout(() => {
        const keepSection = document.getElementById('keep');
        if (keepSection) {
          keepSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    };

    return (
        <nav>
            <Link to="/">Home</Link> | {" "}
            <Link to="/recipes">Recipes</Link> | {" "}
            <button onClick={handleScrollToKeep}>Saved</button>  | {" "}
            <Link to="/about">About</Link>
        </nav>
    )
}

export default NavBar;