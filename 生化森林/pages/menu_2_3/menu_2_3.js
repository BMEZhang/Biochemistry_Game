// pages/menu_2_3/menu_2_3.js
Page({

	ToM_1: function (event) {
		wx.redirectTo({
			url: '../M_3/M_3',
		})
	},

	ToP_1_1: function (event) {
		wx.redirectTo({
			url: '../P_3_1/P_3_1',
		})
	},
	Back: function (event) {
		wx.redirectTo({
			url: '../menu_1/menu_1',
		})
	}
})