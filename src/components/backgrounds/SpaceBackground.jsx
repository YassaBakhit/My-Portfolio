import { useEffect, useRef } from 'react'
import './SpaceBackground.css'

const SpaceBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationId

    // Star particle class
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.z = Math.random() * 1000
        this.radius = Math.random() * 1.5
        this.opacity = Math.random() * 0.7 + 0.3
      }

      draw() {
        const x = (this.x - canvas.width / 2) * (500 / this.z) + canvas.width / 2
        const y = (this.y - canvas.height / 2) * (500 / this.z) + canvas.height / 2
        const size = (this.radius * 500) / this.z

        ctx.fillStyle = `rgba(0, 217, 255, ${this.opacity * (500 / this.z)})`
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      update() {
        this.z -= 2
        if (this.z <= 0) {
          this.z = 1000
        }
      }
    }

    const stars = Array.from({ length: 200 }, () => new Star())

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 8, 17, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        star.update()
        star.draw()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="space-background" />
}

export default SpaceBackground
