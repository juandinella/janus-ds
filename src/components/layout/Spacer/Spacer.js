import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Horizontal from './components/Horizontal/Horizontal'
import Vertical from './components/Vertical/Vertical'
import { options } from './constants'
import styles from './Spacer.styles'

/**
 * Provides empty space.
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledSpacer = styled.div.withConfig({ shouldForwardProp })`
  ${styles}
`

const Spacer = ({ id, mobileSize, size = '4', isPlayground = false }) => (
  <StyledSpacer
    id={id}
    data-testid={id}
    size={size}
    mobileSize={mobileSize}
    isPlayground={isPlayground}
  />
)

Spacer.displayName = 'Spacer'

Spacer.propTypes = {
  /** Differents sizes of the spacer */
  size: PropTypes.oneOf(options.sizes),
  /* Size for mobile */
  mobileSize: PropTypes.oneOf(options.sizes),
  /** This Boolean attribute add border to see it on Storybook */
  isPlayground: PropTypes.bool,
  /** Spacer's id */
  id: PropTypes.string,
}

Spacer.Horizontal = Horizontal
Spacer.Vertical = Vertical

export default Spacer
