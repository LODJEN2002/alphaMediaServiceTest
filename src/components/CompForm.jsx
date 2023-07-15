import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, } from 'antd';
import api from '../utils/api';

const CompForm = (props) => {
    const { setLoggedIn } = props
    const [errorMessage, setErrorMessage] = useState(false)
    const onFinish = (values) => {
        const { username, password, remember } = values;

        api.login(username, password)
            .then((res) => {
                if (res.token) {
                    setLoggedIn(true)
                    setErrorMessage(false)
                    if (remember) {
                        localStorage.setItem('token', res.token)
                    }
                }
            })
            .catch(() => { setErrorMessage(true) })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form
                name="basic"
                className='Form'
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="yes"
            >
                {errorMessage ? (<p
                    className='Form__error-message'
                >
                    Неверный логин или пароль
                </p>) : ''}

                <Form.Item
                    label="Логин"
                    name="username"
                    rules={[{ required: true, message: 'Пожалуйста, заполните поле логин' }]}//ru mb
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Пожалуйста, заполните поле пароль' }]}//ru mb
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Запомни меня</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                    <Button type="primary" size='large' block htmlType="submit">
                        Вход
                    </Button>
                </Form.Item>
            </Form>

        </div>
    );
};

export default CompForm;