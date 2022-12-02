import styled from 'styled-components'

export const Form = styled.form`
  .contentForm {
    margin: 10px 0 20px 0;
    .two-columns-form {
      /* display: flex; */
      /* flex-direction: row; */
      /* max-width: 1000px; */
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 10px;
      & > div {
        /* width: 50%; */
      }
      /* .rightForm {
        width: 100%;
        max-width: 450px;
      }
      .leftForm:not(:empty) {
        width: 100%;
        margin-left: 5px;
        & ~ .rightForm {
          margin-right: 5px;
          width: 50%;
        }
      } */
    }
  }
  .colorPicker {
    position: relative;
    width: fit-content;
    .colorSelected {
      width: 30px;
      height: 30px;
      cursor: pointer;
      margin-right: 10px;
    }
    .picker {
      position: absolute;
      top: 0;
      left: 100%;
    }
  }
`
export const TwoColums = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
`
