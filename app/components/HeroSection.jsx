"use client"

import Image from "next/image"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { useI18n } from "../i18n/I18nProvider"

// Assuming your images are in public/brands/ folder
// Update these paths to match your actual folder structure
const brandsOuter = [
  { src: "/Brands/witmer.jpg", alt: "Brand 1" },
  { src: "/Brands/alliance logo copy.jpg", alt: "Brand 2" },
  { src: "/Brands/doss2.jpeg", alt: "Brand 3" },
  { src: "/Brands/gamelyn.jpg", alt: "Brand 4" },
  { src: "/Brands/GW.jpg", alt: "Brand 5" },
]

const brandsInner = [
  { src: "/Brands/Douglas company.jpg", alt: "Brand 6" },
  { src: "/Brands/adbisA.png", alt: "Brand 7" },
  { src: "/Brands/B&F.jpg", alt: "Brand 8" },
]

export default function HeroSection() {
  const { t } = useI18n()
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [imageErrors, setImageErrors] = useState({})
  const containerRef = useRef(null)

  // Mouse tracking for glow effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 })

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Set mounted state after initial render
    setIsMounted(true)

    // Initialize mouse position to center of container
    const initializeMousePosition = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        mouseX.set(centerX)
        mouseY.set(centerY)
      }
    }

    // Initialize after a short delay to ensure container is rendered
    setTimeout(initializeMousePosition, 100)

    return () => window.removeEventListener("resize", checkMobile)
  }, [mouseX, mouseY])

  // Handle mouse movement for glow effect
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  // Handle image error
  const handleImageError = (id) => {
    console.log(`Image failed to load: ${id}`)
    setImageErrors((prev) => ({
      ...prev,
      [id]: true,
    }))
  }

  // Calculate sizes based on screen width
  const outerRadius = isMobile ? 120 : 250
  const innerRadius = isMobile ? 70 : 150
  const outerLogoSize = isMobile ? 30 : 50
  const innerLogoSize = isMobile ? 25 : 40

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8 antialiased pt-16 md:pt-24 bg-[url('/fondoColmena1.png')]">
      <div className="relative z-10 flex flex-col items-center justify-between w-full max-w-7xl lg:flex-row lg:gap-16 xl:gap-24">
        {/* LEFT */}
        <div className="flex flex-col items-center mt-10 lg:items-start text-center lg:text-left w-full lg:w-1/2 space-y-6 mb-20 lg:mb-0 lg:mt-0">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
            <div className="absolute -top-15 sm:-top-32 sm:mt-12 left-1/2 lg:-top-75 lg:-left-10 transform -translate-x-1/2 lg:translate-x-0 z-10">
              <Image
                src="/abeja.png"
                alt="Geekshive Bee"
                width={isMobile ? 250 : 400}
                height={isMobile ? 250 : 400}
                className="select-none"
                style={{ transform: "translateY(20%)" }}
                onError={() => console.log("Bee image failed to load")}
                unoptimized={true}
                priority={true}
              />
            </div>

            <div
              ref={containerRef}
              className="relative inline-block mt-28 sm:mt-32 lg:mt-36"
              onMouseMove={handleMouseMove}
            >
              <motion.div
                className="absolute w-20 md:w-40 h-20 md:h-40 rounded-full bg-yellow-300 opacity-50 pointer-events-none blur-3xl z-0"
                style={{
                  x: smoothX,
                  y: smoothY,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
              />
              <h1
                className="relative z-20 text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-raleway font-bold bg-white rounded-full p-6 md:p-8 lg:p-12 inline-block shadow-md border-[#F2D300] border-4"
                style={{ boxShadow: "0 0 80px #F2D300" }}
              >
                {t('hero.title')}
              </h1>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
          {/* ORBIT CONTAINER - Fixed position */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* VISUAL ORBITS */}
            {[600, 500, 400, 300].map((size, index) => {
              const orbitSize = isMobile ? size / 1.8 : size
              return (
                <div
                  key={index}
                  className="absolute rounded-full border-2 border-white opacity-40"
                  style={{
                    width: orbitSize,
                    height: orbitSize,
                    maskImage:
                      "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0) 45deg, rgba(0,0,0,1) 90deg, rgba(0,0,0,0) 135deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0) 225deg, rgba(0,0,0,1) 270deg, rgba(0,0,0,0) 315deg, rgba(0,0,0,1) 360deg)",
                    WebkitMaskImage:
                      "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0) 45deg, rgba(0,0,0,1) 90deg, rgba(0,0,0,0) 135deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0) 225deg, rgba(0,0,0,1) 270deg, rgba(0,0,0,0) 315deg, rgba(0,0,0,1) 360deg)",
                  }}
                />
              )
            })}

            {/* CENTER */}
            <div className="absolute flex flex-col items-center justify-center text-center z-10">
              <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold font-raleway">
                50+
              </div>
              <div className="text-white text-lg sm:text-xl md:text-2xl font-normal font-raleway mt-2">{t('hero.brands')}</div>
            </div>

            {/* Only render orbits after component is mounted */}
            {isMounted && (
              <>
                {/* OUTER ORBIT */}
                <motion.div
                  className="absolute"
                  style={{ width: outerRadius * 2, height: outerRadius * 2 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 80,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  {brandsOuter.map((brand, index) => {
                    // Calculate position around the circle
                    const angle = (index / brandsOuter.length) * Math.PI * 2 // in radians
                    const id = `outer-${index}`

                    return (
                      <motion.div
                        key={id}
                        className="absolute"
                        style={{
                          left: `${outerRadius + Math.cos(angle) * outerRadius}px`,
                          top: `${outerRadius + Math.sin(angle) * outerRadius}px`,
                          width: `${outerLogoSize}px`,
                          height: `${outerLogoSize}px`,
                          marginLeft: `-${outerLogoSize / 2}px`,
                          marginTop: `-${outerLogoSize / 2}px`,
                        }}
                        // Counter-rotate to keep logos upright
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 80,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        {/* Colored circle that's always visible */}
                        <div
                          className={`w-full h-full rounded-full ${imageErrors[id] ? "bg-yellow-300 flex items-center justify-center text-xs font-bold" : "bg-gray-200"}`}
                        >
                          {imageErrors[id] ? brand.alt.charAt(0) : null}
                        </div>

                        {/* Image on top of circle, if it loads successfully */}
                        {!imageErrors[id] && (
                          <Image
                            src={brand.src || "/placeholder.svg"}
                            alt={brand.alt}
                            width={outerLogoSize}
                            height={outerLogoSize}
                            className="rounded-full object-cover absolute inset-0"
                            onError={() => handleImageError(id)}
                            unoptimized={true}
                          />
                        )}
                      </motion.div>
                    )
                  })}
                </motion.div>

                {/* INNER ORBIT */}
                <motion.div
                  className="absolute"
                  style={{ width: innerRadius * 2, height: innerRadius * 2 }}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  {brandsInner.map((brand, index) => {
                    // Calculate position around the circle
                    const angle = (index / brandsInner.length) * Math.PI * 2 // in radians
                    const id = `inner-${index}`

                    return (
                      <motion.div
                        key={id}
                        className="absolute"
                        style={{
                          left: `${innerRadius + Math.cos(angle) * innerRadius}px`,
                          top: `${innerRadius + Math.sin(angle) * innerRadius}px`,
                          width: `${innerLogoSize}px`,
                          height: `${innerLogoSize}px`,
                          marginLeft: `-${innerLogoSize / 2}px`,
                          marginTop: `-${innerLogoSize / 2}px`,
                        }}
                        // Counter-rotate to keep logos upright
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 60,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        {/* Colored circle that's always visible */}
                        <div
                          className={`w-full h-full rounded-full ${imageErrors[id] ? "bg-yellow-300 flex items-center justify-center text-xs font-bold" : "bg-gray-200"}`}
                        >
                          {imageErrors[id] ? brand.alt.charAt(0) : null}
                        </div>

                        {/* Image on top of circle, if it loads successfully */}
                        {!imageErrors[id] && (
                          <Image
                            src={brand.src || "/placeholder.svg"}
                            alt={brand.alt}
                            width={innerLogoSize}
                            height={innerLogoSize}
                            className="rounded-full object-cover absolute inset-0"
                            onError={() => handleImageError(id)}
                            unoptimized={true}
                          />
                        )}
                      </motion.div>
                    )
                  })}
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
