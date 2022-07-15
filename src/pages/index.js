import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Homepage!! Using Gatsby Tutorial as a guide!</p>
      <StaticImage 
        alt="Photo of a mountain in Colorado."
        src="../images/mountain.jpg"
      />
    </Layout>
  )
}

export default IndexPage