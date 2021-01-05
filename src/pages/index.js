import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Signature from "../components/signature"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="mt-10 pt-5">2021 MEMBERSHIP APPLICATION / RENEWAL AND RELEASE</h1>

    <Signature/>
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
