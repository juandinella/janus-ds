import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './MainContainer.styles'


/**
 * MainContainer
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledMainContainer = styled.section.withConfig({shouldForwardProp})`${styles}`

const MainContainer = ({ id, children }) => {
  return <StyledMainContainer id={id}>{children}</StyledMainContainer>
}

MainContainer.displayName = 'MainContainer'

MainContainer.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
}

MainContainer.defaultProps = {}

export default MainContainer
