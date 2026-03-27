import * as React from "react"
import { ArrowDown, Globe, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fadeUp">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Disponibile per nuovi progetti
            </span>
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up-delay-1">
            <span className="text-foreground">Full Stack</span>
            <br />
            <span className="text-gradient">Developer</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up-delay-2">
            Specializzato in <span className="text-foreground font-medium">SharePoint</span> e soluzioni enterprise con oltre 
            <span className="text-primary font-semibold"> 10 anni</span> di esperienza
          </p>
          
          {/* Tech stack preview */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up-delay-3">
            {['.NET Core', 'React', 'Azure', 'SharePoint', 'TypeScript', 'SQL Server'].map((tech) => (
              <span key={tech} className="skill-tag">
                {tech}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up-delay-3">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform"
            >
              Vedi Portfolio
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-border bg-secondary text-foreground font-medium hover:border-primary/50 transition-all"
            >
              Contattami
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fade-up-delay-3">
            <a
              href="mailto:your@email.com"
              className="p-3 rounded-lg bg-secondary border border-border hover:border-primary/50 transition-all duration-300 hover:glow-soft"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary border border-border hover:border-primary/50 transition-all duration-300 hover:glow-soft"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary border border-border hover:border-primary/50 transition-all duration-300 hover:glow-soft"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </a>
    </section>
  )
}

export default Hero
