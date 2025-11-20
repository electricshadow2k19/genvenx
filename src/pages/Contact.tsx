import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend API
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
              <span className="text-gradient">Get in Touch</span>
            </h1>
            <p className="text-xl text-slate-700 font-medium">
              Let's discuss how GenvenX can help transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="glass-card p-8 sm:p-12">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-gradient">Send us a Message</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 placeholder-slate-400 bg-white/80"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 placeholder-slate-400 bg-white/80"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 placeholder-slate-400 bg-white/80"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 placeholder-slate-400 bg-white/80 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="glass-card p-8 sm:p-12">
                  <h2 className="text-3xl font-bold mb-6">
                    <span className="text-gradient">Contact Information</span>
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 glass-strong rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-blue-400"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:info@genvenx.com"
                          className="text-slate-600 hover:text-blue-600 transition-colors"
                        >
                          info@genvenx.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 glass-strong rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-blue-400"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a
                          href="tel:+914023456789"
                          className="text-slate-600 hover:text-blue-600 transition-colors"
                        >
                          +91 40 2345 6789
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 glass-strong rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-blue-400"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-slate-600">
                          Tech Park, HITEC City<br />
                          Hyderabad, Telangana 500081<br />
                          India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8 sm:p-12">
                  <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-slate-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    <p>Saturday: 10:00 AM - 2:00 PM IST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

