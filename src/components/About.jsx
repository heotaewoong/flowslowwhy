import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBirthdayCake, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const personalInfo = [
    { icon: FaBirthdayCake, label: 'Birthdate', value: '05/28/1999' },
    { icon: FaEnvelope, label: 'Email', value: 'ihtwandy@naver.com', type: 'email' },
    { icon: FaPhone, label: 'Phone', value: '010-6295-6869', type: 'tel' },
    { icon: FaMapMarkerAlt, label: 'Address', value: '경기도 성남시 분당구 판교원로' },
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Who am I */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
                Who am I?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                AI 서비스를 통해 생산성을 극대화하는 것을 목표로 하는 AI Agent 개발자입니다.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                새로운 기술과 도구를 탐구하고, 실무 프로젝트를 통해 지속적으로 성장하며, 
                AI 기술이 일상생활과 업무에 실질적인 가치를 제공할 수 있도록 노력하고 있습니다.
              </p>
              <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                Download My CV
              </button>
            </motion.div>

            {/* Personal Info */}
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
                Personal Info
              </h3>
              <ul className="space-y-4">
                {personalInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                        {info.type === 'email' ? (
                          <a
                            href={`mailto:${info.value}`}
                            className="text-gray-900 hover:text-blue-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : info.type === 'tel' ? (
                          <a
                            href={`tel:${info.value}`}
                            className="text-gray-900 hover:text-blue-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900">{info.value}</p>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Follow me on</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.youtube.com/@Titan_Bears"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About



