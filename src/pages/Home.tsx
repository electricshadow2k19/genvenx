import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">Your Vision.</span>
              <br />
              <span className="text-white">Our Innovation.</span>
              <br />
              <span className="text-gradient">One GenvenX.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 mb-8">
              Empowering the Future of Technology
            </p>
            <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
              Strategic Minds. Technical Excellence. Your Partner in Digital Transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 glow-effect"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 glass-strong rounded-lg font-semibold hover:bg-white/30 transition-all transform hover:scale-105"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-gradient">What We Do</span>
          </h2>
          <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
            Comprehensive technology solutions to transform your business
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'IT Consulting',
                description: 'Strategic technology guidance to drive innovation and growth',
                icon: '💡',
              },
              {
                title: 'Software Development',
                description: 'Custom applications built with cutting-edge technologies',
                icon: '💻',
              },
              {
                title: 'Staffing Solutions',
                description: 'Top-tier technology talent to accelerate your projects',
                icon: '👥',
              },
              {
                title: 'SaaS Products',
                description: 'Scalable software-as-a-service solutions for modern businesses',
                icon: '☁️',
              },
              {
                title: 'Future Apps',
                description: 'Next-generation applications like MYFI and beyond',
                icon: '🚀',
              },
              {
                title: 'AI-Based Services',
                description: 'Intelligent automation and machine learning solutions',
                icon: '🤖',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:bg-white/10 transition-all transform hover:scale-105 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
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
              <span className="text-gradient">Ready to Transform?</span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss how GenvenX can help accelerate your digital journey
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 glow-effect"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

