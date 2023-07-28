import React from 'react'

import { Item, Image, Content, Title, CreateInfo, Domain, PinIcon, PinContainer } from './Styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

type TProps = {
  imageUrl?: string,
  title: string,
  author: string,
  domain?: string,
  time: number,
  url: string,
  stickied: boolean
}

const PostItem = (props: TProps) => {
  const { title, author, domain, time, url, stickied } = props

  const relativeTime = formatDistanceToNow(new Date(time * 1000), { addSuffix: true, locale: ptBR })

  const onClickOpenPost = () => {
    window.open(url, '_blank')
  }


  return (
    <Item onClick={onClickOpenPost}>
      <Image />

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

          <CreateInfo>enviado {relativeTime} por <a href={`https://www.reddit.com/user/${author}/`}>{author}</a></CreateInfo>
        </div>

        <Domain>{domain}</Domain>
      </Content>
    </Item>
  )
}

export default PostItem