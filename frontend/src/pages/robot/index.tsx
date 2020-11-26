import React, { Component, useState } from 'react';
import { Input,Alert,Divider } from "antd"

const {Search} = Input;

import request from 'umi-request';


class Index extends Component {

  constructor(props: {}) {
    super(props);
    this.state={
      alertComponent:null
    };
  }

  componentDidMount() {
    // this.chat("高州天气");
  }

  chat = (msg:string) => {
    const that = this;
    request('/tuling/openapi/api/v2', {
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
        that.setState({alertComponent:that.build(text)})
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  build = (text:string) => {
    return(
      <Alert
        message={text}
        type="info"
        // closable={true}
        style={{ width: 300,margin:'auto' }}
        onClose={this.close()}
        closable={true}
        showIcon
      />
    )
  };

  close = () => {
    this.setState({alertComponent:null})
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
          {this.state.alertComponent}
        </div>
      </div>
    );
  }

}

export default Index;
