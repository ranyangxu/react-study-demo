import React, { use, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'
import logo from '@/assets/react.png'
import './layout.css'

const { Header, Sider, Content } = Layout

const LayOut: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  const navigate = useNavigate()
  return (
    <Layout style={{ minHeight: '100vh', height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
          <img src={logo} alt="LOGO" style={{ width: 50 }} />
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={({ key }) => {
            if (key === '1') navigate('/github')
            if (key === '2') navigate('/hello')
          }}
          items={[
            { key: '1', icon: <UserOutlined />, label: 'Github' },
            { key: '2', icon: <VideoCameraOutlined />, label: 'Hello' }
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64
            }}
          />
        </Header>
        <Content
          style={{
            margin: '10px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer
          }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayOut
