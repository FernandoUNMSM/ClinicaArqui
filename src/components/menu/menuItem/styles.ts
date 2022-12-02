import styled from 'styled-components'

export const ContainerMenuItem = styled.div`
  width: 100%;
  li {
    p {
      display: flex;
      align-items: center;
      span {
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.text.gray};
        transition: 0.3s;
        &.title-name {
          font-size: 14px;
          transition: 0.3s;
          font-weight: 500;
          width: max-content;
        }
        &.title-icon {
          margin-right: 10px;
          width: 17px;
          height: 17px;
          transition: 0.3s;
        }
      }
    }
    .link-active {
      .title-name {
        color: #fff;
      }
      .title-icon {
        color: ${(props) => props.theme.colors.solidColors.blue};
      }
    }
    &.item-link {
      transition: 0.3s;
      a {
        display: flex;
        align-items: center;
        padding: 10px 25px;
      }
      &:hover {
        background-color: rgba(26, 26, 39, 1);
      }
      a {
        width: 100%;
      }
    }
  }
`

export const SubMenu = styled.div<{ status: boolean; items: number }>`
  display: flex;
  flex-direction: column;
  transition: .3s;
  height: ${(props: any) => (props.status ? `${44 * props.items}px` : 0)};
  overflow: hidden;
`

export const ItemTitle = styled.li<{ status: boolean; statusSubmenu: boolean }>`
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s;
  /* background-color: ${(props) =>
    props.status
      ? ''
      : props.statusSubmenu
      ? props.theme.colors.grayPrimary
      : 'transparent'}; */

  .title-name, .arrow svg {
    color: ${(props) =>
      props.status ? '#FFF' : props.theme.text.gray}!important;
  }
  .title-icon {
    color: ${(props) =>
      props.status
        ? props.theme.colors.solidColors.blue
        : props.theme.text.gray}!important;
  }

  .arrow {
    transition: 0.3s;
    svg {
      transform: rotate(
        ${(props) => (props.statusSubmenu ? '-90deg' : '0deg')}
      );
    }
  }
  &:hover {
    background-color: rgba(26, 26, 39, 1);
  }
`
