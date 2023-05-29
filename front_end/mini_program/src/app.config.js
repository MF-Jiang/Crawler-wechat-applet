export default ({
  pages: [
    'pages/login/index',
    'pages/register/index',
    'pages/find_pwd/index',
    'pages/bilibili/index',
    'pages/academic/index',
    'pages/sina/index',
    'pages/newsinfo/news',
    'pages/mine/user',
    'pages/mine/contact/index',
    'pages/mine/setting/index',
    'pages/mine/personal/index',
    'pages/mine/help/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    color:"#8a8a8a",
    selectedColor:"black",
    backgroundColor:"#fafafa",
    borderColor:'black',
    list:[
      {
        pagePath:"pages/bilibili/index",
        iconPath:"./static/white.png",
        selectedIconPath:"./static/blue.png",
        text:"bilibili"
      },
      {
        pagePath: "pages/academic/index",
        iconPath: "./static/academic.png",
        selectedIconPath:"./static/academic_selected.png",
        text: "Academic"
      },
      {
        pagePath: "pages/sina/index",
        iconPath: "./static/Sina_page.png",
        selectedIconPath:"./static/Sina_selected.png",
        text: "Sina"
      },
      {
        pagePath: 'pages/mine/user',
        text: 'User',
        iconPath: './static/user.png',
        selectedIconPath: './static/user_selected.png',
      },
    ]
  }
})
