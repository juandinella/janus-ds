import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './ContentEditable.styles'

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledContentEditable = styled.div.withConfig({ shouldForwardProp })`${styles}`

const ContentEditable = React.forwardRef(({ ariaLabel, onBlur, onChange, onKeyDown }, ref) => {

  const handleBlur = () => {
    if (ref && ref.current && onBlur) {
      onBlur(ref.current.innerHTML)
    }
  }

  const handleChange = () => {
    if (ref && ref.current && onChange) {
      onChange(ref.current.innerHTML)
    }
  }

  return (
    <StyledContentEditable
      ref={ref}
      contentEditable
      suppressContentEditableWarning="true"
      role="textbox"
      aria-label={ariaLabel}
      onBlur={handleBlur}
      onInput={handleChange}
      onKeyDown={onKeyDown}
    />
  )
})

ContentEditable.displayName = 'ContentEditable'

ContentEditable.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  ariaLabel: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
}

ContentEditable.defaultProps = {
  ariaLabel: 'Campo de mensaje',
}

export default ContentEditable
