import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './SidebarContainer.styles'

/**
 * SidebarContainer
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledSidebarContainer = styled.aside.withConfig({ shouldForwardProp })`
  ${styles}
`

const SidebarContainer = ({ id, children }) => {
  return (
    <StyledSidebarContainer id={id} data-testid={id} role="navigation">
      {children}
    </StyledSidebarContainer>
  )
}

SidebarContainer.displayName = 'SidebarContainer'

SidebarContainer.propTypes = {
  /** Component id */
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
}

SidebarContainer.defaultProps = {}

export default SidebarContainer
