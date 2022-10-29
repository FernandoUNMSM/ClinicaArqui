import styled from 'styled-components'

export const TableContainer = styled.div`
  height: 100%;
  overflow: auto;

  table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
    min-width: 1000px;
  }
  th {
    font-size: 1.5em;
    color: ${props=> props.theme.colors.primary};

  }
  th, td {
    font-family: 'Roboto Mono', monospace;
    text-align: left;
    padding-top: 16px;
    padding-bottom: 16px;
    margin: 0 10px;
    /* pointer-events: none; */
  }
  tr {
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
    box-sizing: border-box;
    .button {
      background: ${props=> props.theme.colors.primary};
      border: none;
      outline: none;
      color: #fff;
      padding: 10px 15px;
      font-size: 1em;
      cursor: pointer;
      width: 150px;
    }
  }
  td {
    color: #999;
    font-size: 15px;
    line-height: 1.4;
  }
  td:first-child, th:first-child {
    padding-left: 20px;
    padding-right: 20px;
  }
  thead {
    position: sticky;
    background-color: #f8fafa;
    top: 0;
    z-index: 10;
  }
  .on {
    background-color: rgba(130, 223, 230, 0.802);
  }
`