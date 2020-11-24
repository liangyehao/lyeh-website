import React from 'react';
import { Menu, Button, message } from 'antd';
import { MailOutlined, AppstoreOutlined, HomeOutlined, ReadOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

import styles from './index.less';


const linkButton = (text: string, linkTo: string) => {
  return (
    <Button type="link" href={linkTo} target={'_blank'}>
      {text}
    </Button>
  );
};

const showInfo = (info: string) => {
  message.info(info);
};

const infoButton = (text: string, info: string) => {

  return (
    <Button type="text" onClick={() => showInfo(info)}>
      {text}
    </Button>
  );
};

export default () => {
  return (
    <div className={styles.container}>
      <Menu selectedKeys={['home']} mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined/>}>
          主页
        </Menu.Item>
        <SubMenu key="repository" icon={<AppstoreOutlined/>} title={'我的仓库'}>
          <Menu.Item key="github">
            {linkButton('GitHub', 'https://github.com/liangyehao')}
          </Menu.Item>
          <Menu.Item key="gitee">
            {linkButton('Gitee', 'https://gitee.com/liangyehao')}
          </Menu.Item>
        </SubMenu>
        <SubMenu key="blog" icon={<ReadOutlined/>} title="我的博客">
          <Menu.Item key="jianshu">
            {linkButton('简书', 'https://www.jianshu.com/u/bc52a872e5c4')}
          </Menu.Item>
          <Menu.Item key="csdn">
            {linkButton('CSDN', 'https://i.csdn.net/#/uc/profile?spm=1000.2115.3001.5111')}
          </Menu.Item>
        </SubMenu>
        <SubMenu key="aboutMe" icon={<MailOutlined/>} title="关于我">
          <Menu.ItemGroup title="contact">
            <Menu.Item key="qq">
              {infoButton('QQ', 'QQ号：1094311509')}
            </Menu.Item>
            <Menu.Item key="wechat">
              {infoButton('微信', '微信号：1094311509')}
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="phone">
            <Menu.Item key="phone">
              {infoButton('手机', '手机号：13119583082')}
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  );
}
