import React from 'react';
import { Button } from 'antd';
import styles from './index.less';

import logo from "../images/logo.jpg"

export default () => {
  return (
    <div>
      <h1 className={styles.title}>
        欢迎来到梁业浩的个人网站
      </h1>
      <div>
        <Button type={'link'} href={"https://github.com/liangyehao"} target="_blank" rel="noopener noreferrer">
          <img src={logo} className={styles.img} alt={logo}/>
        </Button>
      </div>
    </div>
  );
}
