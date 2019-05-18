// pages/exchanged/exchanged.js
Page({

  /**
   * 页面的初始数据
   */
		data: {
			p1: wx.getStorageSync("p1") || 0,
			p2: wx.getStorageSync("p2") || 0,
			p3: wx.getStorageSync("p3") || 0,
			p4: wx.getStorageSync("p4") || 0,
			p5: wx.getStorageSync("p5") || 0,
		},
	//点击开始的时间  
	timestart: function (e) {
		var _this = this;
		_this.setData({ timestart: e.timeStamp });
	},
	//点击结束的时间
	timeend: function (e) {
		var _this = this;
		_this.setData({ timeend: e.timeStamp });
	},

	//保存图片
	saveImg: function (e) {
		var _this = this;
		var times = _this.data.timeend - _this.data.timestart;
		if (times > 300) {
			console.log("长按");
			wx.getSetting({
				success: function (res) {
					wx.authorize({
						scope: 'scope.writePhotosAlbum',
						success: function (res) {
							console.log("授权成功");
							var imgUrl = "http://shareds.oss-cn-hangzhou.aliyuncs.com/exhibit/20180815/tmp_35d425e6e732ba516f2e8c9988706eba.jpg";
							wx.downloadFile({//下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径
								url: imgUrl,
								success: function (res) {
									// 下载成功后再保存到本地
									wx.saveImageToPhotosAlbum({
										filePath: res.tempFilePath,//返回的临时文件路径，下载后的文件会存储到一个临时文件
										success: function (res) {
											wx.showToast({
												title: '成功保存到相册',
												icon: 'success'
											})
										}
									})
								}
							})
						}
					})
				}
			})
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