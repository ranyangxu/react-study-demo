import React, { useRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './waterMark.module.css'

interface WaterMarkProps {
  content?: string
  color?: string
  opacity?: number
  rotate?: number
  maxWidth?: number
  margin?: number
}

export default function WaterMark({
  content,
  color = 'rgba(0,0,0,0.5)',
  opacity = 0.5,
  rotate = -21,
  maxWidth = 100,
  margin = 20
}: WaterMarkProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const userName = useSelector(state => state.user?.userName)
  const watermarkContent = content || userName || '水印'
  const [rows, setRows] = useState(0)
  const [cols, setCols] = useState(0)
  const [refreshKey, setRefreshKey] = useState(0) 

  const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      console.log(mutation)
      if (mutation.type === 'childList' && mutation.removedNodes.length > 0) {
        setRefreshKey(prev => prev + 1)
      } else if (mutation.type === 'attributes') {
       setRefreshKey(prev => prev + 1)
      } else if (mutation.type === 'characterData') {
        setRefreshKey(prev => prev + 1)
      }
    }
  }
  const config = { attributes: true, childList: true, subtree: true, characterData: true }

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current
      const col = Math.max(1, Math.floor(offsetWidth / (maxWidth + margin)))
      const row = Math.max(1, Math.floor(offsetHeight / (maxWidth + margin)))
      setCols(col)
      setRows(row)
      const observer = new MutationObserver(callback)
      observer.observe(containerRef.current, config)

      return () => {
        observer.disconnect()
      }
    }
  }, [content, maxWidth, margin, refreshKey])

  return (
    <div ref={containerRef} className={styles.watermarkBox}>
      <div className={styles.watermarkContent}>
        {Array.from({ length: rows }).map((_, rowIdx) =>
          Array.from({ length: cols }).map((_, colIdx) => (
            <span
              key={`${rowIdx}-${colIdx}-${refreshKey}`}
              className={styles.watermarkText}
              style={{
                color,
                opacity,
                maxWidth,
                marginBottom: margin,
                left: `${colIdx * (maxWidth + margin)}px`,
                top: `${rowIdx * (maxWidth + margin)}px`,
                transform: `rotate(${rotate}deg)`
              }}>
              {watermarkContent}
            </span>
          ))
        )}
      </div>
      <div className={styles.realContent}></div>
    </div>
  )
}
