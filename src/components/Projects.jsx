import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: '뇌출혈 자동 탐지 시스템',
      description: 'CT 스캔 영상에서 6가지 유형의 뇌출혈을 자동 탐지 및 분류하는 AI 시스템. YOLOv8과 RT-DETR 알고리즘을 활용하여 출혈 병변의 위치와 종류를 예측하며, 강화학습(PPO)을 통해 박스 보정 성능을 향상시켰습니다.',
      technologies: ['Python', 'YOLOv8', 'RT-DETR', 'PPO', 'Computer Vision', 'Medical Imaging'],
      github: '#',
      demo: '#',
      image: '/assets/imgs/mvp.png',
      featured: true,
      period: '2025.03 - 2025.06',
    },
    {
      title: '마우스 행동 분류 AI',
      description: '알츠하이머 및 펜타닐 마우스 행동을 자동으로 분류하는 AI 모델. 딥러닝 기반 행동 패턴 분석을 통해 의료 연구에 활용되는 시스템입니다.',
      technologies: ['Python', 'Deep Learning', 'TensorFlow', 'Behavior Analysis', 'AI/ML'],
      github: '#',
      demo: '#',
      image: '/assets/imgs/mvp.png',
      featured: true,
      period: '2025.06 - 2025.08',
    },
    {
      title: 'Portfolio Website',
      description: 'React와 Vite를 활용한 현대적인 AI Agent 포트폴리오 웹사이트. 반응형 디자인과 부드러운 애니메이션으로 최적의 사용자 경험을 제공합니다.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/heotaewoong/flowslowwhy',
      demo: '#',
      image: '/assets/imgs/mvp.png',
      featured: false,
      period: '2024',
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
    <section id="projects" className="py-20 bg-white">
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
              My <span className="text-blue-600">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded"></div>
            <p className="text-gray-600 mt-4">Some of my recent work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-blue-200 ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${
                  project.featured ? 'h-64' : 'h-48'
                } bg-gradient-to-br from-blue-500 to-blue-700`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  {project.period && (
                    <p className="text-xs text-gray-500 mb-3">{project.period}</p>
                  )}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-gray-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    >
                      <FaGithub />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                      >
                        <FaExternalLinkAlt />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
