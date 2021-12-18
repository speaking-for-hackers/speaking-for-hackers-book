import Link from "next/link"
import {
  ClipboardCheckIcon,
  LightBulbIcon,
  PresentationChartLineIcon
} from "@heroicons/react/outline"

const ChapterIndex = ({ title, theme, posts }) => {
  let Icon = LightBulbIcon
  let bg = "bg-gray-600"
  let bgCircles = "bg-ch-yellow-circles"
  let bgImage = "bg-ch-yellow-image"
  let iconColor = "text-white"
  let numberHoverColor = "group-hover:text-white"
  switch (theme) {
    case "yellow":
      Icon = LightBulbIcon
      bg = "bg-gradient-to-tr from-orange-500 via-yellow-300 to-yellow-400"
      bgCircles = "bg-ch-yellow-circles"
      bgImage = "bg-ch-yellow-image"
      iconColor = "text-yellow-200"
      numberHoverColor = "group-hover:text-yellow-500"
      break
    case "green":
      Icon = PresentationChartLineIcon
      bg = "bg-gradient-to-tr from-blue-500 via-green-400 to-green-400"
      bgCircles = "bg-ch-green-circles"
      bgImage = "bg-ch-green-image"
      iconColor = "text-green-200"
      numberHoverColor = "group-hover:text-green-500"
      break
    case "pink":
      Icon = ClipboardCheckIcon
      bg = "bg-gradient-to-tr from-purple-500 via-pink-500 to-pink-500"
      bgCircles = "bg-ch-pink-circles"
      bgImage = "bg-ch-pink-image"
      iconColor = "text-pink-200"
      numberHoverColor = "group-hover:text-pink-500"
      break
    default:
      Icon = LightBulbIcon
      bg = "bg-gray-600"
      break
  }

  const listNumber = (i) => (
    <span className={`text-gray-600 font-mono ${numberHoverColor}`}>
      {i.toString().padStart(2, "0")}.
    </span>
  )

  return (
    <div className="max-w-screen-md mx-auto px-5 pt-12">
      <div
        className={`${bg} px-5 py-10 grid grid-cols-[36px,1fr] gap-5 rounded-xl relative overflow-hidden`}
      >
        <Icon className={`w-9 h-9 ${iconColor} z-10`} />
        <h2 className="text-3xl text-gray-900 font-bold tracking-tight z-10">
          {title}
        </h2>
        <div
          className={`${bgCircles} absolute top-0 right-0 w-full h-full bg-no-repeat bg-right z-0 opacity-50 sm:opacity-100`}
        />
        <div
          className={`${bgImage} absolute top-0 right-0 w-full h-full bg-no-repeat bg-right mix-blend-multiply z-0`}
        />
      </div>
      <div className="text-gray-400 mx-0 my-5 sm:m-5">
        <div className="sm:columns-2 sm:gap-10">
          {posts &&
            posts.map((post, i) => (
              <Link href={`/post/${post.slug}`} passHref key={i}>
                <a className="grid grid-cols-[auto,1fr] gap-1 leading-5 mb-4 hover:text-white group">
                  {listNumber(i + 1)} {post.meta.title}
                </a>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
export default ChapterIndex
