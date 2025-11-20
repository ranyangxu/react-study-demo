import { redirect, useRoutes } from 'react-router-dom'
import LayOut from '@/components/LayOut/layout'
import Github from '@/components/Github/github'
import Hello from '@/components/Hello/hello'
import Login from '@/pages/Login/login'
import Home  from '@/pages/Home/home'
import NotFound from '@/pages/ErrorPage/notFound'
import PictureLazyLoad from '@/pages/Optimization/pictureLazyLoad/pictureLazyLoad'
import WaterMark from '@/pages/Components/wateMark/waterMark'

const routes = [
  {
    path: '/',
    redirect: '/home',
    element: <LayOut />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'github', element: <Github /> },
      { path: 'hello', element: <Hello /> },
      {
        path: 'optimization',
        children: [
          {
            path: 'pictureLazyLoad',
            element: <PictureLazyLoad />
          }
        ]
      },
      {
        path: 'components',
        children: [
          {
            path: 'waterMark',
            element: <WaterMark />
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default function Router() {
  return useRoutes(routes)
}
