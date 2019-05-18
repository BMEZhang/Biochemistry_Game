Page({
	data: {
		c: 0,
		q_1: 1,
		q_2: 1,
		q_3: 1,
		q_4: 1,
		q_5: 1,
		q_6: 1,
		q_7: 1,
		q_8: 1,
		q_9: 1,
		q_10: 1,
		q_11: 1,
		q_12: 1,
		q_13: 1,
		q_14: 1,
		q_15: 1,
		q_16: 1,
		q_17: 1,
		q_18: 1,
		q_19: 1,
		q_20: 1,
		q_21: 1,
		q_22: 1,
		q_23: 1,
		q_24: 1,
		q_25: 1,
		q_26: 1,
		q_27: 1,
		q_28: 1,
		q_29: 1,
		q_30: 1,
		q_31: 1,
		q_32: 1,
		q_33: 1,
		q_34: 1,
		q_35: 1,
	},
	onShow: function () {
		
	},
	ToScore: function (event) {
		wx.redirectTo({
			url: '../score_M_5/score_M_5',
		})
	},
	f0: function (event) {
		this.setData({
			c: this.data.c + 1
		})
	},
	f1: function (event) {
		this.setData({
			q_1: this.data.q1 - 1
		})
	},
	f1_T: function (event) {
		this.setData({
			q_1: this.data.q1 - 1,
			c: this.data.c + 1

		})
	},
	f2: function (event) {
		this.setData({
			q_2: this.data.q2 - 1
		})
	},
	f3: function (event) {
		this.setData({
			q_3: this.data.q3 - 1
		})
	},
	f4: function (event) {
		this.setData({
			q_4: this.data.q4 - 1
		})
	},
	f5: function (event) {
		this.setData({
			q_5: this.data.q5 - 1
		})
	},
	f6: function (event) {
		this.setData({
			q_6: this.data.q6 - 1
		})
	},
	f7: function (event) {
		this.setData({
			q_7: this.data.q7 - 1
		})
	},
	f8: function (event) {
		this.setData({
			q_8: this.data.q8 - 1
		})
	},
	f9: function (event) {
		this.setData({
			q_9: this.data.q9 - 1
		})
	},
	f10: function (event) {
		this.setData({
			q_10: this.data.q10 - 1
		})
	},
	f11: function (event) {
		this.setData({
			q_11: this.data.q11 - 1
		})
	},
	f12: function (event) {
		this.setData({
			q_12: this.data.q12 - 1
		})
	},
	f13: function (event) {
		this.setData({
			q_13: this.data.q13 - 1
		})
	},
	f14: function (event) {
		this.setData({
			q_14: this.data.q14 - 1
		})
	},
	f15: function (event) {
		this.setData({
			q_15: this.data.q15 - 1
		})
	},
	f16: function (event) {
		this.setData({
			q_16: this.data.q16 - 1
		})
	},
	f17: function (event) {
		this.setData({
			q_17: this.data.q17 - 1
		})
	},
	f18: function (event) {
		this.setData({
			q_18: this.data.q18 - 1
		})
	},
	f19: function (event) {
		this.setData({
			q_19: this.data.q19 - 1
		})
	},
	f20: function (event) {
		this.setData({
			q_20: this.data.q20 - 1
		})
	},
	f21: function (event) {
		this.setData({
			q_21: this.data.q21 - 1
		})
	},
	f22: function (event) {
		this.setData({
			q_22: this.data.q22 - 1
		})
	},
	f23: function (event) {
		this.setData({
			q_23: this.data.q23 - 1
		})
	},
	f24: function (event) {
		this.setData({
			q_24: this.data.q24 - 1
		})
	},
	f25: function (event) {
		this.setData({
			q_25: this.data.q25 - 1
		})
	},
	f26: function (event) {
		this.setData({
			q_26: this.data.q26 - 1
		})
	},
	f27: function (event) {
		this.setData({
			q_27: this.data.q27 - 1
		})
	},
	f28: function (event) {
		this.setData({
			q_28: this.data.q28 - 1
		})
	},
	f29: function (event) {
		this.setData({
			q_29: this.data.q29 - 1
		})
	},
	f30: function (event) {
		this.setData({
			q_30: this.data.q30 - 1
		})
	},
	f31: function (event) {
		this.setData({
			q_31: this.data.q31 - 1
		})
	},
	f32: function (event) {
		this.setData({
			q_32: this.data.q32 - 1
		})
	},
	f33: function (event) {
		this.setData({
			q_33: this.data.q33 - 1
		})
	},
	f34: function (event) {
		this.setData({
			q_34: this.data.q34 - 1
		})
	},
	f35: function (event) {
		this.setData({
			q_35: this.data.q35 - 1
		})
	},
	f2_T: function (event) {
		this.setData({
			q_2: this.data.q2 - 1,
			c: this.data.c + 1
		})
	},
	f3_T: function (event) {
		this.setData({
			q_3: this.data.q3 - 1,
			c: this.data.c + 1
		})
	},
	f4_T: function (event) {
		this.setData({
			q_4: this.data.q4 - 1,
			c: this.data.c + 1
		})
	},
	f5_T: function (event) {
		this.setData({
			q_5: this.data.q5 - 1,
			c: this.data.c + 1
		})
	},
	f6_T: function (event) {
		this.setData({
			q_6: this.data.q6 - 1,
			c: this.data.c + 1
		})
	},
	f7_T: function (event) {
		this.setData({
			q_7: this.data.q7 - 1,
			c: this.data.c + 1
		})
	},
	f8_T: function (event) {
		this.setData({
			q_8: this.data.q8 - 1,
			c: this.data.c + 1
		})
	},
	f9_T: function (event) {
		this.setData({
			q_9: this.data.q9 - 1,
			c: this.data.c + 1
		})
	},
	f10_T: function (event) {
		this.setData({
			q_10: this.data.q10 - 1,
			c: this.data.c + 1
		})
	},
	f11_T: function (event) {
		this.setData({
			q_11: this.data.q11 - 1,
			c: this.data.c + 1
		})
	},
	f12_T: function (event) {
		this.setData({
			q_12: this.data.q12 - 1,
			c: this.data.c + 1
		})
	},
	f13_T: function (event) {
		this.setData({
			q_13: this.data.q13 - 1,
			c: this.data.c + 1
		})
	},
	f14_T: function (event) {
		this.setData({
			q_14: this.data.q14 - 1,
			c: this.data.c + 1
		})
	},
	f15_T: function (event) {
		this.setData({
			q_15: this.data.q15 - 1,
			c: this.data.c + 1
		})
	},
	f16_T: function (event) {
		this.setData({
			q_16: this.data.q16 - 1,
			c: this.data.c + 1
		})
	},
	f17_T: function (event) {
		this.setData({
			q_17: this.data.q17 - 1,
			c: this.data.c + 1
		})
	},
	f18_T: function (event) {
		this.setData({
			q_18: this.data.q18 - 1,
			c: this.data.c + 1
		})
	},
	f19_T: function (event) {
		this.setData({
			q_19: this.data.q19 - 1,
			c: this.data.c + 1
		})
	},
	f20_T: function (event) {
		this.setData({
			q_20: this.data.q20 - 1,
			c: this.data.c + 1
		})
	},
	f21_T: function (event) {
		this.setData({
			q_21: this.data.q21 - 1,
			c: this.data.c + 1
		})
	},
	f22_T: function (event) {
		this.setData({
			q_22: this.data.q22 - 1,
			c: this.data.c + 1
		})
	},
	f23_T: function (event) {
		this.setData({
			q_23: this.data.q23 - 1,
			c: this.data.c + 1
		})
	},
	f24_T: function (event) {
		this.setData({
			q_24: this.data.q24 - 1,
			c: this.data.c + 1
		})
	},
	f25_T: function (event) {
		this.setData({
			q_25: this.data.q25 - 1,
			c: this.data.c + 1
		})
	},
	f26_T: function (event) {
		this.setData({
			q_26: this.data.q26 - 1,
			c: this.data.c + 1
		})
	},
	f27_T: function (event) {
		this.setData({
			q_27: this.data.q27 - 1,
			c: this.data.c + 1
		})
	},
	f28_T: function (event) {
		this.setData({
			q_28: this.data.q28 - 1,
			c: this.data.c + 1
		})
	},
	f29_T: function (event) {
		this.setData({
			q_29: this.data.q29 - 1,
			c: this.data.c + 1
		})
	},
	f30_T: function (event) {
		this.setData({
			q_30: this.data.q30 - 1,
			c: this.data.c + 1
		})
	},
	f31_T: function (event) {
		this.setData({
			q_31: this.data.q31 - 1,
			c: this.data.c + 1
		})
	},
	f32_T: function (event) {
		this.setData({
			q_32: this.data.q32 - 1,
			c: this.data.c + 1
		})
	},
	f33_T: function (event) {
		this.setData({
			q_33: this.data.q33 - 1,
			c: this.data.c + 1
		})
	},
	f34_T: function (event) {
		this.setData({
			q_34: this.data.q34 - 1,
			c: this.data.c + 1
		})
	},
	f35_T: function (event) {
		this.setData({
			q_35: this.data.q35 - 1,
			c: this.data.c + 1
		})
	},
	onUnload: function () {

		wx.setStorage({
			key: "am5",
			data: (this.data.c) / 35,

		})
	}
})