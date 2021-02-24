import React from "react";
import Layout from "../components/layout";
import PreviewImage from "../images/diamond-sword.png";
import SEO from "../components/seo";
import Description from "../components/descriptions/index-description";
import Nav from "../components/nav";

const IndexPage = () => (
  <Layout>
    <SEO title="Skyblock Damage Calculator"
      description=""
      image={PreviewImage}
      article 
    />
    <Nav/>
    <Description/>
  </Layout>
)

export default IndexPage
