import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      title: 'IT Consulting',
      description: 'Strategic technology guidance to help your business navigate digital transformation. We analyze your current infrastructure, identify opportunities, and design roadmaps that align with your business objectives.',
      features: [
        'Technology Strategy & Planning',
        'Digital Transformation Roadmaps',
        'Infrastructure Assessment',
        'Cloud Migration Consulting',
        'Security & Compliance Advisory',
      ],
      icon: '💡',
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions built with modern technologies and best practices. From web applications to enterprise systems, we deliver scalable, maintainable, and high-performance software.',
      features: [
        'Web & Mobile Applications',
        'Enterprise Software Solutions',
        'API Development & Integration',
        'Microservices Architecture',
        'Legacy System Modernization',
      ],
      icon: '💻',
    },
    {
      title: 'Staffing Solutions',
      description: 'Access to top-tier technology talent when you need it. We provide skilled professionals across various domains to accelerate your projects and fill critical roles.',
      features: [
        'Full-Time & Contract Placements',
        'Specialized Technology Roles',
        'Project-Based Teams',
        'Remote & On-Site Options',
        'Talent Assessment & Vetting',
      ],
      icon: '👥',
    },
    {
      title: 'SaaS Products',
      description: 'Scalable software-as-a-service solutions designed for modern businesses. We build cloud-native applications that grow with your needs and deliver value from day one.',
      features: [
        'Multi-Tenant Architecture',
        'Subscription Management',
        'Scalable Infrastructure',
        'API-First Design',
        'Analytics & Reporting',
      ],
      icon: '☁️',
    },
    {
      title: 'Future Apps',
      description: 'Next-generation applications that push the boundaries of what\'s possible. From innovative platforms like MYFI to cutting-edge solutions, we build the apps of tomorrow.',
      features: [
        'Innovative Platform Development',
        'Emerging Technology Integration',
        'User Experience Design',
        'Performance Optimization',
        'Future-Proof Architecture',
      ],
      icon: '🚀',
    },
    {
      title: 'AI-Based Services',
      description: 'Intelligent automation and machine learning solutions that transform how you work. We leverage AI to automate processes, gain insights, and create competitive advantages.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'Intelligent Automation',
      ],
      icon: '🤖',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-slate-900">
              <span className="text-gradient">Our Services</span>
            </h1>
            <p className="text-xl text-slate-700 font-medium">
              Comprehensive technology solutions to transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`glass-card p-8 sm:p-12 hover:bg-white/10 transition-all ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 glass-strong rounded-2xl flex items-center justify-center text-4xl mb-4 md:mb-0">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-3xl font-bold mb-4">
                      <span className="text-gradient">{service.title}</span>
                    </h2>
                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2 text-slate-600"
                        >
                          <svg
                            className="w-5 h-5 text-blue-400 flex-shrink-0"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Ready to Get Started?</span>
            </h2>
            <p className="text-xl text-slate-700 mb-8">
              Let's discuss how we can help transform your business with our services
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-block"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

