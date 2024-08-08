import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  corePlugins: {
    preflight: false,
  },
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        lightModeBackground:
          "rgb(var(--light-mode-background) / <alpha-value>)",
        lightModeForeground:
          "rgb(var(--light-mode-foreground) / <alpha-value>)",
        lightModeForegroundMuted:
          "rgb(var(--light-mode-foreground-muted) / <alpha-value>)",
        lightModeLink: "rgb(var(--light-mode-link) / <alpha-value>)",
        darkModeBackground: "rgb(var(--dark-mode-background) / <alpha-value>)",
        darkModeForeground: "rgb(var(--dark-mode-foreground) / <alpha-value>)",
        darkModeForegroundMuted:
          "rgb(var(--dark-mode-foreground-muted) / <alpha-value>)",
        darkModeLink: "rgb(var(--dark-mode-link) / <alpha-value>)",
      },
      fontFamily: {
        sans: "Verdana",
        ...defaultTheme.fontFamily.sans,
        mono: "Intel One Mono",
        ...defaultTheme.fontFamily.mono,
      },
      typography: {
        DEFAULT: {
          css: {
            code: {
              fontFamily: "Intel One Mono",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
    },
  },
};
