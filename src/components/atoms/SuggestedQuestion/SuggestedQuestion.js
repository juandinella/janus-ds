import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './SuggestedQuestion.styles'

/**
 * SuggestedQuestion
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledSuggestedQuestion = styled.button.withConfig({ shouldForwardProp })`
  ${styles}
`

const SuggestedQuestion = ({ id, children, onClick = () => null }) => {
  return (
    <StyledSuggestedQuestion id={id} data-testid={id} onClick={onClick || null}>
      <span>{children}</span>
    </StyledSuggestedQuestion>
  )
}

SuggestedQuestion.displayName = 'SuggestedQuestion'

SuggestedQuestion.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export default SuggestedQuestion
