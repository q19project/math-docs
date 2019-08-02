module.exports = {
  title: "数学题库开发手册",
  description: "——跟我一起学",
  port: 8092,
  host: "0.0.0.0",
  themeConfig: {
    nav: [
      {
        text: "项目文档",
        link: "/"
      },
      {
        text: "开发日记",
        link: "/diary/"
      },
      {
        text: "前台界面",
        link: "/math/"
      },
      {
        text: "API接口",
        link: "/math-api/"
      },
      {
        text: "管理后台",
        link: "/math-admin/"
      }
    ],
    sidebar: ["/", "/diary/", "/math/", "/math-admin/", "/math-api/"]
  }
};
