import styled from 'styled-components'

export const SelectTagInputContainer = styled.div`
  /* text-transform: uppercase; */
  .tagsContainer {
    border: 1px solid rgb(228, 230, 239);
    border-bottom: none;
    padding: 5px 8px 0 8px;
    max-height: 300px;
    overflow: auto;
  }
  .tag {
    background: #41b883;
    border-radius: 5px;
    margin-right: 5px;
    padding-left: 8px;
    color: #fff;
    line-height: 1;
    font-size: 14px;
    margin-bottom: 5px;
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    .icon-close-tag {
      height: 22px;
      width: 22px;
      margin-left: 3px;
      place-content: center;
      display: grid;
      :hover {
        background: #369a6e;
        border-radius: 5px;
      }
    }
  }
`
