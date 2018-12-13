// pages/bookshelf/bookshelf.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [
      { src: '../../images/book1.jpg', title: '重生到一九七六', author: '月丽雅' },
      { src: '../../images/book2.jpg', title: '倾覆天下', author: '恋惊华' },
      { src: '../../images/book3.jpg', title: '等花开一春暖心你', author: '尤玥' },
      { src: '../../images/book4.jpg', title: '祸世妖主', author: '十月自怜' },
      { src: '../../images/book5.jpg', title: '薰衣草之恋', author: '玲依萱' },
      { src: '../../images/book6.jpg', title: '鬼吹灯之精绝古城', author: '南派三叔' },
      { src: '../../images/book7.jpg', title: '平凡的世界', author: '路遥' },
      { src: '../../images/book8.jpg', title: '零度记忆手牵手', author: '安沫含' },
      { src: '../../images/book5.jpg', title: '薰衣草之恋', author: '玲依萱' },
      { src: '../../images/book6.jpg', title: '鬼吹灯之精绝古城', author: '南派三叔' },
      { src: '../../images/book7.jpg', title: '平凡的世界', author: '路遥' },
      { src: '../../images/book8.jpg', title: '零度记忆手牵手', author: '安沫含' },
      { src: '../../images/book1.jpg', title: '重生到一九七六', author: '月丽雅' },
      { src: '../../images/book2.jpg', title: '倾覆天下', author: '恋惊华' },
      { src: '../../images/book3.jpg', title: '等花开y一春暖心你', author: '尤玥' },
      { src: '../../images/book4.jpg', title: '祸世妖主', author: '十月自怜' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  continueRead:function(e){
    wx.navigateTo({
      url: '../reading/reading',
    })
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