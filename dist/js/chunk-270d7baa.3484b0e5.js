(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-270d7baa"],{"224c":function(t,e,s){},2611:function(t,e,s){},"3efa":function(t,e,s){},"6b8b":function(t,e,s){"use strict";var n=s("be54"),i=s.n(n);i.a},"73ba":function(t,e,s){"use strict";var n=s("3efa"),i=s.n(n);i.a},8627:function(t,e,s){},8773:function(t,e,s){"use strict";var n=s("8627"),i=s.n(n);i.a},"8f60":function(t,e,s){"use strict";var n=s("906c"),i=s.n(n);i.a},"906c":function(t,e,s){},9232:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-block"},[s("div",{staticClass:"content-container"},[s("div",{staticClass:"part-left"},[s("about-title",{attrs:{title:t.pageTitle}}),s("about-content",{attrs:{content:t.pageDescription}})],1),s("div",{staticClass:"part-right"},[s("img",{attrs:{src:t.imageUrl,alt:"Gift Card"}})])]),s("div",{staticClass:"list-label"},[s("p",[t._v(t._s(t.t("see_the_list_below")))])]),s("gift-stores")],1)},i=[],a=s("f1d4"),r=s("a588"),o=s("ab05"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gift-stores"},[s("div",{staticClass:"alphabet-header"},[s("div",{staticClass:"alphabet-header-wrapper"},t._l(t.$store.getters.alphabet[t.locale],function(e,n){return s("div",{key:n,staticClass:"alphabet-item"},[s("span",{class:{active:void 0!==t.grouped[e.toUpperCase()]&&0!==t.grouped[e.toUpperCase()].length},on:{click:function(s){t.filterList(e)}}},[t._v(t._s(e)+"\n          ")])])}),0)]),s("div",{staticClass:"store-list-container"},[s("div",{staticClass:"store-list-wrapper"},t._l(t.currentAlphabetFilter,function(e){return s("div",{key:e,staticClass:"alphabetic-container"},[t.grouped[e.toUpperCase()]?s("div",{staticClass:"alphabetic-container-inner"},[s("div",{staticClass:"alphabet-wrapper"},[s("div",{staticClass:"alphabet-item"},[t._v("\n              "+t._s(e)+"\n            ")]),s("div",{staticClass:"items-container"},t._l(t.grouped[e.toUpperCase()],function(e,n){return s("div",{key:n,staticClass:"item"},[void 0!==e?s("div",{staticClass:"item-wrapper"},[s("span",{staticClass:"name"},[t._v("\n                    "+t._s(e.name[t.locale])+"\n                  ")])]):t._e()])}),0)])]):t._e()])}),0)])])},l=[],u={name:"gift-stores",data:function(){return{loading:!1,requestSent:!1,currentLetter:null,model:"giftStoresList",magSetter:"SET_GIFT_STORES"}},mounted:function(){this.$store.getters.giftStoresList.length||this.fetchItems()},computed:{currentAlphabetFilter:function(){var t=this.$store.getters.alphabet[this.locale];return null===this.currentLetter?t:[this.currentLetter]},grouped:function(){return this.groupByAlphabet(this.$store.getters.giftStoresList)}},methods:{fetchItems:function(){this.$store.dispatch("fetchItems",{api:this.$store.state.apiUrls.giftStores,model:this.model,setter:this.magSetter}).catch(function(t){console.error(t)})},filterList:function(t){this.currentLetter=t}}},p=u,f=(s("73ba"),s("2877")),d=Object(f["a"])(p,c,l,!1,null,null,null);d.options.__file="GiftStores.vue";var h=d.exports,g={name:"gift-card",components:{GiftStores:h,ServiceList:o["a"],AboutContent:a["a"],AboutTitle:r["a"]},mounted:function(){this.$store.getters.giftCard?this.$store.commit("SET_LOADING_STATE",{model:"page",value:!1}):this.fetchPage()},props:{title:{type:String,default:""},content:{type:String,default:""},additionals:{type:Array,default:function(){return[]}}},data:function(){return{pageData:null,model:"giftCard"}},computed:{pageDataContent:function(){return this.$store.getters[this.model]?this.parsePageData(this.$store.getters[this.model][0].data):""},pageTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Title"]:""},pageDescription:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Description"]:""},imageUrl:function(){return this.$store.getters[this.model]?this.$store.getters[this.model][0].photoUrl:""}},methods:{fetchPage:function(){this.$store.dispatch("getAboutPage",{url:this.$store.state.apiUrls.gift,model:this.model}).catch(function(t){console.error(t)})}}},v=g,m=(s("6b8b"),s("c5ae"),Object(f["a"])(v,n,i,!1,null,"06a54c62",null));m.options.__file="GiftCard.vue";e["default"]=m.exports},a588:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about-title-container"},[s("h1",{staticClass:"title"},[t._v(" "+t._s(this.title))])])},i=[],a={name:"about-title",props:{title:{type:String,default:""}}},r=a,o=(s("d7c7"),s("2877")),c=Object(o["a"])(r,n,i,!1,null,null,null);c.options.__file="AboutPageTitle.vue";e["a"]=c.exports},ab05:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"service-list"},t._l(t.list,function(e,n){return s("li",{key:n,on:{click:function(s){t.toggle(e)}}},[s("div",{staticClass:"parent-container"},[t._m(0,!0),s("span",{staticClass:"name-wrapper"},[t._v(t._s(e.title))])]),s("div",{staticClass:"content",class:{open:-1!==t.openItem.indexOf(e)}},[s("p",[t._v("\n        "+t._s(e.content)+"\n      ")])])])}),0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon-container"},[n("img",{attrs:{src:s("cdbb"),alt:""}})])}],a={name:"service-list",props:{list:{type:Array}},data:function(){return{openItem:[]}},methods:{toggle:function(t){var e=this.openItem.indexOf(t);-1!==e?this.openItem.splice(e,1):this.openItem.push(t)}}},r=a,o=(s("8773"),s("2877")),c=Object(o["a"])(r,n,i,!1,null,"436c64f0",null);c.options.__file="ServiceList.vue";e["a"]=c.exports},be54:function(t,e,s){},c5ae:function(t,e,s){"use strict";var n=s("2611"),i=s.n(n);i.a},d7c7:function(t,e,s){"use strict";var n=s("224c"),i=s.n(n);i.a},f1d4:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about-content-container"},[s("p",{domProps:{innerHTML:t._s(t.customContent)}})])},i=[],a=(s("a481"),{name:"about-content",props:{content:{type:String,default:""}},computed:{customContent:function(){return""!==this.content?"<p>".concat(this.content.replace(/\n/g,"<br />"),"</p>"):""}}}),r=a,o=(s("8f60"),s("2877")),c=Object(o["a"])(r,n,i,!1,null,null,null);c.options.__file="AboutPageContent.vue";e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-270d7baa.3484b0e5.js.map