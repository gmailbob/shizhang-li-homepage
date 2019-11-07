import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

export default function Header(props) {
  const routes = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About Me' },
    { path: '/teaching', text: 'Teaching' },
    { path: '/notes', text: 'Notes' },
    { path: '/papers', text: 'Papers and Preprints' },
    { path: '/organizing', text: 'Organizing' },
    { path: '/scanned', text: 'Scanned Notes' }
  ];

  const location = useLocation();

  return (
    <nav>
      <Menu mode="horizontal" className="Header-Menu" selectedKeys={[location.pathname]}>
        {routes.map(ele => (
          <Menu.Item key={ele.path}>
            <Link to={ele.path}>{ele.text}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </nav>
  )
}
