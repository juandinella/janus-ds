import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { options } from './constants'
import styles from './SidebarList.styles'

import Container from '../../layout/Container'
import SidebarItem from '../SidebarItem'


/**
 * SidebarList
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledSidebarList = styled.div.withConfig({shouldForwardProp})`${styles}`

const SidebarList = ({ id, sidebarList }) => {
  return (
    <StyledSidebarList id={id}>
      <Container gap='xs' flex direction='column'>
        {sidebarList.map(
          ({ id, lastMessage, username, avatarText, amount, isOnline, isUnread, lastSeen }) => (
            <SidebarItem
              key={id}
              id={id}
              avatarText={avatarText}
              username={username}
              amount={amount}
              lastMessage={lastMessage}
              isOnline={isOnline}
              lastSeen={lastSeen}
              isUnread={isUnread}
            />
          )
        )}
      </Container>
  </StyledSidebarList>
  )
}

SidebarList.displayName = 'SidebarList'

SidebarList.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(options.types),
}

SidebarList.defaultProps = {}

export default SidebarList
