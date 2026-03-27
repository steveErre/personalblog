/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <main>{children}</main>
    </div>
  )
}

export default Layout
