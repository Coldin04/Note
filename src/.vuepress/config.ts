import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

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

  //head: [
  //],

  plugins: [
    docsearchPlugin({
      // 配置项
      apiKey: '459376defd8fecb5b088ff2f16ab155a',
      appId: 'WLA2GFIPSA', // 添加了缺少的属性
      indexName: 'coldin', 
    }),
  ],


  // Enable it with pwa
  // shouldPrefetch: false,
});
