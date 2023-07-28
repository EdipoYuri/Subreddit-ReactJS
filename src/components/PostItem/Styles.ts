import styled from 'styled-components'
import { PinAngleFill } from '@styled-icons/bootstrap/PinAngleFill'

export const Item = styled.div`
  width: 100%;
  padding: 10px 0;
  border-top: 1px solid #4C5667;

  display: flex;
  flex-direction: row;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.text}20;
  }
`

export const Image = styled.div`
  width: 77px;
  height: 77px;
  border-radius: 8px;
  margin-right: 13px;

  background-color: #A7B0BE;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.div`
  font-size: 20px;
  font-family: 'Mulish', sans-serif;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  display: flex;
  align-items: center;
`

export const CreateInfo = styled.div`
  color: #4c5667;
  font-size: 16px;
  font-family: 'Mulish', sans-serif;
  margin-bottom: 10px;

  a {
    color: #6324c6;
    cursor: pointer;
    text-decoration: none;
  }
`

export const Domain = styled.div`
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`

export const PinContainer = styled.div`
  padding: 5px;
  margin-right: 10px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.primary};
  background-color: #6324c630;

  color: #6324c6;
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 14px;

  display: flex;
  align-items: center;
  display: inline-block;
`

export const PinIcon = styled(PinAngleFill)`
  width: 16px;
  color: #6324c6;
  margin-right: 5px;
`