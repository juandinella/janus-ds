import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './SidebarItem.styles'

import getInitials from '../../../utils/getInitials'
import Avatar from '../../atoms/Avatar'
import Badge from '../../atoms/Badge'
import Text from '../../atoms/Text'
import Container from '../../layout/Container'
import Spacer from '../../layout/Spacer'

/**
 * SidebarItem
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledSidebarItem = styled.button.withConfig({shouldForwardProp})`${styles}`

const SidebarItem = ({id, isOnline, isUnread, username, lastMessage, lastSeen, onClick}) => {
  const avatarText = getInitials(username)

  return (
  <StyledSidebarItem id={id} onClick={onClick || null}>
    <Container flex alignItems="center" space='xs'>
      <Avatar size='lg' isOnline={isOnline}>{avatarText}</Avatar>
      <Spacer size='12' />
      <Container>
        <Text weight='bold' size='sm'>{username}</Text>
        <Spacer size='4' />
        <Container flex >
          <Text weight={isUnread ? 'bold' : 'regular'} lineClamp='1' size='xs' color='neutral-dark'>{lastMessage}</Text>
          <Text size='xs' color='neutral-dark'> - </Text>
          <Text size='xs' color='neutral-dark'>{lastSeen}</Text>
        </Container>
      </Container>
      {isUnread && <Badge/> }
    </Container>
    </StyledSidebarItem>
  )
}

SidebarItem.displayName = 'SidebarItem'

SidebarItem.propTypes = {
  id: PropTypes.string,
  username: PropTypes.string.isRequired,
  isUnread: PropTypes.bool.isRequired,
  isOnline: PropTypes.bool.isRequired,
  lastSeen: PropTypes.string.isRequired,
  lastMessage: PropTypes.string,
  onClick: PropTypes.func
}

SidebarItem.defaultProps = {
  isOnline: false,
  isUnread: false
}

export default SidebarItem
