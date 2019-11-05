import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
  routes = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About Me' },
    { path: '/teaching', text: 'Teaching' },
    { path: '/notes', text: 'Notes' },
    { path: '/papers', text: 'Papers and Preprints' },
    { path: '/organizing', text: 'Organizing' },
    { path: '/scanned', text: 'Scanned Notes' }
  ];

  render() {
    return (
      <nav>
        <Menu mode="horizontal" className="Header-Menu" selectedKeys={[this.props.location.pathname]}>
          {this.routes.map(ele => (
            <Menu.Item key={ele.path}>
              <Link to={ele.path}>{ele.text}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </nav>
    )
  }
}

export default withRouter(Header);
