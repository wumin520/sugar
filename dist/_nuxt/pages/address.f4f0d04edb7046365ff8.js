webpackJsonp([4],{"2ZC1":function(a,c,t){"use strict";c.a=function(a){try{a.test=1}catch(a){console.log("init storage error!")}return{get:function(c){var t=a.getItem(c);return/^(\{.*\})|(\[.*\])$/.test(t)&&(t=JSON.parse(t)),t},set:function(c,t){return"object"===(void 0===t?"undefined":i()(t))&&(t=n()(t)),a.setItem(c,t)},remove:function(c){return a.removeItem(c)}}};var e=t("mvHQ"),n=t.n(e),r=t("pFYg"),i=t.n(r)},"4shK":function(a,c,t){"use strict";t.d(c,"a",function(){return e}),t.d(c,"b",function(){return n});var e=function(){var a=this,c=a.$createElement,t=a._self._c||c;return t("div",{staticClass:"container"},[t("header",[t("div",{staticClass:"title-wrap",on:{click:function(c){a.forward("home")}}},[a._v("兼聘")]),t("div",{staticClass:"current-location"},[a._v("当前定位： "),t("span",{staticClass:"active"},[a._v(a._s(a.currentCityName))])])]),t("div",{staticClass:"all-city"},[a._v("全部城市")]),t("div",{staticClass:"address-list-container"},a._l(a.addressList,function(c,e){return t("div",{key:c.id,on:{click:function(t){a.selectCity(c)}}},[a._v("\n      "+a._s(c.city_name)+"\n    ")])}))])},n=[];e._withStripped=!0},Hk2O:function(a,c,t){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var e=t("r/ad"),n=t("4shK"),r=t("XyMi"),i=!1;var o=function(a){i||t("krbL")},d=Object(r.a)(e.a,n.a,n.b,!1,o,"data-v-bc81ccea",null);d.options.__file="pages/address.vue",c.default=d.exports},IoWd:function(a,c,t){"use strict";t.d(c,"a",function(){return u});var e,n=t("Xxa5"),r=t.n(n),i=t("exGp"),o=t.n(i),d=t("nVDU"),s=t("dj4z"),u=(e=o()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(d.a)(s.b));case 1:case"end":return a.stop()}},a,this)})),function(){return e.apply(this,arguments)})},czXZ:function(a,c,t){var e=t("kxFB");(a.exports=t("FZ+f")(!1)).push([a.i,"blockquote[data-v-bc81ccea],body[data-v-bc81ccea],button[data-v-bc81ccea],dd[data-v-bc81ccea],dl[data-v-bc81ccea],dt[data-v-bc81ccea],fieldset[data-v-bc81ccea],form[data-v-bc81ccea],h1[data-v-bc81ccea],h2[data-v-bc81ccea],h3[data-v-bc81ccea],h4[data-v-bc81ccea],h5[data-v-bc81ccea],h6[data-v-bc81ccea],hr[data-v-bc81ccea],input[data-v-bc81ccea],legend[data-v-bc81ccea],li[data-v-bc81ccea],ol[data-v-bc81ccea],p[data-v-bc81ccea],pre[data-v-bc81ccea],td[data-v-bc81ccea],textarea[data-v-bc81ccea],th[data-v-bc81ccea],ul[data-v-bc81ccea]{margin:0;padding:0}button[data-v-bc81ccea],input[data-v-bc81ccea]{border:none;background:none}[data-v-bc81ccea]:focus,a[data-v-bc81ccea],a[data-v-bc81ccea]:active,a[data-v-bc81ccea]:focus,a[data-v-bc81ccea]:hover,button[data-v-bc81ccea],button[data-v-bc81ccea]:focus{outline:0}h1[data-v-bc81ccea],h2[data-v-bc81ccea],h3[data-v-bc81ccea],h4[data-v-bc81ccea],h5[data-v-bc81ccea],h6[data-v-bc81ccea]{font-size:100%;font-weight:400}address[data-v-bc81ccea],cite[data-v-bc81ccea],dfn[data-v-bc81ccea],em[data-v-bc81ccea],var[data-v-bc81ccea]{font-style:normal}code[data-v-bc81ccea],kbd[data-v-bc81ccea],pre[data-v-bc81ccea],samp[data-v-bc81ccea]{font-family:courier new,courier,monospace}ol[data-v-bc81ccea],ul[data-v-bc81ccea]{list-style:none}a[data-v-bc81ccea]{text-decoration:none}a[data-v-bc81ccea]:hover{text-decoration:underline}sup[data-v-bc81ccea]{vertical-align:text-top}sub[data-v-bc81ccea]{vertical-align:text-bottom}fieldset[data-v-bc81ccea],img[data-v-bc81ccea]{border:0}table[data-v-bc81ccea]{border-collapse:collapse;border-spacing:0}article[data-v-bc81ccea],aside[data-v-bc81ccea],audio[data-v-bc81ccea],details[data-v-bc81ccea],figcaption[data-v-bc81ccea],figure[data-v-bc81ccea],footer[data-v-bc81ccea],header[data-v-bc81ccea],hgroup[data-v-bc81ccea],mark[data-v-bc81ccea],menu[data-v-bc81ccea],nav[data-v-bc81ccea],section[data-v-bc81ccea],summary[data-v-bc81ccea],time[data-v-bc81ccea],video[data-v-bc81ccea]{display:block;margin:0;padding:0}mark[data-v-bc81ccea]{background:#ff0}@font-face{font-family:DINMittelschriftStd;src:url("+e(t("lkiy"))+")}.container[data-v-bc81ccea]{font-family:PingFangSC-Regular,-apple-system,Helvetica Neue,Roboto,Segoe UI,sans-serif;font-weight:400}.container .address-list-container[data-v-bc81ccea]{line-height:40px;font-size:14px;color:#444749}.container .address-list-container div[data-v-bc81ccea]{position:relative;display:inline-block;width:25%;background:#fff;text-align:center}.container .all-city[data-v-bc81ccea]{padding:16px 0 8px 16px;font-size:14px;color:#b5b5b5}.container header[data-v-bc81ccea]{background:#fff}.container header .title-wrap[data-v-bc81ccea]{padding:8px 0;font-size:20px;color:#444749;text-align:center}.container header .current-location[data-v-bc81ccea]{border-top:.5px solid #eee;margin:0 16px;padding:12px 0;font-size:14px;color:#b5b5b5}.container header .current-location .active[data-v-bc81ccea]{font-size:14px;color:#ef4f2a}",""])},dj4z:function(a,c,t){"use strict";t.d(c,"f",function(){return e}),t.d(c,"c",function(){return n}),t.d(c,"b",function(){return r}),t.d(c,"d",function(){return i}),t.d(c,"e",function(){return o}),t.d(c,"a",function(){return d});var e="/v2/api/login",n="/api/job.detail",r="/api/city.list",i="/api/job.list",o="/api/job.search",d="v1:sugar:current:city"},krbL:function(a,c,t){var e=t("czXZ");"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);(0,t("rjj0").default)("04f8c846",e,!1,{sourceMap:!1})},kxFB:function(a,c){a.exports=function(a){return"string"!=typeof a?a:(/^['"].*['"]$/.test(a)&&(a=a.slice(1,-1)),/["'() \t\n]/.test(a)?'"'+a.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':a)}},lkiy:function(a,c,t){a.exports=t.p+"fonts/DINMittelschriftStd.3dcda01.otf"},nVDU:function(a,c,t){"use strict";var e=t("//Fk"),n=t.n(e),r=t("mtWM"),i=t.n(r),o=void 0;o=window&&window.__NUXT__.state.BACKEND;var d=i.a.create({baseURL:o||"http://fp02.ops.gaoshou.me:5021",timeout:1e4});console.log("baseURL: ",o),d.interceptors.request.use(function(a){return a},function(a){return n.a.reject(a)}),d.interceptors.response.use(function(a){return a},function(a){return n.a.reject(a.response&&a.response.data)}),c.a=d},"r/ad":function(a,c,t){"use strict";var e=t("Dd8w"),n=t.n(e),r=t("IoWd"),i=t("dj4z"),o=t("2ZC1"),d=t("NYxO");c.a={layout:"gray",data:function(){return{addressList:[],currentCityName:"全国"}},computed:n()({},Object(d.mapState)(["currentCity"])),mounted:function(){var a=this;this.currentCityName=this.currentCity.city_name,Object(r.a)().then(function(a){return a.data.payload}).then(function(c){a.addressList=c})},methods:n()({},Object(d.mapMutations)(["updateCity"]),{selectCity:function(a){this.updateCity(a),new o.a(window.localStorage).set(i.a,a),this.currentCityName=a.city_name,this.$router.push("/")},forward:function(a){this.$router.push("/"),console.log(this.$router)}})}}});