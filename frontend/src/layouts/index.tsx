import React from 'react';
import { Avatar, Layout,BackTop } from 'antd';
const { Header, Content,Footer } = Layout;
import Menus from './menus/index'

import logo from "@/images/logo.jpg"
import styles from './index.less'


export default (props: { children: React.ReactNode; }) => {
  return(
    <Layout>
      <Header className={styles.header}>
        <a href={"https://github.com/liangyehao"} target="_blank" rel="noopener noreferrer">
          <Avatar
            src={logo} />
        </a>
        <Menus/>
      </Header>
      <Content className={styles.content}>
        {props.children}
      </Content>
      <Footer className={styles.footer}>LYeH ©2020 Created by Liang YeHao</Footer>
      <BackTop />
    </Layout>
  )
}
