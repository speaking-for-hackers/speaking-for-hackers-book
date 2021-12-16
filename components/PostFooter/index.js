import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/outline"
import { getChapterPosts } from "../../util"

const PostFooter = ({ currentSlug, posts }) => {
  let textTheme
  let chapterPosts = []
  let eyebrow = "Next"
  if (currentSlug.includes("before")) {
    textTheme = "text-yellow-400"
    chapterPosts = getChapterPosts(posts, "before-your-talk")
  } else if (currentSlug.includes("during")) {
    textTheme = "text-green-400"
    chapterPosts = getChapterPosts(posts, "during-your-talk")
  } else if (currentSlug.includes("after")) {
    textTheme = "text-pink-400"
    chapterPosts = getChapterPosts(posts, "after-your-talk")
  }

  // Find next post if there is one
  let nextPost
  const currentPos = chapterPosts.findIndex((post) => post.slug === currentSlug)

  if (currentPos + 1 === chapterPosts.length) {
    if (chapterPosts[currentPos].slug.includes("before")) {
      textTheme = "text-green-400"
      eyebrow = "Next Chapter - During your talk"
      nextPost = getChapterPosts(posts, "during-your-talk")[0]
    } else if (chapterPosts[currentPos].slug.includes("during")) {
      textTheme = "text-pink-400"
      eyebrow = "Next Chapter - After your talk"
      nextPost = getChapterPosts(posts, "after-your-talk")[0]
    } else {
      return <div />
    }
  } else {
    nextPost = chapterPosts[currentPos + 1]
  }

  return (
    <Link href={`/post/${nextPost.slug}`}>
      <a className="!no-underline p-5 bg-dark-600 rounded-lg mt-14 grid grid-cols-[1fr,auto] justify-items-end gap-4 items-center hover:bg-dark-500 group">
        <div className="text-right">
          <div className={`uppercase text-xs ${textTheme} mb-1`}>{eyebrow}</div>
          <div className="text-white">{nextPost.meta.title}</div>
        </div>
        <ArrowRightIcon className="w-6 h-6 text-gray-500 group-hover:text-white" />
      </a>
    </Link>
  )
}
export default PostFooter
