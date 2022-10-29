import styled from "styled-components"

export const InfoPerfil = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 10px;
  margin-bottom: 20px;

  figure {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
      height: 80%;
    }
  }
  .infoItem {
    :nth-of-type(-n+2) {
     margin-bottom: 5px;
    }
    span {
      font-size: 13px;
      font-weight: bold;
    }
    p {
      font-size: 16px;
    }
  }
`

export const TopInputs = styled.div`
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  height: fit-content;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  .info {
    .infoTitle {
      background-color: #E9E9E9;
      height: 40px;
      padding-left: 10px;
      display: flex;
      align-items: center;
      p {
        text-transform: uppercase;
        font-size: .9em;
        font-weight: 600;
        /* letter-spacing: 1px; */
      }
    }
    .infoItem {
      height: 70px;
      /* background-color: #afa; */
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      .left {
        display: flex;
        align-items: center;
        font-size: .9em;
        p {
          width: 50px;
          font-weight: 600;
        }
      }
      .icon {
        font-size: 2em;
        margin-right: 20px;
        width: 28px;
      }
      .right {
        width: 50%;

      }
      .right p {
        font-size: .9em;
        text-align: right;
      }
    }
  }
`