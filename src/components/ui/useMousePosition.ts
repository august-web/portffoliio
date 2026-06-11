import { useState, useEffect, useRef } from 'react'

export function useMousePosition() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 })
  const ticking = useRef(false)

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setPos({
            x: e.clientX / window.innerWidth,
            y: e.clientY / window.innerHeight,
          })
          ticking.current = false
        })
        ticking.current = true
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return pos
}
