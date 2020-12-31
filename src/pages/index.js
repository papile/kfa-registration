import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Signature from "../components/signature"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="mt-10 pt-5">2021 MEMBERSHIP APPLICATION / RENEWAL AND RELEASE</h1>
    <blockquote>
    <p>The undersigned hereby applies for membership or renewal, in the Kayak Fishing Association of NY, Ltd. (“KFA”). I have read, understand and agree to the KFA Bylaws and the inherent risk in participating in the activities of KFA, including fishing trips, which KFA may make available to members. I understand that KFA activities may takeme into remote areas, and that I may not be able to be promptly evacuated or receive proper medical care in the event of injury or disease. I further understand that I am solely responsible for all costs of medical treatment and transportation.</p>
    
    <p>I represent that I have the knowledge and experience to kayak in any sea or water condition and weather in which I choose to participate. I acknowledge that I am solely responsible for my decision to participate even if the KFA or any of its members decides to kayak or fish.</p>
    
    <p>Intending to be legally bound, for myself, my heirs, executors, and administrators, except to the extent that indemnity insurance might be available, I waive, release, indemnify, and hold harmless, KFA, its Officers, Board of Directors,and members, against any and all claims for personal injury, disease, death, and property damage or loss, that I may incur, arising out of or connected in any way with any and all KFA activities (“Claims”). I assume the risk of undertaking all KFA activities, including related travel. I will pay all defendants’ attorneys’ fees and costs if I bring a legal action withrespect to any Claims.</p>
    </blockquote>

    <Signature/>
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
