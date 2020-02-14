<template>
  <view class="container">

    <uni-nav-bar color="#848994" background-color="#fff" :status-bar="true">
      <template v-slot:default>
        <view class="tab">
          <view class="tab-item" :class="{'active':tabIndex==0}" @tap="handleTabChange(0)">通知</view>
          <view class="tab-item" :class="{'active':tabIndex==1}" @tap="handleTabChange(1)">私信</view>
        </view>
      </template>
      <template v-slot:right>
        <text class="iconfont icon-all nav-bar"></text>
      </template>
    </uni-nav-bar>

    <view class="header">
      <view class="title">通知列表</view>
      <view class="read-all">全部已读<text class="iconfont icon-all"></text></view>
    </view>

    <block v-for="item in 4" :key="item">
      <message-item />
    </block>
  </view>
</template>

<script>
  import messageItem from '../../components/message-item.vue'
  import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
  export default {
    components: {
      messageItem,
      uniNavBar
    },
    data() {
      return {
        total: 4,
        tabIndex: 0,
      }
    },
    onLoad() {
      console.log("onLoad: removeTabBarBadge");
      uni.removeTabBarBadge({
        index: 3
      })
    },
    onShow() {
      getApp().globalData.lastTab = '../tab-message/tab-message';
    },
    methods: {
      handleTabChange(index) {
        this.tabIndex = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  page {
    background: #ebebeb;
  }

  .tab {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .tab-item {
      width: 120rpx;
      text-align: center;
      font-weight: bold;
      position: relative;

      &.active {
        color: #1a1a1a;
        &::after{
          content: '';
          position: absolute;
          width: 60%;
          height: 3px;
          border-radius: 1px;
          background: #0084ff;
          left: 20%;
          bottom: 0;
        }
      }
    }
  }

  .nav-bar.icon-all {
    font-size: 24px;
  }

  .header {
    display: flex;
    height: 96rpx;
    background: #fff;
    border-bottom: 1rpx solid #d3d3d3;
    align-items: center;
    justify-content: space-between;
    padding: 0 $sidePadding;
    color: #9d9d9d;
    font-size: 28rpx;

    .icon-all {
      font-size: 28rpx;
      margin-left: 10rpx;
    }
  }
</style>
