import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'AI 분야 인턴',
      company: 'KAIST 뇌인지과학과 김대수 교수 연구실',
      period: '2025.06 - 2025.08',
      type: '인턴십',
      description: '알츠하이머 마우스 행동 분류, 펜타닐 마우스 분류 AI Model 개발',
      technologies: ['AI', 'Machine Learning', 'Python', 'Deep Learning'],
      achievements: [
        '마우스 행동 패턴 분석 알고리즘 개발',
        'AI 모델 성능 최적화',
      ],
    },
    {
      title: '연구실 인턴',
      company: '경희대 김태성 교수 연구실',
      period: '2025.03 - 2025.06',
      type: '연구',
      description:
        'CT 스캔 영상에서 6가지 유형의 뇌출혈을 자동 탐지 및 분류하기 위해 YOLOv8과 RT-DETR 알고리즘을 활용하여 출혈 병변의 위치(바운딩 박스)와 종류를 예측하였으며, 추가로 강화학습(PPO, Proximal Policy Optimization)을 통해 박스 보정 성능 향상을 시도하였다.',
      technologies: ['YOLOv8', 'RT-DETR', 'Reinforcement Learning', 'PPO', 'Computer Vision'],
      achievements: [
        '6가지 뇌출혈 유형 자동 분류 시스템 구축',
        '강화학습을 통한 박스 보정 성능 향상',
        '의료 영상 분석 정확도 개선',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    <section id="experience" className="py-20 bg-white">
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
              Work <span className="text-blue-600">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content card */}
                  <div
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-blue-600">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                          <p className="text-blue-600 font-semibold">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <FaCalendarAlt className="mr-2" />
                        <span>{exp.period}</span>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                      {exp.achievements && (
                        <ul className="mb-4 space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-sm text-gray-600">
                              <span className="text-blue-600 mr-2">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience



