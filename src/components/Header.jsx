import React, { Component } from 'react';
import { Row, Col, Menu } from 'antd';
import { Link } from 'react-router-dom';

import umichMath from '../pics/umich_math.png';

export default class Header extends Component {

  state = {
    current: null
  }

  changeTab = e => {
    this.setState({ current: e.key });
  }

  clearCurrent = () => {
    this.setState({ current: null });
  }

  render() {
    return (
      <nav>
        <Row type="flex" justify="space-between" style={{ backgroundColor: '#001529' }}>
          <Col>
            <Link to="/" onClick={this.clearCurrent} style={{ marginLeft: 20 }}>
              <img src={umichMath} alt="UMICH MATH" height={46} />
            </Link>
          </Col>
          <Col>
            <Menu mode="horizontal" theme="dark" selectedKeys={[this.state.current]} onClick={this.changeTab}>
              <Menu.Item key="about">
                <Link to="/about">About Me</Link>
              </Menu.Item>
              <Menu.Item key="teaching">
                <Link to="/teaching">Teaching</Link>
              </Menu.Item>
              <Menu.Item key="notes">
                <Link to="/notes">Notes</Link>
              </Menu.Item>
              <Menu.Item key="papers">
                <Link to="/papers">Papers and Preprints</Link>
              </Menu.Item>
              <Menu.Item key="organizing">
                <Link to="/organizing">Organizing</Link>
              </Menu.Item>
              <Menu.Item key="scanned">
                <Link to="/scanned">Scanned Notes</Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </nav>
    )
  }
}
