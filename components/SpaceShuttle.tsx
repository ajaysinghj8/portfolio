'use client'

import { useEffect, useRef } from 'react'

export default function SpaceShuttle() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const positionRef = useRef({ x: -200, y: 0 })
  const thrusterFrameRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Reset position when resizing
      positionRef.current.y = canvas.height * 0.3
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

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
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Function to draw animated thrusters
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

    // Main engine (center)
    const mainFlameLength = thrusterLength * (0.8 + Math.sin(frame) * 0.2)
    
    // Outer flame (blue/white - realistic rocket exhaust)
    const outerGradient = ctx.createRadialGradient(
      x,
      thrusterY,
      0,
      x,
      thrusterY + mainFlameLength * 0.5,
      mainFlameLength * 0.6
    )
    outerGradient.addColorStop(0, 'rgba(150, 200, 255, 0.9)')
    outerGradient.addColorStop(0.2, 'rgba(100, 150, 255, 0.7)')
    outerGradient.addColorStop(0.4, 'rgba(255, 200, 100, 0.5)')
    outerGradient.addColorStop(0.6, 'rgba(255, 150, 50, 0.3)')
    outerGradient.addColorStop(1, 'rgba(255, 100, 0, 0)')

    ctx.fillStyle = outerGradient
    ctx.beginPath()
    ctx.ellipse(
      x,
      thrusterY + mainFlameLength * 0.4,
      thrusterWidth * 1.2,
      mainFlameLength * 0.5,
      0,
      0,
      Math.PI * 2
    )
    ctx.fill()

    // Inner core (white hot)
    const innerGradient = ctx.createRadialGradient(
      x,
      thrusterY,
      0,
      x,
      thrusterY + mainFlameLength * 0.3,
      mainFlameLength * 0.25
    )
    innerGradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
    innerGradient.addColorStop(0.3, 'rgba(200, 220, 255, 0.8)')
    innerGradient.addColorStop(0.6, 'rgba(150, 180, 255, 0.5)')
    innerGradient.addColorStop(1, 'rgba(100, 150, 255, 0)')

    ctx.fillStyle = innerGradient
    ctx.beginPath()
    ctx.ellipse(
      x,
      thrusterY + mainFlameLength * 0.15,
      thrusterWidth * 0.5,
      mainFlameLength * 0.25,
      0,
      0,
      Math.PI * 2
    )
    ctx.fill()

    // OMS (Orbital Maneuvering System) thrusters - smaller side engines
    for (let i = 0; i < 2; i++) {
      const offsetX = (i - 0.5) * size * 0.25
      const omsFlameLength = thrusterLength * 0.4 * (0.7 + Math.sin(frame + i * 2) * 0.3)

      const omsGradient = ctx.createRadialGradient(
        x + offsetX,
        thrusterY,
        0,
        x + offsetX,
        thrusterY + omsFlameLength * 0.4,
        omsFlameLength * 0.5
      )
      omsGradient.addColorStop(0, 'rgba(200, 220, 255, 0.8)')
      omsGradient.addColorStop(0.4, 'rgba(150, 180, 255, 0.5)')
      omsGradient.addColorStop(0.7, 'rgba(255, 200, 100, 0.3)')
      omsGradient.addColorStop(1, 'rgba(255, 150, 50, 0)')

      ctx.fillStyle = omsGradient
      ctx.beginPath()
      ctx.ellipse(
        x + offsetX,
        thrusterY + omsFlameLength * 0.3,
        thrusterWidth * 0.6,
        omsFlameLength * 0.4,
        0,
        0,
        Math.PI * 2
      )
      ctx.fill()
    }

    // Add exhaust particles
    for (let j = 0; j < 8; j++) {
      const particleX = x + (Math.random() - 0.5) * thrusterWidth * 2
      const particleY = thrusterY + mainFlameLength + Math.random() * 30
      const particleSize = Math.random() * 2 + 1

      ctx.fillStyle = `rgba(150, 200, 255, ${0.4 + Math.random() * 0.4})`
      ctx.beginPath()
      ctx.arc(particleX, particleY, particleSize, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  // Function to draw professional space shuttle
  const drawShuttle = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number
  ) => {
    ctx.save()

    // Main fuselage (white body)
    const fuselageGradient = ctx.createLinearGradient(x, y, x, y + size * 0.7)
    fuselageGradient.addColorStop(0, '#FFFFFF')
    fuselageGradient.addColorStop(0.2, '#F5F5F5')
    fuselageGradient.addColorStop(0.5, '#E8E8E8')
    fuselageGradient.addColorStop(0.8, '#D0D0D0')
    fuselageGradient.addColorStop(1, '#B8B8B8')

    ctx.fillStyle = fuselageGradient
    ctx.beginPath()
    // Fuselage shape (more realistic)
    const noseX = x
    const noseY = y
    const bodyStartY = y + size * 0.12
    const bodyEndY = y + size * 0.7
    const bodyWidth = size * 0.28

    // Nose cone
    ctx.moveTo(noseX, noseY)
    ctx.lineTo(noseX - bodyWidth * 0.3, bodyStartY)
    ctx.lineTo(noseX - bodyWidth * 0.5, bodyStartY)
    ctx.lineTo(noseX - bodyWidth * 0.5, bodyEndY)
    ctx.lineTo(noseX + bodyWidth * 0.5, bodyEndY)
    ctx.lineTo(noseX + bodyWidth * 0.5, bodyStartY)
    ctx.lineTo(noseX + bodyWidth * 0.3, bodyStartY)
    ctx.closePath()
    ctx.fill()

    // Nose cone highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
    ctx.beginPath()
    ctx.moveTo(noseX, noseY)
    ctx.lineTo(noseX - bodyWidth * 0.2, bodyStartY * 0.8)
    ctx.lineTo(noseX + bodyWidth * 0.2, bodyStartY * 0.8)
    ctx.closePath()
    ctx.fill()

    // Cockpit windows (multiple windows like real shuttle)
    ctx.fillStyle = '#0a0a1a'
    // Main front window
    ctx.beginPath()
    ctx.arc(x, y + size * 0.08, size * 0.06, 0, Math.PI * 2)
    ctx.fill()
    // Side windows
    ctx.beginPath()
    ctx.arc(x - size * 0.08, y + size * 0.1, size * 0.04, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(x + size * 0.08, y + size * 0.1, size * 0.04, 0, Math.PI * 2)
    ctx.fill()

    // Window reflections
    ctx.fillStyle = 'rgba(100, 150, 255, 0.4)'
    ctx.beginPath()
    ctx.arc(x - size * 0.015, y + size * 0.075, size * 0.035, 0, Math.PI * 2)
    ctx.fill()

    // Wings (delta wing design)
    const wingGradient = ctx.createLinearGradient(x, y + size * 0.4, x, y + size * 0.65)
    wingGradient.addColorStop(0, '#E0E0E0')
    wingGradient.addColorStop(1, '#C8C8C8')

    ctx.fillStyle = wingGradient
    // Left wing
    ctx.beginPath()
    ctx.moveTo(x - bodyWidth * 0.5, y + size * 0.4)
    ctx.lineTo(x - size * 0.45, y + size * 0.55)
    ctx.lineTo(x - size * 0.35, y + size * 0.65)
    ctx.lineTo(x - bodyWidth * 0.4, y + size * 0.65)
    ctx.closePath()
    ctx.fill()

    // Right wing
    ctx.beginPath()
    ctx.moveTo(x + bodyWidth * 0.5, y + size * 0.4)
    ctx.lineTo(x + size * 0.45, y + size * 0.55)
    ctx.lineTo(x + size * 0.35, y + size * 0.65)
    ctx.lineTo(x + bodyWidth * 0.4, y + size * 0.65)
    ctx.closePath()
    ctx.fill()

    // Vertical stabilizer (tail fin)
    ctx.fillStyle = '#D0D0D0'
    ctx.beginPath()
    ctx.moveTo(x, y + size * 0.7)
    ctx.lineTo(x - size * 0.08, y + size * 0.85)
    ctx.lineTo(x, y + size * 0.9)
    ctx.lineTo(x + size * 0.08, y + size * 0.85)
    ctx.closePath()
    ctx.fill()

    // Black thermal tiles (like real shuttle)
    ctx.fillStyle = '#1a1a2e'
    // Nose cap
    ctx.beginPath()
    ctx.arc(x, y + size * 0.02, size * 0.03, 0, Math.PI * 2)
    ctx.fill()

    // Body panel lines
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)'
    ctx.lineWidth = 1.5
    // Horizontal panel lines
    for (let i = 0; i < 4; i++) {
      const lineY = y + size * 0.2 + (i * size * 0.12)
      ctx.beginPath()
      ctx.moveTo(x - bodyWidth * 0.45, lineY)
      ctx.lineTo(x + bodyWidth * 0.45, lineY)
      ctx.stroke()
    }

    // Vertical panel lines
    ctx.beginPath()
    ctx.moveTo(x - bodyWidth * 0.25, y + size * 0.12)
    ctx.lineTo(x - bodyWidth * 0.25, y + size * 0.7)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x + bodyWidth * 0.25, y + size * 0.12)
    ctx.lineTo(x + bodyWidth * 0.25, y + size * 0.7)
    ctx.stroke()

    // USA flag/insignia area (simplified)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.fillRect(x - bodyWidth * 0.3, y + size * 0.35, bodyWidth * 0.6, size * 0.08)

    // Engine nozzles (at the back)
    ctx.fillStyle = '#2a2a3e'
    const nozzleY = y + size * 0.75
    // Main engine nozzle
    ctx.beginPath()
    ctx.arc(x, nozzleY, size * 0.06, 0, Math.PI * 2)
    ctx.fill()
    // OMS nozzles
    ctx.beginPath()
    ctx.arc(x - size * 0.12, nozzleY, size * 0.04, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(x + size * 0.12, nozzleY, size * 0.04, 0, Math.PI * 2)
    ctx.fill()

    // Add subtle glow effect
    ctx.shadowColor = 'rgba(200, 220, 255, 0.3)'
    ctx.shadowBlur = 15
    ctx.strokeStyle = 'rgba(200, 220, 255, 0.2)'
    ctx.lineWidth = 2
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
}
