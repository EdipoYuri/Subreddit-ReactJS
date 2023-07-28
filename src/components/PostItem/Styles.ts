import styled from 'styled-components'
import { PinAngleFill } from '@styled-icons/bootstrap/PinAngleFill'
import { ArrowUp } from '@styled-icons/entypo/ArrowUp'
import { ChatRightDotsFill } from '@styled-icons/bootstrap/ChatRightDotsFill'

export const Item = styled.article`
  width: 100%;
  padding: 10px 0;
  border-top: 1px solid #4C5667;

  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.text}20;
  }
`

export const Image = styled.img`
  width: 77px;
  height: 77px;
  border-radius: 8px;
  margin-right: 13px;
  margin-left: 5px;

  background-color: #A7B0BE;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Interactions = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const InteractionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
`

export const InteractionText = styled.span`
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.textLight}90;
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
  color: ${({ theme }) => theme.textLight};
  font-size: 16px;
  font-family: 'Mulish', sans-serif;
  margin-bottom: 10px;

  a {
    color:  ${({ theme }) => theme.text};
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
  background-color:  ${({ theme }) => theme.primary}30;

  color:  ${({ theme }) => theme.primary};
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 14px;

  display: flex;
  align-items: center;
  display: inline-block;
`

export const PinIcon = styled(PinAngleFill)`
  width: 16px;
  margin-right: 5px;
  color:  ${({ theme }) => theme.primary};
`

export const ArrowIcon = styled(ArrowUp)`
  width: 30px;
  margin-right: 10px;
  color: ${({ theme }) => theme.textLight}90;
`

export const ChatIcon = styled(ChatRightDotsFill)`
  width: 24px;
  margin-right: 10px;
  color: ${({ theme }) => theme.textLight}90;
`