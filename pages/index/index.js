//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'hello word',
    userInfo: {},
    content : [
        { icon: '/images/leke.png', text: '热门推荐', gameList: [
            { id: 1, name: '魔兽世界', icon: '/images/gg.gif', isback: true, pageUrl: '../logs/logs', aType: '1'},
            { id: 1, name: '魔兽世界', icon: '/images/gg.gif', isback: true, pageUrl: '../test/test', aType: '1'},
            { id: 1, name: '魔兽世界', icon: '/images/gg.gif', isback: true, pageUrl: '../test/test', aType: '1'},
            { id: 1, name: '魔兽世界', icon: '/images/gg.gif', isback: true, pageUrl: '../test/test', aType: '1'},
          ]},
        { icon: '/images/leke.png', text: '暴雪游戏', gameList: [
          { id: 1, name: '魔兽世界', icon: '/images/gg.gif', isback: true, pageUrl: '../logs/logs', aType: '1'},
          { id: 1, name: '魔兽世界', icon: '/images/gg.gif', isback: true, pageUrl: '../test/test', aType: '1'},
          { id: 1, name: '魔兽世界', icon: '/images/gg.gif', isback: true, pageUrl: '../test/test', aType: '1'},
          { id: 1, name: '魔兽世界', icon: '/images/gg.gif', isback: true, pageUrl: '../test/test', aType: '1'}
        ]},
        { icon: '/images/leke.png', text: '拳头游戏', gameList: [
          { id: 1, name: '魔兽世界', icon: '/images/gg.gif', isback: false, pageUrl: '../logs/logs', aType: '1'},
          { id: 1, name: '魔兽世界', icon: '/images/gg.gif', isback: false, pageUrl: '../test/test', aType: '1'},
          { id: 1, name: '魔兽世界', icon: '/images/gg.gif', isback: false, pageUrl: '../test/test', aType: '1'},
          { id: 1, name: '魔兽世界', icon: '/images/gg.gif', isback: false, pageUrl: '../test/test', aType: '1'}
        ]},
        { icon: '/images/leke.png', text: '游戏综合', gameList: [
          { id: 1, name: '魔兽世界', icon: '/images/gg.gif', isback: true, pageUrl: '../logs/logs', aType: '1'},
          { id: 1, name: '魔兽世界', icon: '/images/gg.gif', isback: true, pageUrl: '../test/test', aType: '1'},
          { id: 1, name: '魔兽世界', icon: '/images/gg.gif', isback: true, pageUrl: '../test/test', aType: '1'},
          { id: 1, name: '魔兽世界', icon: '/images/gg.gif', isback: true, pageUrl: '../test/test', aType: '1'}
        ]}
    ]
  },
  //事件处理函数
  tapJump:function(){
    wx:wx.navigateTo({
      url: 'pages/test'
    })
  },
  tapTips:function(){
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
