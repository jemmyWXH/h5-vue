webpackJsonp([42],{1094:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(886),o=i.n(n),r=i(343),a=(i.n(r),i(67)),l=i.n(a);new l.a;e.default={data:function(){return{mode:this.$route.query.mode}},components:{},created:function(){var t=this;this.$store.dispatch("checkLogin").then(function(){t.getDetailData()},function(){t.$router.push("/")})},computed:o()({},i.i(r.mapGetters)({isLoading:"tip_loading",isAlert:"tip_isAlert",alertTitle:"tip_alertTitle",introData:"tip_detail_intro"})),methods:{getDetailData:function(){1==this.mode?this.$store.dispatch("get_detail_introduce"):this.$store.dispatch("get_detail_notice")}}}},1139:function(t,e,i){e=t.exports=i(837)(!1),e.push([t.i,"*{padding:0;margin:0}html{background-color:#fff!important;width:100%;font-size:.4rem}body,html{height:100%}body{display:block;margin:0 auto;width:7.5rem;max-width:750px;position:relative}body *{font-size:.4rem}body::-webkit-scrollbar{width:0}.commonDivider{display:inline-block;float:left;width:7.5rem;height:.02rem;background-color:#f5f5f5}.black30{color:#000}.black30,.gray30{font-size:.3rem;display:inline-block;line-height:.3rem}.gray30{color:gray}.black28{color:#000}.black28,.gray28{font-size:.28rem;display:inline-block;line-height:.29rem}.gray28{color:gray}.black26{color:#000}.black26,.gray26{font-size:.26rem;display:inline-block;line-height:.27rem}.gray24,.gray26{color:gray}.gray24{font-size:.24rem;display:inline-block;line-height:.27rem}.purple{color:#894eef}.titleView{width:100%;height:.8rem}.titleView .purpleLine{width:100%;height:.2rem;background-color:#894eef}.titleView span{display:inline-block;float:left;margin-left:.15rem;line-height:.8rem;font-size:.33rem}.titleView .titleLine{border-radius:.075rem;width:.15rem;margin-left:.2rem;height:.35rem;margin-top:.22rem;background-color:#894eef}.htmlContent{text-align:left;display:inline-block;width:7.1rem}.htmlContent img{width:auto;max-width:100%;display:block;margin:5px auto;-ms-flex-line-pack:center;align-content:center}.htmlContent p{font-size:16px;word-wrap:break-word}.htmlContent span{font-size:16px}.htmlContent embed,.htmlContent iframe{width:100%}",""])},1140:function(t,e,i){e=t.exports=i(837)(!1),e.push([t.i,"#app[data-v-09ce8278]{height:100%;background-color:#fff;position:absolute;top:0;left:0;width:100%;font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:0}",""])},1240:function(t,e,i){var n=i(1139);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(838)("618eea26",n,!0)},1241:function(t,e,i){var n=i(1140);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(838)("0467e1f2",n,!0)},1391:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"title",rawName:"v-title"}],attrs:{"data-title":t.mode?"项目详情":"购买须知",id:"app"}},[i("div",{staticClass:"htmlContent",domProps:{innerHTML:t._s(t.introData)}}),t._v(" "),i("my-toast",{attrs:{show:t.isAlert,content:t.alertTitle}})],1)},staticRenderFns:[]}},848:function(t,e,i){function n(t){i(1240),i(1241)}var o=i(66)(i(1094),i(1391),n,"data-v-09ce8278",null);t.exports=o.exports},886:function(t,e,i){"use strict";e.__esModule=!0;var n=i(887),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}},887:function(t,e,i){t.exports={default:i(888),__esModule:!0}},888:function(t,e,i){i(890),t.exports=i(28).Object.assign},889:function(t,e,i){"use strict";var n=i(79),o=i(204),r=i(99),a=i(344),l=i(345),s=Object.assign;t.exports=!s||i(98)(function(){var t={},e={},i=Symbol(),n="abcdefghijklmnopqrst";return t[i]=7,n.split("").forEach(function(t){e[t]=t}),7!=s({},t)[i]||Object.keys(s({},e)).join("")!=n})?function(t,e){for(var i=a(t),s=arguments.length,c=1,d=o.f,f=r.f;s>c;)for(var h,m=l(arguments[c++]),p=d?n(m).concat(d(m)):n(m),u=p.length,g=0;u>g;)f.call(m,h=p[g++])&&(i[h]=m[h]);return i}:s},890:function(t,e,i){var n=i(78);n(n.S+n.F,"Object",{assign:i(889)})}});