(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b67d9596","chunk-a471aac8","chunk-34309dd8"],{"187d":function(t,e,n){},"1e7a":function(t,e,n){},"224c":function(t,e,n){},"27b3":function(t,e,n){"use strict";var a=n("f50e"),s=n.n(a);s.a},"3b2b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-block"},[n("about-title",{attrs:{title:t.pageTitle}}),n("about-content",{attrs:{content:t.pageDescription}}),n("h3",{staticClass:"working-hours-title"},[t._v(t._s(t.t("working_hours"))+":")]),n("div",{staticClass:"additional-info"},[n("div",{staticClass:"additional-info-item"},[n("h4",[t._v(t._s(t.workingHoursTitle))]),n("p",{domProps:{innerHTML:t._s(t.workingHours)}})]),n("div",{staticClass:"additional-info-item"},[n("h4",[t._v(t._s(t.carrefourTitle))]),n("p",{domProps:{innerHTML:t._s(t.carrefourWorkingHours)}})]),n("div",{staticClass:"additional-info-item"},[n("h4",[t._v(t._s(t.caveaTitle))]),n("p",{domProps:{innerHTML:t._s(t.caveaWorkingHours)}})])])],1)},s=[],i=n("f1d4"),o=n("a588"),r={name:"page-block",components:{AboutContent:i["a"],AboutTitle:o["a"]},mounted:function(){this.$store.getters[this.model]?this.$store.commit("SET_LOADING_STATE",{model:"page",value:!1}):this.fetchPage()},props:{title:{type:String,default:""},content:{type:String,default:""},additionals:{type:Array,default:function(){return[]}}},data:function(){return{pageData:null,model:"aboutUs"}},computed:{pageDataContent:function(){return this.$store.getters[this.model]?this.parsePageData(this.$store.getters[this.model][0].data):""},pageTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Title"]:""},pageDescription:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Description"]:""},workingHoursTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"WorkingHoursTitle"]:""},workingHours:function(){return this.pageDataContent?this.pageDataContent[this.locale+"WorkingHours"]:""},carrefourTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"CarrefourTitle"]:""},carrefourWorkingHours:function(){return this.pageDataContent?this.pageDataContent[this.locale+"CarrefourWorkingHours"]:""},caveaTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"CaveaTitle"]:""},caveaWorkingHours:function(){return this.pageDataContent?this.pageDataContent[this.locale+"CaveaWorkingHours"]:""}},methods:{fetchPage:function(){this.$store.dispatch("getAboutPage",{url:this.$store.state.apiUrls.about,model:this.model}).catch(function(t){console.error(t)})}}},c=r,l=(n("e843"),n("6cac"),n("2877")),u=Object(l["a"])(c,a,s,!1,null,"0757c494",null);u.options.__file="PageBlock.vue";e["default"]=u.exports},"5a26":function(t,e,n){"use strict";var a=n("1e7a"),s=n.n(a);s.a},"6adb":function(t,e,n){},"6cac":function(t,e,n){"use strict";var a=n("6adb"),s=n.n(a);s.a},"736d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-page-menu"},["mobile"!==t.$mq?a("div",{staticClass:"menu-wrapper-outer",class:{fixedHeight:"about"===t.$route.name}},[a("ul",{staticClass:"menu-wrapper"},t._l(t.items,function(e,n){return a("li",{key:n,staticClass:"menu-item"},[a("router-link",{staticClass:"name",attrs:{to:"/"+t.locale+e.url}},[t._v("\n          "+t._s(t.t(e.name))+"\n        ")])],1)}),0)]):a("div",{staticClass:"menu-carousel"},[a("div",{staticClass:"carousel-wrapper"},[a("div",{staticClass:"arrow arrow-left",on:{click:t.previous}},[a("img",{attrs:{src:n("baf7"),alt:""}})]),a("transition-group",{staticClass:"carousel",attrs:{tag:"div"}},t._l(t.slides,function(e,n){return a("div",{key:e.id,staticClass:"menu-item",on:{click:function(e){e.preventDefault(),t.onStateChange(n)}}},[a("router-link",{staticClass:"name",attrs:{to:"/"+t.locale+e.url}},[t._v("\n            "+t._s(t.t(e.name))+"\n          ")])],1)}),0),a("div",{staticClass:"arrow arrow-right",on:{click:t.next}},[a("img",{attrs:{src:n("baf7"),alt:""}})])],1)])])},s=[],i=n("0a63"),o={name:"about-us-menu",props:{items:{type:Array,default:function(){return[]}},active:{type:String,default:""}},components:{Carousel:i["Carousel"],Slide:i["Slide"]},data:function(){return{prevItem:null,activeMenuItem:null,nextItem:null,slides:this.items}},methods:{onStateChange:function(t){0===t?this.previous():2===t&&this.next()},next:function(){var t=this.slides.shift();this.slides=this.slides.concat(t)},previous:function(){var t=this.slides.pop();this.slides=[t].concat(this.slides)}}},r=o,c=(n("27b3"),n("2877")),l=Object(c["a"])(r,a,s,!1,null,null,null);l.options.__file="AboutPageMenu.vue";e["a"]=l.exports},"85bf":function(t,e,n){"use strict";var a=n("f327"),s=n.n(a);s.a},"8f60":function(t,e,n){"use strict";var a=n("906c"),s=n.n(a);s.a},"906c":function(t,e,n){},"9a1d":function(t,e,n){"use strict";var a=n("c8c6"),s=n.n(a);s.a},a588:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-title-container"},[n("h1",{staticClass:"title"},[t._v(" "+t._s(this.title))])])},s=[],i={name:"about-title",props:{title:{type:String,default:""}}},o=i,r=(n("d7c7"),n("2877")),c=Object(r["a"])(o,a,s,!1,null,null,null);c.options.__file="AboutPageTitle.vue";e["a"]=c.exports},ab05:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.list?n("div",{staticClass:"service-list-container"},[t.single?n("div",{staticClass:"service-list"},t._l(t.list,function(e,a){return n("div",{key:a,staticClass:"list-item"},[n("div",{staticClass:"parent-container",on:{click:function(e){t.toggle(a)}}},[t._m(0,!0),n("span",{staticClass:"name-wrapper"},[t._v(t._s(e.title))])]),n("div",{staticClass:"content",class:{open:-1!==t.openItem.indexOf(a)}},[n("p",{domProps:{innerHTML:t._s(e.content)}})])])}),0):n("div",{staticClass:"double"},[n("div",{staticClass:"service-list"},t._l(t.list,function(e,a){return a<7?n("div",{key:a,staticClass:"list-item"},[n("div",{staticClass:"parent-container",on:{click:function(e){t.toggle(a)}}},[t._m(1,!0),n("span",{staticClass:"name-wrapper"},[t._v(t._s(e.title))])]),n("div",{staticClass:"content",class:{open:-1!==t.openItem.indexOf(a)}},[n("p",{domProps:{innerHTML:t._s(e.content)}})])]):t._e()}),0),n("div",{staticClass:"service-list"},t._l(t.list,function(e,a){return a>=7?n("div",{key:a,staticClass:"list-item"},[n("div",{staticClass:"parent-container",on:{click:function(e){t.toggle(a)}}},[t._m(2,!0),n("span",{staticClass:"name-wrapper"},[t._v(t._s(e.title))])]),n("div",{staticClass:"content",class:{open:-1!==t.openItem.indexOf(a)}},[n("p",{domProps:{innerHTML:t._s(e.content)}})])]):t._e()}),0)])]):t._e()},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon-container"},[a("img",{attrs:{src:n("cdbb"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon-container"},[a("img",{attrs:{src:n("cdbb"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon-container"},[a("img",{attrs:{src:n("cdbb"),alt:""}})])}],i=(n("ac6a"),n("cadf"),n("551c"),n("097d"),{name:"service-list",props:{list:{type:Array},single:{type:Boolean,default:!0}},data:function(){return{openItem:[]}},watch:{list:function(t){var e=this;t.forEach(function(t,n){e.openItem.push(n)})}},methods:{toggle:function(t){var e=this.openItem.indexOf(t);-1!==e?this.openItem.splice(e,1):this.openItem.push(t),console.log(this.openItem)}}}),o=i,r=(n("9a1d"),n("5a26"),n("2877")),c=Object(r["a"])(o,a,s,!1,null,"156e3e64",null);c.options.__file="ServiceList.vue";e["a"]=c.exports},b2d6:function(t,e,n){},bdc6:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-block"},[n("about-title",{attrs:{title:t.pageTitle}}),n("about-content",{attrs:{content:t.pageDescription}}),n("service-list",{attrs:{list:t.list,single:!1}})],1)},s=[],i=n("f1d4"),o=n("a588"),r=n("ab05"),c={name:"page-block",components:{ServiceList:r["a"],AboutContent:i["a"],AboutTitle:o["a"]},mounted:function(){this.$store.getters[this.model]?this.$store.commit("SET_LOADING_STATE",{model:"page",value:!1}):this.fetchPage()},props:{title:{type:String,default:""},content:{type:String,default:""},additionals:{type:Array,default:function(){return[]}}},data:function(){return{pageData:null,model:"guestServices"}},computed:{pageDataContent:function(){return this.$store.getters[this.model]?this.parsePageData(this.$store.getters[this.model][0].data):""},pageTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Title"]:""},pageDescription:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Description"]:""},list:function(){var t=[];if(this.pageDataContent)for(var e=this.pageDataContent[this.locale+"Additional"],n=0;n<e.length;n++)t.push({title:e[n],content:e[n+1]}),n++;return t}},methods:{fetchPage:function(){this.$store.dispatch("getAboutPage",{url:this.$store.state.apiUrls.guestService,model:this.model}).catch(function(t){console.error(t)})}}},l=c,u=(n("eb55"),n("85bf"),n("2877")),p=Object(u["a"])(l,a,s,!1,null,"7211ed31",null);p.options.__file="GuestServicePage.vue";e["default"]=p.exports},c8c6:function(t,e,n){},cf13:function(t,e,n){},d7c7:function(t,e,n){"use strict";var a=n("224c"),s=n.n(a);s.a},e2a7:function(t,e,n){"use strict";var a=n("cf13"),s=n.n(a);s.a},e843:function(t,e,n){"use strict";var a=n("187d"),s=n.n(a);s.a},eb55:function(t,e,n){"use strict";var a=n("b2d6"),s=n.n(a);s.a},f1d4:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-content-container"},[n("p",{domProps:{innerHTML:t._s(t.customContent)}})])},s=[],i=(n("a481"),{name:"about-content",props:{content:{type:String,default:""}},computed:{customContent:function(){return""!==this.content?"<p>".concat(this.content.replace(/\n/g,"<br />"),"</p>"):""}}}),o=i,r=(n("8f60"),n("2877")),c=Object(r["a"])(o,a,s,!1,null,null,null);c.options.__file="AboutPageContent.vue";e["a"]=c.exports},f327:function(t,e,n){},f50e:function(t,e,n){},f5e9:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.getters.team.length?n("div",{staticClass:"staff-carousel"},[n("div",{staticClass:"title-container"},[n("h3",[t._v(t._s(this.title))])]),n("div",{staticClass:"staff-container"},[n("carousel",{staticClass:"staff-wrapper",attrs:{perPage:this.perPage,scrollPerPage:!1,navigationEnabled:!0,paginationEnabled:!1,perPageCustom:[[320,1],[480,2],[760,3]],navigationPrevLabel:this.printPrevIcon(),navigationNextLabel:this.printNextIcon()}},t._l(t.$store.getters.team,function(e,a){return n("slide",{key:a},[n("div",{staticClass:"staff-item"},[n("div",{staticClass:"img-container"},[n("img",{attrs:{src:e.photoUrl,alt:e["name"+t.locale.toUpperCase()]}})]),n("div",{staticClass:"name-wrapper"},[n("h3",[t._v(t._s(e["name"+t.locale.toUpperCase()]))]),n("p",[t._v(t._s(e["position"+t.locale.toUpperCase()]))])])])])}),1)],1)]):t._e()},s=[],i=(n("c5f6"),n("cadf"),n("551c"),n("097d"),n("0a63")),o={name:"staff-carousel",components:{Carousel:i["Carousel"],Slide:i["Slide"]},mounted:function(){this.$store.getters.team.length||this.fetchData()},props:{title:{type:String,default:"OUR TEAM"},perPage:{type:Number,default:3}},computed:{leftArrow:function(){return n("8d27")},rightArrow:function(){return n("d45b")}},methods:{printPrevIcon:function(){return'<span class="arrow arrow-left"><img src="'.concat(this.leftArrow,'"></span>')},printNextIcon:function(){return'<span class="arrow arrow-right"><img src="'.concat(this.rightArrow,'"></span>')},fetchData:function(){var t=this;this.$store.dispatch("getTeam").then(function(e){"RECORD NOT FOUND"!==e&&t.$store.commit("SET_TEAM",e)}).catch(function(t){console.error(t)})}}},r=o,c=(n("e2a7"),n("2877")),l=Object(c["a"])(r,a,s,!1,null,null,null);l.options.__file="OurTeam.vue";e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-b67d9596.9f68b9e6.js.map