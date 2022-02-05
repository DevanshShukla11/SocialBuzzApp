import React from "react";
import { Button, Row, Col } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import "../App.css";

const Header = () => {
  return (
    <>
      <Row>
        <Col
          className="header-main"
          xs={{ span: 12, push: 12 }}
          lg={{ span: 4, push: 20 }}
          className="col-main"
        >
          <Button type="submit" className="btn-one">
            Sign Up ?
          </Button>
          <Button type="submit" className="btn-one">
            Sign In ?
          </Button>
        </Col>
        <Col
          xs={{ span: 12, pull: 12 }}
          lg={{ span: 20, pull: 4 }}
          className="col-main-two"
        >
          <HomeOutlined className="home-icon" />
        </Col>
      </Row>
    </>
  );
};
export default Header;
