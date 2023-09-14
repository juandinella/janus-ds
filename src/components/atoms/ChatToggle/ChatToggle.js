import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './ChatToggle.styles'
import ScreenReaderText from '../ScreenReaderText'

/**
 * ChatToggle
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledChatToggle = styled.button.withConfig({ shouldForwardProp })`
  ${styles}
`

const ChatToggle = ({
  id,
  disabled = false,
  isClicked = false,
  onClick = () => null,
  backgroundColor = '#171717',
  color = '#FFFFFF',
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <StyledChatToggle
      id={id}
      data-testid={id}
      onClick={handleClick}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        shapeRendering="geometricPrecision"
        vectorEffect="non-scaling-stroke"
      >
        {isClicked ? (
          <>
            <path
              fill={color}
              fillRule="evenodd"
              d="M15.59 4.41a.833.833 0 010 1.18l-10 10a.833.833 0 11-1.18-1.18l10-10a.833.833 0 011.18 0z"
              clipRule="evenodd"
            />
            <path
              fill={color}
              fillRule="evenodd"
              d="M4.41 4.41a.833.833 0 011.18 0l10 10a.833.833 0 11-1.18 1.18l-10-10a.833.833 0 010-1.18z"
              clipRule="evenodd"
            />
          </>
        ) : (
          <path
            fill={color}
            fillRule="evenodd"
            d="M4.167 3.333a.833.833 0 00-.834.834v11.321l1.911-1.91a.833.833 0 01.59-.245h10a.833.833 0 00.833-.833V4.167a.833.833 0 00-.834-.834H4.167zM2.399 2.4a2.5 2.5 0 011.768-.732h11.666a2.5 2.5 0 012.5 2.5V12.5a2.5 2.5 0 01-2.5 2.5H6.18l-3.09 3.09a.833.833 0 01-1.422-.59V4.167A2.5 2.5 0 012.4 2.399z"
            clipRule="evenodd"
          />
        )}
      </svg>
      <ScreenReaderText>
        {isClicked ? 'Close Chat' : 'Open Chat'}
      </ScreenReaderText>
    </StyledChatToggle>
  )
}

ChatToggle.displayName = 'ChatToggle'

ChatToggle.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  isClicked: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
}

export default ChatToggle
