import React from 'react';
import { Avatar,notification } from 'antd';
import styles from './index.less';

import logo from "../images/logo.jpg"

const openNotification = () => {
  notification.info({
    message: '欢迎来到梁业浩的个人网站',
    placement: 'bottomRight',
    description:
      '在这里，我会分享我关注的技术、学习的心得、遇到的问题O(∩_∩)O',
  });
};

export default () => {
  openNotification();
  return (
    <div>
      <h1 className={styles.title}>
        欢迎来到梁业浩的个人网站
      </h1>
      <div>
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          src={logo} />
      </div>
      <div>

      </div>
    </div>
  );
}
