import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './ComponentName.styles'
import { options } from './constants'


/**
 * ComponentName
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledComponentName = styled.div.withConfig({shouldForwardProp})`${styles}`

const ComponentName = ({ children }) => {
  return <StyledComponentName css={styles}>{children}</StyledComponentName>
}

ComponentName.displayName = 'ComponentName'

ComponentName.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(options.types),
}

ComponentName.defaultProps = {}

export default ComponentName
