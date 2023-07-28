import styled from 'styled-components'
import { Plus } from '@styled-icons/entypo/Plus'

import { Hot } from '@styled-icons/boxicons-solid/Hot'
import { NewReleases } from '@styled-icons/material-outlined/NewReleases'
import { ArrowTrendingLines } from '@styled-icons/fluentui-system-filled/ArrowTrendingLines'

export const Content = styled.div`
  width: 90%;
  height: calc(100vh - 91px);
`

export const Container = styled.div<{ orientation: string }>`
  width: 100%;
  display: flex;
  flex-direction: ${({ orientation }) => orientation};
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const Image = styled.img<{ buttonIcon?: boolean }>`
  height: ${({ buttonIcon }) => buttonIcon ? '50' : '300'}px;
  margin-top: ${({ buttonIcon }) => buttonIcon ? '20' : '100'}px;
  margin-bottom: ${({ buttonIcon }) => buttonIcon ? '20' : '0'}px;

  -webkit-animation:spin 4s linear infinite;
  -moz-animation:spin 4s linear infinite;
  animation:spin 4s linear infinite;

  @-moz-keyframes spin { 
    100% { -moz-transform: rotate(360deg); } 
  }

  @-webkit-keyframes spin { 
      100% { -webkit-transform: rotate(360deg); } 
  }

  @keyframes spin { 
      100% { 
          -webkit-transform: rotate(360deg); 
          transform:rotate(360deg); 
      } 
  }
`

export const PlusIcon = styled(Plus)`
  width: 30px;
  margin-right: 5px;
`

export const HotIcon = styled(Hot)`
  width: 20px;
  margin-right: 5px;
`

export const NewIcon = styled(NewReleases)`
  width: 20px;
  margin-right: 5px;
`

export const TrendingIcon = styled(ArrowTrendingLines)`
  width: 20px;
  margin-right: 5px;
`

export const NothingToShowText = styled.span`
  margin: 20px;
  font-size: 20px;
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`