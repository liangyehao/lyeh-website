import React from 'react';
import { Avatar,Card } from 'antd';
import styles from './index.less';

import logo from "../images/logo.jpg"

export default () => {
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
