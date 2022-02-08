import React from "react";
import { Card, Col, Row } from "antd";

export const Footer = () => {
  return (
    <>
      <div className="card-wrapper">
        <Row className="main-footer">
          <Col key={1} xs={{ span: 24, push: 0 }} lg={{ span: 6, push: 0 }}>
            <Card
              key={1}
              className="card-one"
              title="About Us"
              bordered={true}
              style={{ border: "1px solid #ff6f91", color: "#ff6f91" }}
            >
              <p>We are SocialBuzz a realtime SocialMediaApp .</p>
            </Card>
          </Col>
          <Col key={2} xs={{ span: 24, push: 0 }} lg={{ span: 6, push: 0 }}>
            <Card
              key={2}
              className="card-one"
              title="Features"
              style={{ border: "1px solid #ff6f91", color: "#ff6f91" }}
              bordered={true}
            >
              <p>sqwbd qwjkbdjqw fdcj few frejkg vjreg</p>
            </Card>
          </Col>
          <Col xs={{ span: 24, push: 0 }} lg={{ span: 6, push: 0 }}>
            <Card
              key={3}
              className="card-one"
              title="Release"
              style={{ border: "1px solid #ff6f91", color: "#ff6f91" }}
              bordered={true}
            >
              <p>sqwbd qwjkbdjqw fdcj few frejkg vjreg</p>
            </Card>
          </Col>
          <Col xs={{ span: 24, push: 0 }} lg={{ span: 6, push: 0 }}>
            <Card
              className="card-one"
              title="Release"
              style={{ border: "1px solid #ff6f91", color: "#ff6f91" }}
              bordered={true}
            >
              <p>sqwbd qwjkbdjqw fdcj few frejkg vjreg</p>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
