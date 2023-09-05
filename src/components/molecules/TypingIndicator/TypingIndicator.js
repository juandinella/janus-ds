import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './TypingIndicator.styles'
import Text from '../../atoms/Text'
import Spacer from  '../../layout/Spacer'

/**
 * TypingIndicator
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledTypingIndicator = styled.div.withConfig({ shouldForwardProp })`
  ${styles}
`

const TypingIndicator = ({ id, children }) => {
  return (
    <StyledTypingIndicator id={id} data-testid={id}>
      <div className='dots'>
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
      <Spacer size='8' />
      <Text size='sm' color='primary-dark'>{children}</Text>
    </StyledTypingIndicator>
  )
}

TypingIndicator.displayName = 'TypingIndicator'

TypingIndicator.propTypes = {
  children: PropTypes.node.isRequired,
}

TypingIndicator.defaultProps = {}

export default TypingIndicator
