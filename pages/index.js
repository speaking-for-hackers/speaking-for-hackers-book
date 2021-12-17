import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import ChapterIndex from "../components/ChapterIndex"
import { getChapterPosts } from "../util"

const Home = ({ posts }) => (
  <>
    <Hero start={getChapterPosts(posts, "before-your-talk")[0]} />
    <ChapterIndex
      title="Before your talk"
      theme="yellow"
      posts={getChapterPosts(posts, "before-your-talk")}
    />
    <ChapterIndex
      title="During your talk"
      theme="green"
      posts={getChapterPosts(posts, "during-your-talk")}
    />
    <ChapterIndex
      title="After your talk"
      theme="pink"
      posts={getChapterPosts(posts, "after-your-talk")}
    />
    <Footer />
  </>
)
export default Home

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"))

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    )
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      meta: frontMatter,
      slug: filename.split(".")[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}
