import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import Post from '../components/Post'
import { getAllPostData } from '../lib/fetch'
import { PostType } from '../types/Types'

interface Props {
  posts: PostType[]
}

const BlogPage: React.FC<Props> = ({ posts }) => {
  return (
    <Layout title="Blog">
      <p className="text-4xl mb-10">blog page</p>
      <ul>{posts && posts.map((post) => <Post key={post.id} {...post} />)}</ul>
    </Layout>
  )
}
export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostData()

  return {
    props: {
      posts,
    },
  }
}
