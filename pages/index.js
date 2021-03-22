import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components//Layout/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Link from 'next/link'
import ArticleList from '../components/ArticleList/index'


export default function Index({ allPosts, users }) {

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)


  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with</title>
        </Head>
        <div className="container mx-auto px-5 flex justify-between">
          {/*  文章左侧 */}
          <div className='w-4/6'>
            {/* {users && users.map((user, index) => {
              return (<ArticleList user={user} key={index}/>)
            })} */}
            <ArticleList users={users} />
          </div>
          {/* 推荐右侧 */}
          <div className='w-30%'>

          </div>
        </div>
        {/* <Container> */}
        {/* <ArtileList />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        {/* </Container> */}
      </Layout>
    </>
  )
}

export async function getStaticProps() {

  let resp = await fetch('https://www.jianshu.com/users/recommended?seen_ids=&count=20&only_unfollowed=true')
  let { users } = await resp.json()

  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts, users },
  }
}
