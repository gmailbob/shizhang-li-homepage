import React from 'react';
import { Typography, Divider } from 'antd';
import TravelPlan from './TravelPlan.jsx';
import Miscellaneous from './Miscellaneous.jsx';
import shizhangli from '../pics/shizhangli.jpg';

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div>
      <div className="img_text-wrapper">
        <div className="Home-img">
          <img src={shizhangli} alt="shizhangli" width="250px" />
        </div>
        <Typography className="Home-text">
          <Title>Shizhang Li</Title>
          <Paragraph className="Home-text-quote"><i>“Ours not to reason why, ours but to do and die.”</i> -- Tennyson</Paragraph>
        </Typography>
      </div>
      <Divider />
      <TravelPlan />
      <Divider />
      <Miscellaneous />
    </div>
  )
}
