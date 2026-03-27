import * as React from "react"

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Full Stack Developer. Tutti i diritti riservati.
          </p>
          <p className="text-sm text-muted-foreground">
            Sviluppato con <span className="text-primary">♥</span> e React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
