// pages/menu_2_2/menu_2_2.js
Page({

	ToM_1: function (event) {
		wx.redirectTo({
			url: '../M_2/M_2',
		})
	},

	ToP_1_1: function (event) {
		wx.redirectTo({
			url: '../P_2_1/P_2_1',
		})
	},
	Back: function (event) {
		wx.redirectTo({
			url: '../menu_1/menu_1',
		})
	}
})