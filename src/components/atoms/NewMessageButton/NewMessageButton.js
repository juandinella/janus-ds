import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './NewMessageButton.styles'


/**
 * NewMessageButton
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledNewMessageButton = styled.button.withConfig({shouldForwardProp})`${styles}`

const NewMessageButton = ({ id, onClick }) => {
  return (
    <StyledNewMessageButton id={id} onClick={onClick || null}>
      <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_24_1217)" fillRule="evenodd" clipRule="evenodd" fill="#4F06A7"><path d="M1.252 2.586A2 2 0 0 1 2.667 2h4.666a.667.667 0 0 1 0 1.333H2.667A.667.667 0 0 0 2 4v9.333a.667.667 0 0 0 .667.667H12a.666.666 0 0 0 .667-.667V8.667a.667.667 0 1 1 1.333 0v4.666a2 2 0 0 1-2 2H2.667a2 2 0 0 1-2-2V4a2 2 0 0 1 .585-1.414Z"/><path d="M13.333 1.92a.748.748 0 0 0-.528.218L6.602 8.341 6.25 9.75l1.41-.353 6.202-6.203a.748.748 0 0 0-.529-1.276Zm-1.471-.725a2.081 2.081 0 0 1 2.943 2.943L8.47 10.471a.666.666 0 0 1-.31.176l-2.666.666a.667.667 0 0 1-.808-.808l.666-2.667a.667.667 0 0 1 .176-.31l6.333-6.333Z"/></g><defs><clipPath id="clip0_24_1217"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
    </StyledNewMessageButton>
  )
}

NewMessageButton.displayName = 'NewMessageButton'

NewMessageButton.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
}

NewMessageButton.defaultProps = {
  onClick: () => null,
}

export default NewMessageButton
