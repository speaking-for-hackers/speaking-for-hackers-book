import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/outline"

const Hero = ({ start }) => (
  <>
    <div className="max-w-screen-md mx-auto px-5 pt-20 pb-12">
      <div className="text-gray-500 uppercase tracking-wider text-sm font-mono">
        Version 1.0
      </div>
      <h1 className="text-6xl text-white font-bold tracking-tighter mt-2">
        Speaking for Hackers
      </h1>
      <div className="text-gray-500 mt-5 font-medium border-b border-gray-800 pb-3">
        by Ben Orenstein
      </div>
      <div className="text-gray-400 mt-4 text-xl">
        Gain the convidence to choose a talking topic, write your pitch and
        deliver an industry standard talk at your favorite conference.
      </div>
      <Link href={`/post/${start.slug}`}>
        <a
          className="bg-yellow-400 text-gray-900 px-5 py-3
          rounded-full text-xl font-bold mt-5 hover:bg-yellow-300 transform hover:-translate-y-1 transition-all duration-200 grid grid-cols-[1fr,auto] sm:max-w-fit gap-2 items-center"
        >
          Start here <ArrowRightIcon className="h-5 w-5" />
        </a>
      </Link>
    </div>
    <div className="bg-gradient-to-r from-dark-800 via-gray-800 to-dark-800 h-[1px]"></div>
  </>
)
export default Hero
