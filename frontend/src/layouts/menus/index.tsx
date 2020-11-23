import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined,HomeOutlined,ReadOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

import styles from './index.less'

export default () => {
  return(
    <div className={styles.container}>
      <Menu selectedKeys={['home']} mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          梁业浩的主页
        </Menu.Item>
        <SubMenu key="repository" icon={<AppstoreOutlined />} title="我的仓库">
          <Menu.Item key="github">GitHub</Menu.Item>
          <Menu.Item key="gitee">Gitee</Menu.Item>
        </SubMenu>
        <SubMenu key="blog" icon={<ReadOutlined />} title="我的博客">
          <Menu.Item key="jianshu">简书</Menu.Item>
          <Menu.Item key="csdn">CSDN</Menu.Item>
        </SubMenu>
        <SubMenu key="aboutMe" icon={<MailOutlined />} title="关于我">
          <Menu.ItemGroup title="contact">
            <Menu.Item key="qq">QQ</Menu.Item>
            <Menu.Item key="wechat">微信</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="phone">
            <Menu.Item key="phone">手机</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  )
}
