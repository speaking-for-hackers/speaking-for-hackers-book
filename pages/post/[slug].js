import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import Tweet from "../../components/Tweet"
import PostSidebar from "../../components/PostSidebar"
import Header from "../../components/Header"
import { useRouter } from "next/router"
import PostFooter from "../../components/PostFooter"

const components = { Tweet }

const PostPage = ({ meta: { title }, mdxSource, posts }) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div className="bg-dark-800 min-h-screen">
      <Header currentSlug={slug} posts={posts} />
      <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] min-h-screen max-w-screen-xl mx-auto">
        <PostSidebar posts={posts} currentSlug={slug} />
        <main className="prose prose-sm sm:prose lg:prose-lg m-5 md:m-10 justify-self-center">
          <h1>{title}</h1>
          <MDXRemote {...mdxSource} components={components} />
          <PostFooter currentSlug={slug} posts={posts} />
        </main>
      </div>
    </div>
  )
}
export default PostPage

// Get all paths of posts
export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", "")
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  // Get data for page
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  )
  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  // Get all posts for sidebar nav
  const files = fs.readdirSync(path.join("posts"))
  const posts = files.map((filename) => {
    const markdownMeta = fs.readFileSync(path.join("posts", filename), "utf-8")
    const {
      data: { title, order, chapter }
    } = matter(markdownMeta)

    return {
      meta: {
        title,
        order,
        chapter
      },
      slug: filename.split(".")[0]
    }
  })

  return {
    props: {
      meta: frontMatter,
      slug,
      mdxSource,
      posts
    }
  }
}
