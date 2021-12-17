import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { useState } from "react"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import Tweet from "../../components/Tweet"
import PostSidebar from "../../components/PostSidebar"
import Header from "../../components/Header"
import { useRouter } from "next/router"
import PostFooter from "../../components/PostFooter"
import Link from "next/link"
import Logo from "../../components/Logo"
import GitHubIcon from "../../components/Icons/GitHub"
import { XIcon } from "@heroicons/react/outline"
import PostNavigation from "../../components/PostNavigation"
import Heading from "../../components/Heading"

const components = {
  Tweet,
  h2: (props) => <Heading level={2} {...props} />,
  h3: (props) => <Heading level={3} {...props} />
}

const PostPage = ({ meta: { title }, mdxSource, posts }) => {
  const router = useRouter()
  const { slug } = router.query
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <div className="bg-dark-800">
      <Header
        currentSlug={slug}
        posts={posts}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      {showMobileMenu && (
        <>
          <div className="z-40 fixed top-0 inset-x-0 w-full bg-gradient-to-b from-dark-900 to-transparent min-h-screen block md:hidden ">
            <div className="flex justify-between items-center py-4 px-5 border-b border-gray-800">
              <Link href="/" passHref>
                <a className="text-white">
                  <Logo />
                </a>
              </Link>
              <XIcon
                className="w-9 h-9 hover:cursor-pointer text-white hover:bg-gray-900 p-2 rounded-md"
                onClick={() => setShowMobileMenu(false)}
              />
            </div>
            <div className="border-l border-gray-800 max-h-screen ml-4 pt-2 overflow-y-scroll pb-40">
              <PostNavigation
                currentSlug={slug}
                posts={posts}
                setShowMobileMenu={setShowMobileMenu}
              />
              <div className="flex justify-center mt-10">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-gray-300 hover:bg-gray-900 p-2 rounded-md"
                  href="https://github.com/speaking-for-hackers/speaking-for-hackers-book"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
          <div
            className="z-10 fixed inset-0 bg-black bg-opacity-25 h-full backdrop-blur-md"
            aria-hidden="true"
            onClick={() => setShowMobileMenu(false)}
          />
        </>
      )}
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
