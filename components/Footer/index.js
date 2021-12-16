const Footer = ({ position }) => (
  <div className="mt-20">
    {position !== "sidebar" && (
      <div className="bg-gradient-to-r from-dark-800 via-gray-800 to-dark-800 h-[1px]"></div>
    )}
    <div className="px-5 py-10">
      <p
        className={`max-w-screen-md text-gray-500 text-sm mx-auto ${
          position !== "sidebar" && "text-center"
        }`}
      >
        Copyright &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://twitter.com/r00k"
          target="_blank"
          className="hover:text-white hover:underline hover:underline-offset-2 hover:decoration-yellow-400 transition-all duration-200"
          rel="noreferrer"
        >
          Ben Orenstein
        </a>
        . {position === "sidebar" && <br />}All rights reserved.
      </p>
    </div>
  </div>
)
export default Footer
