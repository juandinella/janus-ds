import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './Header.styles'

import getInitials from '../../../utils/getInitials'
import Avatar from '../../atoms/Avatar'
import Text from '../../atoms/Text'
import Container from '../../layout/Container'
import Spacer from '../../layout/Spacer'


/**
 * Header
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledHeader = styled.div.withConfig({shouldForwardProp})`${styles}`


const Header = ({ id, username, isOnline, lastSeen }) => {
  const avatarText = getInitials(username)
  return(
    <StyledHeader id={id} data-testid={id}>
      <Container flex alignItems="center">
      <Avatar size='md' isOnline={isOnline}>{avatarText}</Avatar>
      <Spacer size='12' />
      <Container>
        <Text weight='bold' size='sm'>{username}</Text>
        <Spacer size='4' />
        <Container flex alignItems="center">
          <Text size='xs' color='neutral-dark'>{lastSeen}</Text>
        </Container>
      </Container>
    </Container>
    </StyledHeader>
    )
}

Header.displayName = 'Header'

Header.propTypes = {
  id: PropTypes.string,
  username: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  lastSeen: PropTypes.string.isRequired
}

Header.defaultProps = {
  isOnline: false
}

export default Header
