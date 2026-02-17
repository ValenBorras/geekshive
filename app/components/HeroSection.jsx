"use client"

import Image from "next/image"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { useI18n } from "../i18n/I18nProvider"

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function HeroSection() {
  const { t } = useI18n()
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [imageErrors, setImageErrors] = useState({})
  const containerRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 25 })
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 25 })

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    setIsMounted(true)

    const initializeMousePosition = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        mouseX.set(rect.width / 2)
        mouseY.set(rect.height / 2)
      }
    }
    setTimeout(initializeMousePosition, 100)
    return () => window.removeEventListener("resize", checkMobile)
  }, [mouseX, mouseY])

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }))
  }

  const outerRadius = isMobile ? 120 : 250
  const innerRadius = isMobile ? 70 : 150
  const outerLogoSize = isMobile ? 32 : 52
  const innerLogoSize = isMobile ? 26 : 42

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8 antialiased pt-16 md:pt-24 bg-[url('/fondoColmena1.png')]"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#F2D300]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F2D300]/3 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-between w-full max-w-7xl lg:flex-row lg:gap-16 xl:gap-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT */}
        <motion.div
          className="flex flex-col items-center mt-10 lg:items-start text-center lg:text-left w-full lg:w-1/2 space-y-6 mb-20 lg:mb-0 lg:mt-0"
          variants={itemVariants}
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
            <motion.div
              className="absolute -top-15 sm:-top-32 sm:mt-12 left-1/2 lg:-top-75 lg:-left-10 transform -translate-x-1/2 lg:translate-x-0 z-10"
              initial={{ opacity: 0, y: -40, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/abeja.png"
                  alt="Geekshive Bee"
                  width={isMobile ? 250 : 400}
                  height={isMobile ? 250 : 400}
                  className="select-none drop-shadow-[0_10px_30px_rgba(242,211,0,0.2)]"
                  style={{ transform: "translateY(20%)" }}
                  onError={() => console.log("Bee image failed to load")}
                  unoptimized={true}
                  priority={true}
                />
              </motion.div>
            </motion.div>

            <div
              ref={containerRef}
              className="relative inline-block mt-28 sm:mt-32 lg:mt-36"
              onMouseMove={handleMouseMove}
            >
              <motion.div
                className="absolute w-24 md:w-48 h-24 md:h-48 rounded-full bg-[#F2D300] opacity-30 pointer-events-none blur-[60px] z-0"
                style={{
                  x: smoothX,
                  y: smoothY,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
              />
              <motion.h1
                className="relative z-20 text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-raleway font-bold bg-white rounded-full p-6 md:p-8 lg:p-12 inline-block border-4 border-[#F2D300]"
                style={{ boxShadow: "0 0 60px rgba(242, 211, 0, 0.4), 0 0 120px rgba(242, 211, 0, 0.15)" }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.03 }}
              >
                {t('hero.title')}
              </motion.h1>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center"
          variants={itemVariants}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* VISUAL ORBITS */}
            {[600, 500, 400, 300].map((size, index) => {
              const orbitSize = isMobile ? size / 1.8 : size
              return (
                <motion.div
                  key={index}
                  className="absolute rounded-full border border-white/20"
                  style={{
                    width: orbitSize,
                    height: orbitSize,
                    maskImage:
                      "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0) 45deg, rgba(0,0,0,1) 90deg, rgba(0,0,0,0) 135deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0) 225deg, rgba(0,0,0,1) 270deg, rgba(0,0,0,0) 315deg, rgba(0,0,0,1) 360deg)",
                    WebkitMaskImage:
                      "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0) 45deg, rgba(0,0,0,1) 90deg, rgba(0,0,0,0) 135deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0) 225deg, rgba(0,0,0,1) 270deg, rgba(0,0,0,0) 315deg, rgba(0,0,0,1) 360deg)",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                />
              )
            })}

            {/* CENTER */}
            <motion.div
              className="absolute flex flex-col items-center justify-center text-center z-10"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold font-raleway"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                50+
              </motion.div>
              <div className="text-white/80 text-lg sm:text-xl md:text-2xl font-normal font-raleway mt-2 tracking-wide">
                {t('hero.brands')}
              </div>
            </motion.div>

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
                    const angle = (index / brandsOuter.length) * Math.PI * 2
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
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 80,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                      >
                        <div
                          className={`w-full h-full rounded-full shadow-lg ring-1 ring-white/10 ${
                            imageErrors[id]
                              ? "bg-[#F2D300] flex items-center justify-center text-xs font-bold text-black"
                              : "bg-gray-200"
                          }`}
                        >
                          {imageErrors[id] ? brand.alt.charAt(0) : null}
                        </div>
                        {!imageErrors[id] && (
                          <Image
                            src={brand.src || "/placeholder.svg"}
                            alt={brand.alt}
                            width={outerLogoSize}
                            height={outerLogoSize}
                            className="rounded-full object-cover absolute inset-0 ring-1 ring-white/10"
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
                    const angle = (index / brandsInner.length) * Math.PI * 2
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
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 60,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                      >
                        <div
                          className={`w-full h-full rounded-full shadow-lg ring-1 ring-white/10 ${
                            imageErrors[id]
                              ? "bg-[#F2D300] flex items-center justify-center text-xs font-bold text-black"
                              : "bg-gray-200"
                          }`}
                        >
                          {imageErrors[id] ? brand.alt.charAt(0) : null}
                        </div>
                        {!imageErrors[id] && (
                          <Image
                            src={brand.src || "/placeholder.svg"}
                            alt={brand.alt}
                            width={innerLogoSize}
                            height={innerLogoSize}
                            className="rounded-full object-cover absolute inset-0 ring-1 ring-white/10"
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
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-[#F2D300]"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
