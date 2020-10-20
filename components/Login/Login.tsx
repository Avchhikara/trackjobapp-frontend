import Router from 'next/router';
import Link from 'next/link';
import Cookies from 'js-cookie'

import { Card, Col, Row, message } from 'antd';

import { LoginForm } from './LoginForm';

import * as urls from './../../utils/urls';

const onLogin = async ({email, password}) => {
    console.log(email, password)
    //Making a fetch request here
    const res = await fetch(urls.LOGIN_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    const content = await res.json();
    if (res.status !== 200){
        message.error(content.message, 5);
    }
    else {
        Cookies.set("token", content.token);
        message.success("Logging you in! Please wait");
        Router.push('/dashboard');
    }
}

export const Login = () => {
  return (
      <Row justify="center" className="login-card-row">
          <Col span={8}>
            <Card title="Login Form" extra={
                <Link href="/register">
                    <a>register</a>
                </Link>
            }>
                <LoginForm onLogin={onLogin}/>
            </Card>
          </Col>
      </Row>
  )
};