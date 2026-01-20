'use client'

import { useEffect, useRef } from 'react'

interface Planet {
  name: string
  distance: number
  size: number
  speed: number
  color: string
  angle: number
}

export default function SolarSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Center of the solar system
    let centerX = canvas.width / 2
    let centerY = canvas.height / 2

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

    // Animation loop
    const animate = () => {
      // Update center position (can be dynamic)
      centerX = canvas.width / 2
      centerY = canvas.height / 2

      // Clear with slight fade for trail effect
      ctx.fillStyle = 'rgba(10, 10, 26, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw orbits (subtle)
      planets.forEach((planet) => {
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(centerX, centerY, planet.distance, 0, Math.PI * 2)
        ctx.stroke()
      })

      // Draw sun with glow
      const sunGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        sunGlowRadius
      )
      sunGradient.addColorStop(0, 'rgba(255, 200, 50, 0.8)')
      sunGradient.addColorStop(0.5, 'rgba(255, 150, 0, 0.4)')
      sunGradient.addColorStop(1, 'rgba(255, 100, 0, 0)')
      ctx.fillStyle = sunGradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, sunGlowRadius, 0, Math.PI * 2)
      ctx.fill()

      // Draw sun core
      const sunCoreGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        sunRadius
      )
      sunCoreGradient.addColorStop(0, '#FFE5B4')
      sunCoreGradient.addColorStop(1, '#FFA500')
      ctx.fillStyle = sunCoreGradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, sunRadius, 0, Math.PI * 2)
      ctx.fill()

      // Draw planets
      planets.forEach((planet) => {
        // Update angle
        planet.angle += planet.speed

        // Calculate position
        const x = centerX + Math.cos(planet.angle) * planet.distance
        const y = centerY + Math.sin(planet.angle) * planet.distance

        // Draw planet with glow
        const planetGlow = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          planet.size * 2
        )
        planetGlow.addColorStop(0, planet.color)
        planetGlow.addColorStop(0.5, `${planet.color}CC`)
        planetGlow.addColorStop(1, `${planet.color}00`)
        ctx.fillStyle = planetGlow
        ctx.beginPath()
        ctx.arc(x, y, planet.size * 2, 0, Math.PI * 2)
        ctx.fill()

        // Draw planet core
        ctx.fillStyle = planet.color
        ctx.beginPath()
        ctx.arc(x, y, planet.size, 0, Math.PI * 2)
        ctx.fill()

        // Add highlight
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
        ctx.beginPath()
        ctx.arc(
          x - planet.size * 0.3,
          y - planet.size * 0.3,
          planet.size * 0.4,
          0,
          Math.PI * 2
        )
        ctx.fill()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
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
}
