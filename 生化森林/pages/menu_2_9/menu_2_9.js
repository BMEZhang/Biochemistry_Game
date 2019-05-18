// pages/menu_2_9/menu_2_9.js
Page({

	ToM_1: function (event) {
		wx.redirectTo({
			url: '../M_9/M_9',
		})
	},

	ToP_1_1: function (event) {
		wx.redirectTo({
			url: '../P_9_1/P_9_1',
		})
	},
	Back: function (event) {
		wx.redirectTo({
			url: '../menu_1/menu_1',
		})
	}
})