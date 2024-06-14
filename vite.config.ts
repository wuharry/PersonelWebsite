/** @format */

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig((configEnv) => {
  // const isDevelopment = configEnv.mode === "development";

  return {
    plugins: [react(), svgr()],
    rules: [
      // 其他规则...
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
    // css: {
    //   modules: {
    //     generateScopedName: isDevelopment
    //       ? "[name]__[local]__[hash:base64:5]"
    //       : "[hash:base64:5]",
    //   },
    // },
  };
});
