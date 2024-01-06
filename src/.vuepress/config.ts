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
    ['script',{},'!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"3H5Sh7lwHvY3yVI3",ck:"3H5Sh7lwHvY3yVI3"});'],
  ],


  // Enable it with pwa
  // shouldPrefetch: false,
});
