import React from 'react';
import travel from '../pics/travel.jpg';

import { Collapse, Table } from 'antd';
const { Panel } = Collapse;

const columns = [
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Place', dataIndex: 'place', key: 'place' },
  {
    title: 'Occasion',
    dataIndex: 'occasion',
    key: 'occasion',
    render: code => <div dangerouslySetInnerHTML={{ __html: code }} />
  },
];

const data = [
  { key: '1', date: 'Oct. 16-18, 2019', place: 'Purdue University', occasion: `<a href="https://www.math.purdue.edu/~patel471/AGseminar.htm">Algebraic Geometry Seminar</a>` },
  { key: '2', date: 'Oct. 12-13, 2019', place: 'OSU', occasion: `<a href="https://www.magnts.org/">MAGNTS</a>, as a participant` },
  { key: '3', date: 'Aug. 14-22, 2019', place: 'Beijing', occasion: `<a href="http://www.amss.ac.cn/">Visit Xuanyu Pan</a>` },
  { key: '4', date: 'Jun. 16-29, 2019', place: 'Carthage', occasion: `<a href="http://www.ihes.fr/~abbes/GAC/gac.html">Arithmetic Geometry in Carthage</a>, as a participant` },
  { key: '5', date: 'Apr. 8-12, 2019', place: 'MSRI', occasion: `<a href="https://www.msri.org/workshops/855">Hot Topics</a>, as a participant` },
  { key: '6', date: 'Mar. 22-24, 2019', place: 'Amherst', occasion: `<a href="http://www.agneshome.org/amherst-2019">AGNES</a>, as a participant` },
  { key: '7', date: 'Mar. 18-21, 2019', place: 'University of Notre Dame', occasion: `<a href="https://www3.nd.edu/~craicu/AGCA, 2018-2019.html">Algebraic Geometry/Commutative Algebra Seminar</a>` },
  { key: '8', date: 'Mar. 1-7, 2019', place: 'University of Arizona', occasion: `<a href="http://swc.math.arizona.edu/index.html">Arizona Winter School</a>, as a participant` },
  { key: '9', date: 'Feb. 18, 2019', place: 'IAS', occasion: `<a href="https://web.math.princeton.edu/~rdobben/seminar.html">PU + IAS Algebraic geometry seminar</a>` },
  { key: '10', date: 'Feb. 2-13, 2019', place: 'Wen Zhou', occasion: `<a href="https://www.wikiwand.com/en/Chinese_New_Year">Spring Festival</a>` },
  { key: '11', date: 'Dec. 5, 2018', place: 'Stony Brook', occasion: `<a href="http://www.agneshome.org/brown-2018">agnes</a> (I presented a <a href="poster.pdf">poster</a>)` },
  { key: '12', date: 'Nov. 15, 2018', place: 'SUNY at Albany', occasion: `A <a href="https://mathematics.ku.edu/smith-colloquium-2">Colloquium talk</a> and a <a href="http://people.ku.edu/~y019j370/Geometry_Seminar_2018-2019.html">seminar talk</a>` },
  { key: '13', date: 'Oct. 28-30, 2018', place: 'Caltech', occasion: `<a href="http://math.bu.edu/research/algebra/seminar.html">Boston University Number Theory Seminar</a>` },
  { key: '14', date: 'Oct. 24-27, 2018', place: 'University of Minnesota', occasion: `<a href="https://math.umn.edu/seminar/example-liftings-different-hodge-numbers">Algebraic geometry seminar</a> and <a href="https://math.umn.edu/seminar/rigid-varieties-projective-reduction">Algebraic geometry seminar</a>` },
  { key: '15', date: 'Oct. 22, 2018', place: 'Boston University', occasion: `<a href="http://www.math.caltech.edu/~ag/">Algebra and geometry seminar</a>` },
  { key: '16', date: 'Oct. 9-12, 2018', place: 'University of Kansas', occasion: `<a href="https://www.albany.edu/~mv312143/seminar/">Algebra/Topology seminar</a>` },
  { key: '17', date: 'Sep. 21-23, 2018', place: 'Brown University', occasion: `<a href="https://www.math.stonybrook.edu/agenda?LocationID=1">Algebraic geometry seminar</a>` }
];

export default function TravelPlan() {
  return (
    <div className="img_text-wrapper">
      <div>
        <img src={travel} alt="travel" width="290px" />
      </div>
      <Collapse className="TravelPlan-collapse">
        <Panel header="Click to toggle">
          <Table columns={columns} dataSource={data} />
        </Panel>
      </Collapse>
    </div>
  )
}
