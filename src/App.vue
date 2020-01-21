<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
      console.log(uni.getSystemInfoSync())
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
    onError: function(err) {
    	console.log('App Error: ',JSON.stringify(err))
    }
	}
</script>

<style>
	/*每个页面公共css */
  @import url("static/fonts/iconfont.css");
  /* @import url("common/iconfont.css"); */
</style>
