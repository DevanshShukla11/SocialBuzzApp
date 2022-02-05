import React from "react";
import { Card, Col, Row } from "antd";

export const Footer = () => {
  return (
    <>
      <div className="card-wrapper">
        <Row className="main-footer">
          <Col xs={{ span: 24, push: 0 }} lg={{ span: 6, push: 0 }}>
            <Card className="card-one" title="About Us" bordered={true}>
              <p>sqwbd qwjkbdjqw fdcj few frejkg vjreg</p>
            </Card>
          </Col>
          <Col xs={{ span: 24, push: 0 }} lg={{ span: 6, push: 0 }}>
            <Card
              className="card-one"
              className="card-one"
              title="Features"
              bordered={true}
            >
              <p>sqwbd qwjkbdjqw fdcj few frejkg vjreg</p>
            </Card>
          </Col>
          <Col xs={{ span: 24, push: 0 }} lg={{ span: 6, push: 0 }}>
            <Card className="card-one" title="Release" bordered={true}>
              <p>sqwbd qwjkbdjqw fdcj few frejkg vjreg</p>
            </Card>
          </Col>
          <Col xs={{ span: 24, push: 0 }} lg={{ span: 6, push: 0 }}>
            <Card className="card-one" title="Release" bordered={true}>
              <p>sqwbd qwjkbdjqw fdcj few frejkg vjreg</p>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
