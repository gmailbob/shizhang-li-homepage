import React from 'react';
import ExternalLinks from './ExternalLinks.jsx';

export default function DesktopSider() {
  return (
    <nav>
      <div style={{ padding: '30px 0 10px 0', fontSize: 16 }}><b>You may also be interested in</b></div>
      <ExternalLinks />
    </nav>
  )
}
