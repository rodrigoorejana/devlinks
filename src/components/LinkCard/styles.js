import styled from "styled-components"

export const Card = styled.a`
  display: block;
  width: 300px;
  padding: 14px;
  margin: 10px 0;
  text-align: center;
  border-radius: 10px;
  text-decoration: none;
  background: #1e293b;
  color: white;
  transition: 0.2s;

  &:hover {
    background: #334155;
    transform: translateY(-2px);
  }
`