import React from "react";
import { Container } from "react-bootstrap";
import HeroTitle from "../HeroTitle/HeroTitle";
import "./Home.css";

const Home = () => {
  return (
    <div className="mt-2">
      <Container>
        <HeroTitle></HeroTitle>
      </Container>
    </div>
  );
};

export default Home;
