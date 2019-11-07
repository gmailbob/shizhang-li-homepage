import React from 'react';
import { Typography } from 'antd';
import einstein from '../pics/einstein.jpg';

const { Title, Paragraph } = Typography;

export default function Teaching() {
  return (
    <div>
      <div className="img_text-wrapper">
        <div>
          <img src={einstein} alt="einstein" width="250px" />
        </div>
        <Typography className="component-text">
          <Title>Shizhang Li</Title>
          <Paragraph><i>“They also serve who only stand and wait.”</i> -- Milton</Paragraph>
        </Typography>
      </div>
      <div className="title-details">
        <Typography>
          <Title>Teaching</Title>
          <Paragraph>
            Math 115, Section 018, Fall 2019.
          </Paragraph>
          <Paragraph>
            Location: MH2347.
          </Paragraph>
          <Paragraph>
            Time: TWF 08:30--09:50.
          </Paragraph>
          <Paragraph>
            Office hours: Monday and Thursday 08:30--09:30 in my office (EH1854) and Monday 20:00--21:00 in Math Lab (EHB860)
          </Paragraph>
          <Title>Archive</Title>
          <Title level={2}>Taught</Title>
          <Paragraph>
            1. Calculus 3, Math S1201, Summer 2016. Corresponding website is <a target="_blank" rel="noopener noreferrer" href="http://shizhang.li/teaching/calc%203%202016%20summer/course">calc 3 2016 summer</a>.
          </Paragraph>
          <Paragraph>
            2. Calculus 3, Math S1201, Summer 2018. Corresponding website is <a target="_blank" rel="noopener noreferrer" href="http://shizhang.li/teaching/calc%203%202018%20summer/course">calc 3 2018 summer</a>.
          </Paragraph>
          <Title level={2}>TA</Title>
          <Paragraph>
            1. Ordinary Differential Equations, Math UN2030, Spring 2018. My office hour is Tuesday 9:00-12:00 a.m. @Math 406. The website on Courseworks is <a href="https://courseworks2.columbia.edu/courses/53060"> here</a>.
          </Paragraph>
          <Paragraph>
            2. Introduction to Modern Algebra I, Math GU4041, Fall 2018. My office hour is Wednesday 10:00-13:00 @Math 406. The website on Courseworks is <a href="https://courseworks2.columbia.edu/courses/63000"> here</a>.
          </Paragraph>
        </Typography>
      </div>
    </div >
  )
}
