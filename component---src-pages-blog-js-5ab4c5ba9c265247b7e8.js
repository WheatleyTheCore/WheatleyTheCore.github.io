(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[7],{826:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var r=a(7294),n=a(5444),c=function(e){return r.createElement("div",{className:"searchBar"},r.createElement("form",{className:"searchForm",action:"/"+e.path,method:"get"},r.createElement("label",{htmlFor:"search-bar"},r.createElement("span",{className:"hidden"},"Search through posts")),r.createElement("input",{value:e.searchQuery,onInput:function(t){return e.setSearchQuery(t.target.value)},type:"text",id:"search-bar",placeholder:"Search posts",name:"s",className:"searchField"}),r.createElement("button",{type:"submit",className:"fauxButton submitButton"},"Search")))},l=function(e){return r.createElement("div",{className:"searchNav"},r.createElement("div",{className:"searchNavLinks"},r.createElement(n.Link,{to:"/"},"Home"),r.createElement(n.Link,{to:"/"+e.linkTo},e.linkToText)),r.createElement("div",null,r.createElement(c,{path:e.path,searchQuery:e.searchQuery,setSearchQuery:e.setSearchQuery})))}},223:function(e,t,a){"use strict";a.r(t);var r=a(7294),n=a(1039),c=a(826),l=a(381),s=a(3359);t.default=function(e){var t=e.data.allDatoCmsArticle.edges,a=("undefined"!=typeof window?window.location:"").search,o=new URLSearchParams(a).get("s"),u=(0,r.useState)(o||""),i=u[0],m=u[1],h=s(t,i);return r.createElement(n.Z,null,r.createElement("div",null,"Blog"),r.createElement(c.Z,{path:"blog",searchQuery:i,setSearchQuery:m,linkTo:"projects",linkToText:"Projects"}),r.createElement("div",{className:"cardSection"},h.map((function(e){return r.createElement(l.Z,{image:e.node.image,slug:e.node.slug,title:e.node.title,datePublished:e.node.datePublished})}))))}},3359:function(e){e.exports=function(e,t){return t?e.filter((function(e){return e.node.title.toLowerCase().includes(t.toLowerCase())})):e}}}]);
//# sourceMappingURL=component---src-pages-blog-js-5ab4c5ba9c265247b7e8.js.map