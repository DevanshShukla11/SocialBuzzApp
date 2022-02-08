import React from "react";
import { Row, Col, Carousel } from "antd";
import CarouselOne from "./CarouselOne";

const MainComponent = () => {
  const contentStyle = {
    height: "500px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <Row>
        <Col
          className="main-container"
          xs={{ span: 24, push: 0 }}
          lg={{ span: 24 }}
        >
          <Carousel autoplay>
            <CarouselOne />
            <CarouselOne />
            <CarouselOne />
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default MainComponent;
