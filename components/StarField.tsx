'use client'

import { useEffect, useRef, memo } from 'react'

interface Star {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  brightness: number
}

const StarField = memo(function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const resizeTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true })
    if (!ctx) return

    // Set canvas size with debounce
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    
    const handleResize = () => {
      clearTimeout(resizeTimeoutRef.current)
      resizeTimeoutRef.current = setTimeout(resizeCanvas, 150)
    }
    window.addEventListener('resize', handleResize)

    // Create stars
    const stars: Star[] = []
    const numStars = 150 // Reduced from 200

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2,
        vx: (Math.random() - 0.5) * 0.3, // Reduced speed
        vy: (Math.random() - 0.5) * 0.3,
        brightness: Math.random(),
      })
    }

    // Animation loop - skip gradient creation
    let frameCount = 0
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 30, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        // Update position
        star.x += star.vx
        star.y += star.vy

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

        // Draw star only
        const alpha = 0.5 + star.brightness * 0.5
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.fill()

        // Add glow effect every 3 frames to reduce overhead
        if (frameCount % 3 === 0 && star.brightness > 0.6) {
          const gradient = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.radius * 2.5
          )
          gradient.addColorStop(0, `rgba(200, 200, 255, ${alpha * 0.4})`)
          gradient.addColorStop(1, 'rgba(200, 200, 255, 0)')
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.radius * 2.5, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      frameCount++
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      clearTimeout(resizeTimeoutRef.current)
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a1a 100%)' }}
    />
  )
})

export default StarField
