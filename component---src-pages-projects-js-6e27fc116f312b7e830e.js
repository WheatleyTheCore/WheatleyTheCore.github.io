(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[853],{826:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294),a=r(5444),c=function(e){return n.createElement("form",{action:"/"+e.path,method:"get"},n.createElement("label",{htmlFor:"search-bar"},n.createElement("span",{className:"hidden"},"Search through posts")),n.createElement("input",{value:e.searchQuery,onInput:function(t){return e.setSearchQuery(t.target.value)},type:"text",id:"search-bar",placeholder:"Search posts",name:"s"}),n.createElement("button",{type:"submit"},"Search"))},o=function(e){return n.createElement("div",{className:"SearchNav"},n.createElement("div",{className:"searchNavLinks"},n.createElement(a.Link,{to:"/"},"Home"),n.createElement(a.Link,{to:"/"+e.linkTo},e.linkToText)),n.createElement("div",null,n.createElement(c,{path:e.path,searchQuery:e.searchQuery,setSearchQuery:e.setSearchQuery})))}},7744:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(1039),c=r(826),o=r(381),l=r(3359);t.default=function(e){var t=e.data.allDatoCmsProject.edges,r=("undefined"!=typeof window?window.location:"").search,u=new URLSearchParams(r).get("s"),s=(0,n.useState)(u||""),i=s[0],h=s[1],m=l(t,i);return n.createElement(a.Z,null,n.createElement(c.Z,{path:"projects",searchQuery:i,setSearchQuery:h,linkTo:"blog",linkToText:"Blog"}),m.map((function(e){return n.createElement(o.Z,{image:e.node.thumbnail,slug:e.node.slug,title:e.node.title,datePublished:e.node.datePublished})})))}},3359:function(e){e.exports=function(e,t){return t?e.filter((function(e){return e.node.title.toLowerCase().includes(t.toLowerCase())})):e}}}]);
//# sourceMappingURL=component---src-pages-projects-js-6e27fc116f312b7e830e.js.map