import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  state = {
    current: 'home'
  }

  changeTab = e => {
    this.setState({ current: e.key });
  }

  render() {
    return (
      <nav>
        <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.changeTab} className="Header-Menu">
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
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
      </nav>
    )
  }
}
