(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc0b01a6"],{"0826":function(t,s,a){"use strict";var e=a("5738"),i=a.n(e);i.a},"21ad":function(t,s,a){"use strict";var e=a("abdc"),i=a.n(e);i.a},"2f57":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("store-details")},i=[],o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"store-details"}},[a("loading-big",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),t.store?a("div",{staticClass:"store-details-container"},[a("div",{staticClass:"store-details-cover"},[a("img",{attrs:{src:t.store.photoUrl,alt:t.store.name}})]),a("div",{staticClass:"store-details-body"},[a("div",{staticClass:"store-details-content"},[a("div",{staticClass:"logo-part-wrapper"},[a("div",{staticClass:"logo-container"},[a("img",{attrs:{src:t.store.logoUrl,alt:t.store.name[t.$store.getters.locale.locale]}})]),a("div",{staticClass:"subscribe-button-container"},[a("button",{staticClass:"subscribe-button"},[t._v("\n              "+t._s(t.t("subscribe"))+"\n            ")])])]),a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-main"},[a("div",{staticClass:"breadcrumb"},[a("div",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:{name:"home",params:{locale:t.$store.getters.locale.locale}}}},[t._v(t._s(t.t("home"))+"\n                  ")])],1),a("div",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:{name:"stores"}}},[t._v(t._s(t.t("stores")))])],1),a("div",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:""}},[t._v(" "+t._s(t.store.name[t.$store.getters.locale.locale]))])],1)]),a("div",{staticClass:"title-container"},[a("h1",{staticClass:"title"},[t._v(t._s(t.store.name[t.$store.getters.locale.locale]))])]),a("div",{staticClass:"p-container"},[a("p",{domProps:{innerHTML:t._s(t.store.description[t.$store.getters.locale.locale])}})])]),a("div",{staticClass:"content-socials"},[a("div",{staticClass:"socials-wrapper"},[a("div",{staticClass:"socials-title"},[a("h4",[t._v(t._s(t.t("socials")))])]),t._m(0)])])]),t._m(1)])])])]):t._e()],1)},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",{},[e("a",{attrs:{href:"https://facebook.com",target:"_blank"}},[e("img",{attrs:{src:a("8b07"),height:"15"}})])]),e("li",{},[e("a",{attrs:{href:"https://facebook.com",target:"_blank"}},[e("img",{attrs:{src:a("974d"),height:"12"}})])]),e("li",{},[e("a",{attrs:{href:"https://facebook.com",target:"_blank"}},[e("img",{attrs:{src:a("63ff"),height:"10"}})])]),e("li",{},[e("a",{attrs:{href:"https://facebook.com",target:"_blank"}},[e("img",{attrs:{src:a("8554"),height:"15"}})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"contact-info"},[a("ul",[a("li",[a("span",{staticClass:"icon store-phone"}),a("span",{staticClass:"info"},[t._v("\n                  +995 322 204 333\n                ")])]),a("li",[a("span",{staticClass:"icon store-link"}),a("span",{staticClass:"info"},[a("a",{attrs:{href:"http://www.zara.com",target:"_blank"}},[t._v("\n                    http://www.zara.com\n                  ")])])])])])}],n=a("8a65"),l={name:"store-details",components:{LoadingBig:n["a"]},mounted:function(){this.loadStore()},data:function(){return{store:null,loading:!1}},methods:{loadStore:function(){var t=this;this.loading=!0,this.$store.dispatch("findStore",this.$route.params.store).then(function(s){t.store=s,t.loading=!1})}}},c=l,d=(a("0826"),a("2877")),u=Object(d["a"])(c,o,r,!1,null,null,null);u.options.__file="StoreDetails.vue";var v=u.exports,m={components:{StoreDetails:v}},f=m,p=Object(d["a"])(f,e,i,!1,null,null,null);p.options.__file="SingleStore.vue";s["default"]=p.exports},5738:function(t,s,a){},"63ff":function(t,s,a){t.exports=a.p+"img/youtube.877c4040.svg"},8554:function(t,s,a){t.exports=a.p+"img/pinterest.cf5d2bd9.svg"},"8a65":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"loading-big-container"},[a("div",{staticClass:"loading-wrapper"},[a("div",{staticClass:"loading-big"})])])}],o={name:"loading-big"},r=o,n=(a("21ad"),a("2877")),l=Object(n["a"])(r,e,i,!1,null,"67795044",null);l.options.__file="LoadingBig.vue";s["a"]=l.exports},"8b07":function(t,s,a){t.exports=a.p+"img/facebook.8aca5902.svg"},"974d":function(t,s,a){t.exports=a.p+"img/twitter.c716539f.svg"},abdc:function(t,s,a){}}]);
//# sourceMappingURL=chunk-bc0b01a6.455e13f6.js.map