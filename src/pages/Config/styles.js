import styled from "styled-components";

export const ConfigContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  /* position: relative; */
  .titleContainer {
    margin: 20px;
    display: flex;
    justify-content: flex-start;
    color: ${props => props.theme.colors.primary};
  }
  .container {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    .configItem {
      padding: 0 20px;
      width: 100%;
      height: 100px;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .icon {
        font-size: 4em;
        width: 80px;
        margin-right: 20px;
      }
      :hover {
        background-color: #E8E8E8;
      }
    }
  }
`