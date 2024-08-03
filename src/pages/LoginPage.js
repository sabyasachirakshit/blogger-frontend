import React, { useState, useContext } from 'react';
import { Form, Input, Button, notification } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Get login function from context

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:7000/auth/login', values);
      notification.success({ message: response.data.message });
      // Save username to context and local storage
      login(values.email);
      // Redirect to homepage upon successful login
      navigate('/');
    } catch (error) {
      notification.error({ message: error.response.data.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: '2rem' }}>
      <h2>Login</h2>
      <Form name="login" onFinish={onFinish}>
        <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
