import styled, { css } from 'styled-components'
import { ContainerW100 } from './../../../styles/globals/globalGrid'
import { bps } from './../../../styles/config/breakpoints'

export const ManageContainer = styled(ContainerW100)`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  padding: 0;
  padding-top: 1.9rem;
  /* padding: 20px 0 20px 0; */
  .leftManage,
  .rigthManage {
    display: flex;
    flex-direction: row;
    align-items: center;
    button {
      margin-right: 10px;
    }
  }
  .rigthManage {
    & > div:nth-child(n + 2) {
      margin: unset;
      /* margin-right: 10px; */
    }
    & > h1 {
      font-size: 18px;
      margin-right: 20px;
      font-weight: 600;
      color: ${(props: any) => props.theme.colors.textBackground.main};
      span {
        margin-left: 5px;
        display: inline-flex;
      }
    }
  }
  .leftManage{
    flex-wrap: wrap;
    button{
      /* margin-bottom: 10px; */
    }
  }
  ${bps.mobile} {
    flex-direction: column-reverse;
    align-items: end;
    padding-top: 0px;
    padding-bottom: 0;
    div:nth-last-child(1) {
      margin-right: 0;
      input {
        width: 90%;
      }
    }
    div:nth-last-child(2) {
      margin-right: 0;
    }
    .rigthManage {
      flex-direction: column;
      width: 100%;
      & > h1 {
        display: none;
      }
    }
    .leftManage {
      margin: 1rem 0;
    }
  }
`
