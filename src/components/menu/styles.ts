import styled, { css } from 'styled-components'
import { SubMenu } from 'components/menu/menuItem/styles'
import { bps } from 'styles/config/breakpoints'

export const MenuContainer = styled.div<{ status: boolean }>`
  background-color: rgba(30, 30, 45, 1);
  height: 100vh;
  z-index: 210;
  ul {
    position: fixed;
    padding: 0;
    list-style: none;
    margin: 0;
    background-color: rgba(30, 30, 45, 1);
    transition: 0.3s;
    height: 100vh;
    z-index: 200;
    overflow-x: hidden;
  }
  user-select: none;
  transition: 0.3s;
  .menuManage {
    height: 40px;
    width: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(26, 26, 39, 1);
    height: 70px;
    a {
      width: 70%;
      img {
        width: 100%;
        cursor: pointer;
      }
    }
    svg {
      color: #a7b5c6;
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  }
  ${(props) => {
    if (props.status) {
      return css`
        width: 265px;
        ul {
          width: 265px;
        }
        .menuManage {
          justify-content: space-between;
          a {
            width: 70%;
          }
        }
      `
    } else {
      return css`
        width: 73px;
        img {
          display: none;
        }
        .heading,
        .title-name,
        .arrow {
          opacity: 0;
        }
        ${SubMenu} {
          opacity: 0;
          display: none;
        }
        ul {
          width: 73px;
        }
        ul:hover {
          width: 265px;
          img {
            display: initial;
          }
          .heading,
          .title-name,
          .arrow {
            opacity: unset;
          }
          ${SubMenu} {
            opacity: 1;
            transition: 0.3s;
            display: flex;
          }
          .menuManage {
            justify-content: space-between;
            a {
              width: 70%;
            }
          }
        }
        .menuManage {
          justify-content: center;
          a {
            width: 0;
          }
        }
      `
    }
  }}
  ${bps.tablet} {
    width: 100vw;
    position: fixed;
    background-color: rgba(0, 0, 0, 0);
    transition: 0s;
    user-select: none;
    pointer-events: none;
    opacity: 1;
    ul {
      width: 265px;
      transform: translateX(-100%);
      transition: all 0.3s ease 0s;
    }
    ${(props) => {
      if (props.status) {
        return css`
          /* opacity: 1; */
          pointer-events: initial;
          ul {
            transform: translateX(0);
          }
        `
      } else {
        return css`
          /* opacity: 0; */
          ul {
            transform: translateX(-100%);
          }
        `
      }
    }}
  }
`

export const MenuSection = styled.div`
  h2 {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 300;
    color: #708096;
  }
  li {
    cursor: pointer;
    &.heading {
      padding: 10px 25px;
      cursor: unset;
      transition: 0.3s;
      height: 44px;
      h2 {
        white-space: nowrap;
      }
    }
  }
`
export const IconOpen = styled.div`
  position: fixed;
  height: 70px;
  width: 70px;
  top: 0;
  z-index: 200;
  display: grid;
  place-items: center;
  cursor: pointer;
  svg {
    font-size: 20px;
    color: ${(props: any) => props.theme.colors.textBackground.main};
  }
`
