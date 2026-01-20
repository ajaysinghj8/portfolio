'use client'

import { useEffect, useRef, memo } from 'react'

interface Planet {
  name: string
  distance: number
  size: number
  speed: number
  color: string
  angle: number
}

const SolarSystem = memo(function SolarSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const resizeTimeoutRef = useRef<NodeJS.Timeout>()
  const centerRef = useRef({ x: 0, y: 0 })
  const gradientsRef = useRef<Map<string, CanvasGradient>>(new Map())

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true })
    if (!ctx) return

    // Set canvas size with debounce
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      centerRef.current = { x: canvas.width / 2, y: canvas.height / 2 }
    }
    resizeCanvas()
    
    const handleResize = () => {
      clearTimeout(resizeTimeoutRef.current)
      resizeTimeoutRef.current = setTimeout(resizeCanvas, 150)
    }
    window.addEventListener('resize', handleResize)

    // Sun properties
    const sunRadius = 30
    const sunGlowRadius = 50

    // Planets configuration
    const planets: Planet[] = [
      {
        name: 'Mercury',
        distance: 80,
        size: 4,
        speed: 0.02,
        color: '#8C7853',
        angle: 0,
      },
      {
        name: 'Venus',
        distance: 110,
        size: 6,
        speed: 0.015,
        color: '#FFC649',
        angle: Math.PI / 3,
      },
      {
        name: 'Earth',
        distance: 150,
        size: 7,
        speed: 0.01,
        color: '#4A90E2',
        angle: Math.PI / 2,
      },
      {
        name: 'Mars',
        distance: 190,
        size: 6,
        speed: 0.008,
        color: '#CD5C5C',
        angle: Math.PI,
      },
      {
        name: 'Jupiter',
        distance: 250,
        size: 15,
        speed: 0.005,
        color: '#D8CA9D',
        angle: Math.PI * 1.5,
      },
      {
        name: 'Saturn',
        distance: 320,
        size: 12,
        speed: 0.004,
        color: '#FAD5A5',
        angle: Math.PI * 2,
      },
    ]

    // Pre-create gradients
    let frameCount = 0
    const createSunGradients = (centerX: number, centerY: number) => {
      const sunGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, sunGlowRadius
      )
      sunGradient.addColorStop(0, 'rgba(255, 200, 50, 0.8)')
      sunGradient.addColorStop(0.5, 'rgba(255, 150, 0, 0.4)')
      sunGradient.addColorStop(1, 'rgba(255, 100, 0, 0)')

      const sunCoreGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, sunRadius
      )
      sunCoreGradient.addColorStop(0, '#FFE5B4')
      sunCoreGradient.addColorStop(1, '#FFA500')

      return { sunGradient, sunCoreGradient }
    }

    // Animation loop
    const animate = () => {
      const { x: centerX, y: centerY } = centerRef.current

      // Clear with slight fade for trail effect
      ctx.fillStyle = 'rgba(10, 10, 26, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw orbits - every 5 frames to reduce calls
      if (frameCount % 5 === 0) {
        planets.forEach((planet) => {
          ctx.strokeStyle = 'rgba(99, 102, 241, 0.08)'
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.arc(centerX, centerY, planet.distance, 0, Math.PI * 2)
          ctx.stroke()
        })
      }

      // Draw sun with cached gradients
      const sunGradients = createSunGradients(centerX, centerY)
      
      ctx.fillStyle = sunGradients.sunGradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, sunGlowRadius, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = sunGradients.sunCoreGradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, sunRadius, 0, Math.PI * 2)
      ctx.fill()

      // Draw planets with simplified gradients
      planets.forEach((planet) => {
        planet.angle += planet.speed

        const x = centerX + Math.cos(planet.angle) * planet.distance
        const y = centerY + Math.sin(planet.angle) * planet.distance

        // Draw planet with simple glow
        const planetGlow = ctx.createRadialGradient(
          x, y, 0,
          x, y, planet.size * 1.8
        )
        planetGlow.addColorStop(0, planet.color)
        planetGlow.addColorStop(1, `${planet.color}00`)
        ctx.fillStyle = planetGlow
        ctx.beginPath()
        ctx.arc(x, y, planet.size * 1.8, 0, Math.PI * 2)
        ctx.fill()

        // Draw planet core
        ctx.fillStyle = planet.color
        ctx.beginPath()
        ctx.arc(x, y, planet.size, 0, Math.PI * 2)
        ctx.fill()

        // Add highlight - simplified
        if (frameCount % 2 === 0) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.25)'
          ctx.beginPath()
          ctx.arc(x - planet.size * 0.3, y - planet.size * 0.3, planet.size * 0.35, 0, Math.PI * 2)
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
      className="fixed inset-0 -z-10 opacity-40"
      style={{ pointerEvents: 'none' }}
    />
  )
})

export default SolarSystem
