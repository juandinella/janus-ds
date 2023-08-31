import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './Search.styles'


/**
 * Search
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledSearch = styled.label.withConfig({shouldForwardProp})`${styles}`

const Search = ({ id, value, name, placeholder, onChange }) => {
  return (
    <StyledSearch id={id} htmlFor={id}>
      <span className='search-icon'>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.33333 3C4.9401 3 3 4.9401 3 7.33333C3 9.72657 4.9401 11.6667 7.33333 11.6667C9.72657 11.6667 11.6667 9.72657 11.6667 7.33333C11.6667 4.9401 9.72657 3 7.33333 3ZM1 7.33333C1 3.83553 3.83553 1 7.33333 1C10.8311 1 13.6667 3.83553 13.6667 7.33333C13.6667 10.8311 10.8311 13.6667 7.33333 13.6667C3.83553 13.6667 1 10.8311 1 7.33333Z" fill="#404040"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M10.3929 10.3929C10.7834 10.0023 11.4166 10.0023 11.8071 10.3929L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L10.3929 11.8071C10.0024 11.4166 10.0024 10.7834 10.3929 10.3929Z" fill="#404040"/>
        </svg>
      </span>
      <input type='search' value={value} name={name} placeholder={placeholder} onChange={onChange} />
    </StyledSearch>
  )
}

Search.displayName = 'Search'

Search.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
}

Search.defaultProps = {}

export default Search
