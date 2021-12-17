function getAnchor(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/[ ]/g, "-")
}

const Heading = ({ children, level }) => {
  const Component = `h${level}`
  const anchor = getAnchor(children)
  const link = `#${anchor}`

  return (
    <Component
      id={anchor}
      className="group flex whitespace-pre-wrap -ml-4 pl-4"
    >
      <a
        href={link}
        aria-label="Anchor"
        className="absolute -ml-8 mt-1 flex items-center opacity-0 border-0 group-hover:opacity-100"
      >
        <div className="w-4 h-4 text-gray-400 hover:text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8772 10.1228C13.127 9.37296 12.1098 8.9517 11.0492 8.9517C9.9885 8.9517 8.97126 9.37296 8.22115 10.1228L4.22115 14.1228C3.83911 14.4918 3.53438 14.9332 3.32475 15.4212C3.11511 15.9092 3.00477 16.4341 3.00015 16.9652C2.99554 17.4964 3.09674 18.0231 3.29787 18.5147C3.49899 19.0062 3.796 19.4529 4.17157 19.8284C4.54714 20.204 4.99375 20.501 5.48534 20.7021C5.97692 20.9033 6.50364 21.0045 7.03476 20.9998C7.56587 20.9952 8.09076 20.8849 8.57877 20.6753C9.06679 20.4656 9.50817 20.1609 9.87715 19.7788L10.9792 18.6778M10.2212 13.7788C10.9713 14.5287 11.9885 14.95 13.0492 14.95C14.1098 14.95 15.127 14.5287 15.8772 13.7788L19.8772 9.77885C20.6058 9.02444 21.009 8.01403 20.9998 6.96524C20.9907 5.91646 20.5701 4.91321 19.8284 4.17157C19.0868 3.42994 18.0835 3.00926 17.0348 3.00015C15.986 2.99104 14.9756 3.39422 14.2212 4.12285L13.1212 5.22285"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </a>
      <span>{children}</span>
    </Component>
  )
}
export default Heading
