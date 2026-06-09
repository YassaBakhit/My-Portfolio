import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './LoadingScreen.css'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100
        return prev + Math.random() * 30
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="loading-content">
        <motion.div
          className="loading-logo"
          animate={{ scale: [1, 1.1, 1], rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="logo-circle">
            <div className="logo-inner">🚀</div>
          </div>
        </motion.div>

        <motion.h2
          className="loading-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Initializing Space Station
        </motion.h2>

        <div className="progress-container">
          <motion.div
            className="progress-bar"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <motion.p
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {Math.floor(progress)}%
        </motion.p>

        <motion.div
          className="loading-dots"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.div>
      </div>

      <div className="space-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: ['0vh', '100vh'],
              x: Math.sin(i) * 50,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default LoadingScreen
