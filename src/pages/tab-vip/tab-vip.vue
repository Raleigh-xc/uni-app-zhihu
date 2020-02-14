<template>
	<view>
    <view>clientid is: {{clientid}}</view>
    <view>pushClick is: {{$store.state.pushClick}}</view>
    <view>pushReceive is: {{$store.state.pushReceive}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				clientid: '~~~',
			}
		},
    onLoad() {
      
    },
    onShow() {
      getApp().globalData.lastTab = '../tab-vip/tab-vip';
      // #ifdef APP-PLUS
      this.clientid = plus.push.getClientInfo().clientid
      // #endif
    },
		methods: {
			
		}
	}
</script>

<style>

</style>
