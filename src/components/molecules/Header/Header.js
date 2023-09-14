import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './Header.styles'

import CloseButton from '../../atoms/CloseButton'
import Text from '../../atoms/Text'

/**
 * Header
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledHeader = styled.header.withConfig({ shouldForwardProp })`
  ${styles}
`

const Header = ({ id, text, onClick = () => null }) => {
  return (
    <StyledHeader id={id} data-testid={id}>
      <Text weight="medium" size="sm" color="500">
        {text}
      </Text>
      <CloseButton onClick={onClick} />
    </StyledHeader>
  )
}

Header.displayName = 'Header'

Header.propTypes = {
  id: PropTypes.string,
  text: PropTypes.node,
  onClick: PropTypes.func,
}

export default Header
