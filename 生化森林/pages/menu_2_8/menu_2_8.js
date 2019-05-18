// pages/menu_2_8/menu_2_8.js
Page({

	ToM_1: function (event) {
		wx.redirectTo({
			url: '../M_8/M_8',
		})
	},

	ToP_1_1: function (event) {
		wx.redirectTo({
			url: '../P_8_1/P_8_1',
		})
	},
	Back: function (event) {
		wx.redirectTo({
			url: '../menu_1/menu_1',
		})
	}
})