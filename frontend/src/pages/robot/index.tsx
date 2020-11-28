import React, { Component, useState } from 'react';
import { Input,Alert,Divider,Button } from "antd"

const {Search} = Input;

import request from 'umi-request';

import {goTo} from '@/common/utils';
import config from '@/config/config';


class Index extends Component {

  constructor(props: {}) {
    super(props);
    this.state={
      text:'随便问我点什么吧...'
    };
  }

  componentDidMount() {
    // this.chat("高州天气");
    console.log(config.backendUrl)
  }

  chat = (msg:string) => {
    const that = this;
    request(config.backendUrl, {
      method: 'post',
      data: {
        "reqType":0,
        "perception": {
          "inputText": {
            "text": msg
          }
        },
        "userInfo": {
          "apiKey": "c1fd05473b5b4dea86a315e041e9b732",
          "userId": "599310"
        }
      },
    })
      .then(function(response) {
        console.log(response);
        const {results} = response;
        const {values:{text}} = results[0];
        that.setState({text})
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render(){
    return (
      <div style={{marginTop:'20vh'}}>
        <Divider>聊天机器人，欢迎来撩~</Divider>
        <Search
          placeholder="例如：广州天气"
          // allowClear
          onSearch={this.chat}
          style={{ width: 300, margin: '10px 10px' }}
          enterButton
        />
        <div style={{textAlign:'center'}}>
          <Alert
            message={this.state.text}
            type="info"
            // closable={true}
            style={{ width: 300,margin:'auto' }}
            onClose={close}
            // closable={true}
            showIcon
          />
        </div>
      </div>
    );
  }

}

export default Index;
