// pages/exchange/exchange.js

Page({
	
		data: {
			p1: wx.getStorageSync("p1") || 1,
			p2: wx.getStorageSync("p2") || 1,
			p3: wx.getStorageSync("p3") || 1,
			p4: wx.getStorageSync("p4") || 1,
			p5: wx.getStorageSync("p5") || 1,
			score: wx.getStorageSync("score") || 0,
			level: wx.getStorageSync("level") || 0,
		},
	f1:function(){
		this.setData({
		p1:this.data.p1-1,
		score:this.data.score-100,
		level:this.data.level+1
		})
	},
	f2: function () {
		this.setData({
			p2: this.data.p2 - 1,
			score: this.data.score - 100,
			level: this.data.level + 1
		})
	},
	f3: function () {
		this.setData({
			p3: this.data.p3 - 1,
			score: this.data.score - 100,
			level: this.data.level + 1
		})
	},
	f4: function () {
		this.setData({
			p3: this.data.p4 - 1,
			score: this.data.score - 100,
			level: this.data.level + 1
		})
	},
	f5: function () {
		this.setData({
			p3: this.data.p5 - 1,
			score: this.data.score - 100,
			level: this.data.level + 1
		})
	},

  /**
   * 页面的初始数据
   */
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
		wx.setStorage({
			key: "p1",
			data: this.data.p1,
		}),
		wx.setStorage({
			key: "p2",
			data: this.data.p2,
		}),
		wx.setStorage({
			key: "p3",
			data: this.data.p3,
		})
		wx.setStorage({
			key: "p4",
			data: this.data.p4,
		})
		wx.setStorage({
			key: "p5",
			data: this.data.p5,
		})
		wx.setStorage({
			key: "level",
			data: this.data.level,
		}),
			wx.setStorage({
				key: "score",
				data: this.data.score,
			})
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})