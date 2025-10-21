import styled from "styled-components"

export const InputText = styled.input`
  width: 63.5rem;
  height: 5.4rem;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.theme["input-background"]};
  margin-top: 1.8rem;
  font-size: 1.6rem;
  padding-left: 1.6rem;

  &:first-of-type {
    margin-top: -3rem;
  }
`

export const Button = styled.button`
  width: 13.4rem;
  height: 5.4rem;
  margin-top: 3.5rem;
  margin-left: auto;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.theme["light-green"]};
  font-size: 1.8rem;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => props.theme["dark-green"]};
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }
`
