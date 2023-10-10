import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import styles from './Textarea.styles'

/**
 * Textarea
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledTextarea = styled.textarea.withConfig({ shouldForwardProp })`
  ${styles}
`

const Textarea = ({ id, placeholder, value, onBlur, onChange, onKeyDown }) => {
  const handleInput = (e) => {
    const textarea = e.target
    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`

    if (onChange) {
      onChange(e)
    }
  }
  return (
    <StyledTextarea
      id={id}
      data-testid={id}
      maxLength="1000"
      rows="1"
      spellCheck={false}
      placeholder={placeholder}
      onBlur={onBlur}
      onChange={handleInput}
      onKeyDown={onKeyDown}
      value={value}
    />
  )
}

Textarea.displayName = 'Textarea'

Textarea.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
}

export default Textarea
