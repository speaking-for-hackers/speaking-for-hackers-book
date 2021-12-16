import ChapterIndex from "../components/ChapterIndex"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const Home = ({ posts }) => (
  <>
    <Hero
      start={
        posts
          .filter((post) => post.meta.chapter === "before-your-talk")
          .sort((post1, post2) =>
            post1.meta.order > post2.meta.order ? 1 : -1
          )[0]
      }
    />
    <ChapterIndex
      title="Before your talk"
      theme="yellow"
      posts={posts
        .filter((post) => post.meta.chapter === "before-your-talk")
        .sort((post1, post2) => (post1.meta.order > post2.meta.order ? 1 : -1))}
    />
    <ChapterIndex
      title="During your talk"
      theme="green"
      posts={posts
        .filter((post) => post.meta.chapter === "during-your-talk")
        .sort((post1, post2) => (post1.meta.order > post2.meta.order ? 1 : -1))}
    />
    <ChapterIndex
      title="After your talk"
      theme="pink"
      posts={posts
        .filter((post) => post.meta.chapter === "after-your-talk")
        .sort((post1, post2) => (post1.meta.order > post2.meta.order ? 1 : -1))}
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
