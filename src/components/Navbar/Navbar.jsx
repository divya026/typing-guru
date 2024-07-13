import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/home">Home </Link>
      <Link to="/course"> Course</Link>
      <Link to="/word-drill">Word Drill </Link>
      <Link to="/paragraph-drill"> Paragraph Drill</Link>
      <Link to="typing-test"> Typing Test</Link>
      <Link to="game"> Game</Link>
    </div>
  );
};

export default Navbar;
