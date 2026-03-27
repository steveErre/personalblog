import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import WhySharePoint from "../components/WhySharePoint"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <About />
      <Projects />
      <WhySharePoint />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Full Stack Developer | Portfolio" description="Portfolio professionale di Full Stack Developer specializzato in SharePoint, React, .NET e Azure" />
