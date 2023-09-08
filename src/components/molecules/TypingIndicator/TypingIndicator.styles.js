import { css } from 'styled-components'

export default css`
  display: flex;

  .dots {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .dot {
    height: 4px;
    width: 4px;
    border-radius: 100%;
    display: inline-block;
    background: var(--bg-primary-dark);
    margin: 0 2px;
    animation: dots-animation 1.5s infinite ease-in-out;

    @media screen and (prefers-reduced-motion) {
      animation: none;
    }

    &:nth-child(1) {
      animation-delay: calc(300ms * 1);
    }
    &:nth-child(2) {
      animation-delay: calc(300ms * 2);
    }
    &:nth-child(3) {
      animation-delay: calc(300ms * 3);
    }

    @keyframes dots-animation {
      0% {
        transform: translateY(0px);
      }
      20% {
        transform: translateY(-5px);
      }
      44% {
        transform: translateY(0px);
      }
    }
  }
`
