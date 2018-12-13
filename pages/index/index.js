//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls: [
      'http://img0.imgtn.bdimg.com/it/u=2096947157,3652353959&fm=26&gp=0.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img4.imgtn.bdimg.com/it/u=171407501,1784981615&fm=26&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=2859295997,2350138962&fm=26&gp=0.jpg'
    ],
    x: 0,
    y: 0,
    modelSrc:'http://img3.imgtn.bdimg.com/it/u=3568068412,2864937105&fm=26&gp=0.jpg',
    // 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3802303452,2527403962&fm=26&gp=0.jpg'
  },
  showDetail: function(e){
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function () {

  },
  changeSwipper:function(e){
    console.log(e);
  },
  finish:function(e){
    console.log(e);
  },
  tap: function (e) {
    this.setData({
      x: 30,
      y: 30
    });
  },
  changeScenario:function(e){
    var img = this.data.modelSrc === 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3802303452,2527403962&fm=26&gp=0.jpg' ? 'http://img3.imgtn.bdimg.com/it/u=3568068412,2864937105&fm=26&gp=0.jpg' :'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3802303452,2527403962&fm=26&gp=0.jpg';
    this.setData({
      modelSrc: img
    });
  }
})
