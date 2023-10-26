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


  // Enable it with pwa
  // shouldPrefetch: false,
});
