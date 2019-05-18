// pages/menu_2_7/menu_2_7.js
Page({

	ToM_1: function (event) {
		wx.redirectTo({
			url: '../M_7/M_7',
		})
	},

	ToP_1_1: function (event) {
		wx.redirectTo({
			url: '../P_7_1/P_7_1',
		})
	},
	Back: function (event) {
		wx.redirectTo({
			url: '../menu_1/menu_1',
		})
	}
})