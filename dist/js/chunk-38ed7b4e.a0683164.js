(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38ed7b4e"],{dcfd:function(t,a,e){},f26d:function(t,a,e){"use strict";var s=e("dcfd"),u=e.n(s);u.a},f820:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about-page container"},[e("section",{staticClass:"about-us about-outer-container"},[e("div",{staticClass:"page-block-container",class:{loading:t.$store.getters.loading.page}},[e("div",{staticClass:"breadcrumb"},[e("ul",t._l(t.breadcrumb,function(a,s){return e("li",{key:s},[e("router-link",{attrs:{to:a.url}},[t._v(t._s(t.t(a.index)))])],1)}))]),e("router-view")],1),"mobile"!==t.$mq?e("div",{staticClass:"menu-container"},[e("about-us-menu",{attrs:{items:this.aboutMenu,active:""}})],1):t._e(),"about"===t.$route.name?e("div",{staticClass:"our-team"},[e("div",{staticClass:"horizontal-line gray"}),e("staff-carousel",{attrs:{title:t.t("our_team"),staff:this.staff}})],1):t._e()])])},u=[],o=(e("7f7f"),e("3b2b")),n=e("736d"),r=e("f5e9"),i=e("a588"),l=e("bdc6"),c={name:"about-us",components:{PageOurService:l["default"],AboutTitle:i["a"],StaffCarousel:r["a"],AboutUsMenu:n["a"],PageBlock:o["default"]},data:function(){return{aboutMenu:this.$store.state.pageData.aboutUsMenu,staff:this.$store.state.pageData.aboutUs.staff}},props:{page:{type:String,default:""}},computed:{breadcrumb:function(){var t=[{index:"home",url:"/".concat(this.$store.getters.locale.locale)},{index:"about_mall",url:"/".concat(this.$store.getters.locale.locale,"/about-us")}];if("about"!==this.$route.name){var a={index:this.$route.name,url:this.$route.path};t.push(a)}return t}}},f=c,d=(e("f26d"),e("2877")),b=Object(d["a"])(f,s,u,!1,null,null,null);b.options.__file="About.vue";a["default"]=b.exports}}]);
//# sourceMappingURL=chunk-38ed7b4e.a0683164.js.map