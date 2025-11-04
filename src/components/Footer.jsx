import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            &copy; {currentYear} Created with{' '}
            <FaHeart className="inline text-red-500 mx-1" /> by{' '}
            <span className="text-blue-400 font-semibold">heobrain</span>
          </p>
          <p className="text-gray-500 text-sm">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
