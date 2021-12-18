import { ArrowRightIcon } from "@heroicons/react/outline"

const Tweet = ({ text, link }) => (
  <div className="p-3 text-blue-400 bg-dark-600 rounded-lg my-5 grid grid-cols-[auto,1fr,auto] gap-4 items-center leading-snug">
    <svg
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5156 5.10156C22.4531 4.39844 23.2969 3.55469 23.9531 2.57031C23.1094 2.94531 22.125 3.22656 21.1406 3.32031C22.1719 2.71094 22.9219 1.77344 23.2969 0.601562C22.3594 1.16406 21.2812 1.58594 20.2031 1.82031C19.2656 0.835938 18 0.273438 16.5938 0.273438C13.875 0.273438 11.6719 2.47656 11.6719 5.19531C11.6719 5.57031 11.7188 5.94531 11.8125 6.32031C7.73438 6.08594 4.07812 4.11719 1.64062 1.16406C1.21875 1.86719 0.984375 2.71094 0.984375 3.64844C0.984375 5.33594 1.82812 6.83594 3.1875 7.72656C2.39062 7.67969 1.59375 7.49219 0.9375 7.11719V7.16406C0.9375 9.55469 2.625 11.5234 4.875 11.9922C4.5 12.0859 4.03125 12.1797 3.60938 12.1797C3.28125 12.1797 3 12.1328 2.67188 12.0859C3.28125 14.0547 5.10938 15.4609 7.26562 15.5078C5.57812 16.8203 3.46875 17.6172 1.17188 17.6172C0.75 17.6172 0.375 17.5703 0 17.5234C2.15625 18.9297 4.73438 19.7266 7.54688 19.7266C16.5938 19.7266 21.5156 12.2734 21.5156 5.75781C21.5156 5.52344 21.5156 5.33594 21.5156 5.10156Z"
        fill="#38BDF8"
        className="current-fill"
      />
    </svg>
    <p className="!m-0">{text}</p>
    <a
      href={link}
      className="bg-blue-400 !text-gray-900 !no-underline flex items-center !font-bold px-3 py-2 rounded-full leading-normal hover:bg-white"
      target="_blank"
      rel="noreferrer"
    >
      View <ArrowRightIcon className="w-4 h-4 ml-2" />
    </a>
  </div>
)
export default Tweet
