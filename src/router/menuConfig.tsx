import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons'

export const menuItems = [
  {
    key: 'github',
    icon: <UserOutlined />,
    label: 'Github',
    path: '/github'
  },
  {
    key: 'hello',
    icon: <VideoCameraOutlined />,
    label: 'Hello',
    path: '/hello'
  },
  {
    key: 'optimization',
    icon: <UploadOutlined />,
    label: '优化模块',
    children: [
      {
        key: 'pictureLazyLoad',
        label: '图片懒加载',
        path: '/optimization/pictureLazyLoad'
      }
    ]
  }
]