(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[7],{826:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(7294),n=a(5444),c=function(e){return r.createElement("div",{className:"searchBar"},r.createElement("form",{className:"searchForm",action:"/"+e.path,method:"get"},r.createElement("label",{htmlFor:"search-bar"},r.createElement("span",{className:"hidden"},"Search through posts")),r.createElement("input",{value:e.searchQuery,onInput:function(t){return e.setSearchQuery(t.target.value)},type:"text",id:"search-bar",placeholder:"Search posts",name:"s",className:"searchField"}),r.createElement("button",{type:"submit",className:"fauxButton submitButton"},"Search")))},s=function(e){return r.createElement("div",{className:"searchNav"},r.createElement("div",{className:"navLinks"},r.createElement(n.Link,{to:"/"},"Home"),r.createElement(n.Link,{to:"/"+e.linkTo},e.linkToText)),r.createElement("div",null,r.createElement(c,{path:e.path,searchQuery:e.searchQuery,setSearchQuery:e.setSearchQuery})))}},223:function(e,t,a){"use strict";a.r(t);var r=a(7294),n=a(1039),c=a(826),s=a(381),l=a(3751),o=a(3359);t.default=function(e){var t=e.data.allDatoCmsArticle.edges,a=("undefined"!=typeof window?window.location:"").search,i=new URLSearchParams(a).get("s"),u=(0,r.useState)(i||""),m=u[0],h=u[1],d=o(t,m);return r.createElement(n.Z,null,r.createElement(l.Z,{title:"Blog",description:"personal blog"}),r.createElement("div",{className:"searchPage"},r.createElement(c.Z,{path:"blog",searchQuery:m,setSearchQuery:h,linkTo:"projects",linkToText:"Projects"}),r.createElement("div",{className:"cardSection"},d.map((function(e){return r.createElement(s.Z,{image:e.node.image,slug:e.node.slug,title:e.node.title,datePublished:e.node.datePublished})})))))}},3359:function(e){e.exports=function(e,t){return t?e.filter((function(e){return e.node.title.toLowerCase().includes(t.toLowerCase())})):e}}}]);
//# sourceMappingURL=component---src-pages-blog-js-55a7d1df112840de0a0f.js.map