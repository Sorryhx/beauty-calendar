<template>
	<view class="calendar-content" v-if="show">
		<view @click="close" style="height: 100%;"></view>
		<view class="calendar-body">
			<view class="calendar-header">
				<view :class="{
					'not-clear': pickerArray[0] == null,
					'clear': pickerArray[0] !=null,
				}" @click="clear">清除</view>
				<view class="title">
					<text v-if="pickerArray.length==0">选择日期</text>
					<text v-else-if="pickerArray.length==1 && multi == false">{{pickerArray[0].slice(5).replace('/','月')+ '日'}}</text>
					<view class="date-range" v-else>
						<!-- <view v-show="pickerArray[0]==null" style="color: #8F8F94;">开始日期</view> -->
						<text v-show="pickerArray[0]!=null">{{pickerArray[0].slice(5).replace('/','月')+ '日'}}</text>
						<text>-</text>
						<view v-show="pickerArray[1]==null" style="color: #8F8F94;">结束日期</view>
						<text v-if="pickerArray[1]!=null">{{pickerArray[1].slice(5).replace('/','月')+ '日'}}</text>
					</view>
				</view>
				<view
				:class="{
					'not-confirm': true,
					'confirm': (pickerArray[0] != null && multi == false)|| (pickerArray[1] != null && multi == true)
				}"
				@click="save"
				>保存</view>
			</view>
			<view class="calendar-picker">
				<view class="calendar-week">
					<view v-for="(v, i) in weekArray" :key="i" class="week">
						{{v}}
					</view>
				</view>
				
				<scroll-view
					:scroll-y="true"
					class="calendar-scroll"
				>
					<block v-for="(v, index) in calendarEmptyTempArray" :key="index">
						<view class="monthAndyear">{{v[3]}}年{{v[2]}}月</view>
						<view class="calendar-days-content">
							<view class="calendar-empty-day" v-for="(e) of whiteDay(index, v)" :key="e.id"></view>
							 <block v-for="(d, i) of v[4]">
								<view class="calendar-day-content" v-if="(i + 2) > sliceDisableDay(v) || index > 0 || date <= 15" :key="i" @click="picker([v[3], v[2], i+1])">
									<view  
									:class="{
										'calendar-day': true,
										'calendar-disable-day': `${v[3]}/${prefixZero(v[2])}/${prefixZero(i+1)}`< today,
										'calendar-today': `${v[3]}/${prefixZero(v[2])}/${prefixZero(i+1)}` == today,
										'calendar-picker-start':  `${v[3]}/${prefixZero(v[2])}/${prefixZero(i+1)}` == pickerArray[0] && pickerArray.length > 1,
										'calendar-picker-day': `${v[3]}/${prefixZero(v[2])}/${prefixZero(i+1)}` > pickerArray[0] && `${v[3]}/${prefixZero(v[2])}/${prefixZero(i+1)}` < pickerArray[1],
										'calendar-picker-end': `${v[3]}/${prefixZero(v[2])}/${prefixZero(i+1)}` == pickerArray[1],
										'calnedar-picker-single': `${v[3]}/${prefixZero(v[2])}/${prefixZero(i+1)}` == pickerArray[0] && pickerArray.length == 1
									}" 
									>
									{{i+1}}
									</view>
								 </view>
							 </block>
						</view>
					</block>
				</scroll-view>
				
			</view>
		</view>
	</view>
</template>

<script>
/*
* @description 组件可以对日期进行单选，多选，使用酒店预定、飞机票火车票预定
* @__author__:Sorry_hx, __email__:1317205072@qq.com
* @property {String} starDate 单选为选中日期，多选为选中开始日期，默认选择为今天，需要autoChoose = true, YYYY/MM/DD
* @property {String} endDate 单选无效，多选为选中结束日期，默认选择为明天， 需要autoChoose = true, YYYY/MM/DD
* @property {Boolean} multi 多选模式
* @property {Boolean} autoChoose 自动选择输入日期，默认为false
* @property {Boolean} autoClear 保存自动清除选择，默认为true
* @property {Number} range 日历月份数，自本月起的往后几个月的日历，默认为13个月，即明年的本月
* @event {Array} change 触发change时间，返回日期数组
*/
export default{
	props:{
		startDate:{
			type: String,
			default: ''
		},
		endDate:{
			type: String,
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
		range: {
			type: Number,
			default: 13
		},  // 默认显示至下年本月日历,
	},
	data(){
		return{
			weekArray: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
			monthDaysArray: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
			year: 1970,
			month: 1,
			date: 1,
			weekDay: 0,
			calendarEmptyTempArray: [] ,// [月份第一天索引，月份最后一天, 月份，年份,当月天数]
			pickerArray:[], // 选择日期的开始与结束
			pickerStartDate:'',
			pickerEndDate:'',
			today: '',
			rangeArray: [],
			pickerStamp: 0,
			show: false
		}
	},
	methods:{
		sliceDisableDay (v) {
			const today = new Date(this.today)
			const date = today.getDate()
			return date - ((date - 1)%7 + v[0])%7
		},
		whiteDay (index, v) {
			if (index > 0) { return v[0] }
			const today = new Date(this.today)
			const date = today.getDate()
			if ((v[0] + date) > 7 && this.date > 15) {
				return 0
			} else {
				return v[0]
			}
		},
		getCalendar(){
			const date = new Date()
			this.year = date.getFullYear()
			this.updateFebruarydays(this.year)
			this.month = date.getMonth() + 1
			this.date = date.getDate()
			this.weekDay = date.getDay()
			this.today = this.getDate(date)
			const tomorrowDate = this.getDate(new Date(date.getTime() + 24*60*60*1000))
			
			if (this.multi  && this.autoChoose){
				if (this.startDate != '' && this.endDate != '' && this.startDate < this.endDate && this.startDate.replace(/-/g, '/') >= this.today){
					this.pickerArray=[this.startDate.replace(/-/g, '/'), this.endDate.replace(/-/g, '/')]
				}else{
					this.pickerArray=[this.today, tomorrowDate]
				}
			}else if(!this.multi && this.autoChoose){
				if (this.startDate != '' && this.startDate.replace(/-/g, '/') >= this.today){
					this.pickerArray=[this.startDate.replace(/-/g, '/')]
					
				}else{
					this.pickerArray=[this.today]
					
				}
				
			}
			const firstDay = new Date(`${this.year}/${this.month}/01`).getDay() //获取本月第一天
			// 获取接下来月份的数组，用于渲染日历 [月份第一天索引，月份最后一天, 月份，年份,当月天数]
			let month // 临时月份
			let year = this.year
			for (let i=0; i<this.range; i++){
				if(i > 0){
					let preDay = (this.calendarEmptyTempArray[i-1][1]+1)%7
					month = month + 1
					if(month > 12){
						year ++
						month = month - 12 
						this.updateFebruarydays(year)
					}
					let monthDays = this.monthDaysArray[month-1]
					let laterDay = (preDay + monthDays)%7 - 1
					this.calendarEmptyTempArray[i] = [preDay, laterDay, month, year, monthDays]
				}else{
					month = this.month
					let monthDays = this.monthDaysArray[month-1]
					let laterDay = (firstDay + monthDays)%7 - 1
					this.calendarEmptyTempArray[0] = [firstDay, laterDay, month, year, monthDays]
				}
			}
		},
		getDate(date){
			return `${date.getFullYear()}/${this.prefixZero(date.getMonth() + 1)}/${this.prefixZero(date.getDate())}`
		},
		updateFebruarydays(year){
			// 手动更新2月日期
			if(year%4==0&&year%100!=0||year%400==0){
				this.monthDaysArray[1] = 29
			}else{
				this.monthDaysArray[1] = 28
			}
		},
		getDayClass(date, month, year){
			// 计算样式
			if (date<this.date && month == this.month && year == this.year){
				return 'calendar-disable-day'
			}else if(date == this.date && month == this.month && year == this.year){
				return 'calendar-today'
			}
			return 'calendar-day'
		},
		prefixZero(num){
			// 补零,标准化
			if (num>10){
				return num
			}else{
				return (Array(2).join(0) + num).slice(-2)
			}
		},
		getTomorrowDate(todayDate, month){
			const d = todayDate + 1
		},
		dateScope(startDateStr, endDateStr){
			const startTime = new Date(startDateStr).getTime()
			const endTime = new Date(endDateStr).getTime()
			const oneDay = 24*60*60*1000
			let l = []
			let i
			for (i=startTime; i<=endTime;){
				l.push(this.getDate(new Date(i)).replace(/\//g, '-'))
				i += oneDay
			}
			return l
		},
		picker(dateArray){
			let [year, month, day] = dateArray
			let date = `${year}/${this.prefixZero(month)}/${this.prefixZero(day)}`
			if (date < this.today){
				// 禁止前面日期点击
				return null
			}
			if (this.multi == true){
				if (this.pickerStamp == 0){
					this.pickerArray = [date]
					this.pickerStamp = 1
				}else{
					if (date>this.pickerArray[0]){
					
						this.pickerArray.push(date)
						this.pickerStamp = 0
					}else{
						// 实现日期小于第一次选择时变为重选
						this.pickerArray = [date]
						this.pickerStamp = 1
					}
				}
			}else{
				this.pickerArray = [date]
			}
		},
		clear(){
			// 清除日期选择
			this.pickerArray = []
		},
		save(e){
			if (this.multi == true){
				if (this.pickerArray.length == 2){
					this.$emit('change', this.dateScope(this.pickerArray[0], this.pickerArray[1]))
					this.show = false
					if (this.autoClear){
						this.clear()
					}
				}
			}else{
				this.$emit('change', [this.pickerArray[0].replace(/\//g, '-')])
				this.show = false
				if (this.autoClear){
					this.clear()
				}
			}
			
		},
		close(){
			this.show = false
		},
		open(){
			this.show = true
		}
	},
	created() {
		this.getCalendar()
	}
}
</script>

<style lang="scss" scoped>
@mixin border-bottom {
	border-bottom-color: #d4d4d4;
	border-bottom-style: solid;
	border-bottom-width: thin;
}
.calendar-content{
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba($color: #000000, $alpha: 0.5);
	left: 0;
	z-index: 99;
	.calendar-body{
		height: 800rpx;
		width: 100%;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		.calendar-header{
			@include border-bottom;
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			padding: 0 40rpx;
			align-items: center;
			
			.clear{
				color: $uni-color-primary;
			}
			.not-clear{
				color: rgba($color: $uni-color-primary, $alpha: 0.5);
			}
			.confirm{
				color: $uni-color-primary !important;
			}
			.not-confirm{
				color: rgba($color: $uni-color-primary, $alpha: 0.5);
			}
			.title{
				font-size: 32rpx;
				.date-range{
					display: flex;
					width: 310rpx;
					justify-content: space-between;
				}
			}
		}
		.calendar-picker{
			display: flex;
			flex-direction: column;
			align-items: center;
			.calendar-week{
				display: flex;
				justify-content: flex-start;
				height: 70rpx;
				align-items: center;
				width: 700rpx;
				@include border-bottom;
				.week{
					width: 100rpx;
					text-align: center;
					font-size: 30rpx;
				}
				
			}
			.calendar-scroll{
				width: 700rpx;
				height: 610rpx;
				.monthAndyear{
					font-size: 32rpx;
					padding-left: 34rpx;
					height: 60rpx;
					display: flex;
					align-items: flex-end;
					
				}
				.calendar-days-content{
					display: flex;
					justify-content: flex-start;
					flex-wrap: wrap;
					-webkit-flex-wrap: flex-start;
					-webkit-box-lines: multiple; /* Safari */
					// -webkit-box-orient: horizontal;
					display: -webkit-flex; /* Safari */
					
					width: 700rpx;
					@include border-bottom;
					.calendar-empty-day{
						width: 100rpx;
						height: 100rpx;
					}
					.calendar-day-content{
						height: 110rpx;
						width: 100rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						position: relative;
						.calendar-day{
							width: 100rpx;
							height: 100rpx;
							text-align: center;
							line-height: 100rpx;
							font-size: 30rpx;
						}
						.calendar-today{
							// @extend .calendar-day;
							border-radius: 50%;
							border-style: solid;
							border-width: thin;
							border-color: #d4d4d4;
							box-sizing: border-box;
						}
						.calendar-disable-day{
							// @extend .calendar-day;
							color: #d4d4d4;
						}
						.calendar-picker-start{
							border-top-left-radius: 50%;
							border-bottom-left-radius: 50%;
							border-top-right-radius: 0;
							border-bottom-right-radius: 0;
							background-color: $uni-color-primary;
							border-color: $uni-color-primary;
							color: #FFFFFF;
							// box-sizing: inherit !important;
						}
						.calendar-picker-day{
							background-color: $uni-color-primary;
							border-color: $uni-color-primary;
							color: #FFFFFF;
						}
						.calendar-picker-end{
							border-top-left-radius: 0;
							border-bottom-left-radius: 0;
							border-top-right-radius: 50%;
							border-bottom-right-radius: 50%;
							background-color: $uni-color-primary;
							color: #FFFFFF;
							border-color: $uni-color-primary;
						}
						.calnedar-picker-single{
							border-radius: 50%;
							border-color: $uni-color-primary;
							background-color: $uni-color-primary;
							color: #FFFFFF;
						}
					}
					
				}
			}
		}
	}
}
</style>
