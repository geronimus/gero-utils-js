const presets = [
  [
    "@babel/env",
    {
      targets: {
        chrome: "70",
        edge: "17",
        firefox: "60",
        ie: "11",
        safari: "11.1"
      }  
    }
  ]
];

module.exports = { presets };

