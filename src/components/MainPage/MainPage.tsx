import React, { useEffect, useState } from 'react'

import { TextButton, PostItem } from 'components'
import ReactIcon from 'assets/React-icon.png'

import {
  Container,
  Content,
  HotIcon,
  Image,
  NewIcon,
  NothingToShowText,
  PlusIcon,
  TrendingIcon
} from './Styles'
import { getRedditPosts } from 'services/Services'

type TSinglePost = {
  id: string,
  name: string,
  title: string,
  author: string,
  created_utc: number,
  domain: string,
  url: string,
  stickied: boolean,
  thumbnail?: string,
}

type TPostsList = {
  data: TSinglePost
}

const MainPage = () => {
  const [filter, setFilter] = useState('hot')
  const [isLoading, setLoading] = useState(true)
  const [postsList, setPostsList] = useState<TPostsList[]>([])
  const [limit, setLimit] = useState(10)

  useEffect(() => {
    getPosts(10, true)
  }, [filter])

  const getPosts = async (limit: number, clearPosts: boolean) => {
    if (clearPosts) setPostsList([])

    setLoading(true)
    setLimit(limit)

    const response = await getRedditPosts({
      filter,
      limit: 10,
      after: postsList.length > 0 && !clearPosts
        ? postsList[postsList.length - 1].data.name
        : null
    })

    if (!response) return setLoading(false)

    setPostsList(clearPosts
      ? response
      : [...postsList, ...response]
    )
    setLoading(false)
  }

  const onClickLoadMore = () => getPosts(limit + 10, false)

  return (
    <Content>
      <Container orientation='row'>
        <TextButton
          active={filter === 'hot'}
          onClick={() => setFilter('hot')}
        >
          <HotIcon /> Hot
        </TextButton>

        <TextButton
          active={filter === 'new'}
          onClick={() => setFilter('new')}
          margin="10px"
        >
          <NewIcon /> New
        </TextButton>

        <TextButton
          active={filter === 'rising'}
          onClick={() => setFilter('rising')}
        >
          <TrendingIcon /> Rising
        </TextButton>
      </Container>


      <Container orientation='column'>
        {postsList.map(item => (
          <PostItem
            key={item.data.id}
            title={item.data.title}
            author={item.data.author}
            time={item.data.created_utc}
            domain={item.data.domain}
            url={item.data.url}
            stickied={item.data.stickied}
            thumbnail={item.data.thumbnail}
          />
        ))}

        {isLoading ? (
          <Image
            src={ReactIcon}
            alt="React logo"
            buttonIcon={limit > 10}
          />
        ) : postsList.length < limit ? (
          <NothingToShowText>Não há mais posts a serem exibidos</NothingToShowText>
        ) : (
          <TextButton
            active
            fullWidth
            margin={'20px 0'}
            onClick={onClickLoadMore}
          >
            <PlusIcon />  Ver mais
          </TextButton>

        )}
      </Container>
    </Content>
  )
}

export default MainPage