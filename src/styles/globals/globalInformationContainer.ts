import styled, { css } from 'styled-components'

export const InformationContainer = styled.div<{ mode?: string }>`
  background-color: ${(props: any) => props.theme.colors.softColors.blue};
  border-left: 7px solid
    ${(props: any) => props.theme.colors.textSoftColors.blue};
  color: ${(props: any) => props.theme.colors.textBackground.main};
  margin-top: 10px;
  ${(props: any) => {
    if (props.mode === 'error') {
      return css`
        background-color: ${(props: any) => props.theme.colors.softColors.red};
        border-color: ${(props: any) => props.theme.colors.textSoftColors.red};
      `
    } else if (props.mode === 'created') {
      return css`
        background-color: ${(props: any) => props.theme.colors.softColors.green2};;
        border-color: #58d0da;
      `
    }
  }};
  padding: 10px 15px;
  .title {
    margin: 10px 0;
    h1{
      font-size: 20px;
    }
    h2 {
      /* margin: 10px 0; */
      margin: 0;
      font-weight: 200;
      font-size: 20px;
    }
  }
  p {
    /* padding: 3px; */
    padding-bottom: 3px;
    font-size: 13px;
    span {
      color: #e43a45;
      border-radius: 4px;
      margin: 0;
      background-color: #f5f5f5;
      border: 1px solid #ccc;
      font-size: 13px;
      line-height: 1.42857;
      word-break: break-all;
      padding: 0 5px;
      width: fit-content;
    }
  }
`
