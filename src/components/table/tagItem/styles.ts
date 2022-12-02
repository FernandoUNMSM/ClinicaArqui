import styled from 'styled-components'

export const Tag = styled.div<{ pointer: any }>`
  background-color: #555;
  color: #fff;
  display: inline-flex;
  margin: 0 5px 5px 0;
  font-size: 12px;
  padding: 4px 6px;
  line-height: 1;
  border-radius: 0.25em;
  font-weight: 40;
  ${(props) => props.pointer && 'cursor: pointer; user-select: none'};
`
