/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindAttributes: ["class", "className"],
  tailwindFunctions: ["cn", "cva"],
  tailwindConfig: "./tailwind.config.mjs",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
