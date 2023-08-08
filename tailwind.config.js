/** @type {import('tailwindcss').Config} */
export const content = [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
  "./app.vue",
];
export const theme = {
  extend: {
    screens: {
      // xxs: '320px',
      // => @media (min-width: 320px) { ... }

      xs: "400px",
      // => @media (min-width: 400px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    animation: {
      'spin-slow': 'spin  linear infinite',
    },
    
    colors: {
 primary:"#42454A",
    },
    dropShadow: {
      "3xl": "0 20px 13px rgba(0, 0, 0, 0.15)",
      "4xl": [
        "0 35px 35px rgba(0, 0, 0, 0.25)",
        "0 45px 65px rgba(0, 0, 0, 0.15)",
      ],
    },

    transitionDuration: {
      DEFAULT: "300ms",
    },
    transitionTimingFunction: {
      DEFAULT: "linear",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
      },
    },
   
  },
};

