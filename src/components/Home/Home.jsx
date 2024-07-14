import React from "react";
import Button from "components/Button/Button";
import "./home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>
        Hello there, <br></br>
        Lets start journey to excel your typing skills
      </h1>
      <Button
        text={"Click here to explore course"}
        onClick={() => navigate("/course")}
      />
    </div>
  );
};

export default Home;
