"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[678],{2814:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(7294),l=n(5444),r=n(381),c=function(e){return a.createElement("div",{className:"sectionHeader"},a.createElement("h2",null,e.text))},o=function(e){var t=e.edges;return t.length>e.previewNum&&(t=e.edges.slice(0,e.previewNum)),a.createElement("div",{className:"segment",id:"articleSegment"},a.createElement(c,{text:"Some Blog Posts"}),a.createElement("div",{className:"cardSection"},t.map((function(e){return a.createElement(r.Z,{image:e.node.image,slug:e.node.slug,title:e.node.title,datePublished:e.node.datePublished})}))),a.createElement(l.Link,{to:"/blog",className:"previewButtonContainer"},a.createElement("div",{className:"fauxButton"},"More Posts")))},i=function(e){var t=e.edges;return t.length>e.previewNum&&(t=t.slice(0,e.previewNum)),a.createElement("div",{className:"segment",id:"projectSegment"},a.createElement(c,{text:"Some projects I've worked on"}),a.createElement("div",{className:"cardSection"},t.map((function(e){return a.createElement(r.Z,{image:e.node.thumbnail,slug:e.node.slug,title:e.node.title,datePublished:e.node.datePublished})}))),a.createElement(l.Link,{to:"/projects",className:"previewButtonContainer"},a.createElement("div",{className:"fauxButton"},"More Projects")))},m=function(){return a.createElement("div",{className:"segment",id:"greeter"},"Hi, I'm Alex")},s=function(){return a.createElement("div",{className:"segment",id:"about"},"Welcome to the about segment",a.createElement("div",{className:"fauxButton"},a.createElement("a",{href:"resume.pdf",download:!0},"You can download my resume here")))},u=n(1039),d=function(e){var t=(0,a.useState)(e.children[0].label),n=t[0],l=t[1],r=[];return a.createElement("div",{className:"tab-buttons"},a.Children.map(e.children,(function(e){r.push({label:e.props.label,to:e.props.to})})),a.createElement(v,{activeTab:n,buttons:r,changeTab:l}))},v=function(e){var t=e.changeTab,n=e.buttons,l=e.activeTab;return a.createElement("div",{className:"tab-buttons"},n.map((function(e){var n,r;return a.createElement("div",((r={className:"divtag"}).className="divtag "+(e.label===l?"active":""),r),a.createElement("a",((n={href:"#"+e.to,className:e.label===l?"active":""}).className="button",n.onClick=function(){return t(e.label)},n),e.label))})))},g=function(e){return a.createElement(a.Fragment,null,e.children)},E=function(){return a.createElement("div",{className:"nav"},a.createElement(d,null,a.createElement(g,{label:"Home",to:"greeter"}),a.createElement(g,{label:"Projects",to:"projectSegment"}),a.createElement(g,{label:"Blog",to:"articleSegment"}),a.createElement(g,{label:"About",to:"about"})))},b=function(e){var t=e.data,n="undefined"!=typeof window?window.innerWidth>768?Math.floor(window.innerWidth/285*2):4:6;return console.log(n),a.createElement(u.Z,null,a.createElement(E,null),a.createElement(m,null),a.createElement(i,{edges:t.allDatoCmsProject.edges,previewNum:n}),a.createElement(o,{edges:t.allDatoCmsArticle.edges,previewNum:n}),a.createElement(s,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a0b30dceb44fb807add6.js.map