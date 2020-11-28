import React from 'react';
import { Avatar, Layout, BackTop, Col, Row, Input, message,Button } from 'antd';
const { Header, Content,Footer } = Layout;
import { SearchOutlined } from '@ant-design/icons';

import {goTo} from '@/common/utils';


import Menus from './menus/index'

import logo from "@/images/me.png"
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
              <Col xs={24} sm={24} md={24} lg={24} xl={4} >
                <Button type={'link'} onClick={()=>goTo("/")}>
                  <Avatar src={logo} />
                </Button>
              </Col>
              <Col xs={0} sm={0} md={0} lg={0} xl={20}>
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
