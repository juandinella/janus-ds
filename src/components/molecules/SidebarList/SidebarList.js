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
    <StyledSidebarList id={id} data-testid={id}>
      <Container gap='xxs' flex direction='column'>
        {sidebarList.map(
          ({ id, lastMessage, username, isOnline, isUnread, lastSeen, onClick }) => (
            <SidebarItem
              key={id}
              id={id}
              username={username}
              lastMessage={lastMessage}
              isOnline={isOnline}
              lastSeen={lastSeen}
              isUnread={isUnread}
              onClick={onClick}
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
