import PropTypes from "prop-types"
import React from "react"
import Image from "./image"


const Header = ({ siteTitle }) => (
  <header>
    <div className="">
      <nav className="flex items-center justify-between flex-wrap bg-blue-900 pl-4 py-4">
        <div className="flex items-center flex-grow text-white mr-6">
          <Image />
          <span className="pl-4 font-bold lg:text-4xl md:text-3xl sm:text-2xl xs:text-lg text-gray-300 tracking-tight">Kayak Fishing Association of New York Registration</span>
        </div>
      </nav>  
    </div>  
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
