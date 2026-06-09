import { useEffect, useRef } from 'react'

const CursorEffect = () => {
  const cursorRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        width: '30px',
        height: '30px',
        border: '2px solid rgba(0, 217, 255, 0.8)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
        boxShadow: '0 0 20px rgba(0, 217, 255, 0.6), inset 0 0 20px rgba(0, 217, 255, 0.2)',
        display: window.innerWidth > 768 ? 'block' : 'none',
      }}
    />
  )
}

export default CursorEffect
