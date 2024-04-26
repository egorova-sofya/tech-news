import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {
  //позволяет импортировать файлы без указания расширений
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
