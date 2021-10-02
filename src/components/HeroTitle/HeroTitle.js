import React from "react";
import { Col, Row } from "react-bootstrap";
import TodoImage from "../../images/todo-img.jpg";
import "./HeroTitle.css";

const HeroTitle = () => {
  return (
    <div className="hero-container">
      <Row>
        <Col lg={5}>
          <img className="todo-hero-img" src={TodoImage} alt="" />
        </Col>
        <Col lg={7}>
          <h1 className="mt-3">
            Hey! Buddy if you want to complete your daily task or daily mission.
          </h1>
          <h3 className="mt-3 hero-small-text">This website is for you.</h3>
        </Col>
      </Row>
    </div>
  );
};

export default HeroTitle;
