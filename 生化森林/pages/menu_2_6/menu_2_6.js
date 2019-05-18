// pages/menu_2_6/menu_2_6.js
Page({

	ToM_1: function (event) {
		wx.redirectTo({
			url: '../M_6/M_6',
		})
	},

	ToP_1_1: function (event) {
		wx.redirectTo({
			url: '../P_6_1/P_6_1',
		})
	},
	Back: function (event) {
		wx.redirectTo({
			url: '../menu_1/menu_1',
		})
	}
})