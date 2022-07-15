

module.exports.tis = [
  {
    title: "Теплообменник ТИ025 пластинчатый разборный",
    template: "./src/abstract-ti-page.html", // шаблон
    filename: "catalog/ti-025.html",
    templateParameters: {
      tialias: "ti025.png",
      drawalias: "draw025.jpg",
      heading: "ТИ 025",
      headingAlias: "ТИ025",
      description: `ТИ025 – имеет широкую гамму подключения подтрубков: Ду20, Ду25, Ду32, Ду40. Применение: небольшие промышленные помещения, коттеджи, здания детских садов, подогрев бассейнов, обогрев гаражных помещений.`,
      link3d: "https://disk.yandex.ru/d/Lo1bdjAoi7LVyQ",
    },
    chunks: ["ti"],
  },
    {
      path: '/production.html',
      lastmod: dateNow,
      priority: 0.8,
      changefreq: 'monthly'
    },
    
    {
      path: '/docu/Termoblok_reference_teploobmenniki.pdf',
      lastmod: dateNow,
      priority: 0.7,
      changefreq: 'monthly'
    },
];