<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
    onLoad(params) {
      console.log('topicId:',params.topicId);
      uni.setNavigationBarTitle({
        title: `话题${params.topicId}的详情`
      });
    },
		methods: {
			
		}
	}
</script>

<style>

</style>
