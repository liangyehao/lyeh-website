import React, { useState } from 'react';
import { Input, Alert, Divider, Button } from 'antd';

const { Search } = Input;

import request from 'umi-request';

import config from '@/config/config';


const robot = (props: any) => {
  const [text,setText] = useState('随便问点什么吧...');
  function chat(value: string): void {
    request(config.backendUrl, {
      method: 'post',
      data: {
        'reqType': 0,
        'perception': {
          'inputText': {
            'text': value,
          },
        },
        'userInfo': {
          'apiKey': 'c1fd05473b5b4dea86a315e041e9b732',
          'userId': '599310',
        },
      },
    })
      .then(function(response) {
        // console.log(response);
        const { results } = response;
        const { values: { text } } = results[0];
        setText(text);
      })
      .catch(function(error) {
        setText("出现异常啦，请联系网站开发者"+error)
        console.log(error);
      });
  }


  return (
    <div style={{ marginTop: '20vh' }}>
      <Divider>聊天机器人，欢迎来撩~</Divider>
      <Search
        placeholder="例如：广州天气"
        // allowClear
        onSearch={(value) => {
          chat(value);
        }}
        style={{ width: 300, margin: '10px 10px' }}
        enterButton
      />
      <div style={{ textAlign: 'center' }}>
        <Alert
          message={text}
          type="info"
          // closable={true}
          style={{ width: 300, margin: 'auto' }}
          showIcon
        />
      </div>
    </div>
  );
};

export default robot;
