// pages/P_9_6/P_9_6.js
Page({

  /**
   * 页面的初始数据
   */
	data: {
		q: 1,
		c: 0,

	},
	F: function (event) {
		this.setData({
			q: this.data.q - 1
		})
		setTimeout(function () {
			wx.redirectTo({
				url: '../P_9_7/P_9_7'

			})

		}, 3000)
	},
	T: function (event) {
		this.setData({
			q: this.data.q - 1,
			c: this.data.c + 1
		})
		wx.setStorage({
			key: "ap9",
			data: this.data.c + 1,
		})
		setTimeout(function () {
			wx.redirectTo({
				url: '../P_9_7/P_9_7'

			})

		}, 3000)
	},


  /**
   * 生命周期函数--监听页面加载
   */
	onLoad: function (options) {
		this.setData({

			c: wx.getStorageSync("ap9"),

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
		/*setTimeout(function () {
			wx.redirectTo({
				url: '../'

			})

		}, 3000)*/
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
		wx.setStorage({
			key: "ap9",
			data: this.data.c,
		})

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