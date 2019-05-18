// pages/home/home.js
Page({
  data: {
    level: wx.getStorageSync("level") || 0,
    score: wx.getStorageSync("score") || 0,
    S: (wx.getStorageSync("level") || 0) * 100 + (wx.getStorageSync("score") || 0),
  },
  ToExchange: function (event) {
    wx.navigateTo({
      url: '../exchange/exchange',
    })
  },
  ToExchanged: function (event) {
    wx.navigateTo({
      url: '../exchanged/exchanged',
    })
  },
  levelup: function () {
    this.setData({
      score: this.data.score - 100,
      level: this.data.level + 1

    })
  },
  onLoad: function (options) {
    this.setData({

      level: wx.getStorageSync("level"),
      score: wx.getStorageSync("score"),

    })
  },
  onUnload: function () {
    wx.setStorage({
      key: "level",
      data: this.data.level,
    }),
      wx.setStorage({
        key: "score",
        data: this.data.score,
      })
  }
})