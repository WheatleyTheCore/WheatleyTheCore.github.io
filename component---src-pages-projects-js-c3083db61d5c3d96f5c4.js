(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[853],{1039:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children;return n.createElement("div",null,t)}},6891:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){return n.createElement("form",{action:"/"+e.path,method:"get"},n.createElement("label",{htmlFor:"search-bar"},n.createElement("span",{className:"hidden"},"Search through posts")),n.createElement("input",{value:e.searchQuery,onInput:function(t){return e.setSearchQuery(t.target.value)},type:"text",id:"search-bar",placeholder:"Search posts",name:"s"}),n.createElement("button",{type:"submit"},"Search"))}},7744:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(1039),c=r(6891),o=r(3359);t.default=function(e){var t=e.data.allDatoCmsProject.edges,r=window.location.search,u=new URLSearchParams(r).get("s"),l=(0,n.useState)(u||""),s=l[0],i=l[1],h=o(t,s);return n.createElement(a.Z,null,n.createElement(c.Z,{path:"projects",searchQuery:s,setSearchQuery:i}),h.map((function(e){return n.createElement("li",{key:e.node.title},e.node.title)})))}},3359:function(e){e.exports=function(e,t){return t?e.filter((function(e){return e.node.title.toLowerCase().includes(t.toLowerCase())})):e}}}]);
//# sourceMappingURL=component---src-pages-projects-js-c3083db61d5c3d96f5c4.js.map