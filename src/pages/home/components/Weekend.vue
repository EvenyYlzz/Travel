<template>
  <div>
      <div class="title">
          周末去哪儿
      </div>
      <ul>
          <li class="item border-bottem" v-for="icon in weekendList" :key="icon.id">
            <div class="item-img-wrapper">
                  <img class="item-img" :src="icon.imgUrl">
            </div>
              <div class="item-info">
                <p class="item-title">{{icon.title}}</p>
                <p class="item-desc">{{icon.desc}}</p>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  },
  data () {
    return {
      // icons: [{
      //   id: '0001',
      //   title: '长沙必打卡',
      //   desc: '到了长沙一定要这些地方走走',
      //   imgUrl: '../../../../static/weekendimg/1.jpg'
      // },
      // {
      //   id: '0002',
      //   title: '邂逅凤凰城',
      //   desc: '凤凰古城是一个古老而神秘的地方，风景秀丽，历史...',
      //   imgUrl: '../../../../static/weekendimg/2.jpg'
      // },
      // {
      //   id: '0003',
      //   title: '亲身体验人间仙境',
      //   desc: '天桥天地，绝壁高崖之间的高谷，台下深不见底的...',
      //   imgUrl: '../../../../static/weekendimg/3.jpg'
      // },
      // {
      //   id: '0004',
      //   title: '夏日清爽长沙',
      //   desc: '这个夏天要一个清爽的长沙',
      //   imgUrl: '../../../../static/weekendimg/4.jpg'
      // },
      // {
      //   id: '0005',
      //   title: '玩味童年',
      //   desc: '幸福之家，快乐成长',
      //   imgUrl: '../../../../static/weekendimg/5.jpg'
      // }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
        .title
            line-height :.8rem
            background:#eee
            text-indent:.2rem
            font-size:.35rem
        .item-img-wrapper
            height :0
            overflow :hidden
            padding-bottom :37.09%
            .item-img
                width :100%
        .item-info
            width :100%
            padding-bottom:4.3%
            .item-title
                margin-top : .21rem
                margin-left : .21rem
                line-height :.54rem
                font-size :.32rem
                ellipsis()
            .item-desc
                line-height :.4rem
                margin-left : .21rem
                color:#ccc
                ellipsis()
</style>
