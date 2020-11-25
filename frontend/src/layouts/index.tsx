import React from 'react';
import { Avatar, Layout, BackTop, Col, Row, Input, message } from 'antd';
const { Header, Content,Footer } = Layout;
import { SearchOutlined } from '@ant-design/icons';


import Menus from './menus/index'

import logo from "@/images/logo.jpg"
import styles from './index.less'

const onSearch = () => {
  message.info({content:"功能建设中...敬请期待..." ,style: {marginTop: '20vh'}})
};


export default (props: { children: React.ReactNode; }) => {
  return(
    <Layout>
      <Header className={styles.header}>
        <Row>
          <Col span={4}>
            <Row>
              <Col>
                <Avatar src={logo} />
              </Col>
              <Col>
                <span className={styles.websiteName}>Liang Yehao</span>
              </Col>
            </Row>
          </Col>
          <Col span={8}/>
          <Col span={4}>
            <Input placeholder="站内搜索" prefix={<SearchOutlined />} onPressEnter={onSearch} />
          </Col>
          <Col span={8}>
            <Menus />
          </Col>
        </Row>
      </Header>
      <Content className={styles.content}>
        {props.children}
      </Content>
      <Footer className={styles.footer}>LYeH ©2020 Created by Liang Yehao</Footer>
      <BackTop />
    </Layout>
  )
}
