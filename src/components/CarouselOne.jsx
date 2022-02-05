import React from "react";
import { Row, Col } from "antd";
import { Image, Divider } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import CarouselImage from "../images/seo-landing-page.svg";

const CarouselOne = () => {
  return (
    <>
      <Row>
        <Col
          className="carousel-one"
          xs={{ span: 24, push: 0 }}
          lg={{ span: 14, push: 10 }}
        >
          <span className="main-heading">
            Welcome to SocialBuzz App <MessageOutlined />
          </span>
          <Divider className="main-divider" />
          <p className="mid-heading">
            Some of the awesome features of this apps are we can socially
            connect with each other using online medium .
          </p>
          <Divider className="main-divider" />
          <p className="mid-heading">
            SocialBuzz app uses the latest market driven technologies such as
            Reactjs & Nodejs with popular UI/UX framework such as Ant Design
            also with the power of Redux-Thunk as global state management
            library .
          </p>
          <Divider className="main-divider" />
          <p className="mid-heading">
            SocialBuzz web based application is developed by me{" "}
            <span className="name"> Devansh Shukla</span>
            (Fullstack web developer) , i hope you all love this project
            Thankyou .
          </p>
        </Col>
        <Col
          className="carousel-two"
          xs={{ span: 24, pull: 0 }}
          lg={{ span: 10, pull: 14 }}
        >
          <Image className="image-one" preview={false} src={CarouselImage} />
        </Col>
      </Row>
    </>
  );
};

export default CarouselOne;
