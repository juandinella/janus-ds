import { css } from 'styled-components'

export default css`
  display: flex;
  align-items: center;

  ${(props) =>
    props.direction === 'ingoing' &&
    css`
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    `}
`
