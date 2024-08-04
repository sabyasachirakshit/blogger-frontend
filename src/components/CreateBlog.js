import React, { useState, useContext } from 'react';
import { Form, Input, Button, notification } from 'antd';
import axios from 'axios';
import { AuthContext } from '../auth/AuthProvider';

const { TextArea } = Input;

const CreateBlog = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext); // Get the logged-in user from context

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:7000/blog/create-blog', {
        ...values,
        author: user,
      });
      notification.success({ message: 'Blog post created successfully!' });
    } catch (error) {
        console.log("This is error:",error)
      notification.error({ message: 'Failed to create blog post. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: '2rem' }}>
      <h2>Create Blog Post</h2>
      <Form name="create-blog" onFinish={onFinish}>
        <Form.Item
          name="title"
          rules={[{ required: true, message: 'Please input the title!' }]}
        >
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item
          name="content"
          rules={[{ required: true, message: 'Please input the content!' }]}
        >
          <TextArea rows={4} placeholder="Content" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateBlog;
