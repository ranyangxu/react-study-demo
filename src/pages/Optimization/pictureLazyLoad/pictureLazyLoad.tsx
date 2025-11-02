import React, { useEffect } from 'react'
import styles from './pictureLazyLoad.module.css'
import defaultImg from '@/assets/images/defaultLazyLoad.png'

export default function PictureLazyLoad() {
  useEffect(() => {
    const observe = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          const realSrc = img.getAttribute('data-src')
          if (realSrc) {
            img.src = realSrc
            observe.unobserve(img)
          }
        }
      })
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0
    })
    document.querySelectorAll(`.${styles.lazyLoad}`).forEach(img => {
      observe.observe(img)
    })
    return () => observe.disconnect()
  }, [])

  return (
    <div className={styles.pictureLazyLoad}>
      {Array.from({ length: 100 }).map((_, i) => (
        <img
          key={i}
          className={styles.lazyLoad}
          src={defaultImg}
          data-src={`https://picsum.photos/300/200?random=${i}`}
          alt=""
        />
      ))}
    </div>
  )
}