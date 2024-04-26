import webpack from "webpack";
export function buildLoaders(): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  //модуль лоадеров для обработки файлов, которые выходят за рамки js
  return [tsLoader];
}
