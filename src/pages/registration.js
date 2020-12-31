import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Registration from "../components/registration"

const SecondPage = () => (
  <Layout>
    <SEO title="Registration" />
    <Registration/>
  </Layout>
)

export default SecondPage
