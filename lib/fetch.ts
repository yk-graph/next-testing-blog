import { PostType } from '../types/Types'

export const getAllPostData = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts/?_limit=10'
  )
  const posts = await res.json()
  return posts
}

export const getAllTaskData = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos/?_limit=10'
  )
  const tasks = await res.json()
  return tasks
}

export const getAllPostIds = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts/?_limit=10'
  )
  const posts = (await res.json()) as PostType[]
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    }
  })
}

export const getPostData = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = (await res.json()) as PostType
  return post
}
