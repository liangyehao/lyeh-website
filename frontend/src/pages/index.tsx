import React from 'react';
import { Card, notification, Avatar, Divider, Skeleton, Row, Col, Tag, Image} from 'antd';
import {
  GithubOutlined,
  WechatOutlined,
  QqOutlined
} from '@ant-design/icons';

import styles from './index.less';

import logo from '../images/logo.jpg';
import zfbpay from '../images/zfbpay.png';
import wxpay from '../images/wxpay.png';

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
    <div className={styles.container}>
      <Row>
        <Col span={4}/>
        <Col span={12}>
          <div className={styles.content}>
            <h1>欢迎来到我的个人网站</h1>
            <Skeleton loading={true}/>
            <Skeleton loading={true}/>
            <Skeleton loading={true}/>
            <Skeleton loading={true}/>
            <Skeleton loading={true}/>
            <Skeleton loading={true}/>
          </div>
        </Col>
        <Col span={6}>
          <Card bordered={false} className={styles.personalCard}>
            <Card.Meta
              avatar={
                <Avatar src={logo} size={60}/>
              }
              title="Liang Yehao"
              description="努力的程序猿"
            />
            <Divider>前端</Divider>
            <div>
              <Tag color="magenta">React</Tag>
              <Tag color="red">umi</Tag>
              <Tag color="volcano">Dva</Tag>
              <Tag color="orange">JQuery</Tag>
              <Tag color="gold">html</Tag>
              <Tag color="lime">css</Tag>
              <Tag color="green">ES6</Tag>
              <Tag color="cyan">javascript</Tag>
              <Tag color="blue">Ant Design</Tag>
              <Tag color="geekblue">Ant Design Mobile</Tag>
              <Tag color="purple">Redux</Tag>
            </div>
            <Divider>后端</Divider>
            <div>
              <Tag color="geekblue">Spring</Tag>
              <Tag color="red">Spring MVC</Tag>
              <Tag color="purple">Spring Boot</Tag>
              <Tag color="green">JPA</Tag>
              <Tag color="gold">Oracle</Tag>
              <Tag color="lime">MySql</Tag>
              <Tag color="orange">ES</Tag>
              <Tag color="cyan">Redis</Tag>
              <Tag color="blue">Nginx</Tag>
              <Tag color="magenta">Docker</Tag>
              <Tag color="volcano">Kafka</Tag>
            </div>
          </Card>
          <Card bordered={false} className={styles.personalCard}>
            <Divider>社交</Divider>
            <Tag icon={<GithubOutlined />} color="#24292e">
              Github
            </Tag>
            <Tag icon={<WechatOutlined />} color="#2ea44f">
              微信
            </Tag>
            <Tag icon={<QqOutlined />} color="#12b7f5">
              QQ
            </Tag>
            <Divider>感谢支持</Divider>
            <Image src={zfbpay} width={100}/>
          </Card>
        </Col>
        <Col span={2}/>
      </Row>
      <div>

      </div>
    </div>
  );
}
