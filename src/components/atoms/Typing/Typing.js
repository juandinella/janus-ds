import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './Typing.styles'
/**
 * Typing
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledTyping = styled.div.withConfig({ shouldForwardProp })`
  ${styles}
`

const Typing = ({ id }) => {
  return (
    <StyledTyping css={styles} id={id} data-testid={id}>
      <span />
      <span />
      <span />
    </StyledTyping>
  )
}

Typing.displayName = 'Typing'

Typing.propTypes = {
  id: PropTypes.string,
}

export default Typing
