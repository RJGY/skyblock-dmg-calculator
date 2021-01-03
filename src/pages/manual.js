import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ManualDescription from "../components/manual-description" 
import ManualCalculator from "../components/manual-calculator"
import Nav from "../components/nav"
import PreviewImage from "../images/diamond-sword.png"

const Manual = () => (
  <Layout>
    <SEO title="Manual Calculator"
      description=""
      image={PreviewImage}
      article 
    />
    <Nav/>
    <ManualDescription/>
    <ManualCalculator/>
  </Layout>
)

export default Manual
