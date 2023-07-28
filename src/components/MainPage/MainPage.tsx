import React, { useEffect, useState } from 'react'

import TextButton from '../Buttons/TextButton'
import PostItem from '../PostItem/PostItem'
import ReactIcon from '../../assets/React-icon.png'

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
import { toast } from 'react-toastify'

type TSinglePost = {
  id: string,
  title: string,
  author: string,
  created_utc: number,
  domain: string,
  url: string,
  stickied: boolean
}

type TPostsList = {
  data: TSinglePost
}

const MainPage = () => {
  const [filter, setFilter] = useState('hot')
  const [isLoading, setLoading] = useState(true)
  const [postsList, setPostsList] = useState<TPostsList[]>([])
  const [limit, setLimit] = useState(9)

  useEffect(() => {
    setPostsList([])
    getPosts(9)
  }, [filter])

  const getPosts = (limit: number) => {
    setLimit(limit)

    setLoading(true)

    fetch(`https://www.reddit.com/r/reactjs/${filter}.json?limit=${limit}`).then(res => {
      if (res.status !== 200) {
        toast('Erro ao buscar os posts. Tente novamente mais tarde.')
        setLoading(false)
        return
      }

      res.json().then(data => {
        if (data !== null) {
          setPostsList(data.data.children)
          setLoading(false)
        }
      })
    })
  }

  const onClickLoadMore = () => getPosts(limit + 10)

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
          />
        ))}

        {isLoading ? (
          <Image
            src={ReactIcon}
            alt="React logo"
            buttonIcon={limit > 10}
          />
        ) : postsList.length === 100 || postsList.length < limit ? (
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