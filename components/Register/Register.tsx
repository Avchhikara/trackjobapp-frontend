import Link from 'next/link';

import { Card, Col, Row, message } from 'antd';

import { RegisterForm } from './RegisterForm';

import * as urls from './../../utils/urls';

const onRegister = async ({email, password, name}) => {
    console.log(email, password, name)
    //Making a fetch request here
    const res = await fetch(urls.REGISTER_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            name
        })
    })
    const content = await res.json();
    if (res.status !== 200){
        message.error(content.message, 5);
    }
    else {
        message.success(content.message, 5);
    }
}

export const Register = () => {
  return (
      <Row justify="center" className="login-card-row">
          <Col span={8}>
            <Card title="Register Form" extra={
                <Link href="/login">
                    <a>login</a>
                </Link>
            }>
                <RegisterForm onRegister={onRegister}/>
            </Card>
          </Col>
      </Row>
  )
};