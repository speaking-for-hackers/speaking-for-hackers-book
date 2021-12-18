import Link from "next/link"
import { useState, useEffect } from "react"

import { getChapterPosts } from "../../util"
import {
  CheckCircleIcon,
  LightBulbIcon,
  PresentationChartLineIcon,
  PlusCircleIcon,
  MinusCircleIcon
} from "@heroicons/react/outline"

const PostNavigation = ({ posts, currentSlug, setShowMobileMenu }) => (
  <aside>
    <ChapterWrapper
      icon={<LightBulbIcon className="w-6 h-6 text-yellow-400" />}
      title="Before your talk"
      hover="hover:text-yellow-400"
      active="border-l border-yellow-400 text-yellow-400"
      currentSlug={currentSlug}
      setShowMobileMenu={setShowMobileMenu}
      defaultOpen={currentSlug.includes("before")}
      posts={getChapterPosts(posts, "before-your-talk")}
    />
    <ChapterWrapper
      icon={<PresentationChartLineIcon className="w-6 h-6 text-green-400" />}
      title="During your talk"
      hover="hover:text-green-400"
      active="border-l border-green-400 text-green-400"
      currentSlug={currentSlug}
      setShowMobileMenu={setShowMobileMenu}
      defaultOpen={currentSlug.includes("during")}
      posts={getChapterPosts(posts, "during-your-talk")}
    />
    <ChapterWrapper
      icon={<CheckCircleIcon className="w-6 h-6 text-pink-400" />}
      title="After your talk"
      hover="hover:text-pink-400"
      active="border-l border-pink-400 text-pink-400"
      currentSlug={currentSlug}
      setShowMobileMenu={setShowMobileMenu}
      defaultOpen={currentSlug.includes("after")}
      posts={getChapterPosts(posts, "after-your-talk")}
    />
  </aside>
)
export default PostNavigation

const ChapterWrapper = ({
  icon,
  title,
  posts,
  hover,
  active,
  currentSlug,
  defaultOpen = false,
  setShowMobileMenu
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const listNumber = (i) => (
    <span className="font-mono opacity-70">
      {i.toString().padStart(2, "0")}.
    </span>
  )

  useEffect(() => {
    if (defaultOpen) setIsOpen(true)
  }, [defaultOpen])

  const handleClick = () => {
    // Only applicable on mobile menu
    if (typeof setShowMobileMenu === "function") {
      // slight delay to compensate for fast page transitions
      setTimeout(() => {
        setShowMobileMenu(false)
      }, 300)
    }
  }
  return (
    <>
      <div
        className="bg-dark-600 text-gray-300 hover:text-white text-base font-bold p-3 md:p-1 grid grid-cols-[32px,1fr,auto] rounded-full items-center hover:cursor-pointer hover:bg-gray-800 my-3 mx-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon} {title}
        {isOpen ? (
          <MinusCircleIcon className="w-6 h-6 text-gray-500" />
        ) : (
          <PlusCircleIcon className="w-6 h-6 text-gray-500" />
        )}
      </div>
      {isOpen && (
        <nav className="text-sm mb-3">
          {posts.map((post, i) => (
            <Link href={`/post/${post.slug}`} passHref key={i}>
              <a
                className={`px-4 py-1 text-gray-500 grid grid-cols-[auto,1fr] gap-1 ${hover} ${
                  post.slug === currentSlug && active
                }`}
                onClick={() => handleClick()}
              >
                {listNumber(i + 1)}
                {post.meta.title}
              </a>
            </Link>
          ))}
        </nav>
      )}
    </>
  )
}
