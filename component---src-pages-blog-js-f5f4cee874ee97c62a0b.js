(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[7],{1039:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children;return n.createElement("div",null,t)}},6891:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){return n.createElement("form",{action:"/"+e.path,method:"get"},n.createElement("label",{htmlFor:"search-bar"},n.createElement("span",{className:"hidden"},"Search through posts")),n.createElement("input",{value:e.searchQuery,onInput:function(t){return e.setSearchQuery(t.target.value)},type:"text",id:"search-bar",placeholder:"Search posts",name:"s"}),n.createElement("button",{type:"submit"},"Search"))}},223:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(1039),c=r(6891),o=r(3359);t.default=function(e){var t=e.data,r=t.allDatoCmsArticle.edges,u=(window.location?window.location:"").search,l=new URLSearchParams(u).get("s"),i=(0,n.useState)(l||""),s=i[0],h=i[1],f=o(r,s);return n.createElement(a.Z,null,n.createElement(c.Z,{path:"blog",searchQuery:s,setSearchQuery:h}),f.map((function(e){return n.createElement("li",{key:e.node.title},e.node.title)})))}},3359:function(e){e.exports=function(e,t){return t?e.filter((function(e){return e.node.title.toLowerCase().includes(t.toLowerCase())})):e}}}]);
//# sourceMappingURL=component---src-pages-blog-js-f5f4cee874ee97c62a0b.js.map