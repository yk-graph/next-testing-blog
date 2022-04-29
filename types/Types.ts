export interface PostType {
  userId: string
  id: string
  title: string
  body: string
}

export interface CommentType {
  postId: string
  id: string
  name: string
  email: string
  body: string
}

export interface TodoType {
  userId: string
  id: string
  title: string
  completed: boolean
}
