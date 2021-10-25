const colors = require('tailwindcss/colors')
delete colors.lightGray;

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      marianne: ['"Marianne"', "serif"],
    },
    extend: {
      colors: {
        gray: colors.gray,
        bleuFrance: {
          DEFAULT: "#000091",
          500: "#000091",
        },
        rougeMarianne: {
          DEFAULT: "#E1000F",
          500: "#E1000F",
        },
        rose: {
          50: "#fff6f8",
          100: "#ffe5e9",
          200: "#ffc5cf",
          300: "#f899ad",
          400: "#fd5787",
          500: "#e70a69",
          600: "#bd0054",
          700: "#950040",
          800: "#6c002d",
          900: "#49001c",
        },
        cerise: {
          50: "#fff6f7",
          100: "#ffe5e5",
          200: "#ffc6c7",
          300: "#fd989f",
          400: "#fd5b70",
          500: "#e61c4f",
          600: "#bc113f",
          700: "#940a2f",
          800: "#6c0620",
          900: "#490212",
        },
        ruby: {
          50: "#fff7f7",
          100: "#ffe5e3",
          200: "#ffc7c2",
          300: "#fe9990",
          400: "#fe5c58",
          500: "#eb0e2f",
          600: "#bf0d24",
          700: "#960719",
          800: "#6e030f",
          900: "#490402",
        },
        carrot: {
          50: "#fff7f5",
          100: "#fee6df",
          200: "#fcc9b8",
          300: "#fe9b7d",
          400: "#ff5e32",
          500: "#e13203",
          600: "#b82502",
          700: "#8f1e02",
          800: "#641902",
          900: "#401200",
        },
        orange: {
          50: "#fef7f1",
          100: "#ffe7ce",
          200: "#ffcb87",
          300: "#f8a215",
          400: "#d48002",
          500: "#af6400",
          600: "#904f00",
          700: "#723b01",
          800: "#532802",
          900: "#361a00",
        },
        gold: {
          50: "#fbf8f2",
          100: "#ffe9ba",
          200: "#f9d03e",
          300: "#ddaf00",
          400: "#be8b00",
          500: "#9d6e00",
          600: "#815700",
          700: "#664200",
          800: "#4b2d00",
          900: "#311c00",
        },
        lemon: {
          50: "#faf9f2",
          100: "#f3f089",
          200: "#dcdb09",
          300: "#c3b802",
          400: "#a69500",
          500: "#897600",
          600: "#715e00",
          700: "#5b4700",
          800: "#433100",
          900: "#2c1e00",
        },
        lime: {
          50: "#f8f9f2",
          100: "#daf86d",
          200: "#b7e41b",
          300: "#9cc215",
          400: "#809f0f",
          500: "#678012",
          600: "#53670c",
          700: "#3f4f08",
          800: "#2d3806",
          900: "#1e2304",
        },
        green: {
          50: "#f6faf5",
          100: "#aaffa4",
          200: "#2cf451",
          300: "#16d140",
          400: "#0fab33",
          500: "#318736",
          600: "#0b6f20",
          700: "#005612",
          800: "#003d09",
          900: "#102510",
        },
        emerald: {
          50: "#f4faf6",
          100: "#a3fec7",
          200: "#1af293",
          300: "#00cf7a",
          400: "#10a964",
          500: "#02884f",
          600: "#006e3d",
          700: "#00552e",
          800: "#063c22",
          900: "#072616",
        },
        turquoise: {
          50: "#f3faf7",
          100: "#8effe2",
          200: "#04efc1",
          300: "#02cca3",
          400: "#02a785",
          500: "#00876b",
          600: "#006d55",
          700: "#005441",
          800: "#003c2f",
          900: "#03261d",
        },
        submarine: {
          50: "#f2faf9",
          100: "#82fff4",
          200: "#02eddb",
          300: "#02cabb",
          400: "#00a699",
          500: "#02857a",
          600: "#026b63",
          700: "#00534c",
          800: "#003b36",
          900: "#002622",
        },
        leaf: {
          50: "#f2fafa",
          100: "#79ffff",
          200: "#02ebef",
          300: "#00c9cd",
          400: "#01a4a7",
          500: "#008486",
          600: "#016a6d",
          700: "#015254",
          800: "#003b3c",
          900: "#002626",
        },
        beach: {
          50: "#f2fafb",
          100: "#b0f7ff",
          200: "#34e9fd",
          300: "#00c7dc",
          400: "#00a3b5",
          500: "#008393",
          600: "#016977",
          700: "#00525c",
          800: "#003a41",
          900: "#00252a",
        },
        island: {
          50: "#f2fafc",
          100: "#c0f2ff",
          200: "#85e1ff",
          300: "#23c4ed",
          400: "#1ba1c3",
          500: "#14819d",
          600: "#0f687f",
          700: "#095063",
          800: "#043947",
          900: "#02242e",
        },
        teal: {
          50: "#f5f9fe",
          100: "#dbedff",
          200: "#afd9ff",
          300: "#67bcff",
          400: "#099ce7",
          500: "#157db9",
          600: "#156496",
          700: "#004e77",
          800: "#073755",
          900: "#042338",
        },
        azure: {
          50: "#f6f8fd",
          100: "#e1ebff",
          200: "#bed5ff",
          300: "#8bb6ff",
          400: "#4195f9",
          500: "#0e78d4",
          600: "#1060ae",
          700: "#0c4a85",
          800: "#093462",
          900: "#08213f",
        },
        indigo: {
          50: "#f9f8fc",
          100: "#efe8fc",
          200: "#deccfd",
          300: "#c6a5fb",
          400: "#a87bfd",
          500: "#8a50fc",
          600: "#6b26fb",
          700: "#5000da",
          800: "#38029f",
          900: "#21026e",
        },
        pink: {
          50: "#faf7fb",
          100: "#fce3ff",
          200: "#fcc1ff",
          300: "#f88cff",
          400: "#ef42ff",
          500: "#ca0ee0",
          600: "#a403ba",
          700: "#7f0394",
          800: "#5b046c",
          900: "#3d004b",
        },
        violet: {
          50: "#fcf7fa",
          100: "#ffe3f7",
          200: "#ffc1ef",
          300: "#ff8be3",
          400: "#ff3fcf",
          500: "#d917a8",
          600: "#b20b87",
          700: "#8d0268",
          800: "#67004a",
          900: "#460031",
        },
        red: {
          50: "#fdf7f9",
          100: "#ffe4ef",
          200: "#ffc3df",
          300: "#ff91ca",
          400: "#ff4bb1",
          500: "#e1108c",
          600: "#b8086f",
          700: "#910354",
          800: "#6a013a",
          900: "#480024",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
