import React, { Component } from 'react';
import { Row, Col } from 'antd';

import umichMath from '../pics/umich_math.png';
import classes from './Header.module.css';

export default class Header extends Component {
  render() {
    return (
      <Row className={classes.header} type="flex" align="middle">
        <Col>
          <img src={umichMath} alt="UMICH MATH" height={48} />
        </Col>
      </Row>
    );
  }
}
