import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './SendButton.styles'


/**
 * SendButton
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledSendButton = styled.button.withConfig({shouldForwardProp})`${styles}`

const SendButton = ({ id, onClick  }) => {
  return (
    <StyledSendButton id={id} onClick={onClick || null}>
      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.707 1.293a1 1 0 0 1 0 1.414l-11 11a1 1 0 0 1-1.414-1.414l11-11a1 1 0 0 1 1.414 0Z" fill="#4F06A7"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.707 1.293a1 1 0 0 1 .237 1.037l-7 20a1 1 0 0 1-1.858.076l-3.844-8.648-8.648-3.844a1 1 0 0 1 .076-1.858l20-7a1 1 0 0 1 1.037.237ZM4.711 9.11l6.695 2.975a1 1 0 0 1 .508.508l2.975 6.695L20.37 3.63 4.711 9.11Z" fill="#4F06A7"/></svg>
    </StyledSendButton>
  )
}

SendButton.displayName = 'SendButton'

SendButton.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
}

SendButton.defaultProps = {
  onClick: () => null,
}

export default SendButton
