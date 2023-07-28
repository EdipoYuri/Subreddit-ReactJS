import styled from 'styled-components'

export const Bar = styled.header`
  width: 100%;
  height: 91px;
  background-color: #6324C6;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.a`
  color: #FFFFFF;
  font-size: 36px;
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  text-decoration: none;

  cursor: pointer;
  
  span {
    color: #FFB800;
  }
`

export const Button = styled.button<{ disable?: boolean }>`
  width: 80px;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  margin-right: 20px;
  pointer-events: ${({ disable }) => disable ? 'none' : 'all'};
`