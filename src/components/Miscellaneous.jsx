/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import miscellaneous from '../pics/miscellaneous.jpg';

import { Collapse } from 'antd';
const { Panel } = Collapse;

export default function Miscellaneous() {
  let lines = [];
  let limits = [];
  $.ajax({
    type: "get",
    url: "https://raw.githubusercontent.com/stacks/stacks-project/master/tags/tags",
    success: function (res) {
      lines = res.toString().split("\n").filter(line => line[0] !== '#');
      limits = lines.filter(line => line.indexOf("proetale") >= 0);
    }
  });
  const randomVisit = arg => {
    if (lines.length === 0) return;
    let targets = lines;
    if (arg === 'part') targets = limits;
    const r = Math.floor(Math.random() * targets.length);
    const des = "https://stacks.math.columbia.edu/tag/" + targets[r].split(',')[0];
    $(`#Miscellaneous-${arg}`).attr("href", des);
  }


  return (
    <div className="img_text-wrapper">
      <div>
        <img src={miscellaneous} alt="miscellaneous" width="290px" />
      </div>
      <Collapse className="Miscellaneous-collapse">
        <Panel header="Click to toggle">
          <div>Open a random  <a target="_blank" onClick={() => randomVisit('all')} id="Miscellaneous-all" href="#">tag</a> in the stacks project. </div>
          <div>Open a random  <a target="_blank" onClick={() => randomVisit('part')} id="Miscellaneous-part" href="#">tag</a> in the stacks project containing "pro&eacute;tale" in the tag.</div>
        </Panel>
      </Collapse>
    </div >
  )
}
