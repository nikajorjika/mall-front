(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2501bc2e","chunk-6ed0f0c6","chunk-27a19e81"],{"11b1":function(t,e,a){},"12cd":function(t,e,a){},"204b":function(t,e,a){},"25e5":function(t,e,a){},"27b3":function(t,e,a){"use strict";var n=a("11b1"),i=a.n(n);i.a},"2ef1":function(t,e,a){},"3b2b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-block"},[a("about-title",{attrs:{title:this.$store.state.pageData.aboutUs.title}}),a("about-content",{attrs:{content:this.$store.state.pageData.aboutUs.content}}),a("div",{staticClass:"additional-info"},t._l(this.$store.state.pageData.aboutUs.additional,function(e){return a("div",{key:e.title,staticClass:"additional-info-item"},[a("h4",[t._v(t._s(e.title))]),a("p",{domProps:{innerHTML:t._s(e.text)}})])}))],1)},i=[],s=(a("cadf"),a("551c"),a("097d"),a("f1d4")),r=a("a588"),o={name:"page-block",components:{AboutContent:s["a"],AboutTitle:r["a"]},props:{title:{type:String,default:""},content:{type:String,default:""},additionals:{type:Array,default:function(){return[]}}}},c=o,l=(a("c97a"),a("6cac"),a("2877")),u=Object(l["a"])(c,n,i,!1,null,"309efe34",null);u.options.__file="PageBlock.vue";e["default"]=u.exports},"40b1":function(t,e,a){"use strict";var n=a("94e6"),i=a.n(n);i.a},"5aa6":function(t,e,a){"use strict";var n=a("204b"),i=a.n(n);i.a},"6cac":function(t,e,a){"use strict";var n=a("25e5"),i=a.n(n);i.a},8308:function(t,e,a){},"8f60":function(t,e,a){"use strict";var n=a("8308"),i=a.n(n);i.a},"94e6":function(t,e,a){},a588:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-title-container"},[a("h1",{staticClass:"title"},[t._v(" "+t._s(this.title))])])},i=[],s={name:"about-title",props:{title:{type:String,default:""}}},r=s,o=(a("d7c7"),a("2877")),c=Object(o["a"])(r,n,i,!1,null,null,null);c.options.__file="AboutPageTitle.vue";e["a"]=c.exports},ab05:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"service-list"},t._l(t.list,function(e,n){return a("li",{key:n,on:{click:function(a){t.toggle(e)}}},[a("div",{staticClass:"parent-container"},[t._m(0,!0),a("span",{staticClass:"name-wrapper"},[t._v(t._s(e.title))])]),a("div",{staticClass:"content",class:{open:t.openItem===e}},[a("p",[t._v("\n        "+t._s(e.content)+"\n      ")])])])}))},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon-container"},[n("img",{attrs:{src:a("cdbb"),alt:""}})])}],s={name:"service-list",props:{list:{type:Array}},data:function(){return{openItem:null}},methods:{toggle:function(t){this.openItem=this.openItem===t?null:t}}},r=s,o=(a("5aa6"),a("2877")),c=Object(o["a"])(r,n,i,!1,null,"16a006cc",null);c.options.__file="ServiceList.vue";e["a"]=c.exports},bdc6:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-our-service"},[a("about-title",{attrs:{title:this.title}}),a("about-content",{attrs:{content:this.content}}),a("service-list",{attrs:{list:t.serviceList}})],1)},i=[],s=(a("cadf"),a("551c"),a("097d"),a("f1d4")),r=a("a588"),o=a("ab05"),c={name:"page-our-service",components:{ServiceList:o["a"],AboutContent:s["a"],AboutTitle:r["a"]},props:{title:{type:String,default:"OUR SERVICE"},content:{type:String,default:"At Tbilisi Mall we offer a provision of full services in line with our main priorities to create a comfortable, pleasant environment and ensure that every visitor’s experience is exceptional. <br> Tbilisi Mall has the following services at your disposal:"}},data:function(){return{serviceList:[{title:"Gift Wrap"},{title:"Customer Service"},{title:"Tbilisi Mall Taxi"},{title:"Medical Service"},{title:"Car Wash"},{title:"Free WIFI"},{title:"Dry Cleaning"},{title:"Parking Facilities"},{title:"Lost and Found"},{title:"Children's Wrist Bands"},{title:"Banking Services & ATM's"}]}}},l=c,u=(a("40b1"),a("2877")),f=Object(u["a"])(l,n,i,!1,null,"6186dfbf",null);f.options.__file="GuestServicePage.vue";e["default"]=f.exports},c97a:function(t,e,a){"use strict";var n=a("12cd"),i=a.n(n);i.a},d7c7:function(t,e,a){"use strict";var n=a("2ef1"),i=a.n(n);i.a},dcfd:function(t,e,a){},e2a7:function(t,e,a){"use strict";var n=a("eb62"),i=a.n(n);i.a},eb62:function(t,e,a){},f1d4:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-content-container"},[a("p",{domProps:{innerHTML:t._s(this.content)}})])},i=[],s=(a("cadf"),a("551c"),a("097d"),{name:"about-content",props:{content:{type:String,default:""}}}),r=s,o=(a("8f60"),a("2877")),c=Object(o["a"])(r,n,i,!1,null,null,null);c.options.__file="AboutPageContent.vue";e["a"]=c.exports},f26d:function(t,e,a){"use strict";var n=a("dcfd"),i=a.n(n);i.a},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-page container"},[a("section",{staticClass:"about-us about-outer-container"},[a("div",{staticClass:"page-block-container"},[a("router-view")],1),a("div",{staticClass:"menu-container"},[a("about-us-menu",{attrs:{items:this.aboutMenu,active:""}})],1),a("div",{staticClass:"horizontal-line gray"}),a("div",{staticClass:"our-team"},[a("staff-carousel",{attrs:{staff:this.staff}})],1)])])},i=[],s=a("3b2b"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-page-menu"},[a("div",{staticClass:"menu-wrapper-outer"},[a("ul",{staticClass:"menu-wrapper"},t._l(this.items,function(e,n){return a("li",{key:n,staticClass:"menu-item"},[a("router-link",{staticClass:"name",attrs:{to:"/"+t.$store.getters.locale.locale+e.url}},[t._v("\n          "+t._s(e.name)+"\n        ")])],1)}))])])},o=[],c={name:"about-us-menu",props:{items:{type:Array,default:function(){return[]}},active:{type:String,default:""}}},l=c,u=(a("27b3"),a("2877")),f=Object(u["a"])(l,r,o,!1,null,null,null);f.options.__file="AboutPageMenu.vue";var p=f.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"staff-carousel"},[a("div",{staticClass:"title-container"},[a("h3",[t._v(t._s(this.title))])]),a("div",{staticClass:"staff-container"},[a("carousel",{staticClass:"staff-wrapper",attrs:{perPage:this.perPage,scrollPerPage:!1,navigationEnabled:!0,paginationEnabled:!1,navigationPrevLabel:this.printPrevIcon(),navigationNextLabel:this.printNextIcon()}},t._l(this.staff,function(e){return a("slide",{key:e.id},[a("div",{staticClass:"staff-item"},[a("div",{staticClass:"img-container"},[a("img",{attrs:{src:e.image,alt:e.name}})]),a("div",{staticClass:"name-wrapper"},[a("h3",[t._v(t._s(e.name))]),a("p",[t._v(t._s(e.position))])])])])}))],1)])},v=[],b=(a("c5f6"),a("0a63")),m={name:"staff-carousel",components:{Carousel:b["Carousel"],Slide:b["Slide"]},props:{title:{type:String,default:"OUR TEAM"},staff:{type:Array,default:function(){return[]}},perPage:{type:Number,default:3}},computed:{leftArrow:function(){return a("8d27")},rightArrow:function(){return a("d45b")}},methods:{printPrevIcon:function(){return'<span class="arrow arrow-left"><img src="'.concat(this.leftArrow,'"></span>')},printNextIcon:function(){return'<span class="arrow arrow-right"><img src="'.concat(this.rightArrow,'"></span>')}}},_=m,g=(a("e2a7"),Object(u["a"])(_,d,v,!1,null,null,null));g.options.__file="OurTeam.vue";var h=g.exports,C=a("a588"),y=a("bdc6"),w={name:"about-us",components:{PageOurService:y["default"],AboutTitle:C["a"],StaffCarousel:h,AboutUsMenu:p,PageBlock:s["default"]},data:function(){return{aboutMenu:this.$store.state.pageData.aboutUsMenu,staff:this.$store.state.pageData.aboutUs.staff}},props:{page:{type:String,default:""}}},A=w,S=(a("f26d"),Object(u["a"])(A,n,i,!1,null,null,null));S.options.__file="About.vue";e["default"]=S.exports}}]);
//# sourceMappingURL=chunk-2501bc2e.6e04fe96.js.map