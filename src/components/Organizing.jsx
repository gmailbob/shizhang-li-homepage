import React from 'react';
import { Typography } from 'antd';
import seminar from '../pics/seminar.jpg';

const { Title, Paragraph } = Typography;

export default function Organizing() {
  return (
    <div>
      <div className="img_text-wrapper">
        <div>
          <img src={seminar} alt="seminar" width="250px" />
        </div>
        <Typography className="component-text">
          <Title>Shizhang Li</Title>
          <Paragraph><i>“Those who know that they are profound strive for clarity. Those who would like to seem profound strive for obscurity.”</i> -- Nietzsche</Paragraph>
        </Typography>
      </div>
      <div className="title-details">
        <Typography>
          <Title>Organizing</Title>
          <Paragraph>
            (Fall of 2016),&nbsp;<a href="http://math.columbia.edu/~clian/">Carl</a>&nbsp;and I organized a student algebraic geometry seminar on some cohomology theory in characteristic p discussing Deligne-Illusie and Deligne&#39;s famous Weil 2.
            <br />The website is&nbsp;<a href="http://math.columbia.edu/~clian/aglsf16.html">here</a>.
          </Paragraph>
          <Paragraph>
            (Spring of 2017),&nbsp;<a href="http://math.columbia.edu/~clian/">Carl</a>&nbsp;and I organized a student algebraic geometry seminar on BBD(G).
            <br />The website is <a href="http://www.math.columbia.edu/~clian/aglss17.html">here</a>.
          </Paragraph>
          <Paragraph>
            (Spring of 2017), <a href="http://www.math.columbia.edu/~phlee/">Pak-Hin</a> and I organized a &#39;title to be determined/na&iuml;ve&#39; student number theory seminar on the Langlands Program. The main purpose is to eliminate both organizers&#39; iliteracy about it.
            <br />The website is <a href="http://www.math.columbia.edu/~phlee/S17-Langlands/index.html">here</a>.
          </Paragraph>
          <Paragraph>
            (Spring of 2018), <a href="http://www.math.columbia.edu/~brianrl/">Brian Lawrance</a> and I organized a learning seminar on Crystalline Cohomology.
            <br />The website is <a href="http://www.math.columbia.edu/~brianrl/crys_seminar.html">here</a>
          </Paragraph>
          <Paragraph>
            (Summer of 2018), <a href="http://math.columbia.edu/~rcheng/">Raymond Cheng</a> and I are organizing a learning seminar on Integral p-adic Hodge theory.
            <br />The website is <a href="http://math.columbia.edu/~rcheng/BMS-S2018.html">here</a>.
          </Paragraph>
        </Typography>
      </div>
    </div>
  )
}

