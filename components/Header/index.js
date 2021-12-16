import { useState } from "react"
import Link from "next/link"
import Logo from "../../components/Logo"
import GitHubIcon from "../Icons/GitHub"
import { DotsVerticalIcon, XIcon } from "@heroicons/react/outline"
import PostNavigation from "../PostNavigation"
import Footer from "../Footer"

const Header = ({ currentSlug, posts }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  return (
    <header className="px-5 py-4 md:py-5 border-b border-gray-900 bg-dark-900 bg-opacity-50 sticky top-0 z-10 backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <a className="text-gray-400 hover:text-white xl:pl-5">
            <Logo />
          </a>
        </Link>
        <a
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 hover:text-gray-300 hover:bg-gray-900 p-2 rounded-md hidden md:inline-block"
          href="https://github.com/speaking-for-hackers/speaking-for-hackers-book"
        >
          <GitHubIcon />
        </a>
        <div
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-gray-300 hover:bg-gray-900 p-2 rounded-md inline-block md:hidden hover:cursor-pointer"
          onClick={() => setShowMobileMenu(true)}
        >
          <DotsVerticalIcon className="w-5 h-5" />
        </div>
      </div>
      {showMobileMenu && (
        <div className="z-40 absolute top-0 inset-x-0 w-full transition transform origin-top bg-dark-900 min-h-screen block md:hidden">
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
          <div className="border-l border-gray-800 min-h-screen ml-4 pt-2">
            <PostNavigation
              currentSlug={currentSlug}
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
      )}
    </header>
  )
}
export default Header
