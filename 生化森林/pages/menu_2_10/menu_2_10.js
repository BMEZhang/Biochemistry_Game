// pages/menu_2_10/menu_2_10.js
Page({

	ToM_1: function (event) {
		wx.redirectTo({
			url: '../M_10/M_10',
		})
	},

	ToP_1_1: function (event) {
		wx.redirectTo({
			url: '../P_10_1/P_10_1',
		})
	},
	Back: function (event) {
		wx.redirectTo({
			url: '../menu_1/menu_1',
		})
	}
})