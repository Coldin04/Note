import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "酷丁的笔记",
  description: "自用的学习笔记仓库",

  theme,

  markdown: {
    headers: {
      level: [1,2,3,4]
    }
  },

  head: [
    ['script',{charset:'UTF-8',id:'LA_COLLECT',src:'https://sdk.51.la/js-sdk-pro.min.js'}],
    ['script',{},'LA.init({id:"3H5Sh7lwHvY3yVI3",ck:"3H5Sh7lwHvY3yVI3",autoTrack:true,hashMode:true})'],
    ['script',{src: 'https://sdk.51.la/perf/js-sdk-perf.min.js',crossorigin:'anonymous'}],
  ],


  // Enable it with pwa
  // shouldPrefetch: false,
});
