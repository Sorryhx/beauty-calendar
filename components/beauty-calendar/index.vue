<template>
	<view class="calendar" v-if="visible">
		<view class="mask" @click="close"></view>
		<view class="content">
			<view class="header">
				<view :class="{ 'text-primary': true }" @click="clear">{{ pickerDate.length ? '清除' : '返回' }}</view>
					<view class="flex text-tip" v-if="multi">
						<view>{{ getFormate(pickerDate[0]) || '开始日期' }}</view>
						<view>-</view>
						<view>{{ getFormate(pickerDate[1]) || '结束日期' }}</view>
					</view>
					<view class="text-tip" v-else>{{ getFormate(pickerDate[0]) || '选择日期' }}</view>
				<view :class="{ 'text-primary': true }" @click="save">保存</view>
			</view>
			<view>
				<view class="weeks">
					<view v-for="w in week" :key="w" class="weekday">{{ w }}</view>
				</view>
				<scroll-view
					:scroll-y="true"
					class="days"
				>
					<view v-for="(item, index) in days" :key="index">
						<view class="days-block-header">{{ item.year + '年' + item.month  + '月'}}</view>
						<view class="days-block-container">
							<view v-for="(b, blockIndex) in item.blocks" 
								:key="blockIndex"
								:class="getDaysClass(item.year, item.month, daysFilter(blockIndex - item.offsets))"
								@tap="chooseDate(item.year, item.month, daysFilter(blockIndex - item.offsets))"
								>
								{{ daysFilter(blockIndex - item.offsets)}}
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import { dateFormate } from './utils.js'
	export default {
		name: 'beauty-calendar',
		props: {
			startDate:{
				type: String,
				default: () => {
					return dateFormate(new Date(), 'yyyy-MM-dd')
				}
			},
			endDate:{
				type: String,
				default: () => {
					return dateFormate(new Date(new Date().getTime() + 24 * 60 * 60 * 1000), 'yyyy-MM-dd')
				}
			},
			selectDate: {
				type: [Array, String],
				default: ''
			},
			multi:{
				type: Boolean,
				default: true
			},
			autoChoose:{
				type: Boolean,
				default: false
			},
			autoClear:{
				type: Boolean,
				default: true
			},
			minDate: {
				tyoe: String,
				default: () => {
					return dateFormate(new Date(), 'yyyy-MM-dd')
				}
			},
			range: {
				type: Number,
				default: 13
			},  // 默认显示至下年本月日历,
		},
		data () {
			return {
				week: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
				days: [],
				year: 1970,
				month: 0,
				day: 1,
				pickerDate: [],
				visible: false
			}
		},
		methods: {
			getMonthDays (year, month) {
				const daysArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
				if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
					daysArr[1] = 29
				}
				return daysArr[month]
			},
			getOffsetDays (year, month) {
				const _date = new Date(`${year}/${month}/01`)
				return _date.getDay()
			},
			formate (date) {
				return date.replace(/-/g, '/')
			},
			getMonth(monthIndex) {
				const _month = this.month + monthIndex
				return _month % 12
			},
			getYear(monthIndex) {
				const _month = this.month + monthIndex
				return this.year + Math.floor(_month / 12)
			},
			padZero (value) {
				value = value + ''
				return value.padStart(2, '0')
			},
			initDays () {
				for (let i = 0; i < this.range; i ++) {
					const year = this.getYear(i)
					const month = this.getMonth(i)
					const offsets = this.getOffsetDays(year, month + 1)
					this.days.push({
						year,
						month: month + 1,
						blocks: this.getMonthDays(year, month) + offsets,
						offsets
					})
				}
			},
			initDate () {
				const _date = new Date(this.formate(this.minDate))
				this.year = _date.getFullYear()
				this.month = _date.getMonth()
				this.day = _date.getDate()
				this.initDays()
				this.autoChooseSet()
			},
			daysFilter (val) {
				return val < 0 ? '' : val + 1
			},
			autoChooseSet () {
				if (!this.autoChoose) return
				if (this.startDate < this.minDate) return
				if (this.multi) {
					this.pickerDate = [this.startDate, this.endDate]
				} else {
					this.pickerDate = [this.startDate]
				}
			},
			getDaysClass (year, month, day) {
				if (day < 1) {
					return 'days-block'
				}
				month = this.padZero(month)
				day = this.padZero(day)
				const _date = `${year}-${month}-${day}`
				return {
					'days-block': true,
					'days-disabled': _date < this.minDate,
					'days-picker-start': _date === this.pickerDate[0],
					'days-picker-end': _date === this.pickerDate[this.pickerDate.length - 1],
					'days-picker-center': _date > this.pickerDate[0] && _date < this.pickerDate[this.pickerDate.length - 1]
				}
			},
			chooseDate(year, month, day) {
				if (day < 1) return
				month = this.padZero(month)
				day = this.padZero(day)
				const _date = `${year}-${month}-${day}`
				if (_date < this.minDate) return
				if (this.multi) {
					if (this.pickerDate.length === 1) {
						this.pickerDate[0] > _date ? (this.pickerDate = [_date]) : (this.pickerDate.push(_date))
					} else {
						this.pickerDate = [_date]
					}
				} else {
					this.pickerDate = [_date]
				}
			},
			getFormate(date) {
				if (!date) return ''
				return date.substr(5).replace('-', '月') + '日'
			},
			clear() {
				if (this.pickerDate.length) {
					this.pickerDate = []
				} else {
					this.close()
				}
			},
			save() {
				this.$emit('change', this.pickerDate)
				if (!this.multi && !this.pickerDate[0]) return
				if (this.multi && !this.pickerDate[1]) return
				this.autoClear && this.clear()
				this.close()
			},
			open() {
				this.visible = true
			},
			close() {
				this.visible = false
			}
		},
		created () {
			this.initDate()
		}
	}
</script>

<style lang="scss" scoped>
	.calendar {
		.text-primary {
			color: $uni-color-primary;
		}
		.text-disabled {
			color: rgba($color: $uni-color-primary, $alpha: 0.5);
		}
		.text-tip {
			color: #999999;
		}
		.flex {
			display: flex;
		}
		.bg-primary {
			background-color: $uni-color-primary;
		}
		.inline {
			display: inline;
		}
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		.mask {
			height: inherit;
			width: inherit;
			background: rgba($color: #000000, $alpha: 0.5);
		}
		.header {
			display: flex;
			justify-content: space-between;
			padding: 0rpx 25rpx;
			margin: 24rpx 0;
		}
		.weeks {
			display: flex;
			justify-content: center;
			padding-bottom: 24rpx;
			box-shadow: 0 2px 4px -2px #ededed;
			display: flex;
			font-size: 28rpx;
			.weekday {
				width: 100rpx;
				text-align: center;
			}
		}
		.content {
			position: fixed;
			bottom: 0;
			width: 100vw;
			height: 800rpx;
			background: #FFFFFF;
			.days {
				height: 620rpx;
				width: 700rpx;
				margin: 0 auto;
				::-webkit-scrollbar {
				  display:none;
				  width:0;
				  height:0;
				  color:transparent;
				}
			}
			.days-block-header {
				margin-top: 24rpx;
			}
			.days-block-container {
				display: flex;
				flex-wrap: wrap;
				.days-block {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100rpx;
					width: 100rpx;
					font-size: 26rpx;
					margin: 6rpx 0;
				}
				.days-disabled {
					color: #d4d4d4;
				}
				.days-picker-start {
					background-color: $uni-color-primary;
					color: #FFFFFF;
					border-top-left-radius: 50%;
					border-bottom-left-radius: 50%;
				}
				.days-picker-center {
					background-color: $uni-color-primary;
					color: #FFFFFF;
				}
				.days-picker-end {
					background-color: $uni-color-primary;
					color: #FFFFFF;
					border-top-right-radius: 50%;
					border-bottom-right-radius: 50%;
				}
			}
			
		}
	}
</style>
