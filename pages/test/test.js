// test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [
      {
        id:'s1',
        bannerImagelist : '/images/02.png',
        bannerTitle : '这只是一个游戏',
        stars : 5,
        text: 'Hi,guys.This is the first time I try to do animation, although there are still many problems, but I will do more exercises to improve! Hi,guys.This is the first time I try to do animation, although there are still many problems, but I will do more exercises to improve! ',
        heart : true
      },
      {
        id:'s2',
        bannerImagelist: '/images/03.png',
        bannerTitle: '这只是一个游戏',
        stars: 1,
        text: 'Hi,guys.This is the first time I try to do animation, although there are still many problems, but I will do more exercises to improve! ',
        heart: true
      },
      {
        id:'s3',
        bannerImagelist: '/images/02.png',
        bannerTitle: '这只是一个游戏',
        stars: 2,
        text: 'Hi,guys.This is the first time I try to do animation, although there are still many problems, but I will do more exercises to improve! ',
        heart: true
      },
      {
        id:'s4',
        bannerImagelist: '/images/03.png',
        bannerTitle: '这只是一个游戏',
        stars: 4,
        text: 'Hi,guys.This is the first time I try to do animation, although there are still many problems, but I will do more exercises to improve! ',
        heart: true
      }
    ],
    selectedImgClass:''
  },
  clickImg:function(){ 
    this.setData({
      selectedImgClass:'selected-img'
    });
  }, 
  clickGame:function(e){
    console.log(e);
  },
  tapMove: function (e) {
    console.log(e.detail.scrollLeft);
    if (e.detail.scrollLeft>50){
      console.log(1)
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})