import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/home" className="link">
        Home{" "}
      </Link>
      <Link to="/course" className="link">
        {" "}
        Course
      </Link>
      <Link to="/word-drill" className="link">
        Word Drill{" "}
      </Link>
      <Link to="/paragraph-drill" className="link">
        {" "}
        Paragraph Drill
      </Link>
      <Link to="typing-test" className="link">
        {" "}
        Typing Test
      </Link>
      <Link to="game" className="link">
        {" "}
        Game
      </Link>
    </div>
  );
};

export default Navbar;
