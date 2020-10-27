import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby-plugin-modal-routing"
import PropTypes from "prop-types"
import React from "react"
import { Feature } from "."

export const Card = props => {
  const {
    
    image: {
      localFiles: [cover],
    },
    name,
    navigation,
    slug,
    summary,
    country,
    url,
  } = props

  return (
    <div>
    <div className="bg-white h-full shadow-sm rounded-md overflow-hidden hover:bg-blue-100">
      <Link to={`/${slug}`} state={{ navigation }} asModal>
      {/* <a href="{url}" state={{ navigation }}> */}
        <div className="bg-blue-300">
          <Img fluid={cover.childImageSharp.fluid} alt={name} />
        </div>
        <div className="p-5 pb-1">
          <h1 className="text-2xl text-blue-500 font-bold leading-snug">
            {name}
          </h1>
          <p className="text-base text-blue-900 mb-5 font-medium">{summary}</p>
          <Feature label="しょうかいした人" value={country} />
        </div>
      </Link>
    </div>
    <div className="bg-white h-full shadow-sm rounded-md overflow-hidden hover:bg-blue-100">
      <div className="p-5 pb-1">
        <Feature label="サイトへ" value={url} />
      </div>
    </div>
    </div>
  )
}

Card.propTypes = {
  country: PropTypes.string.isRequired,
  image: PropTypes.shape({
    localFiles: PropTypes.array,
  }).isRequired,
  name: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    current: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.string),
  }),
  slug: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
}

Card.defaultProps = {
  navigation: {},
}

export const query = graphql`
  fragment CardImageFragment on AirtableField {
    localFiles {
      childImageSharp {
        fluid(maxWidth: 640, maxHeight: 420, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
