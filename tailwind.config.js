const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      pink: colors.fuchsia,
      yellow: colors.amber,
      orange: colors.orange,
      blue: colors.sky,
      purple: colors.purple
    },

    extend: {
      colors: {
        dark: {
          500: "#192233",
          600: "#151D2C",
          700: "#171B21",
          800: "#090B0D",
          900: "#020408"
        }
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: (theme) => ({
        "ch-yellow-image": "url('/images/header-graphic-yellow-image.png')",
        "ch-yellow-circles": "url('/images/header-graphic-yellow-circles.svg')",
        "ch-green-image": "url('/images/header-graphic-green-image.png')",
        "ch-green-circles": "url('/images/header-graphic-green-circles.svg')",
        "ch-pink-image": "url('/images/header-graphic-pink-image.png')",
        "ch-pink-circles": "url('/images/header-graphic-pink-circles.svg')"
      }),
      typography: {
        DEFAULT: {
          css: {
            color: "#94A3B8",
            h1: {
              color: "#fff"
            },
            h2: {
              color: "#fff"
            },
            h3: {
              color: "#fff"
            },
            h4: {
              color: "#fff"
            },
            h5: {
              color: "#fff"
            },
            h6: {
              color: "#fff"
            },
            a: {
              color: "#FBBF24",
              "&:hover": {
                color: "#FBBF24"
              }
            },
            em: {
              color: "#94A3B8"
            }
          }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
