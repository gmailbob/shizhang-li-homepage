import React, { Component } from 'react';
import ExternalLinks from './ExternalLinks.jsx';
import { Drawer, Icon } from 'antd';

export default class LeftSider extends Component {
  state = {
    visible: false
  }

  open = () => {
    this.setState({ visible: true })
  }

  close = () => {
    this.setState({ visible: false })
  }

  render() {
    return (
      <nav>
        <div className="LeftSider-mobile">
          <div className="LeftSider-mobile-icon"><Icon type="arrow-right" onClick={this.open} style={{ margin: 0, padding: 0 }} /></div>
          <Drawer
            title="You may also be interested in"
            placement="left"
            width="275"
            closable={false}
            visible={this.state.visible}
            onClose={this.close}
          >
            <ExternalLinks closeSider={this.close} />
          </Drawer>
        </div>
        <div className="LeftSider-desktop">
          <div className="LeftSider-desktop-title"><b>You may also be interested in</b></div>
          <ExternalLinks />
        </div>
      </nav>
    )
  }
}