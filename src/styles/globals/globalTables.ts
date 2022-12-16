import styled from 'styled-components'

export const UserInfo = styled.div<{ index: number }>`
  display: flex;
  align-items: center;
  color: rgb(126, 130, 153);
  font-size: 12px;
  .letter {
    user-select: none;
    height: 40px;
    width: 40px;
    min-width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    border-radius: 50%;
    font-weight: initial;
    ${(props: any) => {
    const colorIndex = props.index % 5
    const colorsArray = Object.values(props.theme.colors.softColors)
    const colorsTextArray = Object.values(props.theme.colors.textSoftColors)
    return `
        background-color: ${colorsArray[colorIndex]};
        color: ${colorsTextArray[colorIndex]};
      `
  }}
  }

  .infoContainer {
    p {
      color: ${(props: any) => props.theme.colors.textBackground.main};
      margin: 0;
    }
    min-width: 250px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      word-break: break-all;
    }
    p,
    span {
      line-height: 20px;
    }
    &.inactive {
      p, span {
        text-decoration: line-through;
      }
    }
  }
`
