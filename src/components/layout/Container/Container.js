import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './Container.styles'

/**
 * Container
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledContainer = styled.div.withConfig({shouldForwardProp})`${styles}`


const Container = ({
  id,
  flex,
  space,
  mobileSpace,
  justifyContent,
  alignItems,
  alignContent,
  direction,
  isPlayground,
  wrap,
  overflow,
  tag,
  gap,
  mobileGap,
  children
}) => {
  return (
    <StyledContainer
      id={id}
      data-testid={id}
      flex={flex}
      space={space}
      mobileSpace={mobileSpace}
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignContent={alignContent}
      direction={direction}
      wrap={wrap}
      overflow={overflow}
      as={tag}
      gap={gap}
      mobileGap={mobileGap}
      isPlayground={isPlayground}
    >
      {children}
    </StyledContainer>)
}

Container.displayName = 'Container'

Container.propTypes = {
  /** Container's id */
  id: PropTypes.string,
  /** Container's children */
  children: PropTypes.node.isRequired,
  /** This Boolean attribute add border to see it on Storybook */
  isPlayground: PropTypes.bool,
  /** Container Flexbox */
  flex: PropTypes.bool,
  /** Container's Padding */
  space: PropTypes.string,
  /** Container's Padding for mobile*/
  mobileSpace: PropTypes.string,
  /** The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. */
  alignItems: PropTypes.string,
  /** The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container. */
  justifyContent: PropTypes.string,
  /** The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross-axis */
  alignContent: PropTypes.string,
  /** The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed). */
  direction: PropTypes.string,
  /** The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked. */
  wrap: PropTypes.string,
  /** Container's overflow */
  overflow: PropTypes.string,
  /** The space between containers */
  gap: PropTypes.string,
  /** The space between containers for mobile*/
  mobileGap: PropTypes.string,
}

Container.defaultProps = {
  tag: 'div',
}

export default Container
