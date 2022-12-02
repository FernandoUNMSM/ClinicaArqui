import styled from 'styled-components'
import { ContainerW100 } from 'styles/globals/globalGrid'

export const TableContainer = styled(ContainerW100)<{ size?: string }>`
  border-radius: 10px;
  background-color: ${(props: any) => props.theme.background.secondary};
  padding: 0 1.9rem 0;
  .table-responsive {
    overflow: auto;
    scrollbar-width: thin;
    margin-top: 10px;
    padding-right: 10px;
    /* max-height: 2000px; */
  }
  table {
    min-width: ${(props) => {
      if (props.size === 'extra_large') return '1500px'
      if (props.size === 'large') return '1300px'
      if (props.size === 'medium') return '800px'
      if (props.size === 'small') return '600px'
      return '1100px'
    }};
    width: 100%;
    text-align: left;
    border-spacing: 0;
    border-collapse: collapse;
  }

  thead {
    border-bottom: 1px dashed rgb(239, 242, 245);
    padding: 0 1rem;
    color: ${(props: any) => props.theme.text.gray2};
  }
  tr {
    border-bottom: 1px dashed rgb(239, 242, 245);
    :nth-last-child(1) {
      border-bottom: none;
    }
  }
  th {
    height: 60px;
    &.selectColumn {
      width: 120px;
      text-align: center;
      &:nth-last-child(1) {
        width: 95px;
      }
    }
  }
  td {
    font-weight: 500;
    color: ${(props: any) => props.theme.text.gray};
    .colorColumn {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
    .lmsColumn {
      color: #fff;
      padding: 5px;
      font-size: 9px;
      border-radius: 4px;
    }
    .red-code {
      color: #e43a45;
      border-radius: 4px;
      margin: 0;
      background-color: #f5f5f5;
      border: 1px solid #ccc;
      font-size: 13px;
      line-height: 1.42857;
      padding: 0 5px;
      width: fit-content;
    }
    .iconsGroupContainer{
      display: grid;
      grid-template-columns: repeat(2, minmax(100px, 1fr));
      gap: 10px;
      .iconsGroup {
        width: 100px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  th,
  td {
    padding: 1.25rem 1rem 1.25rem 0;
    font-size: 13px;
    font-weight: 500;
  }
  .loaderContainer {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .noItems{
    text-align: center;
    color: #000;
    margin: 10px 0;
  }
`
export const TableSimpleContainer = styled(TableContainer)<{ size?: string }>`
  padding: 0;
  background-color: transparent;
`