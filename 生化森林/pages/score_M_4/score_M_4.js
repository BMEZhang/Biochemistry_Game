// pages/score_M_4/score_M_4.js
Page({
	data: {
		score: 0,
		acc: 0,
		a: 1,


	},
	f0: function () {
		this.setData({
			score: this.data.score + 30,
			a: this.data.a - 1
		})
	},
	BackToM1: function (event) {
		wx.redirectTo({
			url: '../menu_1/menu_1',
		})
	},
	onLoad: function (options) {
		this.setData({

			acc: 100 * (wx.getStorageSync("am4")),
			score: wx.getStorageSync("score"),
			a: wx.getStorageSync("AM4"),


		})

	},
	onUnload: function () {
		wx.setStorage({
			key: "score",
			data: this.data.score,
		})
		wx.setStorage({
			key: "AM4",
			data: this.data.a,
		})
	},

})