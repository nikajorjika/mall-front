(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1506452a"],{"053f":function(t,e,i){"use strict";var a=i("4a5e"),n=i.n(a);n.a},"104a":function(t,e,i){"use strict";var a=i("d53a"),n=i.n(a);n.a},"129e":function(t,e,i){"use strict";var a=i("f37b"),n=i.n(a);n.a},"4a5e":function(t,e,i){},5493:function(t,e,i){},"89b1":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"media-page"},[i("block-header-standard",{attrs:{title:t.title[t.locale]}}),i("media-filters",{on:{filtered:t.filtered}}),i("media-list",{attrs:{filterBy:t.filter}})],1)},n=[],s=i("1d62"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"media-filter-container"},[i("div",{staticClass:"filters"},["mobile"===t.$mq?i("div",{staticClass:"filter-toggle",on:{click:function(e){t.activeFilters=!t.activeFilters}}},[i("h2",[t._v(t._s(t.t("filter")))]),i("span",{staticClass:"filter-icon",class:{open:t.activeFilters}},[i("font-awesome-icon",{attrs:{icon:"caret-down"}})],1)]):t._e(),t.activeFilters||"mobile"!==t.$mq?i("ul",t._l(t.filters,function(e,a){return i("li",{key:a,on:{click:function(i){t.toggleFilters(e.value)}}},[i("span",{class:{active:t.activeFilter===e.value}},[t._v(t._s(e.name[t.locale]))])])}),0):t._e()])])},r=[],o={name:"media-filters",data:function(){return{filters:[{value:"all",name:{en:"all",ka:"ყველა"}},{value:"TV/Video",name:{en:"TV / VIDEO",ka:"ტვ / ვიდეო"}},{value:"Online/Print",name:{en:"PRINT / ONLINE",ka:"პრინტი / ონლაინი"}},{value:"Advertisement",name:{en:"COMMERCIAL",ka:"რეკლამა"}}],activeFilter:"all",activeFilters:!1}},methods:{toggleFilters:function(t){this.activeFilter=t,this.$emit("filtered",t)}}},c=o,u=(i("104a"),i("2877")),d=Object(u["a"])(c,l,r,!1,null,null,null);d.options.__file="MediaFilter.vue";var f=d.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"media-list-component"},[i("div",{staticClass:"media-list-container"},t._l(this.$store.getters.media,function(e,a){return t.filterBy===e.category||"all"===t.filterBy?i("div",{key:a,staticClass:"list-item"},["Online/Print"===e.category?i("media-print",{attrs:{item:e}}):i("media-video",{attrs:{item:e}})],1):t._e()}),0)])},p=[],v=(i("cadf"),i("551c"),i("097d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"media-video-component",on:{click:function(e){t.showPopup=!t.showPopup}}},[i("div",{staticClass:"img-container"},[i("img",{attrs:{src:t.item.photoUrl,alt:t.description,title:t.title}})]),i("div",{staticClass:"content-container"},[i("h2",[t._v(t._s(t.title))]),i("p",{domProps:{innerHTML:t._s(t.description)}})]),t.showPopup?i("div",{staticClass:"video-popup"},[i("youtube",{staticClass:"video-inner",attrs:{"video-id":t.parseYoutube(t.item.sourceUrl),"player-width":"100%","player-height":"100%"}})],1):t._e()])}),h=[],_={name:"media-video",props:{item:{type:Object,default:null}},data:function(){return{showPopup:!1}},computed:{title:function(){return this.item?this.item["name".concat(this.locale.toUpperCase())]:""},description:function(){var t=this.item["description".concat(this.locale.toUpperCase())];return t.length>120&&(t=t.substr(0,120)+"..."),t}}},b=_,g=(i("129e"),Object(u["a"])(b,v,h,!1,null,null,null));g.options.__file="MediaVideo.vue";var C=g.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"media-print-component"},[a("div",{staticClass:"top-block-container"},[a("div",{staticClass:"middle-block"},[a("h2",[t._v(t._s(t.title))]),a("p",{domProps:{innerHTML:t._s(t.description)}})]),t._m(0)]),a("div",{staticClass:"button-container"},[a("a",{attrs:{href:t.item.sourceUrl,target:"_blank"}},[a("span",[t._v(t._s(t.t("full_page")))]),a("img",{attrs:{src:i("e51c"),alt:"See full page"}})])])])},y=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"author"},[i("span",{staticClass:"gray"},[t._v("16. 09. 18")]),t._v(" Kviris Palitra\n    ")])}],M={name:"media-print",props:{item:{type:Object,default:null}},computed:{title:function(){return this.item?this.item["name".concat(this.locale.toUpperCase())]:""},description:function(){var t=this.item["description".concat(this.locale.toUpperCase())];return t.length>120&&(t=t.substr(0,120)+"..."),t}}},w=M,O=(i("053f"),Object(u["a"])(w,k,y,!1,null,null,null));O.options.__file="MediaPrint.vue";var $=O.exports,F={name:"media-list",components:{MediaPrint:$,MediaVideo:C},props:{filterBy:{type:String,default:"all"}},mounted:function(){this.$store.getters.media.length||this.fetchItems()},methods:{fetchItems:function(){this.$store.dispatch("fetchItems",{model:"media",api:this.$store.state.apiUrls.media,setter:"INITIAL_LOAD"}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}}},P=F,I=(i("f7b8"),Object(u["a"])(P,m,p,!1,null,null,null));I.options.__file="MediaList.vue";var E=I.exports,L={name:"media",components:{MediaList:E,MediaFilters:f,BlockHeaderStandard:s["a"]},data:function(){return{title:{en:"Media",ka:"მედია"},filter:"all"}},methods:{filtered:function(t){this.filter=t}}},U=L,j=Object(u["a"])(U,a,n,!1,null,null,null);j.options.__file="Media.vue";e["default"]=j.exports},d53a:function(t,e,i){},f37b:function(t,e,i){},f7b8:function(t,e,i){"use strict";var a=i("5493"),n=i.n(a);n.a}}]);
//# sourceMappingURL=chunk-1506452a.06119ced.js.map