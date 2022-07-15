const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const {paths} = require('./sitemap');

//const faviconPath = 'src/images/favicon.svg';
const canonicalURL = 'https://www.utermo.ru'

//import {initialHeatEx} from './src/js/utils/constants.js';
//console.log(initialHeatEx);

module.exports = {
  entry: {
    /*index: "./src/pages/index.js",
    all: "./src/pages/all.js",
    map: "./src/pages/map.js",
    pto: "./src/pages/pto.js",
    ti: "./src/pages/ti.js",
    btp: "./src/pages/btp.js",
    production: "./src/pages/production.js",
    service: "./src/pages/service.js",
    about: "./src/pages/about.js",
    contacts: "./src/pages/contacts.js",
    blogSection: "./src/pages/blog-section.js",
    blogPage: "./src/pages/blog-page.js",
    equipment: "./src/pages/equipment1.js",*/
    lppto: "./src/upages/lppto.js",
    docs: "./src/upages/docs.js",
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
      /*{ // грузим инлайново из файлика шаблона страницы блога
       test: /\.html$/,
       include: [
         path.resolve(__dirname, './src/articles/')
       ],
       loader: "html-loader"
      },*/
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
        exclude: [
          path.resolve(__dirname, "./src/images/favicon.svg"),
          path.resolve(__dirname, "./src/blog-images/"),
        ],
      },
      /*{
        // Прогрузка картинок в блог в обход лоадера
        // Для сохранения имени, которое указывалось в отдельном файлике (прогруз через fs)
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        use: [
          { loader: "file-loader",
            options: { name: "[name].[ext]",  outputPath: "blog-images",},
          }],
        include: [path.resolve(__dirname, "./src/blog-images/")],
      },*/
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
      },
      title:
        "Производство и поставка блочных тепловых пунктов",
      meta: {
        keywords: "российское производство теплообменников",
        description: `ООО Термоблок - производитель пластинчатых теплообменников со 100% локализацией 
          изготовление пластин, уплотнений и ряда комплектующих для теплообменников торговой марки Теплохит`,
      },
      template: "./src/index.html", // путь к файлу index.html
      chunks: ["index", "all", "map"],
    }) /*---------ПРОДУКЦИЯ----------- */,
    new HtmlWebpackPlugin({
      templateParameters: {
        canonicalURL,
      },
      title:
        "Производство теплообменого оборудования, пластинчатых теплообменников, тепловых пунктов",
      meta: {
        keywords: "производство теплообменного оборудования",
        description:
          "Отечественный производитель теплообменного оборудования. Изготовление пластинчатых теплообменников, тепловых пунктов.",
      },
      template: "./src/production.html",
      filename: "production.html",
      chunks: ["production", "all"],
      inject: true,
    }),
    /*---------ПЛАСТИНЧАТЫЕ ТЕПЛООБМЕННИКИ----------- */
    new HtmlWebpackPlugin({
      templateParameters: {
        canonicalURL,
      },
      title:
        "Пластинчатые теплообменники, производство полного цикла, для горячего водоснабжения, отопления, пищевые",
      meta: {
        keywords:
          "пластинчатые теплообменники, производство пластинчатых теплоомбенников",
        description:
          "100% локализация производства пластинчатых теплообменников: пластин, уплотнений, теплообменников. Выгодное предложение за счёт оптовой закупки металла и серийного производства пластин.",
      },
      template: "./src/plastinchatye-teploobmenniki.html",
      filename: "plastinchatye-teploobmenniki.html",
      chunks: ["pto", "all", "map"],
    })  /*---------БЛОЧНЫЕ ТЕПЛОВЫЕ ПУНТЫ----------- */,
    new HtmlWebpackPlugin({
      templateParameters: {
        canonicalURL: canonicalURL,
      },
      title:
        "Блочные тепловые пункты | Производство тепловых узлов, модулей итп заводской готовности",
      meta: {
        keywords: "блочные тепловые пункты, блочные итп, блочные тепловые узлы",
        description:
          "Изготовление блочных тепловых пунктов (блочных итп) на базе теплообменников собственного производства. Заводские гарантии на тепловые узлы.",
      },
      template: "./src/blochnye-teplovye-punkty.html",
      filename: "blochnye-teplovye-punkty.html",
      chunks: ["btp", "all", "map"],
    }) /*---------ПАСТЕРИЗАЦИОННЫЕ УСТАНОВКИ----------- */,
    new HtmlWebpackPlugin({
      templateParameters: {
        canonicalURL: canonicalURL,
      },
      title:
        "Изготовливаем пастеризационные охладительные установки | На базе теплообменников собственного производства",
      meta: {
        keywords: "пастеризационные охладительные установки, установки поу",
        description:
          "Производство теплообменных установок (пастеризационно охладительных и других) на базе теплообменников собственного производства. Заводские гарантии.",
      },
      template: "./src/pou.html",
      filename: "pasterizatsionno-okhladitelnye-ustanovki.html",
      chunks: ["btp", "all", "map"],
    }) /*---------СЕРВИС И ЗАПАСНЫЕ ЧАСТИ----------- */,
    new HtmlWebpackPlugin({
      templateParameters: {
        canonicalURL: canonicalURL,
      },
      title:
        "Производство и поставка запасных частей на теплообменники Теплохит",
      meta: {
        keywords:
          "пластина пластинчатого теплообменника, уплотнение пластинчатого теплообменника",
        description:
          "Серийное производство со 100% локализацией на предприятии пластин и уплотнений. Комплектующие всегда в наличии, осуществляем сервисное обслуживание пластинчатых теплобоменников Теплохит.",
      },
      template: "./src/service.html",
      filename: "service.html",
      chunks: ["service", "all", "map"],
    }) /*---------О КОМПАНИИ----------- */,
    new HtmlWebpackPlugin({
      templateParameters: {
        canonicalURL: canonicalURL,
      },
      title:
        "О производстве пластинчатых теплообменников, этапы производства, испытания, реализуемая продукция",
      meta: {
        keywords: "производитель пластинчатых теплобменников",
        description:
          "Информация о предприятии-производителе пластинчатых теплообменников полного цикла. Разработка и производство пластин и уплотнений, изготовление пластинчатых теплобменников.",
      },
      template: "./src/about.html",
      filename: "about.html",
      chunks: ["about", "all", "map"],
    }) /*---------КОНТАКТЫ----------- */,
    new HtmlWebpackPlugin({
      templateParameters: {
        canonicalURL: canonicalURL,
      },
      title: "Контакты ООО Термоблок",
      meta: {
        keywords: "ооо термоблок, контакты",
        description:
          "Контакты предприятия Термоблок, производство теплообменников в городе Барнаул",
      },
      template: "./src/contacts.html",
      filename: "contacts.html",
      chunks: ["contacts", "all", "map"],
    }) /*---------ПОДБОР И РАСЧЁТ----------- */,
    new HtmlWebpackPlugin({
      templateParameters: {
        canonicalURL: canonicalURL,
      },
      title: "Подбор и расчет пластинчатых теплообменников онлайн",
      meta: {
        keywords:
          "пластинчатый теплообменник подбор, расчет пластинчатого теплообменника онлайн",
        description:
          "Большой выбор пластинчатых теплообменников. Калькулятор с подбором пластинчатого теплообменника, полный расчет пластинчатого теплообменника онлайн",
      },
      template: "./src/equipment-selection.html",
      filename: "equipment-selection/index.html",
      chunks: ["all", "equipment", "map"], //в чанке equipment лежит equipment1.js!!
    }) /*---------СЕКЦИЯ БЛОГА----------- */,
    new HtmlWebpackPlugin({
      templateParameters: {
        canonicalURL: canonicalURL,
      },
      title: "Новое в производстве пластинчатых теплообменников",
      meta: {
        keywords:
          "Информация о продукции предприятия: пластинчатых теплобменников для отопления, гвс; теплообменников пищевого назначения",
        description: "Все о термоблоке",
      },
      template: "./src/blog-section.html",
      filename: "blog-proizvodstva/index.html",
      chunks: ["blogSection", "all", "map"],
    }) /*---------СТРАНИЦЫ БЛОГА----------- */,
    new HtmlWebpackPlugin({
      templateParameters: {
        canonicalURL: canonicalURL,
        isGkh: true,
        articleFile: "pto-otop.html",
      },
      title:
        "Пластинчатые теплообменники отопления | Принцип работы | Как подобрать теплообменник для отопления",
      heading: "Теплообменники для отопления",
      meta: {
        keywords:
          "теплообменники отопления, пластинчатые теплообменники отопления",
        description:
          "Как подобрать пластинчатый теплообменник для отопления, особенности производства и применения. Онлайн форма для подбора теплообменника системы отопления.",
      },
      //article: ptoOtop,
      template: "./src/blog-page-abstract.html",
      filename:
        "blog-proizvodstva/plastinchatye-teploobmenniki-otopleniya.html",
      chunks: ["blogPage", "all", "map"],
    }),
    
    /*---------КАТАЛОГ----------- *//*
    new HtmlWebpackPlugin({
      templateParameters: {
        canonicalURL: canonicalURL,
      },
      title: "Каталог пластинчатых теплообменников | Каталог Теплохит",
      meta: {
        keywords: "каталог пластинчатых теплообменников, теплохит каталог",
        description:
          "Модельный ряд отечественного производителя пластинчатых теплообменников представлен в каталоге. Скачать каталог пластинчатых теплообменников, 3D модели, чертежи теплообменников.",
      },
      template: "./src/catalog.html",
      filename: "catalog/index.html",
      chunks: ["catalog", "all", "map"],
    }),*/

    /*---------------------ТЕПЛООБМЕННИКИ------------------------------------------*/
    new HtmlWebpackPlugin({
      title: "Теплообменник ТИ025 пластинчатый разборный",
      template: "./src/ti-xx-xx.html", // шаблон
      filename: "catalog/ti-025.html",
      templateParameters: {
        tialias: "ti025.png",
        drawalias: "draw025.jpg",
        heading: "ТИ 025",
        headingAlias: "ТИ025",
        description: `ТИ025 – имеет широкую гамму подключения подтрубков: Ду20, Ду25, Ду32, Ду40. Применение: небольшие промышленные помещения, коттеджи, здания детских садов, подогрев бассейнов, обогрев гаражных помещений.`,
        link3d: "https://disk.yandex.ru/d/Lo1bdjAoi7LVyQ",
      },
      chunks: ["ti", "all"],
    }) /*--2-------ТИ077----------- */,
    new HtmlWebpackPlugin({
      title: "Теплообменник ТИ077 пластинчатый разборный",
      template: "./src/ti-xx-xx.html", // шаблон
      filename: "catalog/ti-077.html",
      templateParameters: {
        tialias: "ti077.png",
        drawalias: "draw077.jpg",
        heading: "ТИ 077",
        headingAlias: "ТИ077",
        description: `ТИ077 – имеет широкую гамму подключения подтрубков: Ду25, Ду32, Ду40. 
          Подходит для задач ЖКХ на типовые 5ти этажные дома.
          Типоразмер также часто применяется в пищевой отрасли. (в т.ч. в многоступенчатом исполнении)`,
        link3d: "https://disk.yandex.ru/d/kEiGbHo7Fi8Uwg",
      },
      chunks: ["ti", "all"],
    }) /*---3------ТИ13----------- */,
    new HtmlWebpackPlugin({
      title: "Теплообменник ТИ13 пластинчатый разборный",
      template: "./src/ti-xx-xx.html", // шаблон
      filename: "catalog/ti-13.html",
      templateParameters: {
        tialias: "ti13.png",
        drawalias: "draw13.jpg",
        heading: "ТИ 13",
        headingAlias: "ТИ13",
        description: `ТИ13 – имеет подключения подтрубков: Ду50, Ду65. 
        Применение: если ориентироваться на жилые дома, данный теплообменник подходит на типовой 4-6 подъездный 9-ти этажный жилой дом.`,
        link3d: "https://disk.yandex.ru/d/7C26Ov2CVbgl6w",
      },
      chunks: ["ti", "all"],
    }) /*--4-------ТИ18-----------*/,
    new HtmlWebpackPlugin({
      title: "Теплообменник ТИ18 пластинчатый разборный",
      template: "./src/ti-xx-xx.html", // шаблон
      filename: "catalog/ti-18.html",
      templateParameters: {
        tialias: "ti18.png",
        drawalias: "draw18.jpg",
        heading: "ТИ 18",
        headingAlias: "ТИ18",
        description: `ТИ18 – имеет гамму подключения подтрубков: Ду50, Ду65.
          Применение: если ориентироваться на жилые дома, данный теплообменник зачастую используются в многоквартирных высотных домах.
          Теплообменный аппарат похож на ТИ13, но в отличие от него лучше справляется с более жесткими температурными режимами`,
        link3d: "https://disk.yandex.ru/d/O2lzhXAOWaA4ug",
      },
      chunks: ["ti", "all"],
    }) /*--5-------ТИ16,5-----------*/,
    new HtmlWebpackPlugin({
      title: "Теплообменник ТИ16,5 пластинчатый разборный",
      template: "./src/ti-xx-xx.html", // шаблон
      filename: "catalog/ti-16-5.html",
      templateParameters: {
        tialias: "ti18.png",
        drawalias: "draw16-5.jpg",
        heading: "ТИ 16,5",
        headingAlias: "ТИ16,5",
        description: `ТИ16,5 – имеет подключение подтрубков ДУ50, ДУ65, ДУ80.
        Если температурные графики не типовые (не отопление и гвс), с небольшим перепадом температур, 
        специфические среды, программа расчёта вероятно подберет данный теплообменник. 
        Зачастую он подбирается, когда требуется охладить жидкость на 1-3 градуса при небольших тепловых нагрузках`,
        link3d: "",
      },
      chunks: ["ti", "all"],
    }) /*--6-------ТИ28-----------*/,
    new HtmlWebpackPlugin({
      title: "Теплообменник ТИ28 пластинчатый разборный",
      template: "./src/ti-xx-xx.html", // шаблон
      filename: "catalog/ti-28.html",
      templateParameters: {
        tialias: "ti28.png",
        drawalias: "draw28.jpg",
        heading: "ТИ 28",
        headingAlias: "ТИ28",
        description: `ТИ28 – имеет подключения подтрубков: ДУ100, ДУ125.
          `,
        link3d: "https://disk.yandex.ru/d/3lo5g4MpzvYFcA",
      },
      chunks: ["ti", "all"],
    }) /*--7-------ТИ45-----------*/,
    new HtmlWebpackPlugin({
      title: "Теплообменник ТИ45 пластинчатый разборный",
      template: "./src/ti-xx-xx.html", // шаблон
      filename: "catalog/ti-45.html",
      templateParameters: {
        tialias: "ti45.png",
        drawalias: "draw45.jpg",
        heading: "ТИ 45",
        headingAlias: "ТИ45",
        description: `ТИ45 – имеет подключения подтрубков: ДУ100, ДУ125. 
          `,
        link3d: "https://disk.yandex.ru/d/3lo5g4MpzvYFcA",
      },
      chunks: ["ti", "all"],
    }) /*--8-------ТИ52-----------*/,
    new HtmlWebpackPlugin({
      title: "Теплообменник ТИ52 пластинчатый разборный",
      template: "./src/ti-xx-xx.html", // шаблон
      filename: "catalog/ti-52.html",
      templateParameters: {
        tialias: "ti52.png",
        drawalias: "draw52.jpg",
        heading: "ТИ 52",
        headingAlias: "ТИ52",
        description: `ТИ52 – имеет подключение ДУ150.
        Применение: промышленные заводы, центральные тепловые пункты (ЦТП), центральные котельные. 
        Масштаб обогрева - микрорайоны, большие торговые и бизнес центры (крупной квадратуры от 15 000 квадратных метров и более)`,
        link3d: "https://disk.yandex.ru/d/3lo5g4MpzvYFcA",
      },
      chunks: ["ti", "all"],
    }) /*--9-------ТИ65-----------*/,
    new HtmlWebpackPlugin({
      title: "Теплообменник ТИ65 пластинчатый разборный",
      template: "./src/ti-xx-xx.html", // шаблон
      filename: "catalog/ti-65.html",
      templateParameters: {
        tialias: "ti65.png",
        drawalias: "draw52.jpg",
        heading: "ТИ 65",
        headingAlias: "ТИ65",
        description: `ТИ65 – имеет подключения подтрубков: ДУ100, ДУ125. 
          `,
        link3d: "https://disk.yandex.ru/d/3lo5g4MpzvYFcA",
      },
      chunks: ["ti", "all"],
    }) /*-10-------ТИ82-----------*/,
    new HtmlWebpackPlugin({
      title: "Теплообменник ТИ82 пластинчатый разборный",
      template: "./src/ti-xx-xx.html", // шаблон
      filename: "catalog/ti-82.html",
      templateParameters: {
        tialias: "ti82.png",
        drawalias: "draw82.jpg",
        heading: "ТИ 82",
        headingAlias: "ТИ82",
        description: `ТИ82 – имеет подключение ДУ150. В отличие от ТИ52 имеет более удлиненную пластину, что позволяет удерживать больший перепад температур.
          Применение аналогичное ТИ52: промышленные заводы, центральные тепловые пункты (ЦТП), котельные микрорайонов. 
          Зачастую применяется также в больших торговых и бизнес центрах (крупной квадратуры от 15 000 квадратных метров и более).`,
        link3d: "https://disk.yandex.ru/d/3lo5g4MpzvYFcA",
      },
      chunks: ["ti", "all"],
    }) /*-11-------ТИ95-----------*/,
    new HtmlWebpackPlugin({
      title: "Теплообменник ТИ95 пластинчатый разборный",
      template: "./src/ti-xx-xx.html", // шаблон
      filename: "catalog/ti-95.html",
      templateParameters: {
        tialias: "ti95.png",
        drawalias: "draw95.jpg",
        heading: "ТИ 95",
        headingAlias: "ТИ95",
        description: `ТИ95 – имеет подключения подтрубков: ДУ200, ДУ250.
        Применение: ТЭЦ. (Обогревается совокупность микрорайонов)`,
        link3d: "https://disk.yandex.ru/d/3lo5g4MpzvYFcA",
      },
      chunks: ["ti", "all"],
    }) /*-12-------ТИ116-----------*/,
    new HtmlWebpackPlugin({
      title: "Теплообменник ТИ116 пластинчатый разборный",
      template: "./src/ti-xx-xx.html", // шаблон
      filename: "catalog/ti-116.html",
      templateParameters: {
        tialias: "ti95.png",
        drawalias: "draw116.jpg",
        heading: "ТИ 116",
        headingAlias: "ТИ116",
        description: `ТИ116 – имеет подключения подтрубков: ДУ200, ДУ250.
          Применение: ТЭЦ. (Обогревается совокупность микрорайонов)`,
        link3d: "https://disk.yandex.ru/d/3lo5g4MpzvYFcA",
      },
      chunks: ["ti", "all"],
    }) ,

    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new SitemapPlugin({ base: canonicalURL, paths }),
  ],
};