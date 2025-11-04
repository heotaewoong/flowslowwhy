import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      name: 'AI & Machine Learning',
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'TensorFlow', level: 75 },
        { name: 'PyTorch', level: 70 },
        { name: 'YOLOv8', level: 80 },
        { name: 'RT-DETR', level: 75 },
        { name: 'Reinforcement Learning', level: 70 },
      ],
    },
    {
      name: 'Computer Vision',
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Image Processing', level: 85 },
        { name: 'Object Detection', level: 80 },
        { name: 'Medical Imaging', level: 75 },
        { name: 'OpenCV', level: 70 },
      ],
    },
    {
      name: 'Frontend & UI',
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'React', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
      ],
    },
    {
      name: 'Backend & API',
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'RESTful API', level: 75 },
        { name: 'Python Flask', level: 70 },
      ],
    },
    {
      name: 'Tools & DevOps',
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Jupyter Notebook', level: 80 },
      ],
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
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 to-white">
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
              My <span className="text-blue-600">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded"></div>
            <p className="text-gray-600 mt-4">Technologies and tools I work with</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div
                          className={`bg-gradient-to-r ${category.color} h-2.5 rounded-full`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills



