<template>
  <view class="uni-navbar">
    <view :class="{ 'uni-navbar--fixed': fixed, 'uni-navbar--shadow': shadow, 'uni-navbar--border': border }" :style="{ 'background-color': backgroundColor }"
      class="uni-navbar__content">
      <uni-status-bar v-if="statusBar" />
      <view :style="{backgroundColor: backgroundColor }" class="uni-navbar__header uni-navbar__content_view">
        <slot />
      </view>
    </view>
    <view class="uni-navbar__placeholder" v-if="fixed">
      <uni-status-bar v-if="statusBar" />
      <view class="uni-navbar__placeholder-view" />
    </view>
  </view>
</template>

<script>
  import uniStatusBar from "./uni-status-bar/uni-status-bar.vue";

  export default {
    name: "NavBar",
    components: {
      uniStatusBar,
    },
    props: {
      fixed: {
        type: [Boolean, String],
        default: false
      },
      backgroundColor: {
        type: String,
        default: "#FFFFFF"
      },
      statusBar: {
        type: [Boolean, String],
        default: false
      },
      shadow: {
        type: [String, Boolean],
        default: false
      },
      border: {
        type: [String, Boolean],
        default: true
      }
    }
  };
</script>

<style lang="scss" scoped>
  $nav-height: 44px;

  .uni-nav-bar-text {
    /* #ifdef APP-PLUS */
    font-size: 34rpx;
    /* #endif */
    /* #ifndef APP-PLUS */
    font-size: $uni-font-size-lg;
    /* #endif */
  }

  .uni-navbar {
    width: 750rpx;
  }

  .uni-navbar__content {
    position: relative;
    width: 750rpx;
    background-color: $uni-bg-color;
    overflow: hidden;
  }

  .uni-navbar__content_view {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    align-items: center;
    flex-direction: row;
    // background-color: #FFFFFF;
  }

  .uni-navbar__header {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
    width: 750rpx;
    height: $nav-height;
    line-height: $nav-height;
    font-size: 16px;
  }

  .uni-navbar__header-container {
    flex: 1;
  }

  .uni-navbar__placeholder-view {
    height: $nav-height;
  }

  .uni-navbar--fixed {
    position: fixed;
    z-index: 998;
  }

  .uni-navbar--shadow {
    /* #ifndef APP-NVUE */
    box-shadow: 0 1px 6px #ccc;
    /* #endif */
  }

  .uni-navbar--border {
    border-bottom-width: 1rpx;
    border-bottom-style: solid;
    border-bottom-color: $uni-border-color;
  }
</style>
