(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf89c312"],{"34f5":function(t,e,s){t.exports=s.p+"img/bookmarked.8e4edc62.svg"},"612d":function(t,e,s){"use strict";var o=s("63b5"),i=s.n(o);i.a},"63b5":function(t,e,s){},"63eb":function(t,e,s){},6615:function(t,e,s){t.exports=s.p+"img/bookmark.346459f0.svg"},"7d59":function(t,e,s){"use strict";var o=s("63eb"),i=s.n(o);i.a},8553:function(t,e,s){},acdd:function(t,e,s){"use strict";var o=s("8553"),i=s.n(o);i.a},afe2:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"singleEvent",staticClass:"news-single",attrs:{id:"event_"+t.item._id}},[o("div",{staticClass:"single-wrapper"},[o("div",{staticClass:"half-col single-left"},[o("div",{staticClass:"image-container"},[o("img",{attrs:{src:t.item.photoUrl,alt:t.item.name}})])]),o("div",{staticClass:"half-col single-right"},[o("div",{staticClass:"close-button"},[t.redirect?o("router-link",{staticClass:"close-button-a",attrs:{to:t.closeUrl()}},[o("default-icon",{staticClass:"hamburger-close-button",attrs:{icon:"close"},on:{click:t.closeEvent}})],1):o("a",{staticClass:"close-button-a"},[o("default-icon",{staticClass:"hamburger-close-button",attrs:{icon:"close"},on:{click:t.closeEvent}})],1)],1),o("div",{staticClass:"bookmark"},[o("div",{on:{click:function(e){t.bookmark(t.item._id)}}},[t._m(0),o("div",{staticClass:"un_bookmark",class:{bookmarked:t.bookmarked.length}},[o("img",{attrs:{src:s("34f5"),alt:"Bookmark"}}),o("span",[t._v("-")])])])]),o("div",{staticClass:"title-container"},[o("h2",{staticClass:"title"},[t._v(t._s(t.item.name[t.locale]))]),t.store.length?o("h4",{staticClass:"sub-title"},[o("router-link",{attrs:{to:"/"+t.locale+"/store/"+t.createSlug(t.store[0].name["en"])+"/"+t.store[0]._id}},[t._v("\n            "+t._s(t.store[0].name[t.locale])+"\n          ")])],1):t._e()]),o("div",{staticClass:"description-container"},[o("p",{domProps:{innerHTML:t._s(t.item.description[t.locale])}})]),o("div",{staticClass:"socials-container"},[o("div",{staticClass:"socials-inner-container"},[o("div",{staticClass:"social-item",on:{click:function(e){t.shareOnFacebook(t.item)}}},[o("span",{staticClass:"icon"},[o("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"facebook-f"}}})],1),o("span",{staticClass:"label"},[t._v("share")])]),o("a",{staticClass:"social-item",attrs:{href:"https://twitter.com/intent/tweet?text="+t.item.name[t.locale]+"&url="+t.currentUrl,target:"_blank"}},[o("span",{staticClass:"icon"},[o("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"twitter"}}})],1),o("span",{staticClass:"label"},[t._v("tweet")])]),o("a",{staticClass:"social-item",attrs:{href:"https://www.linkedin.com/shareArticle?mini=true&url="+t.currentUrl+"&title="+t.item.name[t.locale]+"e&summary="+t.item.description[t.locale],target:"_blank"}},[o("span",{staticClass:"icon"},[o("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"linkedin-in"}}})],1),o("span",{staticClass:"label"},[t._v("share")])]),o("div",{staticClass:"social-item",on:{click:function(e){t.copyUrl("news-item-current-url")}}},[o("input",{attrs:{id:"news-item-current-url",type:"hidden"},domProps:{value:t.currentFullUrl}}),o("span",{staticClass:"icon"},[o("font-awesome-icon",{attrs:{icon:"link"}})],1),o("span",{staticClass:"label"},[t._v(t._s(t.t("copyLink")))])])])])])])])},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"do_bookmark"},[o("img",{attrs:{src:s("6615"),alt:"Bookmark"}}),o("span",[t._v("+")])])}],a=(s("7f7f"),s("5eb6")),n={name:"news-single",components:{DefaultIcon:a["a"]},props:{item:{type:Object,default:function(){return{}}},redirect:{type:Boolean,default:!0}},mounted:function(){var t=this,e=s("f13c"),o={easing:"ease-in",force:!0,offset:-100,cancelable:!0,x:!1,y:!0};this.redirect&&window.setTimeout(function(){e.scrollTo("#event_".concat(t.item._id),500,o)},300),this.$store.getters.storesList.length||this.$store.dispatch("fetchItems",{model:"storesList",api:this.$store.state.apiUrls["storesList"],setter:"SET_STORE_LIST"}).catch(function(t){console.error(t)})},computed:{bookmarked:function(){var t=this;return this.$store.getters.bookmarked.filter(function(e){if(e)return e._id===t.item._id})},store:function(){var t=this;return this.$store.getters.storesList.filter(function(e){if(e._id===t.item.entityId)return!0})}},methods:{shareOnFacebook:function(t){this.shareOverrideOGMeta(this.currentUrl,t.name[this.locale],t.description[this.locale],t.photoUrl)},closeEvent:function(){this.$emit("close")},closeUrl:function(){var t="single"!==this.$route.params.cat?this.$route.params.cat:"";return"/".concat(this.locale,"/whats-new/").concat(t)},bookmark:function(t){var e=this,s=this.$store.getters.user;s?this.$http.post(this.$store.state.apiUrls.bookmark,{userToken:s.token,itemId:t}).then(function(){e.$notify({group:"notify",type:"success",title:e.t("bookmarked_successfully")}),e.$store.dispatch("getBookmarks").catch(function(t){console.error(t)})}).catch(function(t){console.error(t),e.$notify({group:"notify",type:"error",title:"Error",text:t})}):this.$router.push({name:"login",params:{locale:this.locale},query:{redirect:this.$route.fullPath}})}}},r=n,c=(s("acdd"),s("2877")),l=Object(c["a"])(r,o,i,!1,null,null,null);l.options.__file="NewsSingle.vue";e["a"]=l.exports},b51b:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bookmarks-list"},[s("block-header-standard",{attrs:{title:t.t("bookmarks")}}),s("div",{staticClass:"list-container-outer"},[t.$store.getters.bookmarked.length?s("div",{staticClass:"list-wrapper"},[s("bookmarks-list-component")],1):s("div",{staticClass:"no-record"},[s("p",[t._v(t._s(t.t("no_bookmarks")))])])])],1)},i=[],a=(s("cadf"),s("551c"),s("097d"),s("1d62")),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bookmarks-list-component"},[s("ul",t._l(t.$store.getters.bookmarked,function(e,o){return e?s("li",{key:o},[s("div",{staticClass:"news-wrapper"},[s("news-single",{attrs:{item:e,redirect:!1},on:{close:function(s){t.bookmark(e._id)}}})],1)]):t._e()}),0)])},r=[],c=s("afe2"),l={name:"bookmarks-list-component",components:{NewsSingle:c["a"]},mounted:function(){this.$store.getters.user||this.$router.push({name:"login"})},methods:{bookmark:function(t){var e=this,s=this.$store.getters.user;s?this.$http.post(this.$store.state.apiUrls.bookmark,{userToken:s.token,itemId:t}).then(function(){e.$notify({group:"notify",type:"success",title:e.t("bookmark_deleted_successfully")}),e.$store.dispatch("getBookmarks").catch(function(t){console.error(t)})}).catch(function(t){console.error(t),e.$notify({group:"notify",type:"error",title:"Error",text:t})}):this.$router.push({name:"login"})}}},u=l,m=(s("612d"),s("2877")),d=Object(m["a"])(u,n,r,!1,null,null,null);d.options.__file="BookmarksList.vue";var f=d.exports,k={name:"bookmarks-page",components:{BookmarksListComponent:f,BlockHeaderStandard:a["a"]},mounted:function(){this.$store.commit("SET_LOADING_STATE",{model:"page",value:!1}),this.$store.getters.bookmarked.length||this.$store.dispatch("getBookmarks").catch(function(t){console.error(t)})}},p=k,h=(s("7d59"),Object(m["a"])(p,o,i,!1,null,null,null));h.options.__file="Bookmarks.vue";e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-cf89c312.8a8e29fa.js.map