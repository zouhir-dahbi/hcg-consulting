/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Deep navy — authority, trust, courtroom gravitas. Primary for
        // buttons, links, and accents throughout the site.
        primary: {
          DEFAULT: '#1B2B4B',
          dark: '#12203C',
          light: '#33477A',
        },
        // Teal accent with light and dark variants for accessible contrast.
        accent: {
          DEFAULT: '#0F6B70',
          light: '#75D5CF',
          dark: '#0B5559',
        },
        // Near-black navy used for dark "feature" sections (footer, process).
        ink: {
          DEFAULT: '#121A2C',
          light: '#1E2C48',
          soft: '#33445F',
        },
      },
      fontFamily: {
        display: ['"Source Serif 4"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px -4px rgba(18, 26, 44, 0.10)',
        'card-hover': '0 14px 34px -10px rgba(18, 26, 44, 0.22)',
      },
      letterSpacing: {
        wider2: '0.12em',
      },
    },
  },
  plugins: [],
};
