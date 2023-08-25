import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './SidebarItem.styles'

import Avatar from '../../atoms/Avatar'
import Text from '../../atoms/Text'
import Container from '../../layout/Container'
import Spacer from '../../layout/Spacer'

/**
 * SidebarItem
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledSidebarItem = styled.div.withConfig({shouldForwardProp})`${styles}`

const getInitials = (name) => {
  const splitName = name.split(' ')
  if (splitName.length === 1) return splitName[0][0]
  return splitName[0][0] + splitName[1][0]
}

const SidebarItem = ({id, isOnline, username, lastMessage, lastSeen}) => {
  const avatarText = getInitials(username)

  return (
  <StyledSidebarItem id={id}>
    <Container flex alignItems="center">
      <Avatar size='lg' isOnline={isOnline}>{avatarText}</Avatar>
      <Spacer size='12' />
      <Container>
        <Text weight='bold' size='sm'>{username}</Text>
        <Spacer size='4' />
        <Container flex alignItems="center">
          <Text lineClamp='1' size='xs'>{lastMessage}</Text>
          <Text> - </Text>
          <Text size='xs'>{lastSeen}</Text>
        </Container>
      </Container>
    </Container>
    </StyledSidebarItem>
  )
}

SidebarItem.displayName = 'SidebarItem'

SidebarItem.propTypes = {
  /** Container's id */
  id: PropTypes.string,
}

SidebarItem.defaultProps = {

}

export default SidebarItem
