import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import loginBg from '@/assets/images/loginBg.png'
import styles from './login.module.css'

export default function Login() {
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage()
  const onFinish = values => {
    const { username, password } = values
    setTimeout(() => {
      localStorage.setItem('username', username)
      messageApi.open({
        type: 'success',
        content: '登录成功！正在跳转首页',
        duration: 1,
        onClose: () => {
          navigate('/home')
        }
      })
    }, 500)
  }

  return (
    <div className={styles['login-container']}>
      {contextHolder}
      <div className={styles['left-box']}>
        <img src={loginBg} />
      </div>
      <div className={styles['right-box']}>
        <div className={styles['form-container']}>
          <h1 className={styles['form-title']}>react系统登录</h1>
          <p className={styles['form-desc']}>a simple react demo</p>
          <Form
            className={styles['login-form']}
            name="basic"
            requiredMark={false}
            layout="vertical"
            autoComplete="off"
            onFinish={onFinish}>
            <Form.Item<FieldType>
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}>
              <Input
                prefix={<UserOutlined />}
                placeholder="请输入用户名（随意）"
                className={styles['login-input']}
              />
            </Form.Item>

            <Form.Item<FieldType>
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}>
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="请输入密码（随意）"
                className={styles['login-input']}
              />
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit" className={styles['login-btn']}>
                登录
              </Button>
            </Form.Item>
          </Form>
          <p className={styles['form-footer']}>© 2025 XuRanYang study react.</p>
        </div>
      </div>
    </div>
  )
}
