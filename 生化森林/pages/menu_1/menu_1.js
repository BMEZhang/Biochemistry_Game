// pages/menu_1/menu_1.js
Page({
	data:{
		n:1,
	},
	
	ToMenu_2:function (){
		wx.redirectTo({
			url: '../menu_2/menu_2',
		})
	},
	ToMenu_22: function (event) {
		wx.redirectTo({
			url: '../menu_2_2/menu_2_2',
		})
	},
	ToMenu_23: function (event) {
		wx.redirectTo({
			url: '../menu_2_3/menu_2_3',
		})
	},
	ToMenu_24: function (event) {
		wx.redirectTo({
			url: '../menu_2_4/menu_2_4',
		})
	},
	ToMenu_25: function (event) {
		wx.redirectTo({
			url: '../menu_2_5/menu_2_5',
		})
	},
	ToMenu_26: function (event) {
		wx.redirectTo({
			url: '../menu_2_6/menu_2_6',
		})
	},
	ToMenu_27: function (event) {
		wx.redirectTo({
			url: '../menu_2_7/menu_2_7',
		})
	},
	ToMenu_28: function (event) {
		wx.redirectTo({
			url: '../menu_2_8/menu_2_8',
		})
	},
	ToMenu_29: function (event) {
		wx.redirectTo({
			url: '../menu_2_9/menu_2_9',
		})
	},
	ToMenu_210: function (event) {
		wx.redirectTo({
			url: '../menu_2_10/menu_2_10',
		})
	},
	ToMenu:function (event){
		wx.redirectTo({
			url: '../menu/menu',
		})
	}
})