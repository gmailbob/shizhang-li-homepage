import React from 'react';
import { Typography } from 'antd';
import young from '../pics/young.jpg';

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <div>
      <div className="img_text-wrapper">
        <div>
          <img src={young} alt="young" width="250px" />
        </div>
        <Typography className="component-text">
          <Title>Shizhang Li</Title>
          <Paragraph><i>“I have loved the stars too fondly to be fearful of the night.”</i> -- Sarah Williams</Paragraph>
        </Typography>
      </div>
      <div className="title-details">
        <Typography>
          <Title>About Me</Title>
          <Paragraph>
            I am a Donald J. Lewis Research Assistant Professor in the Mathematics Department at University of Michigan. I am interested in arithmetic geometry. Here is my <a href="http://shizhang.li/CV%20Shizhang%20Li.pdf"> CV</a>.
          </Paragraph>
          <Paragraph>
            I completed my PhD at Columbia University in 2019. My advisor is Prof. <a href="http://www.math.columbia.edu/~dejong/">Aise Johan de Jong</a>.
          </Paragraph>
          <Paragraph>
            My Email: shizhang[at]umich[dot]edu
          </Paragraph>
          <Paragraph>
            My name in Chinese characters: &#26446;&#26102;&#29835; (<a href="https://www.wikiwand.com/en/Simplified_Chinese_characters">Simplified</a>); or &#26446;&#26178;&#29835; (<a href="https://www.wikiwand.com/en/Traditional_Chinese_characters">Traditional</a>).
          </Paragraph>
        </Typography>
      </div>
    </div>
  )
}
