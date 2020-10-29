<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" @click="show"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<beauty-calendar ref="calendar" 
			:auto-choose="autoChoose" 
			:multi="multi" 
			:start-date="startDate" 
			:end-date="endDate" 
			:range="rang" 
			:auto-clear="autoClear" 
			@change="change">
		</beauty-calendar>
	</view>
</template>

<script>
	import beautyCalendar from '@/components/beauty-calendar/beauty-calendar.vue'
	export default {
		components:{
			beautyCalendar,
		},
		data() {
			return {
				title: 'beauty-calendar',
				multi: true,
				autoChoose: true,
				startDate: "2020/11/02",
				endDate: "2020/11/03",
				rang: 13,
				autoClear:false
			}
		},
		onLoad() {
			
		},
		methods: {
			show(){
				this.$refs.calendar.open()
			},
			change(e){
				console.log(e)
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
