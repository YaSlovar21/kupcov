const presets = [
    ['@babel/preset-env', { // какой пресет использовать
      /*targets: { // какие версии браузеров поддерживать
        edge: '25',
        ie: '11',
        firefox: '40',
        chrome: '64',
        safari: '11.1'
      },*/
      targets: "> 0.25%, not dead",
  
      // использовать полифиллы для браузеров из свойства target
      // по умолчанию babel использует поллифиллы библиотеки core-js
      useBuiltIns: "entry"
    }]
  ];
  
  module.exports = { presets };