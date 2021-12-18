import Link from "next/link"
import Logo from "../../components/Logo"
import GitHubIcon from "../Icons/GitHub"
import { DotsVerticalIcon } from "@heroicons/react/outline"

const Header = ({ setShowMobileMenu }) => {
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
    </header>
  )
}
export default Header
