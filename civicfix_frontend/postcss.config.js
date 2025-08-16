/**
 * Minimal PostCSS configuration compatible with Vite + Tailwind
 * Uses the installed Tailwind plugin and Autoprefixer.
 */
export default {
  plugins: {
  // Use the new Tailwind v4 PostCSS plugin package
  '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
