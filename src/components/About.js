import * as React from "react"
import { Code, Server, Cloud, Database } from "lucide-react"

const About = () => {
  const highlights = [
    {
      icon: Server,
      title: "Backend",
      description: ".NET Core, C#, API REST, Microservizi"
    },
    {
      icon: Code,
      title: "Frontend",
      description: "React, TypeScript, Tailwind CSS"
    },
    {
      icon: Cloud,
      title: "Cloud",
      description: "Azure, DevOps, CI/CD Pipelines"
    },
    {
      icon: Database,
      title: "Database",
      description: "SQL Server, Entity Framework, T-SQL"
    }
  ]

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">Chi sono</span>
            <h2 className="section-title">Full Stack Developer</h2>
            <p className="section-subtitle mx-auto">
              Specializz ato nello sviluppo di soluzioni enterprise moderne e scalabili
            </p>
          </div>
          
          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sono un <span className="text-foreground font-medium">Full Stack Developer</span> con oltre 10 anni di esperienza 
                nello sviluppo di soluzioni enterprise. La mia specializzazione principale è 
                <span className="text-primary font-semibold"> Microsoft SharePoint</span>, dove ho realizzato oltre 50 progetti 
                per aziende di diverse dimensioni.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Lavoro quotidianamente con lo stack Microsoft: <span className="text-foreground">.NET Core</span>, 
                <span className="text-foreground"> Azure</span>, <span className="text-foreground">SQL Server</span> e 
                <span className="text-foreground"> React</span> per creare applicazioni moderne, 
                scalabili e manutenibili.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Credo nell'importanza del codice pulito, delle best practices e della continua 
                formazione per rimanere aggiornato sulle ultime tecnologie.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl card-gradient border border-border">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Anni di esperienza</div>
              </div>
              <div className="p-6 rounded-xl card-gradient border border-border">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Progetti completati</div>
              </div>
              <div className="p-6 rounded-xl card-gradient border border-border">
                <div className="text-4xl font-bold text-primary mb-2">SharePoint</div>
                <div className="text-muted-foreground">Specializzazione</div>
              </div>
              <div className="p-6 rounded-xl card-gradient border border-border">
                <div className="text-4xl font-bold text-primary mb-2">Azure</div>
                <div className="text-muted-foreground">Cloud Expert</div>
              </div>
            </div>
          </div>
          
          {/* Highlights grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div 
                key={item.title}
                className="group p-6 rounded-xl card-gradient border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-soft transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
