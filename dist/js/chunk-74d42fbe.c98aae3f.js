(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74d42fbe"],{"0ccd":function(t,n,e){"use strict";var a=e("3486"),i=e.n(a);i.a},"133f":function(t,n,e){"use strict";var a=e("7ec9"),i=e.n(a);i.a},"2ef1":function(t,n,e){},3486:function(t,n,e){},"425f":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page-block"},[e("about-title",{attrs:{title:t.pageTitle}}),e("about-content",{attrs:{content:t.pageDescription}}),e("div",{staticClass:"additional-info"},[e("div",{staticClass:"contact-info"},t._l(t.contactInfoFirst,function(n,a){return e("div",{key:a,staticClass:"contact-info-inner"},[2!==a?e("p",{class:{bold:1===a}},[t._v("\n          "+t._s(n)+"\n        ")]):e("a",{attrs:{href:"mailto:"+n}},[t._v("\n          "+t._s(n)+"\n        ")])])})),e("div",{staticClass:"contact-info"},t._l(t.contactInfoSecond,function(n,a){return e("div",{key:a,staticClass:"contact-info-inner"},[2!==a?e("p",{class:{bold:1===a}},[t._v("\n          "+t._s(n)+"\n        ")]):e("a",{attrs:{href:"mailto:"+n}},[t._v("\n          "+t._s(n)+"\n        ")])])}))])],1)},i=[],s=e("f1d4"),o=e("a588"),c=e("ab05"),r={name:"leasing-block",components:{ServiceList:c["a"],AboutContent:s["a"],AboutTitle:o["a"]},mounted:function(){this.$store.getters[this.model]?this.$store.commit("SET_LOADING_STATE",{model:"page",value:!1}):this.fetchPage()},props:{title:{type:String,default:""},content:{type:String,default:""},additionals:{type:Array,default:function(){return[]}}},data:function(){return{pageData:null,model:"leasing"}},computed:{pageDataContent:function(){return this.$store.getters[this.model]?JSON.parse(this.$store.getters[this.model][0].data):""},pageTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Title"]:""},pageDescription:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Description"]:""},contactInfoTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"ContactInfoTitle"]:""},contactInfoFirst:function(){return this.pageDataContent?this.pageDataContent[this.locale+"FirstContact"]:""},contactInfoSecond:function(){return this.pageDataContent?this.pageDataContent[this.locale+"SecondContact"]:""}},methods:{fetchPage:function(){this.$store.dispatch("getAboutPage",{url:this.$store.state.apiUrls.leasing,model:this.model}).catch(function(t){console.error(t)})}}},l=r,u=(e("133f"),e("0ccd"),e("2877")),f=Object(u["a"])(l,a,i,!1,null,"64594568",null);f.options.__file="Leasing.vue";n["default"]=f.exports},"7ec9":function(t,n,e){},8308:function(t,n,e){},8773:function(t,n,e){"use strict";var a=e("ea38"),i=e.n(a);i.a},"8f60":function(t,n,e){"use strict";var a=e("8308"),i=e.n(a);i.a},a588:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about-title-container"},[e("h1",{staticClass:"title"},[t._v(" "+t._s(this.title))])])},i=[],s={name:"about-title",props:{title:{type:String,default:""}}},o=s,c=(e("d7c7"),e("2877")),r=Object(c["a"])(o,a,i,!1,null,null,null);r.options.__file="AboutPageTitle.vue";n["a"]=r.exports},ab05:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"service-list"},t._l(t.list,function(n,a){return e("li",{key:a,on:{click:function(e){t.toggle(n)}}},[e("div",{staticClass:"parent-container"},[t._m(0,!0),e("span",{staticClass:"name-wrapper"},[t._v(t._s(n.title))])]),e("div",{staticClass:"content",class:{open:-1!==t.openItem.indexOf(n)}},[e("p",[t._v("\n        "+t._s(n.content)+"\n      ")])])])}))},i=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("span",{staticClass:"icon-container"},[a("img",{attrs:{src:e("cdbb"),alt:""}})])}],s=(e("cadf"),e("551c"),e("097d"),{name:"service-list",props:{list:{type:Array}},data:function(){return{openItem:[]}},methods:{toggle:function(t){var n=this.openItem.indexOf(t);-1!==n?this.openItem.splice(n,1):this.openItem.push(t)}}}),o=s,c=(e("8773"),e("2877")),r=Object(c["a"])(o,a,i,!1,null,"436c64f0",null);r.options.__file="ServiceList.vue";n["a"]=r.exports},d7c7:function(t,n,e){"use strict";var a=e("2ef1"),i=e.n(a);i.a},ea38:function(t,n,e){},f1d4:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about-content-container"},[e("p",{domProps:{innerHTML:t._s(t.customContent)}})])},i=[],s=(e("a481"),{name:"about-content",props:{content:{type:String,default:""}},computed:{customContent:function(){return""!==this.content?"<p>".concat(this.content.replace(/\n/g,"<br />"),"</p>"):""}}}),o=s,c=(e("8f60"),e("2877")),r=Object(c["a"])(o,a,i,!1,null,null,null);r.options.__file="AboutPageContent.vue";n["a"]=r.exports}}]);
//# sourceMappingURL=chunk-74d42fbe.c98aae3f.js.map