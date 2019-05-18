const data = getApp()

Page({
	
	/**data:{
		level: data.globalData.data.level
	},
	*/
	ToIntroduction: function (event) {
		wx.redirectTo({
			url: '/pages/introduction/introduction',
		})
	},
	ToHome: function (event){
		wx.navigateTo({
			url: '/pages/home/home',
		})//跳转到home
	},
	onLoad: function () {
		
	},
	onUnload: function () {
		/*wx.setStorage({
			key: "key",
			data: 10,
			success: function () {
				console.log('写入value1成功')
			},
			fail: function () {
				console.log('写入value1发生错误')
			}
		})*/
	},
	/*onLoad: function (options) {
	var data=getApp();
	var level=data.globalData.data.level;
	},*/
})