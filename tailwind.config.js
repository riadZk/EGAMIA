module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'dmserif': ['DM Serif', 'serif'],
        'com': ['Comfortaa', 'cursive'],
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out 1',
      },
      keyframes: {
        wiggle: {
          '0%': { 
            margin: ' 0 0 0 100vh' 
          },
          '100%': {
             margin:
             '0px' },
        },
      },
      animation: {
        wiggle2: 'wiggle2 2s ease-in-out infinite',
      },
      keyframes: {
        wiggle2: {
          '50%':{
            padding:'2.5px 0 0 0 '
          },
          '100%': {
             padding: '0px'
            },
        }
      },
      colors: {
        facebook: "#1791f0",
        twitter: "#1da1f5",
        maingreen: "#3fac8e",
        inst:"#020059 ",
        div:"#091E5F",
        btn:"#8ab4f8",
        title:"#70a0ec",
        navg:" rgb(31, 31, 31)",
        spacing: {
          '2.5px': '2.5px',
        },
        bg: {
          DEFAULT:"#f8f9ff",
          card: "#f1f3fa",
        },
        darkbg: {
          DEFAULT: "#20222f",
          card: "#252b43",
          dark: "#1d2029",
        },
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1024px",
        },
      },
    },
  },
  plugins: [],
};