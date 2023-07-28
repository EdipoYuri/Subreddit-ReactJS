import styled from 'styled-components'

type TProps = {
  active?: boolean,
  fullWidth?: boolean,
  margin?: string
}

const TextButton = styled.button<TProps>`
  width: ${({ fullWidth }) => fullWidth ? '100%' : '200px'};
  padding: 10px 0;
  margin: ${({ margin }) => margin ? margin : '0px'};
  border: none;
  border-radius: 8px;

  background-color: ${({ active }) => active ? '#6324C6' : '#A7B0BE'};
  color: #FFFFFF;
  font-size: 20px;
  font-family: 'Mulish', sans-serif;
  font-weight: 600;
  
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`

export default TextButton