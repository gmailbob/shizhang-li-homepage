import React from 'react';
import { Typography, Row, Col } from 'antd';
import shizhangli from '../pics/shizhangli.jpg';

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <Row >
      <Col xs={24} lg={12} style={{ textAlign: 'center', padding: '30px 10px' }}>
        <img src={shizhangli} alt="shizhangli" width="300px" />
      </Col>
      <Col xs={24} lg={12} style={{ padding: '30px 10px' }}>
        <Typography>
          <Title>Shizhang Li</Title>
          <Paragraph style={{ fontSize: 24 }}>“Ours not to reason why, ours but to do and die.” — Tennyson</Paragraph>
        </Typography>
      </Col>
    </Row>
  )
}
