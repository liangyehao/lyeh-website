import React from 'react';
import { Layout } from 'antd';
const { Header, Content,Footer } = Layout;
import Menus from './menus/index'

import logo from "@/images/logo.jpg"
import styles from './index.less'


export default (props: { children: React.ReactNode; }) => {
  return(
    <Layout>
      <Header className={styles.header}>
        <a href={"https://github.com/liangyehao"} target="_blank" rel="noopener noreferrer">
          <div className={styles.logo} >
            <img className={styles.logoImg} src={logo} alt={logo}/>
          </div>
        </a>
        <Menus/>
      </Header>
      <Content className={styles.content}>
        {props.children}
      </Content>
      <Footer className={styles.footer}>LYeH ©2020 Created by Liang YeHao</Footer>
    </Layout>
  )
}
