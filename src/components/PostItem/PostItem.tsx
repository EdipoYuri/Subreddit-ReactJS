import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import MissingImg from 'assets/Missing-image.png'

import {
  Item,
  Image,
  Content,
  Title,
  CreateInfo,
  Domain,
  PinIcon,
  PinContainer
} from './Styles'

type TProps = {
  imageUrl?: string,
  title: string,
  author: string,
  domain?: string,
  time: number,
  url: string,
  stickied: boolean,
  thumbnail?: string
}

const PostItem = (props: TProps) => {
  const { title, author, domain, time, url, stickied, thumbnail } = props

  const relativeTime = formatDistanceToNow(new Date(time * 1000), { addSuffix: true, locale: ptBR })

  const onClickOpenPost = () => {
    window.open(url, '_blank')
  }

  const onClickOpenUserProfile = () => {
    window.open(`https://www.reddit.com/user/${author}/`, '_blank')
  }

  return (
    <Item onClick={onClickOpenPost}>
      <Image
        src={thumbnail !== 'self' ? thumbnail : MissingImg}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = MissingImg
        }}
      />

      <Content>
        <div>
          <Title>
            {stickied && (
              <PinContainer>
                <PinIcon />

                Fixado
              </PinContainer>
            )}

            {title}
          </Title>

          <CreateInfo>enviado {relativeTime} por <a onClick={onClickOpenUserProfile}>{author}</a></CreateInfo>
        </div>

        <Domain>{domain}</Domain>
      </Content>
    </Item>
  )
}

export default PostItem