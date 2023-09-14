import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './Loader.styles'

/**
 * Loader
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledLoader = styled.div.withConfig({ shouldForwardProp })`
  ${styles}
`

const Loader = ({ id }) => {
  return (
    <StyledLoader id={id} data-testid={id}>
      <span />
      <span />
      <span />
    </StyledLoader>
  )
}

Loader.displayName = 'Loader'

Loader.propTypes = {
  id: PropTypes.string,
}

export default Loader
