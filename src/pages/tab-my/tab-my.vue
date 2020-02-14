<template>
  <view class="container">
    <!-- <button type="primary" @tap="handleAddClick">+ 1</button>
    <button type="primary" @tap="handleReduceClick">- 1</button>
    count = {{count}} -->

    <nav-bar background-color="#169cff" :status-bar="true" :border="false" :fixed="true">
      <template v-slot:default>
        <view class="title">
          <view class="search">搜索知乎内容</view>
          <text @click="handleChooseImage" class="iconfont icon-all"></text>
        </view>
      </template>
    </nav-bar>

    <view style="position: relative;overflow: hidden;">
      <view class="lower-bg"></view>

      <view class="header">
        <view class="info">
          <image class="avatar" src="https://pic4.zhimg.com/40960984d901b351ceced98037d4a19b_xl.jpg" mode="aspectFill"></image>
          <view class="center">
            <view class="center-name">Dorange</view>
            <view class="center-zhihu">
              <text class="iconfont icon-all"></text>
              <text> 知乎值：299 </text>
              <text class="iconfont icon-all"></text>
            </view>
          </view>
          <view class="right">个人主页 <text class="iconfont icon-all info-right-icon"></text></view>
        </view>
        <view class="number-list">
          <view class="number-item">
            <view class="count">未开通</view>
            <view class="name">创作中心</view>
          </view>
          <view class="number-item">
            <view class="count">5</view>
            <view class="name">关注</view>
          </view>
          <view class="number-item">
            <view class="count">1</view>
            <view class="name">收藏夹</view>
          </view>
          <view class="number-item">
            <view class="count">2</view>
            <view class="name">最近浏览</view>
          </view>
        </view>
      </view>
    </view>

    <view class="advertisement">
      <view class="text"><text class="iconfont icon-all"></text>盐选会员 为你盐选好内容</view>
      <view class="link">每月9元</view>
    </view>

    <view class="section section1">
      <view v-for="(item,index) in section1" class="section-item" :key="index">
        <text class="iconfont icon-all section-icon"></text>
        <view class="section-text">{{item}}</view>
      </view>
    </view>

    <view v-for="num in 5" :key="num" class="section section2">
      <view v-for="(item,index) in section2" class="section-item" :key="index">
        <text class="iconfont icon-all section-icon"></text>
        <view class="section-text">{{item}}</view>
      </view>
    </view>

  </view>
</template>

<script>
  import navBar from '../../components/nav-bar.vue';
  export default {
    components: {
      navBar
    },
    data() {
      return {
        section1: ['学习成本', '已购', '余额礼券', '读书会', '我的书架', '下载中心', '付费咨询', '活动广场'],
        section2: ['社区建设', '反馈与帮助', '仲裁议事厅', '夜间模式']
      }
    },
    computed: {
      count() {
        return this.$store.state.count
      }
    },
    onReady() {
      uni.hideTabBarRedDot({
        index: 4
      });
    },
    onShow() {
      getApp().globalData.lastTab = '../tab-my/tab-my';
    },
    onPageScroll(e) {
      console.log("scrolltop: " + e.scrollTop);
    },
    methods: {
      handleChooseImage() {
        uni.chooseImage({
          count: 9, //默认9
          sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
          // sourceType: ['album'], //从相册选择
          success: function(res) {
            console.log(JSON.stringify(res.tempFilePaths));
            console.log(JSON.stringify(res.tempFiles));
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  page,
  .container {
    background: #f6f6f6;
  }

  .container {
    position: relative;

    .lower-bg {
      height: 2000rpx;
      width: 2000rpx;
      border-radius: 50%;
      background-color: #169cff;
      position: absolute;
      top: -1750rpx;
      left: 50%;
      margin-left: -1000rpx;
      z-index: 1;
    }
  }

  .title {
    height: 100%;
    width: 100%;
    padding: 0 30rpx;
    display: flex;
    align-items: center;

    .search {
      text-align: center;
      background-color: #0686ff;
      height: 30px;
      line-height: 30px;
      border-radius: 3px;
      flex: auto;
      margin-right: 20rpx;
      font-size: 14px;
      color: #83c3ff;
    }

    .iconfont {
      font-size: 24px;
      color: #fff;
      flex: none;
    }
  }

  .header {
    margin: 0 30rpx;
    background: #ffffff;
    border-radius: 20rpx;
    padding: 30rpx 0;
    z-index: 100;
    position: relative;

    .info {
      padding: 0 30rpx;
      display: flex;
      align-items: center;

      .avatar {
        height: 120rpx;
        width: 120rpx;
        border-radius: 50%;
        flex: none;
      }

      .center {
        flex: 1;
        margin-left: 30rpx;

        .center-name {
          font-size: 34rpx;
          color: #1a1a1a;
          font-weight: bold;
          line-height: 1;
        }

        .center-zhihu {
          height: 46rpx;
          line-height: 46rpx;
          border-radius: 23rpx;
          padding: 0 20rpx;
          color: #169cff;
          font-size: 24rpx;
          background-color: #e5f3ff;
          display: inline-block;
          margin-top: 10rpx;

          &>text {
            font-size: 20rpx;
          }
        }
      }

      .right {
        font-size: 32rpx;
        color: #999999;
        flex: none;
      }
    }

    .number-list {
      display: flex;
      margin-top: 50rpx;

      .number-item {
        flex: 1;
        text-align: center;
        position: relative;

        &:nth-child(n+2)::after {
          content: '';
          display: block;
          position: absolute;
          top: 50%;
          left: 0;
          margin-top: -20rpx;
          height: 40rpx;
          background-color: #d3d3d3;
          width: 1px;
        }

        .count {
          font-size: 26rpx;
          line-height: 1;
          font-weight: bold;
        }

        .name {
          font-size: 26rpx;
          line-height: 1;
          margin-top: 15rpx;
        }
      }
    }
  }

  .advertisement {
    height: 100rpx;
    padding-top: 40rpx;
    padding-left: 30rpx;
    padding-right: 30rpx;
    // background-color: #fbeedd;
    background: linear-gradient(to bottom right, #f7e8c1, #fbeedd);
    border-radius: 20rpx;
    display: flex;
    align-items: center;
    margin: 0 30rpx;
    justify-content: space-between;
    margin-top: -40rpx;
    z-index: 99;
    position: relative;

    .text {
      font-size: 30rpx;
      color: #f4c27b;
      display: flex;
      align-items: center;
    }

    .iconfont {
      font-size: 50rpx;
      margin-right: 10rpx;
    }

    .link {
      height: 54rpx;
      border-radius: 27rpx;
      line-height: 54rpx;
      padding: 0 30rpx;
      background: linear-gradient(to bottom right, #f7dab3, #f4c27b);
      font-size: 24rpx;
      letter-spacing: 4rpx;
      font-weight: bold;
      color: #694949;
    }
  }

  .section {
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    padding: 30rpx 0;

    .section-item {
      width: 25%;
      text-align: center;
      font-size: 24rpx;
      line-height: 1;

      .section-icon {
        font-size: 40rpx;
        color: #169cff;
      }

      .section-text {
        margin-top: 10rpx;
      }

      &:nth-child(n+5) {
        margin-top: 30rpx;
      }
    }
  }

  .section1,
  .section2 {
    margin-top: 20rpx;
  }
</style>
