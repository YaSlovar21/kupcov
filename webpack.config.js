const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

const {paths} = require('./sitemap');

//const faviconPath = 'src/images/favicon.svg';
const canonicalURL = 'https://www.utermo.ru'

module.exports = {
  entry: {
    index: "./src/pages/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    assetModuleFilename: "images/[hash][ext]",
    //publicPath: ''
  },
  // добавили режим разработчика
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8081, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    open: true, // сайт будет открываться сам при запуске npm run dev
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /favicon\.svg/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "",
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
        exclude: [
          path.resolve(__dirname, "./src/images/favicon.svg"),
          path.resolve(__dirname, "./src/blog-images/"),
          path.resolve(__dirname, "./src/insets/schemes/svg-schemes/"),
        ],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
        include: [path.resolve(__dirname, "./src/insets/schemes/svg-schemes/")],
        options: {
          name: "itCanBeWhatever/[name].[ext]", // It does not have to follow same path or file name than files in 'src'
        },
      },
      {
        // загрузка документов в documents/
        test: /\.(doc|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "documents",
            },
          },
        ],
      },
      {
        test: /robots\.txt/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
      {
        test: /\.css$/,
        // при обработке этих файлов нужно использовать
        // MiniCssExtractPlugin.loader и css-loader
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          // Добавьте postcss-loader
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateParameters: {
        canonicalURL,
        items: [
          {
            name: "Пластина ТИ025",
            price: "425 руб",
          },
          {
            name: "ТИ077",
            price: "525 руб",
          },
          {
            name: "ТИ13",
            price: "724 руб",
            type: "plita",
          },
          {
            name: "ТИ18",
            price: "425 руб",
          },
          {
            name: "ТИ28",
            price: "525 руб",
          },
          {
            name: "ТИ45",
            price: "724 руб",
          },
        ],
        categories: [
          {
            name: "Пластина",
          },
          {
            name: "Уплотнение",
          },
          {
            name: "Стяжка/Балка",
          },
          { name: "Втулка" },
          { name: "Штуцер резьбовой" },
          { name: "Вставка резиновая" },
          { name: "Опора" },
          { name: "Станина" },
          { name: "Плита нажимная", isChecked: true, },
          { name: "Шпилька" },
          { name: "Фланец" },
        ],
      },

      title: "Песочница проектов",

      meta: { keywords: "", description: `` },
      template: "./src/index.html", // путь к файлу index.html
      chunks: ["index"],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new SitemapPlugin({ base: canonicalURL, paths }),
  ],
};