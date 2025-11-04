import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaBrain, FaProjectDiagram, FaAward } from 'react-icons/fa'

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      icon: FaCode,
      value: '10+',
      label: 'AI Projects',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FaBrain,
      value: '1+',
      label: 'Research Papers',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: FaProjectDiagram,
      value: '5+',
      label: 'Technologies',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FaAward,
      value: '100%',
      label: 'Success Rate',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="stats" className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="text-2xl text-white" />
                    </div>
                  </div>
                  <motion.h3
                    className="text-4xl md:text-5xl font-bold mb-2"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-blue-100 text-sm md:text-base font-medium">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
