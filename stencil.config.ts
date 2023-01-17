import { Config } from "@stencil/core";
import html from "rollup-plugin-html";
export const config: Config = {
  namespace: "my-custom-component",
  globalStyle: "src/pages/index.css",
  globalScript: "src/pages/index.ts",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
      copy: [
        { src: "pages", keepDirStructure: false },
        {
          src: "../node_modules/@coveo/atomic/dist/atomic",
          dest: "atomic",
          keepDirStructure: false,
        },
      ],
    },
  ],
  rollupPlugins: {
    before: [
      html({
        include: "src/components/**/*.html",
      }),
    ],
  },
};
