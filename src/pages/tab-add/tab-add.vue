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
    onShow() {
      // #ifdef APP-PLUS
      uni.scanCode({
        success: function(res) {
          console.log('条码类型：' + res.scanType);
          console.log('条码内容：' + res.result);
          const lastTab = getApp().globalData.lastTab;
          console.log('lastTab:', lastTab);
        },
        fail: function(err) {
          console.log('scan fail: ', JSON.stringify(err))
          const lastTab = getApp().globalData.lastTab;
          console.log('lastTab:', lastTab);
          uni.switchTab({
            url: lastTab
          })
        }
      });
      // #endif
      // #ifdef H5
      const lastTab = getApp().globalData.lastTab;
      console.log('lastTab:', lastTab);
      // #endif
    },
    methods: {

    }
  }
</script>

<style>

</style>
