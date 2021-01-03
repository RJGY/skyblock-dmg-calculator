import React from "react"

import Layout from "../components/layout"
import PreviewImage from "../images/diamond-sword.png"
import SEO from "../components/seo"
import Description from "../components/description" 
const IndexPage = () => (
  <Layout>
    <SEO title="Home"
      description=""
      image={PreviewImage}
      article 
    />
    <Description/>
  </Layout>
)

export default IndexPage
