import axios from 'axios'
import { toast } from 'react-toastify'
const baseURL = 'https://www.reddit.com/r/reactjs'

type TGetPostsParams = {
  filter: string,
  limit: number,
  after: string | null
}

type TSinglePost = {
  id: string,
  name: string,
  title: string,
  author: string,
  created_utc: number,
  domain: string,
  url: string,
  stickied: boolean,
  thumbnail?: string
}

type TPostsList = {
  data: TSinglePost
}

type TRequestData = {
  children: TPostsList[]
}

type TGetPostsResponse = {
  data: TRequestData,
  status: number,
}

export const getRedditPosts = async (params: TGetPostsParams) => {
  try {
    const { filter, limit, after } = params

    const response = await axios.get<TGetPostsResponse>(
      `${baseURL}/${filter}.json?limit=${limit}&after=${after}`
    )

    return response.data.data.children
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast(`Erro ao buscar os posts: ${error.response?.data}`)
      return []
    }

    console.error(`Aconteceu um erro: ${error}`)
    return []
  }
}