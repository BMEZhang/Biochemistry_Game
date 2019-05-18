// pages/menu_2/menu_2.js
Page({
	/*data:{
		m:0,
	},
	onLoad:function(options){
		var m=options.n
	},*/
	ToM_1:function (event){
		wx.redirectTo({
			url: '../M_1/M_1',
		})
	},

	ToP_1_1:function (event){
		wx.redirectTo({
			url: '../P_1_1/P_1_1',
		})
	},
		Back:function (event){
			wx.redirectTo({
				url:'../menu_1/menu_1',
			})
		}
})