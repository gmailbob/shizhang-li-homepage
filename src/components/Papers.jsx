import React from 'react';
import { Typography } from 'antd';
import monkey from '../pics/monkey.jpg';

const { Title, Paragraph } = Typography;

export default function Papers() {
  return (
    <div>
      <div className="img_text-wrapper">
        <div>
          <img src={monkey} alt="monkey" width="250px" />
        </div>
        <Typography className="component-text">
          <Title>Shizhang Li</Title>
          <Paragraph><i>“I follow up the quest, despite of day and night, and death and hell.”</i> -- Tennyson</Paragraph>
        </Typography>
      </div>
      <div className="title-details">
        <Typography>
          <Title>Papers and Preprints</Title>
          <Title level={4}>'Rome wasn’t built in one day, bro…'</Title>
          <Paragraph>
            Note that the preprint version is the latest version, which could be different from the arXiv version. I'm sorry for any inconvenience caused.
          </Paragraph>
          <Paragraph>
            1. On rigid varieties with projective reduction, <a href="https://arxiv.org/abs/1704.03109">arXiv</a>, <a href="http://shizhang.li/papers/proper%20picard.pdf">preprint</a> (Nov. 7th, 2018). To appear in <i>Journal of Algebraic Geometry</i>.
          </Paragraph>
          <Paragraph>
            2. Langton&rsquo;s theorem for multi-filtered vector space, <a href="https://arxiv.org/abs/1704.03968">arXiv</a>.
          </Paragraph>
          <Paragraph>
            3. Line bundles on rigid varieties and Hodge symmetry (with <a href="http://www.math.columbia.edu/~hansen/">David Hansen</a>),
                  <a href="https://arxiv.org/abs/1708.08506">&nbsp;arXiv</a>, <a href="http://shizhang.li/papers/hodge2.pdf">preprint</a> (Aug. 23rd, 2018).
          </Paragraph>
          <Paragraph>
            4. Logarithmic de Rham comparison for open rigid spaces (with <a href="http://sourcedb.amss.cas.cn/zw/zjrck/fyjy/201709/t20170908_4856640.html">Xuanyu Pan</a>),
                  <a href="https://arxiv.org/abs/1801.01779">&nbsp;arXiv</a>, <a href="http://shizhang.li/papers/p-adic%20hodge%20for%20log.pdf">preprint</a> (Dec. 13th, 2018). To appear in <i>Forum of Mathematics, Sigma</i>.
          </Paragraph>
          <Paragraph>
            5. An example of liftings with different Hodge numbers, <a href="https://arxiv.org/abs/1805.11697">arXiv</a>, <a href="http://shizhang.li/papers/lifts.pdf">preprint</a> (Dec. 15th, 2018). To appear in <i>Mathematical Research Letters</i>.
          </Paragraph>
          <Paragraph>
            6. Unobstructedness of deformations of Calabi--Yau varieties with a line bundle (with <a href="http://sourcedb.amss.cas.cn/zw/zjrck/fyjy/201709/t20170908_4856640.html">Xuanyu Pan</a>), <a href="https://arxiv.org/abs/1310.7162">arXiv</a>.
          </Paragraph>
        </Typography>
      </div>
    </div>
  )
}
