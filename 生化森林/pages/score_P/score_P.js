// pages/score_P/score_P.js
Page({
	data: {
		score: 0,
		acc: 0,
		a: 0,
		

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

			acc: 10*(wx.getStorageSync("ap1")),
			score: wx.getStorageSync("score") || 0,
			a: wx.getStorageSync("AP1") || 1,
			

		})

	},
	onUnload: function () {
		wx.setStorage({
			key: "score",
			data: this.data.score,
		})
		wx.setStorage({
			key: "AP1",
			data: this.data.a,
		})
	},
	
})