import * as React from "react"

const Projects = () => {
  const projects = [
    {
      title: "Integrazione SAP - SharePoint",
      description: "Sviluppo di una soluzione per integrare i dati di commessa provenienti da SAP direttamente in SharePoint, automatizzando il flusso informativo tra i sistemi e migliorando l'accesso ai dati per gli utenti aziendali.",
      technologies: ["SharePoint Online", "SPFx", "SAP RFC", "Power Automate", "Azure Functions"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      title: "Document Management WebPart",
      description: "Web Part custom per SharePoint dedicata alla gestione della documentazione clienti, con funzionalità avanzate di ricerca, categorizzazione e workflow di approvazione documenti.",
      technologies: ["SPFx", "React", "PnP JS", "Microsoft Graph", "Azure AD"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop"
    },
    {
      title: "Task Management App",
      description: "Applicazione integrata in SharePoint per la gestione dei task aziendali, con sistema di notifiche automatiche, reminder per le scadenze, assegnazione attività e dashboard di monitoraggio dello stato di avanzamento.",
      technologies: ["SharePoint", "SPFx", "React", "Power Automate", "Microsoft Graph"],
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop"
    },
    {
      title: "Intranet Aziendale",
      description: "Progettazione e sviluppo di una intranet aziendale moderna su SharePoint Online, con news hub, directory dipendenti, prenotazione risorse e integrazione con Teams e altre app Microsoft 365.",
      technologies: ["SharePoint Online", "SPFx", "Microsoft Graph", "Power Platform", "Azure"],
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&h=400&fit=crop"
    },
  ]

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">Portfolio</span>
          <h2 className="section-title">Progetti Realizzati</h2>
          <p className="section-subtitle mx-auto">
            Una selezione di soluzioni enterprise sviluppate su piattaforma SharePoint
          </p>
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="group rounded-xl card-gradient border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
