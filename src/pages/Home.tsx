import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-slate-900">
              <span className="text-gradient">GenvenX</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-700 mb-4 font-medium">
              Empowering the Future of Technology. Your Vision. Our Innovation. One GenvenX.
            </p>
            <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
              Strategic Minds. Technical Excellence. Your Partner in Digital Transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="btn-primary"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="btn-secondary"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
            <span className="text-gradient">What We Do</span>
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
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
                className="glass-card p-8 hover:shadow-xl transition-all group"
              >
                <div className="text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-2xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              <span className="text-gradient">Ready to Transform?</span>
            </h2>
            <p className="text-xl text-slate-700 mb-8">
              Let's discuss how GenvenX can help accelerate your digital journey
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-block"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

