import * as React from "react"
import { useState } from "react"
import { Mail, MapPin, Globe, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Apre il client email con i dati precompilati
    const mailtoLink = `mailto:your@email.com?subject=Contatto dal Portfolio - ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0ADa: ${formData.name} (${formData.email})`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">Contatti</span>
            <h2 className="section-title">Parliamone</h2>
            <p className="section-subtitle mx-auto">
              Hai un progetto in mente? Scrivimi e discutiamo insieme di come posso aiutarti
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contattami direttamente</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:your@email.com"
                    className="flex items-center gap-4 p-4 rounded-xl card-gradient border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:glow-soft transition-all">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">your@email.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl card-gradient border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Italia</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4">Seguimi</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl card-gradient border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <Globe className="w-6 h-6 group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl card-gradient border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <Globe className="w-6 h-6 group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <form onSubmit={handleSubmit} className="p-6 rounded-xl card-gradient border border-border">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Invia Messaggio
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
