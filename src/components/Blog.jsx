import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://onethingflow.tistory.com/rss'
        )
        const data = await response.json()
        if (data.items) {
          setBlogPosts(data.items.slice(0, 3))
        }
      } catch (error) {
        console.error('Failed to fetch blog posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

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
    <section id="blog" className="py-20 bg-gradient-to-br from-blue-50 to-white">
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
              Latest <span className="text-blue-600">News</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded"></div>
            <p className="text-gray-600 mt-4">From my blog</p>
          </motion.div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-500">Loading blog posts...</p>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No blog posts available at the moment.</p>
              <a
                href="https://onethingflow.tistory.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Visit My Blog →
              </a>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.a
                  key={index}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group block border border-gray-100"
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
                    {post.thumbnail ? (
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white text-4xl">
                        📝
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">
                      {new Date(post.pubDate).toLocaleDateString('ko-KR')}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.description?.replace(/<[^>]+>/g, '').substring(0, 120)}...
                    </p>
                    <div className="flex items-center text-blue-600 text-sm font-medium">
                      Read more
                      <FaExternalLinkAlt className="ml-2" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}

          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="https://onethingflow.tistory.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Visit My Blog
              <FaExternalLinkAlt />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
