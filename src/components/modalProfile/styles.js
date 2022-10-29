import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0,.6);
  z-index: 10000;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ProfileContainer = styled.div`
  width: 70%;
  /* height: 50%; */
  position: relative;
  background-color: #f8fafa;
  max-height: 80%;
  overflow: auto;
  .cerrar {
    position: absolute;
    /* left: 100%;
    bottom: 100%; */
    right: 5px;
    top: 0;
    color: #000;
    font-size: 2em;
    cursor: pointer;
    z-index: 11111;
  }
`