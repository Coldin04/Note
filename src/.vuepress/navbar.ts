import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "笔记",
    icon: "book",
    prefix: "/",
    children: [
      {
        text: "云计算",
        icon: "cloud",
        link: "cloud_computing/",
        //prefix: "/bar/",
        //children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "SQL Server",
        icon: "database",
        link: "SQLServer/",
      },
      {
        text: "Linux基础",
        icon: "computer",
        link: "linux/",
      },
      {
        text: "更多",
        link: "guide/",
      }
      //{
      //  text: "Foo",
      //  icon: "lightbulb",
      //  prefix: "foo/",
      //  children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      //},
    ],
  },
  {
    text: "关于我",
    icon: "circle-info",
    link: "https://coldin.top",
  },
  {
    text: "友链",
    icon: "link",
    link: "/friend",
  },
  //{
  //  text: "V2 文档",
  //  icon: "book",
  //  link: "https://theme-hope.vuejs.press/zh/",
  //},
]);
