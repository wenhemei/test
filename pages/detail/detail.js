// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:[
      { src: '../../images/book1.jpg', title: '重生到一九七六', author: '月丽雅' },
      { src: '../../images/book2.jpg', title: '倾覆天下', author: '恋惊华' },
      { src: '../../images/book3.jpg', title: '等花开y一春暖心你', author: '尤玥' },
      { src: '../../images/book4.jpg', title: '祸世妖主', author: '十月自怜' },
      { src: '../../images/book5.jpg', title: '薰衣草之恋', author: '玲依萱' },
      { src: '../../images/book6.jpg', title: '鬼吹灯之精绝古城', author: '南派三叔' },
      { src: '../../images/book7.jpg', title: '平凡的世界', author: '路遥' },
      { src: '../../images/book8.jpg', title: '零度记忆手牵手', author:'安沫含'}
    ],
    category: [
      { title: '第一回 灵根育孕源流出　心性修持大道生', index: '1' },
      { title: '第二回 悟彻菩提真妙理　断魔归本合元神', index: '2' },
      { title: '第三回 四海千山皆拱伏　九幽十类尽除名', index: '3' },
      { title: '第四回 官封弼马心何足　名注齐天意未宁', index: '4' },
      { title: '第五回 乱蟠桃大圣偷丹　反天宫诸神捉怪', index: '5' },
      { title: '第六回 观音赴会问原因　小圣施威降大圣', index: '6' },
      { title: '第七回 八卦炉中逃大圣　五行山下定心猿', index: '7' },
      { title: '第八回 我佛造经传极乐　观音奉旨上长安', index: '8' },
      { title: '第九回 陈光蕊赴任逢灾　江流僧复雠报本', index: '9' },
      { title: '第十回 老龙王拙计犯天条　魏丞相遗书托冥吏', index: '10' },
      { title: '第十一回 游地府太宗还魂　进瓜果刘全续配', index: '11' },
      { title: '第十二回 唐王秉诚修大会　观音显圣化金蝉', index: '12' },
      { title: '第十三回 陷虎穴金星解厄　双叉岭伯钦留僧', index: '13' },
      { title: '第十四回 心猿归正　六贼无踪', index: '14' },
      { title: '第十五回 蛇盘山诸神暗佑　鹰愁涧意马收缰', index: '15' },
      { title: '第十六回 观音院僧谋宝贝　黑风山怪窃袈裟', index: '16' },
      { title: '第十七回 孙行者大闹黑风山　观世音收伏熊罴怪', index: '17' },
      { title: '第十八回 观音院唐僧脱难　高老庄大圣除魔', index: '18' }
    ]
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
  
  },
  readChapter:function(){
    wx.navigateTo({
      url: '../reading/reading',
    })
  },
  comment(){
    wx.navigateTo({
      url: '../write/write',
    })
  },
    /**
   * 弹窗
   */
  showDialogBtn: function () {
    this.setData({
      showModal: true
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    this.hideModal();
  },
})