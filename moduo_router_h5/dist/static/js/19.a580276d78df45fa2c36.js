webpackJsonp([19],{1116:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(886),r=a.n(i),o=a(921),n=a.n(o),s=a(928),l=a.n(s),c=a(343);a.n(c);e.default={data:function(){return{mineArr:[{name:"赞",src:"../../../static/mine/mine_news_favor.png",marginTop:"0.05rem",topDev:!0,cellType:0,pushRoute:"/mine/mine_news"},{name:"评论",src:"../../../static/mine/mine_news_comment.png",marginTop:"0rem",topDev:!1,cellType:0,pushRoute:"/mine/mine_circle"},{name:"关注",src:"../../../static/mine/mine_news_attention.png",marginTop:"0rem",topDev:!1,cellType:0,pushRoute:"/mine/mine_post"},{name:"系统消息",src:"../../../static/mine/mine_news_system.png",marginTop:"0rem",topDev:!1,cellType:0,pushRoute:"/mine/mine_post"}]}},components:{"my-footer":n.a,"my-cell":l.a},created:function(){var t=this;this.$store.dispatch("checkLogin").then(function(){},function(){t.$router.push("/")})},computed:r()({},a.i(c.mapGetters)({isLoading:"mine_loading",isAlert:"mine_isAlert",alertTitle:"mine_alertTitle",heading:"mine_home_src",nickname:"mine_home_nickname"})),methods:{cellClick:function(t){switch(t){case 0:this.$router.push("/mine/mine_news_comment/1");break;case 1:this.$router.push("/mine/mine_news_comment/2");break;case 2:this.$router.push("/mine/mine_news_attention");break;case 3:this.$router.push("/mine/mine_news_system")}}}}},1228:function(t,e,a){e=t.exports=a(837)(!1),e.push([t.i,"*{padding:0;margin:0}html{background-color:#fff!important;width:100%;font-size:.4rem}body,html{height:100%}body{display:block;margin:0 auto;width:7.5rem;max-width:750px;position:relative}body *{font-size:.4rem}body::-webkit-scrollbar{width:0}.commonDivider{display:inline-block;float:left;width:7.5rem;height:.02rem;background-color:#f5f5f5}.black30{color:#000}.black30,.gray30{font-size:.3rem;display:inline-block;line-height:.3rem}.gray30{color:gray}.black28{color:#000}.black28,.gray28{font-size:.28rem;display:inline-block;line-height:.29rem}.gray28{color:gray}.black26{color:#000}.black26,.gray26{font-size:.26rem;display:inline-block;line-height:.27rem}.gray24,.gray26{color:gray}.gray24{font-size:.24rem;display:inline-block;line-height:.27rem}.purple{color:#894eef}.titleView{width:100%;height:.8rem}.titleView .purpleLine{width:100%;height:.2rem;background-color:#894eef}.titleView span{display:inline-block;float:left;margin-left:.15rem;line-height:.8rem;font-size:.33rem}.titleView .titleLine{border-radius:.075rem;width:.15rem;margin-left:.2rem;height:.35rem;margin-top:.22rem;background-color:#894eef}.htmlContent{text-align:left;display:inline-block;width:7.1rem}.htmlContent img{width:auto;max-width:100%;display:block;margin:5px auto;-ms-flex-line-pack:center;align-content:center}.htmlContent p{font-size:16px;word-wrap:break-word}.htmlContent span{font-size:16px}.htmlContent embed,.htmlContent iframe{width:100%}",""])},1229:function(t,e,a){e=t.exports=a(837)(!1),e.push([t.i,"#app[data-v-ed0bb638]{height:100%;background-color:#f5f5f5;position:absolute;top:0;left:0;width:100%;font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:0}",""])},1329:function(t,e,a){var i=a(1228);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(838)("6af1b529",i,!0)},1330:function(t,e,a){var i=a(1229);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(838)("01726fd7",i,!0)},1441:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"title",rawName:"v-title"}],attrs:{"data-title":"消息",id:"app"}},t._l(t.mineArr,function(e,i){return a("my-cell",{key:i,style:{marginTop:e.marginTop},attrs:{cellType:e.cellType,showTopDevider:e.topDev,name:e.name,src:e.src},on:{SELECT_CELL:function(e){t.cellClick(i)}}})}))},staticRenderFns:[]}},870:function(t,e,a){function i(t){a(1329),a(1330)}var r=a(66)(a(1116),a(1441),i,"data-v-ed0bb638",null);t.exports=r.exports},886:function(t,e,a){"use strict";e.__esModule=!0;var i=a(887),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t}},887:function(t,e,a){t.exports={default:a(888),__esModule:!0}},888:function(t,e,a){a(890),t.exports=a(28).Object.assign},889:function(t,e,a){"use strict";var i=a(79),r=a(204),o=a(99),n=a(344),s=a(345),l=Object.assign;t.exports=!l||a(98)(function(){var t={},e={},a=Symbol(),i="abcdefghijklmnopqrst";return t[a]=7,i.split("").forEach(function(t){e[t]=t}),7!=l({},t)[a]||Object.keys(l({},e)).join("")!=i})?function(t,e){for(var a=n(t),l=arguments.length,c=1,m=r.f,f=o.f;l>c;)for(var d,h=s(arguments[c++]),g=m?i(h).concat(m(h)):i(h),p=g.length,u=0;p>u;)f.call(h,d=g[u++])&&(a[d]=h[d]);return a}:l},890:function(t,e,a){var i=a(78);i(i.S+i.F,"Object",{assign:a(889)})},901:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAArUlEQVRYR+3W0QnDMAxFUWmDjpQRXiconaQZJSNoQ5f85suSbjGUeADfgw1CbouPL+7bDZh+AUmbmT0iIshvywB2d/+MMd4RcVCIacAZlHS4+4tEpAC/QKQBNKIEIBFlAIVoAQhEG9BFIIAOAgNUESjggnjOjO3/AlRGNfYClfj5ZQigGkcAnXgb0I23AES8DKDiJQAZTwPoeAogae1Sunwtp9bw6z3IJOzgbsAXmye4IUI2qGsAAAAASUVORK5CYII="},903:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{},data:function(){return{hasNew:!1,activity:!1,data:null}},methods:{gotopage:function(t){var e=this;switch(Number(t)){case 0:e.$router.push("/");break;case 1:e.$router.push("/community");break;case 2:e.$router.push("/reward");break;case 3:e.$router.push("/buyTip");break;case 4:e.$router.push("/mine")}},intNum:function(t){return t<10?"0"+t:t}},created:function(){},ready:function(){},props:["selectnum"]}},905:function(t,e,a){e=t.exports=a(837)(!1),e.push([t.i,'.relative-bottom[data-v-a40531a0]{position:relative!important;bottom:0!important;left:0;right:0}.fc0[data-v-a40531a0]{color:#fff}.fc1[data-v-a40531a0]{color:#333}.fc2[data-v-a40531a0]{color:#666}.fc3[data-v-a40531a0]{color:#999}.fc4[data-v-a40531a0]{color:#ccc}.sc1[data-v-a40531a0]{color:#f32e37}.f140[data-v-a40531a0]{font-size:1.4rem}.f66[data-v-a40531a0]{font-size:.66rem}.f60[data-v-a40531a0]{font-size:.6rem}.f58[data-v-a40531a0]{font-size:.58rem}.f50[data-v-a40531a0]{font-size:.5rem}.f48[data-v-a40531a0]{font-size:.48rem}.f46[data-v-a40531a0]{font-size:.46rem}.f44[data-v-a40531a0]{font-size:.44rem}.f40[data-v-a40531a0]{font-size:.4rem}.f38[data-v-a40531a0]{font-size:.38rem}.f36[data-v-a40531a0]{font-size:.36rem}.f34[data-v-a40531a0]{font-size:.34rem}.f32[data-v-a40531a0]{font-size:.32rem}.f30[data-v-a40531a0]{font-size:.3rem}.f24[data-v-a40531a0]{font-size:.24rem}.f22[data-v-a40531a0]{font-size:.22rem}.f20[data-v-a40531a0]{font-size:.2rem}.h1120[data-v-a40531a0]{height:11.22rem}.h910[data-v-a40531a0]{height:9.1rem}.h320[data-v-a40531a0]{height:3.2rem}.h280[data-v-a40531a0]{height:2.8rem}.h180[data-v-a40531a0]{height:1.8rem}.h170[data-v-a40531a0]{height:1.7rem}.h160[data-v-a40531a0]{height:1.6rem}.h150[data-v-a40531a0]{height:1.5rem}.h140[data-v-a40531a0]{height:1.4rem}.h130[data-v-a40531a0]{height:1.3rem}.h120[data-v-a40531a0]{height:1.2rem}.h110[data-v-a40531a0]{height:1.1rem}.h100[data-v-a40531a0]{height:1rem}.h90[data-v-a40531a0]{height:.9rem}.h80[data-v-a40531a0]{height:.8rem}.h70[data-v-a40531a0]{height:.7rem}.h60[data-v-a40531a0]{height:.6rem}.h50[data-v-a40531a0]{height:.5rem}.h40[data-v-a40531a0]{height:.4rem}.h30[data-v-a40531a0]{height:.3rem}.h20[data-v-a40531a0]{height:.2rem}.footer[data-v-a40531a0]{position:fixed;width:7.6rem;height:.88rem;background-color:#f9f9f9;border-top:1px solid #dbdbdb;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:0;z-index:999;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.footer .footer-ul[data-v-a40531a0]{margin:0;padding:0;width:100%;list-style:none}.footer .footer-ul[data-v-a40531a0]:after{content:"";display:block;clear:both}.footer .footer-ul span[data-v-a40531a0]{width:100%;height:.15rem;font-size:.25rem;display:inline-block;border-radius:50%}.footer .footer-ul>li[data-v-a40531a0]{float:left;width:1.52rem;height:.88rem}.footer .footer-ul>li>div[data-v-a40531a0]{width:1.2rem;font-size:0}.footer .footer-ul>li>div img[data-v-a40531a0]{display:block;width:1.52rem;height:.88rem}.footer .footer-ul>li>div .footer-text[data-v-a40531a0]{display:inline-block;width:1.52rem;text-align:center;line-height:.3}',""])},907:function(t,e,a){var i=a(905);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(838)("e10393f2",i,!0)},909:function(t,e,a){t.exports=a.p+"static/img/tabbar_community.846f1b6.png"},910:function(t,e,a){t.exports=a.p+"static/img/tabbar_community_high.1e25af9.png"},911:function(t,e,a){t.exports=a.p+"static/img/tabbar_home.9e35b61.png"},912:function(t,e,a){t.exports=a.p+"static/img/tabbar_home_high.d78553c.png"},913:function(t,e,a){t.exports=a.p+"static/img/tabbar_mine.9a7072c.png"},914:function(t,e,a){t.exports=a.p+"static/img/tabbar_mine_high.a2a1b55.png"},915:function(t,e,a){t.exports=a.p+"static/img/tabbar_reward_default.5678b9e.png"},916:function(t,e,a){t.exports=a.p+"static/img/tabbar_reward_high.2fbfaf9.png"},917:function(t,e,a){t.exports=a.p+"static/img/tabbar_tip.fab1ac2.png"},918:function(t,e,a){t.exports=a.p+"static/img/tabbar_tip_high.f6febd2.png"},919:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.data&&t.activity?i("div",{staticClass:"footer"},[i("ul",{staticClass:"footer-ul"},t._l(t.data["MA-SYX-25"].items,function(e,a){return i("li",{on:{click:function(a){t.gotopage(e)}}},[e!=t.selectnum?i("img",{attrs:{src:a.imgUrl}}):i("img",{attrs:{src:t.data["MA-SYX-24"].items[t.selectnum].imgUrl}})])}))]):i("div",{staticClass:"footer"},[i("ul",{staticClass:"footer-ul"},[i("li",{on:{click:function(e){t.gotopage(0)}}},[i("div",[0==t.selectnum?i("img",{attrs:{src:a(912)}}):i("img",{attrs:{src:a(911)}})])]),t._v(" "),i("li",{on:{click:function(e){t.gotopage(1)}}},[i("div",[1==t.selectnum?i("img",{attrs:{src:a(910)}}):i("img",{attrs:{src:a(909)}})])]),t._v(" "),i("li",{on:{click:function(e){t.gotopage(2)}}},[i("div",[2==t.selectnum?i("img",{attrs:{src:a(916)}}):i("img",{attrs:{src:a(915)}})])]),t._v(" "),i("li",{on:{click:function(e){t.gotopage(3)}}},[i("div",[3==t.selectnum?i("img",{attrs:{src:a(918)}}):i("img",{attrs:{src:a(917)}})])]),t._v(" "),i("li",{on:{click:function(e){t.gotopage(4)}}},[i("div",[4==t.selectnum?i("img",{attrs:{src:a(914)}}):i("img",{attrs:{src:a(913)}})])])])])},staticRenderFns:[]}},921:function(t,e,a){function i(t){a(907)}var r=a(66)(a(903),a(919),i,"data-v-a40531a0",null);t.exports=r.exports},924:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{tipCount:{type:String,default:""},cellType:{type:Number,default:0},src:{type:String,default:""},showImg:{type:Boolean,default:!0},headImg:{type:String,default:""},showTopDevider:{type:Boolean,default:!0},showBottomDevider:{type:Boolean,default:!0},name:null,testNum:null},data:function(){return{}},computed:{a:function(){return{abc:this.testNum}}},watch:{testNum:function(t){console.log(this.a)}},methods:{goDetail:function(){this.$emit("SELECT_CELL")}}}},925:function(t,e,a){e=t.exports=a(837)(!1),e.push([t.i,"a[data-v-363a6f66]{position:relative;width:100%;height:.85rem;background-color:#fff;display:inline-block}a[data-v-363a6f66]:active{background-color:#dcdcdc}.left[data-v-363a6f66],.red[data-v-363a6f66],.right[data-v-363a6f66],.rightImg[data-v-363a6f66],.tip[data-v-363a6f66],.title[data-v-363a6f66]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.left[data-v-363a6f66]{left:.2rem;width:.45rem;height:.45rem}.title[data-v-363a6f66]{left:.8rem;width:1.5rem;text-align:left;font-size:.29rem}.red[data-v-363a6f66]{right:.55rem;width:.12rem;height:.12rem;background-color:#e93c28;border-radius:50%}.tip[data-v-363a6f66]{text-align:right;right:.6rem;width:4rem;height:.3rem;line-height:.35rem;font-size:.26rem;color:gray}.rightImg[data-v-363a6f66]{right:.6rem;width:.8rem;height:.8rem;border-radius:50%}.right[data-v-363a6f66]{right:.15rem;width:.4rem;height:.4rem}.divider[data-v-363a6f66]{display:block;position:relative;float:left;width:7.5rem;bottom:0;left:0;background-color:#e2e2e2}.top[data-v-363a6f66]{height:.015rem}.bottom[data-v-363a6f66]{height:.02rem}",""])},926:function(t,e,a){var i=a(925);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(838)("32c9e278",i,!0)},927:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"font-size":"0"}},[t.showTopDevider?i("div",{staticClass:"divider top"}):t._e(),t._v(" "),i("a",{style:{height:3==t.cellType?"1.3rem":"0.85rem"},on:{click:function(e){t.goDetail()}}},[t.showImg?i("img",{staticClass:"left",attrs:{src:t.src,alt:""}}):t._e(),t._v(" "),i("span",{staticClass:"title",style:{left:t.showImg?"0.8rem":"0.3rem"}},[t._v(t._s(t.name))]),t._v(" "),1==t.cellType?i("div",{staticClass:"red"}):t._e(),t._v(" "),2==t.cellType?i("span",{staticClass:"tip"},[t._v(t._s(t.tipCount))]):t._e(),t._v(" "),3==t.cellType?i("img",{staticClass:"rightImg",attrs:{src:t.headImg,alt:""}}):t._e(),t._v(" "),i("img",{staticClass:"right",attrs:{src:a(901),alt:""}})]),t._v(" "),t.showBottomDevider?i("div",{staticClass:"divider bottom"}):t._e()])},staticRenderFns:[]}},928:function(t,e,a){function i(t){a(926)}var r=a(66)(a(924),a(927),i,"data-v-363a6f66",null);t.exports=r.exports}});