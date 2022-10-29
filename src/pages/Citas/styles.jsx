import styled from 'styled-components'
import { ConfirmDates, ConfirmItem, ConfirmTitle } from 'components/comfirmForm/styles';
export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  overflow: auto;
  position: relative;
`

export const CitasSeccion = styled.div`
  /* overflow: auto; */
`
export const CitasTitle = styled.div`
  h1 {
    padding-top: 10px;
    /* font-size: 1.5em; */
    text-align: center;
    width: 100%;
    color: ${props => props.theme.colors.primary};
  }
`

export const CitasContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  flex-wrap: wrap;
  /* height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-items: center; */

`
export const CitaContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  background-color: #fff;
  border-radius: 10px;
  width: 300px;
  height: fit-content;
  margin: 20px 20px;
  padding-top: 20px;
`
export const CitasDates = styled(ConfirmDates)`
  width: 85%;
`

export const CitasItem = styled(ConfirmItem)`
  margin-top: 15px;
  .icon {
    margin-right: 15px;
  }
`
export const CitaTitle = styled(ConfirmTitle)`
  font-size: .7em;
`