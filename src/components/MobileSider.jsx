import React, { Component } from 'react';
import ExternalLinks from './ExternalLinks.jsx';
import { Drawer, Icon } from 'antd';

export default class MobileSider extends Component {
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
        <div style={{ fontSize: 30 }}><Icon type="menu-unfold" onClick={this.open} /></div>
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
      </nav>
    )
  }
}

