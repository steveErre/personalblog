import * as React from "react"
import { CheckCircle, Puzzle, Users, TrendingUp, Shield, Zap } from "lucide-react"

const WhySharePoint = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Zero Costi Aggiuntivi di Licenza",
      description: "SharePoint è già incluso nella suite Microsoft 365. Ogni soluzione custom sfrutta l'infrastruttura esistente senza acquistare software o piattaforme esterne."
    },
    {
      icon: Puzzle,
      title: "Integrazione Nativa",
      description: "Le soluzioni si integrano perfettamente con Teams, Outlook, OneDrive e Power Platform, creando un ecosistema unificato che i dipendenti già conoscono."
    },
    {
      icon: TrendingUp,
      title: "Processi Semplificati",
      description: "Automatizzare workflow di approvazione, gestione documentale e notifiche riduce drasticamente il tempo perso in attività manuali e ripetitive."
    },
    {
      icon: Users,
      title: "Collaborazione Potenziata",
      description: "Dashboard condivise, spazi di lavoro centralizzati e comunicazioni strutturate migliorano la collaborazione tra team e reparti."
    },
    {
      icon: Shield,
      title: "Sicurezza Enterprise",
      description: "Ogni soluzione eredita le policy di sicurezza di Microsoft 365: autenticazione, permessi granulari e compliance già configurati."
    },
    {
      icon: CheckCircle,
      title: "Adozione Immediata",
      description: "I dipendenti lavorano già in ambiente Microsoft. Soluzioni integrate riducono la curva di apprendimento e aumentano il tasso di adozione."
    }
  ]

  const examples = [
    "Portali intranet con news, directory dipendenti e prenotazione risorse",
    "Sistemi di gestione documentale con workflow di approvazione",
    "Dashboard per il monitoraggio KPI e dati di commessa",
    "App per la gestione di ticket, task e richieste interne",
    "Automazioni per notifiche, reminder e processi HR",
    "Integrazione dati da sistemi esterni (SAP, CRM, ERP)"
  ]

  return (
    <section id="why-sharepoint" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">Vantaggi</span>
          <h2 className="section-title">Perché SharePoint?</h2>
          <p className="section-subtitle mx-auto">
            Ottimizza i processi aziendali con soluzioni integrate nell'ecosistema Microsoft 365
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="p-6 rounded-xl card-gradient border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Examples */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-8">
            Esempi di soluzioni realizzabili
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {examples.map((example, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">{example}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhySharePoint
