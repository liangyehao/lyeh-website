import React from 'react';
import { Avatar, Layout, BackTop, Col, Row } from 'antd';
const { Header, Content,Footer } = Layout;
import Menus from './menus/index'

import logo from "@/images/logo.jpg"
import styles from './index.less'


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
          <Col span={12}/>
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
