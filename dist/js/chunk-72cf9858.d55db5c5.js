(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72cf9858"],{"002b":function(t,s,e){},"34f5":function(t,s,e){t.exports=e.p+"img/bookmarked.8e4edc62.svg"},"612d":function(t,s,e){"use strict";var o=e("f1e4"),i=e.n(o);i.a},6178:function(t,s,e){},6615:function(t,s,e){t.exports=e.p+"img/bookmark.346459f0.svg"},"7d59":function(t,s,e){"use strict";var o=e("6178"),i=e.n(o);i.a},acdd:function(t,s,e){"use strict";var o=e("002b"),i=e.n(o);i.a},afe2:function(t,s,e){"use strict";var o=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"news-single",attrs:{id:t.item._id}},[o("div",{staticClass:"single-wrapper"},[o("div",{staticClass:"half-col single-left"},[o("div",{staticClass:"image-container"},[o("img",{attrs:{src:t.item.photoUrl,alt:t.item.name}})])]),o("div",{staticClass:"half-col single-right"},[o("div",{staticClass:"close-button"},[t.redirect?o("router-link",{staticClass:"close-button-a",attrs:{to:t.closeUrl()}},[o("default-icon",{staticClass:"hamburger-close-button",attrs:{icon:"close"},on:{click:t.closeEvent}})],1):o("a",{staticClass:"close-button-a"},[o("default-icon",{staticClass:"hamburger-close-button",attrs:{icon:"close"},on:{click:t.closeEvent}})],1)],1),o("div",{staticClass:"bookmark"},[o("div",{on:{click:function(s){t.bookmark(t.item._id)}}},[o("img",{directives:[{name:"show",rawName:"v-show",value:!t.bookmarked.length,expression:"!bookmarked.length"}],attrs:{src:e("6615"),alt:"Bookmark"}}),o("img",{directives:[{name:"show",rawName:"v-show",value:t.bookmarked.length,expression:"bookmarked.length"}],attrs:{src:e("34f5"),alt:"Bookmark"}})])]),o("div",{staticClass:"title-container"},[o("h2",{staticClass:"title"},[t._v(t._s(t.item.name[t.locale]))]),t.store.length?o("h4",{staticClass:"sub-title"},[t._v("\n          "+t._s(t.store[0].name[t.locale])+"\n        ")]):t._e()]),o("div",{staticClass:"description-container"},[o("p",{domProps:{innerHTML:t._s(t.item.description[t.locale])}})]),o("div",{staticClass:"socials-container"},[o("div",{staticClass:"promotion"},[o("div",{staticClass:"promotion-button"},[o("span",[t._v(t._s(t.t("promotion")))])])]),o("social-sharing",{staticClass:"share-inner",attrs:{url:t.currentFullUrl,title:t.item.name[t.locale],description:t.item.description[t.locale]},inlineTemplate:{render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"socials-inner-container"},[e("network",{attrs:{network:"facebook"}},[e("div",{staticClass:"social-item"},[e("span",{staticClass:"icon"},[e("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"facebook-f"}}})],1),e("span",{staticClass:"label"},[t._v("share")])])]),e("network",{attrs:{network:"twitter"}},[e("div",{staticClass:"social-item"},[e("span",{staticClass:"icon"},[e("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"twitter"}}})],1),e("span",{staticClass:"label"},[t._v("tweet")])])]),e("network",{attrs:{network:"linkedin"}},[e("div",{staticClass:"social-item"},[e("span",{staticClass:"icon"},[e("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"linkedin-in"}}})],1),e("span",{staticClass:"label"},[t._v("share")])])]),e("div",{staticClass:"social-item",on:{click:function(s){t.copyUrl("news-item-current-url")}}},[e("input",{attrs:{id:"news-item-current-url",type:"hidden"},domProps:{value:t.currentFullUrl}}),e("span",{staticClass:"icon"},[e("font-awesome-icon",{attrs:{icon:"link"}})],1),e("span",{staticClass:"label"},[t._v(t._s(t.t("copyLink")))])])],1)},staticRenderFns:[]}})],1)])])])},i=[],n=(e("cadf"),e("551c"),e("097d"),e("5eb6")),a={name:"news-single",components:{DefaultIcon:n["a"]},props:{item:{type:Object,default:function(){return{}}},redirect:{type:Boolean,default:!0}},mounted:function(){this.$store.getters.storesList.length||this.$store.dispatch("fetchItems",{model:"storesList",api:this.$store.state.apiUrls["storesList"],setter:"SET_STORE_LIST"}).catch(function(t){console.error(t)})},computed:{bookmarked:function(){var t=this;return this.$store.getters.bookmarked.filter(function(s){if(s)return s._id===t.item._id})},store:function(){var t=this;return this.$store.getters.storesList.filter(function(s){if(s._id===t.item.entityId)return!0})}},methods:{closeEvent:function(){this.$emit("close")},closeUrl:function(){var t="single"!==this.$route.params.cat?this.$route.params.cat:"";return"/".concat(this.locale,"/whats-new/").concat(t)},bookmark:function(t){var s=this,e=this.$store.getters.user;e?this.$http.post(this.$store.state.apiUrls.bookmark,{userToken:e.token,itemId:t}).then(function(){s.$notify({group:"notify",type:"success",title:s.t("bookmarked_successfully")}),s.$store.dispatch("getBookmarks").catch(function(t){console.error(t)})}).catch(function(t){console.error(t),s.$notify({group:"notify",type:"error",title:"Error",text:t})}):this.$router.push({name:"login"})}}},r=a,c=(e("acdd"),e("2877")),l=Object(c["a"])(r,o,i,!1,null,null,null);l.options.__file="NewsSingle.vue";s["a"]=l.exports},b51b:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bookmarks-list"},[e("block-header-standard",{attrs:{title:t.t("bookmarks")}}),e("div",{staticClass:"list-container-outer"},[e("div",{staticClass:"list-wrapper"},[e("bookmarks-list-component")],1)])],1)},i=[],n=e("1d62"),a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bookmarks-list-component"},[e("ul",t._l(t.$store.getters.bookmarked,function(s,o){return s?e("li",{key:o},[e("div",{staticClass:"news-wrapper"},[e("news-single",{attrs:{item:s,redirect:!1},on:{close:function(e){t.bookmark(s._id)}}})],1)]):t._e()}))])},r=[],c=e("afe2"),l={name:"bookmarks-list-component",components:{NewsSingle:c["a"]},mounted:function(){this.$store.getters.user||this.$router.push({name:"login"}),this.$store.getters.bookmarked.length||this.$store.dispatch("getBookmarks").then(function(){console.log("success")}).catch(function(t){console.log(t)})},methods:{bookmark:function(t){var s=this,e=this.$store.getters.user;e?this.$http.post(this.$store.state.apiUrls.bookmark,{userToken:e.token,itemId:t}).then(function(){s.$notify({group:"notify",type:"success",title:s.t("bookmark_deleted_successfully")}),s.$store.dispatch("getBookmarks").catch(function(t){console.error(t)})}).catch(function(t){console.error(t),s.$notify({group:"notify",type:"error",title:"Error",text:t})}):this.$router.push({name:"login"})}}},u=l,m=(e("612d"),e("2877")),d=Object(m["a"])(u,a,r,!1,null,null,null);d.options.__file="BookmarksList.vue";var k=d.exports,f={name:"bookmarks-page",components:{BookmarksListComponent:k,BlockHeaderStandard:n["a"]}},p=f,h=(e("7d59"),Object(m["a"])(p,o,i,!1,null,null,null));h.options.__file="Bookmarks.vue";s["default"]=h.exports},f1e4:function(t,s,e){}}]);
//# sourceMappingURL=chunk-72cf9858.d55db5c5.js.map