<script>
  export default {
    globalData: {
      lastTab: ''
    },
    onLaunch: function() {
      console.log('App Launch')
      console.log('App Launch Launch')
      console.log(uni.getSystemInfoSync())
      // #ifdef APP-PLUS
      const _self = this;
      const _handleClick = function(message) {
        console.log('click click');
        // this.event += 'click~';
        plus.nativeUI.toast('push click');
        _self.$store.commit('handlePushClick');
      };
      const _handleReceive = function(message) {
        console.log('push push');
        // this.event += 'push~';
        plus.nativeUI.toast('push receive');
        _self.$store.commit('handlePushReceive');
      };
      plus.push.addEventListener('click', _handleClick);
      plus.push.addEventListener('receive', _handleReceive);
      // #endif
      console.log('count:', this.$store.state.count);
      // setInterval(() => {
      //   this.$store.commit('addCount');
      // }, 2000);
    },
    onShow: function() {
      console.log('App Show')
      // #ifdef APP-PLUS
      console.log('clientid: ', plus.push.getClientInfo().clientid)
      // #endif
      // clientid: 2c7d8497cd84f02352fa1831a4a1e182
      // 36b13bb427d05bffc4e4c259c1f481d4 // huawei phone apk
      // b963e7daa703bc4b296748eb91f20fce // mi pad apk
      // e551b4140f3e832821aecc66d5034cec // pda apk
    },
    onHide: function() {
      console.log('App Hide')
    },
    onError: function(err) {
      console.log('App Error: ', JSON.stringify(err))
    }
  }
</script>

<style>
  /*每个页面公共css */
  /* @import url("static/fonts/iconfont.css"); */
  @import url("common/iconfont.css");
</style>
