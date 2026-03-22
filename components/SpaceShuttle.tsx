'use client'

import { useEffect, useRef, memo } from 'react'

const SpaceShuttle = memo(function SpaceShuttle() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const positionRef = useRef({ x: -200, y: 0 })
  const thrusterFrameRef = useRef(0)
  const resizeTimeoutRef = useRef<NodeJS.Timeout>()
  const fuselageGradientRef = useRef<CanvasGradient | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true })
    if (!ctx) return

    // Set canvas size with debounce
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      positionRef.current.y = canvas.height * 0.3
    }
    resizeCanvas()
    
    const handleResize = () => {
      clearTimeout(resizeTimeoutRef.current)
      resizeTimeoutRef.current = setTimeout(resizeCanvas, 150)
    }
    window.addEventListener('resize', handleResize)

    // Initial position
    positionRef.current.y = canvas.height * 0.3

    // Animation loop
    const animate = () => {
      const { x, y } = positionRef.current

      // Clear canvas (transparent so it doesn't interfere)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update position (move from right to left, opposite to thrusters)
      positionRef.current.x -= 1.5
      if (positionRef.current.x < -300) {
        positionRef.current.x = canvas.width + 300
        // Randomize Y position for variety
        positionRef.current.y = canvas.height * (0.2 + Math.random() * 0.6)
      }

      // Update thruster animation
      thrusterFrameRef.current += 0.3

      const shuttleX = positionRef.current.x
      const shuttleY = positionRef.current.y
      const shuttleSize = 120

      // Save context for rotation
      ctx.save()
      
      // Translate to shuttle position and rotate -90 degrees
      ctx.translate(shuttleX, shuttleY)
      ctx.rotate(-Math.PI / 2) // -90 degrees
      
      // Draw thrusters (behind shuttle) - now relative to origin
      drawThrusters(ctx, 0, 0, shuttleSize, thrusterFrameRef.current)

      // Draw space shuttle - now relative to origin
      drawShuttle(ctx, 0, 0, shuttleSize)
      
      // Restore context
      ctx.restore()

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

  // Pre-compute gradient colors
  const drawThrusters = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    frame: number
  ) => {
    const thrusterLength = size * 1.2
    const thrusterWidth = size * 0.12
    const thrusterY = y + size * 0.75
    const mainFlameLength = thrusterLength * (0.8 + Math.sin(frame) * 0.2)
    
    // Main engine - simplified with fewer gradient stops
    const outerGradient = ctx.createRadialGradient(
      x, thrusterY, 0,
      x, thrusterY + mainFlameLength * 0.5, mainFlameLength * 0.6
    )
    outerGradient.addColorStop(0, 'rgba(150, 200, 255, 0.9)')
    outerGradient.addColorStop(0.4, 'rgba(255, 200, 100, 0.5)')
    outerGradient.addColorStop(1, 'rgba(255, 100, 0, 0)')

    ctx.fillStyle = outerGradient
    ctx.beginPath()
    ctx.ellipse(x, thrusterY + mainFlameLength * 0.4, thrusterWidth * 1.2, mainFlameLength * 0.5, 0, 0, Math.PI * 2)
    ctx.fill()

    // Inner core - simplified
    const innerGradient = ctx.createRadialGradient(
      x, thrusterY, 0,
      x, thrusterY + mainFlameLength * 0.3, mainFlameLength * 0.25
    )
    innerGradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
    innerGradient.addColorStop(0.6, 'rgba(150, 180, 255, 0.5)')
    innerGradient.addColorStop(1, 'rgba(100, 150, 255, 0)')

    ctx.fillStyle = innerGradient
    ctx.beginPath()
    ctx.ellipse(x, thrusterY + mainFlameLength * 0.15, thrusterWidth * 0.5, mainFlameLength * 0.25, 0, 0, Math.PI * 2)
    ctx.fill()

    // OMS thrusters - simplified
    for (let i = 0; i < 2; i++) {
      const offsetX = (i - 0.5) * size * 0.25
      const omsFlameLength = thrusterLength * 0.4 * (0.7 + Math.sin(frame + i * 2) * 0.3)

      const omsGradient = ctx.createRadialGradient(
        x + offsetX, thrusterY, 0,
        x + offsetX, thrusterY + omsFlameLength * 0.4, omsFlameLength * 0.5
      )
      omsGradient.addColorStop(0, 'rgba(200, 220, 255, 0.8)')
      omsGradient.addColorStop(0.7, 'rgba(255, 200, 100, 0.3)')
      omsGradient.addColorStop(1, 'rgba(255, 150, 50, 0)')

      ctx.fillStyle = omsGradient
      ctx.beginPath()
      ctx.ellipse(x + offsetX, thrusterY + omsFlameLength * 0.3, thrusterWidth * 0.6, omsFlameLength * 0.4, 0, 0, Math.PI * 2)
      ctx.fill()
    }

    // Reduced particles for performance
    for (let j = 0; j < 4; j++) {
      const particleX = x + (Math.random() - 0.5) * thrusterWidth * 2
      const particleY = thrusterY + mainFlameLength + Math.random() * 30
      const particleSize = Math.random() * 1.5 + 0.5

      ctx.fillStyle = `rgba(150, 200, 255, ${0.4 + Math.random() * 0.4})`
      ctx.beginPath()
      ctx.arc(particleX, particleY, particleSize, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  // Function to draw professional space shuttle - simplified
  const drawShuttle = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number
  ) => {
    ctx.save()

    // Main fuselage — gradient is always at (0,0) in local space, so cache it
    if (!fuselageGradientRef.current) {
      const g = ctx.createLinearGradient(x, y, x, y + size * 0.7)
      g.addColorStop(0, '#FFFFFF')
      g.addColorStop(0.5, '#E8E8E8')
      g.addColorStop(1, '#B8B8B8')
      fuselageGradientRef.current = g
    }

    ctx.fillStyle = fuselageGradientRef.current
    ctx.beginPath()
    const bodyWidth = size * 0.28
    const bodyStartY = y + size * 0.12
    const bodyEndY = y + size * 0.7

    ctx.moveTo(x, y)
    ctx.lineTo(x - bodyWidth * 0.3, bodyStartY)
    ctx.lineTo(x - bodyWidth * 0.5, bodyEndY)
    ctx.lineTo(x + bodyWidth * 0.5, bodyEndY)
    ctx.lineTo(x + bodyWidth * 0.3, bodyStartY)
    ctx.closePath()
    ctx.fill()

    // Cockpit - simplified
    ctx.fillStyle = '#0a0a1a'
    ctx.beginPath()
    ctx.arc(x, y + size * 0.08, size * 0.06, 0, Math.PI * 2)
    ctx.fill()

    // Wings - simplified path
    ctx.fillStyle = '#E0E0E0'
    ctx.beginPath()
    ctx.moveTo(x - bodyWidth * 0.5, y + size * 0.4)
    ctx.lineTo(x - size * 0.4, y + size * 0.65)
    ctx.lineTo(x - bodyWidth * 0.4, y + size * 0.65)
    ctx.closePath()
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(x + bodyWidth * 0.5, y + size * 0.4)
    ctx.lineTo(x + size * 0.4, y + size * 0.65)
    ctx.lineTo(x + bodyWidth * 0.4, y + size * 0.65)
    ctx.closePath()
    ctx.fill()

    // Vertical stabilizer
    ctx.fillStyle = '#D0D0D0'
    ctx.beginPath()
    ctx.moveTo(x, y + size * 0.7)
    ctx.lineTo(x - size * 0.08, y + size * 0.85)
    ctx.lineTo(x + size * 0.08, y + size * 0.85)
    ctx.closePath()
    ctx.fill()

    // Body panel lines - minimal
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(x - bodyWidth * 0.25, y + size * 0.2)
    ctx.lineTo(x - bodyWidth * 0.25, y + size * 0.7)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x + bodyWidth * 0.25, y + size * 0.2)
    ctx.lineTo(x + bodyWidth * 0.25, y + size * 0.7)
    ctx.stroke()

    ctx.restore()
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  )
})

export default SpaceShuttle
