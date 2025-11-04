import { Helmet } from 'react-helmet-async'

const SEO = () => {
  return (
    <Helmet>
      <title>heobrain | AI Agent Portfolio</title>
      <meta name="description" content="AI 서비스로 생산성을 극대화하는 AI Agent 개발자 포트폴리오" />
      <meta name="keywords" content="AI Agent, Machine Learning, Computer Vision, YOLOv8, RT-DETR, 강화학습, 의료 AI" />
      <meta name="author" content="heobrain" />
      
      {/* Open Graph */}
      <meta property="og:title" content="heobrain | AI Agent Portfolio" />
      <meta property="og:description" content="AI 서비스로 생산성을 극대화하는 AI Agent 개발자" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://your-website.com" />
      <meta property="og:image" content="https://your-website.com/og-image.png" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="heobrain | AI Agent Portfolio" />
      <meta name="twitter:description" content="AI 서비스로 생산성을 극대화하는 AI Agent 개발자" />
      
      {/* Additional */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3b82f6" />
      <link rel="canonical" href="https://your-website.com" />
    </Helmet>
  )
}

export default SEO





