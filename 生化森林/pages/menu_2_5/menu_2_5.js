// pages/menu_2_5/menu_2_5.js
Page({

	ToM_1: function (event) {
		wx.redirectTo({
			url: '../M_5/M_5',
		})
	},

	ToP_1_1: function (event) {
		wx.redirectTo({
			url: '../P_5_1/P_5_1',
		})
	},
	Back: function (event) {
		wx.redirectTo({
			url: '../menu_1/menu_1',
		})
	}
})