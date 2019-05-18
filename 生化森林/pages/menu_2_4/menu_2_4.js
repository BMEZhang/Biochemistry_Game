// pages/menu_2_4/menu_2_4.js
Page({

	ToM_1: function (event) {
		wx.redirectTo({
			url: '../M_4/M_4',
		})
	},

	ToP_1_1: function (event) {
		wx.redirectTo({
			url: '../P_4_1/P_4_1',
		})
	},
	Back: function (event) {
		wx.redirectTo({
			url: '../menu_1/menu_1',
		})
	}
})