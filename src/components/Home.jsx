import React from 'react';
import { Typography, Divider, Icon } from 'antd';

import shizhangli from '../pics/shizhangli.jpg';
import TravelPlan from './TravelPlan.jsx';
import Miscellaneous from './Miscellaneous.jsx';

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div>
      <div className="img_text-wrapper">
        <div>
          <img src={shizhangli} alt="shizhangli" width="250px" />
        </div>
        <Typography className="component-text">
          <Title>Shizhang Li</Title>
          <Paragraph><i>“Ours not to reason why, ours but to do and die.”</i> -- Tennyson</Paragraph>
        </Typography>
      </div>
      <Divider><Icon type="arrow-down" /> Travel Plan <Icon type="arrow-down" /></Divider>
      <TravelPlan />
      <Divider><Icon type="arrow-down" /> Miscellaneous <Icon type="arrow-down" /></Divider>
      <Miscellaneous />
    </div>
  )
}
