import useSWR from 'swr'
import axios from 'axios'
import Comment from '../components/Comment'
import Layout from '../components/Layout'
import { CommentType } from '../types/Types'

const axiosFetcher = async () => {
  const result = await axios.get<CommentType[]>(
    'https://jsonplaceholder.typicode.com/comments/?_limit=10'
  )
  return result.data
}

const CommentPage: React.FC = () => {
  const { data: comments, error } = useSWR('commentsFetch', axiosFetcher)

  if (error) return <span>Error!</span>

  return (
    <Layout title="Comment">
      <p className="text-4xl m-10">comment page</p>
      <ul>
        {comments &&
          comments.map((comment) => <Comment key={comment.id} {...comment} />)}
      </ul>
    </Layout>
  )
}
export default CommentPage
