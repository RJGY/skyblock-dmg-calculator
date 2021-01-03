import React from "react"

import Layout from "../components/layout"
import PreviewImage from "../images/diamond-sword.png"
import SEO from "../components/seo"
import Description from "../components/description" 
import Nav from "../components/nav"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"
      description=""
      image={PreviewImage}
      article 
    />
    <Nav/>
    <Description/>
  </Layout>
)

export default IndexPage
