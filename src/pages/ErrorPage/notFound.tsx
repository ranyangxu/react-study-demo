import React from 'react'
import { Button } from 'antd'
import notFound from '@/assets/images/404NotFound.png'
import styles from './notFound.module.css'

export default function NotFound() {
  return (
    <div className={styles['container']}>
        <img src={notFound} alt=""  className={styles['imgNotFound']} />
    </div>
  )
}
