import { css } from 'styled-components'

const avatarSizes = {
  sm: css`
    --size: 28px;
    font-size: var(--font-size-xs);
  `,
  md: css`
    --size: 38px;
    font-size: var(--font-size-md);
  `,
  lg: css`
    --size: 42px;
    font-size: var(--font-size-lg);
  `,
}

export default css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-primary-lighter);
  color: var(--text-color-primary-darker);
  font-weight: var(--font-weight-semi);
  border-radius: var(--border-radius-md);
  text-transform: uppercase;
  height: var(--size);
  width: var(--size);

  ${(props) => props.size && avatarSizes[props.size]}

  ${(props) =>
    props.isOnline &&
    css`
      position: relative;

      &:after {
        content: '';
        width: 14px;
        height: 14px;
        background-color: var(--bg-success);
        position: absolute;
        bottom: -2px;
        right: -4px;
        border-radius: 100%;
        border: 2px solid white;
      }
    `}
`
