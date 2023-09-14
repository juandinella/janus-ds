import { css } from 'styled-components'

export default css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: var(--border-radius-round);
  box-shadow: var(--box-shadow-main);
  transition: transform 250ms cubic-bezier(0.33, 0, 0, 1);
  transform: scale3d(1, 1, 1);
  backface-visibility: hidden;
  will-change: transform;
  transform-origin: center center;
  margin-left: auto;

  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  &:focus-visible {
    box-shadow:
      0 0 0 2px white,
      0 0 0 4px #e5e5e5;
  }

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
`
