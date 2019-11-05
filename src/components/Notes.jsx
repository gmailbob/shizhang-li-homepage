import React from 'react';
import { Typography } from 'antd';
import notes from '../pics/notes.jpg';

const { Title, Paragraph } = Typography;

export default function Notes() {
  return (
    <div>
      <div className="img_text-wrapper">
        <div>
          <img src={notes} alt="notes" width="250px" />
        </div>
        <Typography className="component-text">
          <Title>Shizhang Li</Title>
          <Paragraph><i>“… but the time you enjoy wasting is not wasted time.”</i> -- Troly-Curtin</Paragraph>
        </Typography>
      </div>
      <div className="title-details">
        <Typography>
          <Title>Notes</Title>
          <Paragraph>
            1.&nbsp;<a href="http://shizhang.li/Johan's%20Problem%20Seminar.pdf">Johan&#39;s Problem Seminar</a>.
          </Paragraph>
          <Paragraph>
            2. English <a href="http://shizhang.li/translation.pdf">translation</a> of Bartenwerfer&#39;s&nbsp;
                  <a href="http://www.sciencedirect.com/science/article/pii/1385725878900197">paper</a>&#58;
                  <br /><em>Die erste &ldquo;metrische&rdquo; Kohomologiegruppe glatter affinoider R&auml;ume</em>
          </Paragraph>
          <Paragraph>
            3. <a href="http://shizhang.li/lemmata%20in%20adic-rigid%20geometry.pdf">Lemmata in adic-rigid geometry</a>.
                  <br />This is an evolving set of learning notes on adic-rigid geometry.
                  <br />(Doesn&#39;t seem evolving no more recently though.)
          </Paragraph>
          <Paragraph>
            4. <a href="http://shizhang.li/non%20simply%20connected.pdf">Why are they NOT simply connected</a>?
            <br />This is the expository notes for a non-trivial &eacute;tale covering space of rigid projective line.
          </Paragraph>
          <Paragraph>
            5. <a href="http://shizhang.li/very%20brief%20lectures.pdf">Very brief lectures</a>.
            <br />This is the lecture notes for lectures I gave at HKUST, invited by Huai-Liang Chang. It probably contains some minor mistakes, use at your own risk.
          </Paragraph>
          <Paragraph>
            6. <a href="http://shizhang.li/example_of_unramified_liftings_of_representations.pdf">Example of unramified liftings of representations</a>.
            <br />This contains an example of a pair of unramified liftings of a representation (of a finite group) in positive characteristic, so that their geometric generic fibres are different (as representations of the finite group).
          </Paragraph>
        </Typography>
      </div>
    </div >
  )
}
