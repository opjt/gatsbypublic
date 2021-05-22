// module.exports = {
//     outputDir: './docs'
// }
// import Articles from "./public/article/data.json";

const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

function getRoutes() {
    // import { default as Articles } from ('./public/article/data.json');
    var Articles = require('./public/article/data.json');
    var ret = [];
    for(var i in Articles.posts) {
        ret.push("/post/"+Articles.posts[i].description);
    //description
    }
    ret.push("/");
    ret.push("/search");
    return ret;
}
const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'docs'),

    // routes: [
    //     "/",
    //     "/search",
    //     "/post/historyvshash",
    //     "/post/historyvshash2"
    // ],
    routes: getRoutes(),
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: '#app'
    }),
  }),
];

module.exports = {
  outputDir: './docs',
  lintOnSave: false,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...productionPlugins);
    }
  },
};