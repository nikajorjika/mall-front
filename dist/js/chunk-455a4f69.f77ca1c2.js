(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-455a4f69"],{"0634":function(t,e,n){"use strict";var i=n("a08b"),a=n.n(i);a.a},"224c":function(t,e,n){},"85bf":function(t,e,n){"use strict";var i=n("f327"),a=n.n(i);a.a},8627:function(t,e,n){},8773:function(t,e,n){"use strict";var i=n("8627"),a=n.n(i);a.a},"8f60":function(t,e,n){"use strict";var i=n("906c"),a=n.n(i);a.a},"906c":function(t,e,n){},a08b:function(t,e,n){},a588:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-title-container"},[n("h1",{staticClass:"title"},[t._v(" "+t._s(this.title))])])},a=[],s={name:"about-title",props:{title:{type:String,default:""}}},o=s,c=(n("d7c7"),n("2877")),r=Object(c["a"])(o,i,a,!1,null,null,null);r.options.__file="AboutPageTitle.vue";e["a"]=r.exports},ab05:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"service-list"},t._l(t.list,function(e,i){return n("li",{key:i,on:{click:function(n){t.toggle(e)}}},[n("div",{staticClass:"parent-container"},[t._m(0,!0),n("span",{staticClass:"name-wrapper"},[t._v(t._s(e.title))])]),n("div",{staticClass:"content",class:{open:-1!==t.openItem.indexOf(e)}},[n("p",[t._v("\n        "+t._s(e.content)+"\n      ")])])])}),0)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon-container"},[i("img",{attrs:{src:n("cdbb"),alt:""}})])}],s={name:"service-list",props:{list:{type:Array}},data:function(){return{openItem:[]}},methods:{toggle:function(t){var e=this.openItem.indexOf(t);-1!==e?this.openItem.splice(e,1):this.openItem.push(t)}}},o=s,c=(n("8773"),n("2877")),r=Object(c["a"])(o,i,a,!1,null,"436c64f0",null);r.options.__file="ServiceList.vue";e["a"]=r.exports},bdc6:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-block"},[n("about-title",{attrs:{title:t.pageTitle}}),n("about-content",{attrs:{content:t.pageDescription}}),n("service-list",{attrs:{list:t.list}})],1)},a=[],s=n("f1d4"),o=n("a588"),c=n("ab05"),r={name:"page-block",components:{ServiceList:c["a"],AboutContent:s["a"],AboutTitle:o["a"]},mounted:function(){this.$store.getters[this.model]?this.$store.commit("SET_LOADING_STATE",{model:"page",value:!1}):this.fetchPage()},props:{title:{type:String,default:""},content:{type:String,default:""},additionals:{type:Array,default:function(){return[]}}},data:function(){return{pageData:null,model:"guestServices"}},computed:{pageDataContent:function(){return this.$store.getters[this.model]?this.parsePageData(this.$store.getters[this.model][0].data):""},pageTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Title"]:""},pageDescription:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Description"]:""},list:function(){var t=[];if(this.pageDataContent)for(var e=this.pageDataContent[this.locale+"Additional"],n=0;n<e.length;n++)t.push({title:e[n],content:e[n+1]}),n++;return t}},methods:{fetchPage:function(){this.$store.dispatch("getAboutPage",{url:this.$store.state.apiUrls.guestService,model:this.model}).catch(function(t){console.error(t)})}}},l=r,u=(n("0634"),n("85bf"),n("2877")),p=Object(u["a"])(l,i,a,!1,null,"c5d87812",null);p.options.__file="GuestServicePage.vue";e["default"]=p.exports},d7c7:function(t,e,n){"use strict";var i=n("224c"),a=n.n(i);a.a},f1d4:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-content-container"},[n("p",{domProps:{innerHTML:t._s(t.customContent)}})])},a=[],s=(n("a481"),{name:"about-content",props:{content:{type:String,default:""}},computed:{customContent:function(){return""!==this.content?"<p>".concat(this.content.replace(/\n/g,"<br />"),"</p>"):""}}}),o=s,c=(n("8f60"),n("2877")),r=Object(c["a"])(o,i,a,!1,null,null,null);r.options.__file="AboutPageContent.vue";e["a"]=r.exports},f327:function(t,e,n){}}]);
//# sourceMappingURL=chunk-455a4f69.f77ca1c2.js.map