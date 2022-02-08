import React from "react";
import { Row, Col, Descriptions } from "antd";

const MainFooter = () => {
  return (
    <>
      <Row>
        <Col className="main-footer-two" span={24}>
          <Descriptions title="User Info" layout="vertical">
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">
              Hangzhou, Zhejiang
            </Descriptions.Item>
            <Descriptions.Item label="Address" span={2}>
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
          </Descriptions>
          ,
        </Col>
      </Row>
    </>
  );
};

export default MainFooter;
