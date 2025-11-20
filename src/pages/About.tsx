export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-slate-900">
              <span className="text-gradient">About GenvenX</span>
            </h1>
            <p className="text-xl text-slate-700 font-medium">
              Next-Generation AI-Driven Technology Consulting
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 sm:p-12 mb-12">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Genvenx is a next-generation AI-driven technology consulting and software solutions company helping businesses innovate, transform, and scale with confidence. We specialize in artificial intelligence, software development, IT consulting, cloud engineering, and technology staffing. Our mission is to empower companies with intelligent, future-ready technology solutions that enhance performance, accelerate growth, and unlock new opportunities.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                With deep expertise across AI, machine learning, cloud, automation, DevOps, and enterprise software, Genvenx delivers solutions that are robust, secure, and scalable. Whether it's developing high-impact applications, enabling digital transformation, implementing AI automation, or providing skilled technology talent, we ensure our clients stay ahead in a rapidly evolving digital world.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                At Genvenx, we believe in partnership, trust, innovation, and technical excellence. Our approach blends global experience with personalized service, enabling organizations to build smarter, move faster, and operate more efficiently. We are committed to helping businesses reimagine what's possible through technology — today, tomorrow, and beyond.
              </p>
            </div>

            {/* Values Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: 'Innovation',
                  description: 'We stay at the forefront of technology, constantly exploring new solutions and methodologies to deliver cutting-edge results.',
                  icon: '✨',
                },
                {
                  title: 'Excellence',
                  description: 'Technical excellence is at the core of everything we do. We maintain the highest standards in our work and deliverables.',
                  icon: '⭐',
                },
                {
                  title: 'Partnership',
                  description: 'We build long-term relationships with our clients, working as an extension of their team to achieve shared goals.',
                  icon: '🤝',
                },
                {
                  title: 'Trust',
                  description: 'Transparency, reliability, and integrity guide our interactions. Your success is our commitment.',
                  icon: '🔒',
                },
              ].map((value, index) => (
                <div key={index} className="glass-card p-6 hover:bg-white/10 transition-all">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>

            {/* Expertise Section */}
            <div className="glass-card p-8 sm:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">
                <span className="text-gradient">Our Expertise</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'Artificial Intelligence',
                  'Machine Learning',
                  'Cloud Engineering',
                  'DevOps',
                  'Enterprise Software',
                  'Automation',
                  'Full-Stack Development',
                  'Mobile Applications',
                ].map((expertise, index) => (
                  <div
                    key={index}
                    className="text-center p-4 glass rounded-lg hover:bg-white/10 transition-all"
                  >
                    <p className="text-slate-700 font-medium">{expertise}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

