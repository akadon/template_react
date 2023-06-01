import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
import postcssNesting from "postcss-nesting";
import custommediaqueries from "postcss-custom-media";
import cssblankpseudo from "css-blank-pseudo";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig((configEnv) => {
  const isDevelopment = process.env.NODE_ENV === "development";

  return {
    plugins: [
      legacy(),
      checker({ typescript: true }),
      isDevelopment
        ? react({ jsxImportSource: "@welldone-software/why-did-you-render" })
        : react(),
    ],
    resolve: {
      alias: {
        build: isDevelopment
          ? resolve(__dirname, "src", ".build/dev")
          : resolve(__dirname, "src", ".build/prod"),
        app: resolve(__dirname, "src", "app"),
        components: resolve(__dirname, "src", "components"),
      },
    },
    css: {
      tailwindcss: {
        mode: "jit",
        content: ["./src/**/**/**/*.{js,ts,jsx,tsx}"],
      },
      postcss: {
        stage: 3,
        sourceMap: true,
        modules: true,
        addons: [
          "@storybook/addon-links",
          "@storybook/addon-essentials",
          "@storybook/addon-interactions",
          {
            name: "@storybook/addon-styling",
            options: {
              postCss: true,
            },
          },
        ],
        plugins: [
          postcssNesting,
          custommediaqueries,
          cssblankpseudo,
          tailwindcss(),
          autoprefixer,
        ],
      },
      modules: {
        generateScopedName: isDevelopment
          ? "[name]__[local]__[hash:base64:5]"
          : "[hash:base64:5]",
      },
    },
  };
});
