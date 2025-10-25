import { useRoutes } from 'react-router-dom'
import LayOut from '@/components/LayOut/layout'
import Github from '@/components/Github/github'
import Hello from '@/components/Hello/hello'

const routes = [
  {
    path: '/',
    element: <LayOut />,
    children: [
      { path: 'github', element: <Github /> },
      { path: 'hello', element: <Hello /> }
    ]
  }
]

export default function Router() {
  return useRoutes(routes)
}
