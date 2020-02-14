<template>
  <view>
    <view>pushClick is: {{$store.state.pushClick}}</view>
    <view>pushReceive is: {{$store.state.pushReceive}}</view>
    <view>count is: {{$store.state.count}}</view>
    <block v-for="item in total" :key="item">
      <view class="border">
        <topic-item :index="item" />
      </view>
    </block>
  </view>
</template>

<script>
  import topicItem from '../../components/topic-item.vue'
  export default {
    components: {
      topicItem
    },
    data() {
      return {
        total: 10
      }
    },
    onLoad() {
      // console.log(getCurrentPages())
      uni.getSystemInfo({
        success: function(res) {
          console.log(JSON.stringify(res));
        }
      });
      // #ifdef APP-PLUS
      console.log(JSON.stringify(plus.screen));
      // #endif
      uni.setTabBarBadge({
        index: 3,
        text: '99+'
      });
      uni.showTabBarRedDot({
        index: 4,
      });
    },
    onShow() {
      getApp().globalData.lastTab = '../tab-home/tab-home';
    },
    onPullDownRefresh() {
      console.log('onPullDownRefresh ~~~');
      this.updateTopicList();
    },
    onReachBottom() {
      console.log('onReachBottom ~~~');
      this.loadMoreTopics();
    },
    // #ifdef APP-PLUS
    onNavigationBarButtonTap(e){
      // 获取到按钮index
      console.log('onNavigationBarButtonTap',JSON.stringify(e))
    },
    // #endif
    methods: {
      updateTopicList() {
        this.total = 10;
        uni.stopPullDownRefresh();
      },
      loadMoreTopics() {
        if(this.total >= 100){
          return;
        }
        this.total += 10;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .border {
    border-bottom: 16rpx solid #f6f6f6;

    &:last-child {
      border-bottom: none;
    }
  }
</style>
