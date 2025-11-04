import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaYoutube, FaInstagram, FaTwitter, FaDownload } from 'react-icons/fa'
// Profile image will be loaded from public_html/assets
const profileImage = '/assets/imgs/유튜브 프로필 사진.png'

const Hero = () => {

  const socialLinks = [
    {
      icon: FaYoutube,
      href: 'https://www.youtube.com/@Titan_Bears',
      label: 'YouTube',
      color: 'text-red-500 hover:text-red-600',
    },
    {
      icon: FaGithub,
      href: '#',
      label: 'GitHub',
      color: 'text-gray-700 hover:text-gray-900',
    },
    {
      icon: FaTwitter,
      href: '#',
      label: 'Twitter',
      color: 'text-blue-400 hover:text-blue-500',
    },
    {
      icon: FaInstagram,
      href: '#',
      label: 'Instagram',
      color: 'text-pink-500 hover:text-pink-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <img
                src="/assets/imgs/heobrain.png"
                alt="HEOBRAIN Logo"
                className="relative w-64 h-64 object-contain shadow-2xl"
                onError={(e) => {
                  // Fallback to profile image if logo not found
                  e.target.src = profileImage
                  e.target.className = "relative w-48 h-48 rounded-full border-4 border-white shadow-2xl object-cover"
                }}
              />
            </div>
          </motion.div>

          <motion.h4
            variants={itemVariants}
            className="text-lg md:text-xl text-blue-600 font-medium mb-4"
          >
            Hello, I am
          </motion.h4>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4"
          >
            heobrain
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            AI 서비스로 생산성을 극대화
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            AI Agent
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button 
              onClick={() => window.print()}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <FaDownload />
              Download CV
            </button>
            <button
              onClick={() => {
                const contact = document.getElementById('contact')
                contact?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-2xl transition-transform hover:scale-125`}
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-600 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

