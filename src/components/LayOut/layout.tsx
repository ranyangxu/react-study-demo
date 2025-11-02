import React, { use, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SwapLeftOutlined,
  SettingOutlined,
  EditOutlined
} from '@ant-design/icons'
import { Avatar, Button, Dropdown, Layout, Menu, theme } from 'antd'
import { menuItems } from '@/router/menuConfig'
import logo from '@/assets/images/react.png'
import avatar from '@/assets/images/avatar.jpg'
import styles from './layout.module.css'

const { Header, Sider, Content } = Layout

const LayOut: React.FC = () => {
  // 下拉菜单项
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <a className={styles['dropdown-label']}>个人设置</a>,
      icon: <EditOutlined />
    },
    {
      key: '2',
      label: <a className={styles['dropdown-label']}>系统设置</a>,
      icon: <SettingOutlined />
    },
    {
      type: 'divider'
    },
    {
      key: '3',
      label: <a className={styles['dropdown-label']}>退出登录</a>,
      icon: <SwapLeftOutlined />
    }
  ]

  // 左侧菜单栏
  const pathMap = new Map()
  const generateMenu = items => {
    return items.map(item => {
      if (item.children) {
        return {
          key: item.key,
          icon: item.icon,
          label: item.label,
          path: item.path,
          children: generateMenu(item.children)
        }
      }
      if (item.path) {
        pathMap.set(item.key, item.path)
      }
      return {
        key: item.key,
        icon: item.icon,
        label: item.label,
        path: item.path
      }
    })
  }
  const leftMenuList = generateMenu(menuItems)

  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  const navigate = useNavigate()
  return (
    <Layout style={{ minHeight: '100vh', height: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={styles['ant-layout-sider']}>
        <div className={styles['demo-logo-vertical']}>
          <img src={logo} alt="LOGO" style={{ width: 50 }} />
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={({ key }) => {
            const path = pathMap.get(key)
            if (path) {
              navigate(path)
            }
          }}
          items={leftMenuList}
        />
      </Sider>
      <Layout>
        <Header
          className={styles['site-layout-header']}
          style={{ padding: 0, background: colorBgContainer }}>
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
          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <Avatar size={64} src={avatar} style={{ width: 36, height: 36, marginRight: 10 }} />
          </Dropdown>
        </Header>
        <Content
          style={{
            padding: '24px 0 24px 24px',
            height: 'calc(100vh - 74px)', 
            overflow: 'auto',
            background: colorBgContainer
          }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayOut
