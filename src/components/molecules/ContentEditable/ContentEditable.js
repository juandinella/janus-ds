/* eslint-disable no-param-reassign */
import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './ContentEditable.styles'

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledContentEditable = styled.div.withConfig({ shouldForwardProp })`${styles}`

const ContentEditable = React.forwardRef(({ id, ariaLabel, onBlur, onChange, onKeyDown }, ref) => {

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

  const scrollToBottom = () => {
    if (ref && ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()

    const text = e.clipboardData.getData('text/plain')

    const selection = window.getSelection()
    const range = selection.getRangeAt(0)

    selection.deleteFromDocument()

    const textNode = document.createTextNode(text)
    range.insertNode(textNode)

    range.setStartAfter(textNode)
    range.setEndAfter(textNode)

    selection.removeAllRanges()
    selection.addRange(range)

    scrollToBottom()
  }


  return (
    <StyledContentEditable
      id={id}
      data-testid={id}
      ref={ref}
      contentEditable
      suppressContentEditableWarning="true"
      role="textbox"
      aria-label={ariaLabel}
      onBlur={handleBlur}
      onInput={handleChange}
      onKeyDown={onKeyDown}
      onPaste={handlePaste}
      spellCheck={false}
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
