import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './Badge.styles'

/**
 * Badge
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledBadge = styled.div.withConfig({shouldForwardProp})`${styles}`

const Badge = ({ id }) => {
  return <StyledBadge id={id}/>
}

Badge.displayName = 'Badge'

Badge.propTypes = {
  /** Component id */
  id: PropTypes.string,
}

Badge.defaultProps = {}

export default Badge
