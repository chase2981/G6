// import webWorkerLoader from "rollup-plugin-web-worker-loader";
// import 
export default {
  entry: './src/index.ts',
  // esm: "rollup",
  // cjs: "rollup",
  esm: "babel",
  cjs: "babel",
  // extraRollupPlugins: [
  //   webWorkerLoader({
  //     extensions: [".ts"],
  //     skipPlugins: ["url"]
  //   })
  // ],
  extraBabelPlugins: [
    ['babel-plugin-inline-import', {
      "extensions": [
        ".worker.js",
        ".worker.esm.js"
      ]
    }],
  ],
};
