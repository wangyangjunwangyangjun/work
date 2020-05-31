<template>
  <div class="projectList">
    <div class="projectItem"
       v-for="(item,index) in showList">
      <div class="projectItemMain" @click="buyTickets(index)">
        <div class="itemThumbnail">
          <img :src="item.cover" alt="图片">
        </div>
        <div class="itemSummary">
          <section class="headerSection">
            <p class="projectName">
              {{item.project_name}}
            </p>
            <p class="listData">
              <span>{{item.tlabel}}</span>
              <span>{{item.city}}</span>
              <span>{{item.venue_name}}</span>
            </p>
          </section>
          <section class="timeSection">
            <p class="listPrice">
            <span class="biliPrice" style="color: rgb(251, 114, 153);">
              <span style="font-size: 18px; font-weight: bold; margin-left: 2px; line-height: 12px;">￥{{item.price_low/100}}</span>
            </span>
            </p>
            <p class="ticketFlag">
              {{item.wish}}人想去
            </p>
          </section>
        </div>
      </div>
      <div class="projectItemExtra">
        <div class="extraWords">
          {{item.sale_point}}
        </div>
      </div>
      <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :quota="quota"
        :quota-used="quotaUsed"
        :hide-stock="sku.hide_stock"
        :message-config="messageConfig"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />
    </div>
  </div>
</template>

<script>
  import {getMutildata_Tickets} from '../../../serve/home'
  export default {
    name: "TicketsList",
    data() {
      return {
        showList: [
          {
            cover:'http://i2.hdslb.com/bfs/openplatform/201908/EFGXaaS41565250474431.jpeg'
          }
        ],
        show: false,
        quota:1,
        quotaUsed:0,
        index:0,
        sku: {
          tree: [
            {
              k: '级别',
              v: [
                {
                  id: '30349', // skuValueId：规格值 id
                  name: '普通', // skuValueName：规格值名称
                  imgUrl: "",
                  previewImgUrl: ""
                },
                {
                  id: '1215',
                  name: '贵宾',
                  imgUrl: "",
                  previewImgUrl: "",
                }
              ],
              k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            }
          ],
          list: [
            {
              id: 2259, // skuId，下单时后端需要
              price: 100, // 价格（单位分）
              s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
              s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
              s3: '0', // 最多包含3个规格值，为0表示不存在该规格
              stock_num: 110 // 当前 sku 组合对应的库存
            }
          ],
          price: '58.00', // 默认价格（单位元）
          stock_num: 227, // 商品总库存
          collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
          none_sku: false, // 是否无规格商品
          messages: [
            {
              // 商品留言
              datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
              multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
              name: '留言', // 留言名称
              type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
              required: '1', // 是否必填 '1' 表示必填
              placeholder: '' // 可选值，占位文本
            }
          ],
          hide_stock: false // 是否隐藏剩余库存
        },
        goods: {
          picture: ''
        },
        messageConfig: {
          uploadMaxSize: 3,
          placeholderMap: {
            text: 'xxx',
            tel: 'xxx',
          },
          initialMessages: {
            留言: '在这里填写一些信息给商家......'
          }
        },
        // 商品 id
        goodsId: '946755',
        // 留言信息
        messages: {
          message_0: '12',
          message_1: ''
        },
        cartMessages: {
          '留言1': 'xxxx'
        },
        selectedNum: 1,
        selectedSkuComb: {
          id: 2257,
          price: 100,
          s1: '30349',
          s2: '1193',
          s3: '0',
          stock_num: 111,
          properties: [
            {
              k_id: 123,
              k: '加料',
              is_multiple: true,
              v: [
                {
                  id: 1223,
                  name: '椰果',
                  price: 158
                }
              ]
            }
          ],
          property_price: 100
        },
      }
    },
    methods: {
      getMutildata_Tickets(){
        getMutildata_Tickets().then(res=>{
          this.showList = res.data.result.slice(0,10);
          // console.log(JSON.stringify(res));
        })
      },
      buyTickets(index){
        this.show = !this.show;
        this.index = index;
        this.goods.picture = this.showList[this.index].cover;
      },
      onBuyClicked(){
        this.$message("you click");
      },
      onAddCartClicked(){
        this.$message("you click");
      },
    },
    mounted() {
      this.getMutildata_Tickets();
    }
  }
</script>

<style scoped>
  @import '../../../assets/css/content/ticketsLists.css';
</style>
