<!-- home -->
<template>
  <div class="app-container">
    <div class="index-container">
      <!-- 广告 -->
      <div v-show="bannerShow" class="bannerTop">
        <div class="banner">
          <img src="http://pic.dingtongmh.cn/ad/pc/1/26ce8864b12cc5905ff42f630999430d.jpg" />
          <!-- <van-notice-bar
              left-icon="volume-o"
              background="#F0F0F0"
              text="公告"
            /> -->
        </div>
      </div>
      <!-- 广告 -->

      <header class="header">
        <div class="menu">
          <!-- 菜单左侧 -->
          <div class="menu-left">
            <span class="logo"></span>
            <div class="adult-mode">
              <van-switch v-model="checked" active-color="#E63740" inactive-color="#CCCCCC" size="17px" />
            </div>
          </div>
          <!-- 菜单左侧 -->
          <!-- 菜单右侧 -->
          <div class="menu-right">
            <div class="menu-right-one">
              <div class="menu-right-one-item">
                <!-- <div class="charge"></div> -->
                <van-icon name="balance-o" size="20" />
                <span>兑换</span>
              </div>
              <div class="menu-right-one-item">
                <!-- <div class="library"></div> -->
                <van-icon name="vip-card-o" size="20" />
                <span>会员</span>
              </div>
              <div class="menu-right-one-item">
                <!-- <div class="gift"></div> -->
                <van-icon name="point-gift-o" size="20" />
                <span>限免</span>
              </div>
              <div class="menu-right-one-item">
                <!-- <div class="search"></div> -->
                <van-icon name="search" size="20" />
                <span>搜索</span>
              </div>
            </div>
            <!-- 更多菜单  -->
            <div class="menu-right-two" @click="onMoreTab"><div></div></div>

            <!-- 更多菜单  -->
          </div>
          <!-- 菜单右侧 -->
        </div>
      </header>

      <!-- 遮罩 -->

      <van-overlay :show="show" @click="onMoreTab">
        <div class="wrapper">
          <!-- <div class="block" @click.stop /> -->
          <transition name="van-slide-right">
            <div v-show="visible" class="right-more" @click.stop>
              <div class="login-info">
                <!-- <div class="login-info-item"><van-icon name="friends-o" size="14px" /><span>会员注册</span></div> -->
                <!-- <div class="login-info-item"><van-icon name="info-o" size="14px" /><span>登录</span></div> -->
                <div class="login-access-item">
                  <span>账号:</span><span>2131321313</span><van-icon name="vip-card-o" size="18px" />
                </div>
                <div class="login-info-item"><van-icon name="close" size="14px" /><span>退出</span></div>
              </div>
              <div class="discount">
                <van-field size="mini" v-model="text" placeholder="请输入兑换码" />
                <van-button class="btnExchange" size="small" type="danger">兑 换 码</van-button>
              </div>
              <div class="mune-list">
                <div class="sub">
                  <van-tabbar v-model="activeKey" active-color="#E63740" @change="onMenuTabChange">
                    <!-- <van-tabbar-item icon="friends-o">我的</van-tabbar-item> -->
                    <van-tabbar-item icon="star-o">收藏</van-tabbar-item>
                    <van-tabbar-item icon="browsing-history-o">历史</van-tabbar-item>
                    <!-- <van-tabbar-item icon="balance-o">充值</van-tabbar-item> -->
                    <!-- <van-tabbar-item icon="service">客服</van-tabbar-item> -->
                    <van-tabbar-item icon="service">问题</van-tabbar-item>
                  </van-tabbar>
                </div>
                <div class="sub_list">
                  
                    <div v-show="0 == onMenuTabChangeIndex">
                            <van-empty description="暂无收藏" />
                    </div>
                  
                    <div v-show="1 == onMenuTabChangeIndex">  
                      <!-- <van-empty description="暂无历史" /> -->
                      <van-swipe-cell>
                        <van-cell :border="false" title="单元格" value="内容" />
                        <template #right>
                          <van-button square type="danger" text="删除" />
                        </template>
                      </van-swipe-cell>

                    </div>
               
                    <!-- <div v-show="2 == onMenuTabChangeIndex">  <span>管理员邮箱： gzwillyy@163.com</span></div> -->
                    <div v-show="2 == onMenuTabChangeIndex">

                                <van-collapse v-model="activeNames">
                                  <van-collapse-item name="1">
                                    <template #title>
                                      <div><van-icon name="question-o" />  如何获取vip</div>
                                    </template>
                                      卡盟购买激活兑换码后，在兑换码输入框中兑换即可
                                  </van-collapse-item>
                                   <van-collapse-item name="2">
                                    <template #title>
                                      <div><van-icon name="question-o" />  联系邮箱</div>
                                    </template>
                                      gzwillyy@455.com
                                  </van-collapse-item>
                                  
                                </van-collapse>

                    </div>
               
                    
                 
               
                </div>
              </div>
            </div>
          </transition>
        </div>
      </van-overlay>

      <!-- 遮罩 -->
      <!-- 导航 -->
      <van-sticky>
        <van-tabs :before-change="beforeChange" background=" rgba(0, 0, 0, 0.1)">
                <van-tab v-for="index in 8" :key="index" :title="'标签 ' + index">
                </van-tab>
        </van-tabs>
      </van-sticky>
      <!-- 导航 -->


       <div class="list-info">
aaaaaaaa
      </div>
    </div>

  </div>
</template>

<script>
import { Notify } from 'vant'
export default {
  data() {
    return {
        activeNames: ['1'],
      bannerShow: false,
      checked: true,
      show: false,
      visible: false,
      text: '',
      activeKey: 0,
      onMenuTabChangeIndex: 0
    }
  },

  computed: {},

  mounted() {},

  methods: {
    onMoreTab() {
      this.show = !this.show
      this.visible = !this.visible
    },
    onMenuTabChange(index) {
      this.onMenuTabChangeIndex = index
      Notify({ type: 'primary', message: index })
    },
    beforeChange(index) {

      Notify({ type: 'primary', message: index })
      //  if (index === 1) {
      //   
      // }
      return true;
      // 返回 Promise 来执行异步逻辑
      return new Promise((resolve) => {
        // 在 resolve 函数中返回 true 或 false
        resolve(index !== 3);
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.index-container {

  display: flex;
  flex-direction: column;

  .list-info{
   
   
  }

  .bannerTop {
    display: flex;
    flex-direction: column;
    .banner {
      height: 100%;

      text-align: center;
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
      img {
        width: 100%;
        height: 40px;
        will-change: transform;
        border: none;
        outline: none;
        vertical-align: middle;
      }
    }
  }
  .header {
    display: flex;
    flex-direction: column;
    .menu {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #cccccc;
      .menu-left {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .logo {
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAQCAYAAAD+mOowAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5RUM5M0I1NjU2NEYxMUU3OUY3NUM4RDIzRTVCNDFGMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5RUM5M0I1NzU2NEYxMUU3OUY3NUM4RDIzRTVCNDFGMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlFQzkzQjU0NTY0RjExRTc5Rjc1QzhEMjNFNUI0MUYxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlFQzkzQjU1NTY0RjExRTc5Rjc1QzhEMjNFNUI0MUYxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WyiudQAABa5JREFUeNqsWGtsVUUQPvdWC9QXErFKIoipvAymFkURsViFEhBIYzAoPoIRLEb5UQ1aX1V/qFCCRCpYCFiIRIyAChUCSm2jgKUIUauRFGspPuoLqlVqS+n1G/M12a5zHlvuJF/3ds/M7O7M7szsxg4PvHyI53kvAZd5wXQK+BB4KqOx7qT5AToy0eQDEww9vwCfAGVAOWQStkLIPYDmXiBNGe84sBdYA9nD0nFGaq8+aF4Axsm/IfMVmUc72tsazE7ouADNPGA6MBJIBU4AB4G3gdWQ+StIMXSciWYmcCcwBjgP6AQOAduAFdDxrSKXgWYtcC2wC5gNvh8VvgFoVgI3AJ8LXwzGkglmetHpERhuCQ19FpqlwP0hMnuAWZBrMJw0Fc2WCOPJBimEbDEWUITfzzrM9SMYIscwwFw0i4FzAmSagDmQK/dxUhaaN4DhATo6gIVAEfScMmSr0Yw2+L6UTQeeP6wxdqCZaHTtjuPPEM+NMmloWWxFBCcJXQ/UQGaE0Tcl4ngpwCLIzkF7heNcs4zFy0ksDXGS0EXAVjrVdtJNjBLDQ3TIaX8S2AyZFKP/GotPTvRbFo9QjvX/WHHUTsfFb2e70todYSQhZwtPoVBvx3EXnRuP73KU2UEDS5gqdJRdDrkxhpMuQbMJ6OOgY5oVAWIKTy7wiuLobiShL42noh9wKXOGST8AGxmCKhGCtkImhzHWpjpgHdAC5AHZCk8RdDwPHWXKWBIif2XOukVZ2LRhTY0pRqh+HOhl8bwGtAHf8QTF+ftCi+9vYBVz2SjgbsVABxCWRtFR65mTbHqXkSWddky3vks+HwY99dCRCHDqw+Ap4Vj/44tZyX28xHWLpwqGHW/xvcfdYpKEhFzwnjD4iiWhW3xSZEiyXK04ajbkyyi7nEm/22LwvcTY5c1M5CadjwU3Gzz3cSyTmpkbaq2wtlNx1lg6+ijDsEkPQscKQ4dsho+VdFIMvgUhjpJiZCr4tml8ccdwIAaMs7qzaZ7pJFIhT6RJspirfNSnQX9fYIASz7tOgSvlKn0LTSf9l/3b22SDrlF4JwE3K07aazqJOmQTFkScg+aLDXDSSL+PrpSuxOkmOKnWZkRfh3JCvYAC5lWW5eLcq5Xv1T2Y72Clr8KH9wOlbygwSKsofXRISkgoOqKQFDrlyXKUlhATIaWqdsxdqQKO/9pLDnUGXAWi8nYGrDfmsN591v8Dk+Won3hBNOlihKsMnzB5o6KjwXHMRiWfRaV6pW+cD2+2z1xPV0d9wPzyeHcLjYtOxBcGLXQsg2NSrb6nlReP34HPIg7Xzpv8aIz7fQ8dpVWnhcgFg6070nV8XdFK/ColamRDZpaloy+aJYoO3ysQXybyuNbAi1lPSCqyW5WkW82yu5VVoXapLZUnKPBpepfRKL1ZZR0Eb8tphrkNfCLrZ/T1B/bDsCWs6KS4mauU+vJyUAVjJsC7Gb9vs76vQ/9Ezrk/q9RBSjgtDZog9H8KPfk+xUzPHQXjbYeh3+FOsF8tlgaIHqXR/OgAdG/ykkgwQguMUMA3R5PEcc+E5LH54qSupzNWb2dbEekewo9eho5DEeb5OuYp9psfJfSddEiacrmrdbDZn+JY44R0JsMPUQoCGGEto4ALPQa5SkPHETR3+NjItwDiU1JQsWJSgV9FajtKDG+/HNf4nKpjLBQ2RpjwF/LeBxkzN+1W+GocjWmX69/ICfLhfQhYAPwTolOuB3dBz2LF4eW8Q4YVQwmG8cmQaQ+4Fuyz9IsjZzAcdwvBccv48oo7k88qsuA3gecCQuBxYAZv7/J0dMT4/BvwPp9dssD3lSUu8biE4/wsiVzhCaN85odWOvn2gNCSAIp5h3uRm6frRLbSaE/IssC3PkCPjDeCY1dy/l0Roo4n90rwSdhsU6LQHhYONVolC5ljzO3VnNd+ed76V4ABAHuuCO1oIFGiAAAAAElFTkSuQmCC)
            no-repeat center;
          content: '';
          display: inline-block;
          vertical-align: middle;
          background-size: contain;

          height: 100%;
          width: 97px;
          margin: 0px 7px;
        }
        .adult-mode {
          width: 41px;
        }
      }
      .menu-right {
        display: flex;
        flex-direction: row;
        .menu-right-one {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .menu-right-one-item {
            padding-top: 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0px 5px;
            span {
              margin-top: 0px;
            }
          }
          .charge {
            width: 18px;
            height: 18px;
            background: url(../../assets/img/menu_icon_charge.png) no-repeat center;
            background-size: contain;
          }
          .gift {
            width: 18px;
            height: 18px;
            background: url(../../assets/img/menu_icon_gift.png) no-repeat center;
            background-size: contain;
          }
          .library {
            width: 18px;
            height: 18px;
            background: url(../../assets/img/menu_icon_library.png) no-repeat center;
            background-size: contain;
          }
          .search {
            width: 18px;
            height: 18px;
            background: url(../../assets/img/menu_icon_search.png) no-repeat center;
            background-size: contain;
          }
        }

        .menu-right-two {
          width: 50px;
          height: 50px;
          background-color: #1a2530;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          div {
            width: 25px;
            height: 22px;
            background: url(../../assets/img/menu_more.png) no-repeat center;
          }
        }
      }
    }
  }
}

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 100%;
  .right-more {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 280px;
    background: #fff;
    z-index: 7;
    transition: all.3s;
    .login-info {
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: #272d33;
      color: #fff;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      .login-info-item {
        margin: 0px 10px;
        width: 70px;
        height: 25px;
        border: 1px solid #474f56;
        background-color: #13171b;
        letter-spacing: 1px;
        border-radius: 7px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .login-access-item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: #cccccc;
        span {
          margin-right: 5px;
        }
      }
    }
    .discount {
      width: 100%;
      height: 50px;
      background: #ff4a4a;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .van-cell {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 30px;
        width: 180px;
        text-align: center;
        line-height: 30px;
        border-radius: 7px;
      }
      .btnExchange {
        border-radius: 7px;
      }
    }
    .mune-list {
      display: flex;
      flex-direction: row;
      .sub {
        height: 100%;
        width: 70px;
        background: #fff;
        .van-tabbar--fixed {
          position: unset !important;
          bottom: auto !important;
          left: auto !important;
          display: flex;
          flex-direction: column;
        }
        .van-tabbar {
          height: 25vh;
          background: #fff;
        }
      }
      .sub_list {
        padding: 15px;
        width: 210px;
      }
    }
  }
 
 
}
</style>
