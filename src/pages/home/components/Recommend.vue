<template>
  <div>
      <div class="title">
          <span class="iconfont" style="color:red">&#xe870;</span>
          猜你喜欢
      </div>
      <ul>
          <li class="item border-bottom" v-for="icon in icons" :key="icon.id">
                  <img class="item-img" :src="icon.imgUrl">
              <div class="item-info">
                <p class="item-title">{{icon.title}}</p>
                <p class="item-desc">{{icon.desc}}</p>
                <button class="item-button">
                    查看详情
                </button>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommond',
  data () {
    return {
      icons: [{
        id: '0001',
        title: '湘江邮轮橘洲之星',
        desc: '九州龙骧豪华游轮耗资3000万打造，船长42米，宽12米，拥有280个客位，船身共分三层，能够满足游客观光、娱乐、会务等多种需求。每日执行三次固定航线，分日游，夜游航线，游历时间为1个小时，坐在游轮上，湘江美景一览无余。',
        imgUrl: '../../../../static/recommendimg/xiangjiangyoulun.jpg'
      },
      {
        id: '0002',
        title: '三只熊滑雪场',
        desc: '三只熊冰雪王国是一家以室内四季滑雪为主，哈尔滨冰雕展示体验、精品商铺配套、冰上娱乐、休闲商业区于一体的综合型滑雪运动中心。',
        imgUrl: '../../../../static/recommendimg/sanzhixiong.png'
      },
      {
        id: '0003',
        title: '长沙方特东方神画',
        desc: '方特东方神画，是一个充满传奇故事的大型高科技主题乐园。它以中华五千年文化精髓为重点，采用较新的科技手段打造了四十余个方特呈现的大型主题项目：《辛追》、《女娲补天》、《孟姜女》等，让游客充分感受华夏文明的悠远厚重，感受现代科技的精彩绝伦。这里有长者钟爱的演艺，有孩子们喜欢的熊出没主题区，也有年轻人向往的惊险刺激型游乐项目，方特东方神画是一个老少皆宜的主题乐园。',
        imgUrl: '../../../../static/recommendimg/changshafangte.jpg'
      },
      {
        id: '0004',
        title: '大围山峡谷漂流',
        desc: '大围山峡谷漂流位大围山国家森林公园南麓，花门河流经大围山大峡谷，汇集近百公里高山清泉。',
        imgUrl: '../../../../static/recommendimg/daweishan.png'
      },
      {
        id: '0005',
        title: '长沙世界之窗',
        desc: '任性的孩子，我是任性的孩子，我想在大地上画满窗子，让所有习惯黑暗的眼睛都习惯光明',
        imgUrl: '../../../../static/recommendimg/shijiezhichuang.jpg'
      },
      {
        id: '0006',
        title: '宁乡灰汤紫龙湾温泉度假区',
        desc: '彩色的溶洞里水汽氤氲，又像仙境，又像武侠小说里大侠们的“练功房”，你也可以修炼一个“养生大法”哦。',
        imgUrl: '../../../../static/recommendimg/ningxianghuitang.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .title
        margin-top :.2rem
        line-height :.8rem
        background:#eee
        text-indent:.2rem
        font-size:.35rem
    .item
        overflow :hidden
        display :flex
        height :1.9rem
        .item-img
            width :1.7rem
            height :1.7rem
            padding :.1rem
        .item-info
            flex:1
            padding :.1rem
            min-width :0
            .item-title
                line-height :.54rem
                font-size :.32rem
                ellipsis()
            .item-desc
                line-height :.4rem
                color:#ccc
                ellipsis()
            .item-button
                line-height :.44rem
                margin-top :.16rem
                background :#ff9300
                padding :0 .1rem
                border-radius:.06rem
                color :#fff
</style>
