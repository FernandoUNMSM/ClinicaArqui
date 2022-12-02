import styled from 'styled-components'

export const Container = styled.div`
  height: 65px;
  display: flex;
  flex-direction: column;
  color: #888;
  font-size: 14px;
  width: 100%;
  z-index: 100;

  h1 {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: ${(props: any) => props.theme.colors.textBackground.main};
    width: max-content;
  }
  .route {
    p {
      font-weight: 500;
      font-size: 13px;
      line-height: 26px;
      color: ${(props: any) => props.theme.text.lightGray};
      display: inline-block;
      span {
        margin: 0 5px;
      }
    }
  }
`
