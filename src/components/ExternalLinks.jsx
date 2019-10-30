import React from 'react';
import { List } from 'antd';

export default function ExternalLinks(props) {
  const data = [
    { text: "Stacks Project", link: "https://stacks.math.columbia.edu/" },
    { text: "Shiu-Chun Wong's Seminars", link: "https://scwong-seminar.github.io/" },
    { text: "Dingxin's Home Page", link: "http://zerotal.github.io/" },
    { text: "Xuanyu's Home Page", link: "http://sourcedb.amss.cas.cn/zw/zjrck/fyjy/201709/t20170908_4856640.html" },
    { text: "Pak-Hin's Home Page", link: "http://www.math.columbia.edu/~phlee/" },
    { text: "Shuai's Home Page", link: "http://www.math.columbia.edu/~tedd2013/" },
    { text: "Remy's Home Page", link: "https://web.math.princeton.edu/~rdobben/" },
    { text: "Sam's Home Page", link: "http://mundy.net/sam/" }
  ]
  return (
    <List
      dataSource={data}
      onClick={props.closeSider}
      renderItem={item => (
        <List.Item>
          <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
        </List.Item>
      )}
    >
    </List>
  )
}
