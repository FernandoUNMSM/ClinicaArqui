import styled from "styled-components";

interface FormTitleProps {
  align: string
}

export const FormTitle = styled.h1<FormTitleProps>`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  /* width: 100%; */
  margin: 0;
  text-align: ${(props:any) => props.align}
`