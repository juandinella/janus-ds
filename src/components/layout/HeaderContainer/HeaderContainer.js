import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './HeaderContainer.styles'


/**
 * HeaderContainer
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledHeaderContainer = styled.header.withConfig({shouldForwardProp})`${styles}`

const HeaderContainer = ({ id, children }) => {
  return <StyledHeaderContainer id={id} data-testid={id}>{children}</StyledHeaderContainer>
}

HeaderContainer.displayName = 'HeaderContainer'

HeaderContainer.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
}

HeaderContainer.defaultProps = {}

export default HeaderContainer
