<template>
	<view>
    <button type="primary" @tap="handleAddClick">+ 1</button>
    <button type="primary" @tap="handleReduceClick">- 1</button>
    count = {{count}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
    computed:{
      count(){
        return this.$store.state.count
      }
    },
    onReady() {
      uni.hideTabBarRedDot({
        index: 4
      });
    },
		methods: {
			handleAddClick(){
			  this.$store.commit('addCount');
			},
			handleReduceClick(){
			  this.$store.commit('reduceCount');
			},
		}
	}
</script>

<style>

</style>
