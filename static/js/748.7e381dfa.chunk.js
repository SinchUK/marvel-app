"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[748],{421:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(387),a=n(415),c=n(184),i=function(){return(0,c.jsxs)("div",{className:"app__banner",children:[(0,c.jsx)("img",{src:r,alt:"Avengers"}),(0,c.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,c.jsx)("br",{}),"Stay tuned!"]}),(0,c.jsx)("img",{src:a,alt:"Avengers logo"})]})}},519:function(t,e,n){var r=n(392),a=n(184);e.Z=function(){return(0,a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"error img"})}},748:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(421),a=n(531),c=n(430),i=n(304),s=n(504),o=n(791),u=n(394),l=n(519),p=n(184),d=function(){var t=(0,o.useState)([]),e=(0,c.Z)(t,2),n=e[0],r=e[1],d=(0,o.useState)(1e3),f=(0,c.Z)(d,2),m=f[0],h=f[1],v=(0,o.useState)(!1),b=(0,c.Z)(v,2),g=b[0],x=b[1],j=(0,o.useState)(!1),y=(0,c.Z)(j,2),w=y[0],Z=y[1],_=(0,i.Z)(),k=_.loading,C=_.error,N=_.getAllComics;(0,o.useEffect)((function(){A(m,!0)}),[]);var A=function(t,e){x(!e),N(t).then(S)},S=function(t){var e=!1;t.length<8&&(e=!0),x((function(t){return!1})),r([].concat((0,a.Z)(n),(0,a.Z)(t))),h((function(t){return t+8})),Z((function(t){return e}))};var E=function(t){var e=t.map((function(t,e){var n=t.title,r=t.thumbnail,a=t.price,c=t.id;return(0,p.jsx)("li",{className:"comics__item",children:(0,p.jsxs)(s.rU,{to:"/comics/".concat(c),children:[(0,p.jsx)("img",{src:r,alt:"ultimate war",className:"comics__item-img"}),(0,p.jsx)("div",{className:"comics__item-name",children:n}),(0,p.jsx)("div",{className:"comics__item-price",children:a})]})},e)}));return(0,p.jsx)("ul",{className:"comics__grid",children:e})}(n),T=k&&!g?(0,p.jsx)(u.Z,{}):null,q=C?(0,p.jsx)(l.Z,{}):null;return(0,p.jsxs)("div",{className:"comics__list",children:[(0,p.jsxs)("div",{className:"comimcs__loading",children:[q,T]}),E,(0,p.jsx)("button",{className:"button button__main button__long",style:{display:w?"none":"block"},onClick:function(){return A(m)},disabled:g,children:(0,p.jsx)("div",{className:"inner",children:"load more"})})]})},f=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.Z,{}),(0,p.jsx)(d,{})]})}},304:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(32),a=n(322),c=n.n(a),i=n(430),s=n(791),o=function(){var t=function(){var t=(0,s.useState)(!1),e=(0,i.Z)(t,2),n=e[0],a=e[1],o=(0,s.useState)(null),u=(0,i.Z)(o,2),l=u[0],p=u[1],d=(0,s.useCallback)(function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,i,s,o,u=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",r=u.length>2&&void 0!==u[2]?u[2]:null,i=u.length>3&&void 0!==u[3]?u[3]:{"Content-type":"application/json"},a(!0),t.prev=4,t.next=7,fetch(e,{method:n,body:r,headers:i});case 7:if((s=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(s.status));case 10:return t.next=12,s.json();case 12:return o=t.sent,a(!1),t.abrupt("return",o);case 17:throw t.prev=17,t.t0=t.catch(4),a(!1),p(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{loading:n,request:d,error:l,clearError:(0,s.useCallback)((function(){return p(null)}),[])}}(),e=t.loading,n=t.request,a=t.error,o=t.clearError,u="https://gateway.marvel.com:443/v1/public/",l="ecbc50ab1d1d150b779bd5f2481d19e0",p=function(){var t=(0,r.Z)(c().mark((function t(){var e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:0,t.next=3,n("".concat(u,"comics?limit=8&offset=").concat(e,"&apikey=").concat(l));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(h));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"comics/").concat(e,"?apikey=").concat(l));case 2:return r=t.sent,t.abrupt("return",h(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(){var e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:210,t.next=3,n("".concat(u,"characters?limit=9&offset=").concat(e,"&apikey=").concat(l));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(v));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"characters/").concat(e,"?apikey=").concat(l));case 2:return r=t.sent,t.abrupt("return",v(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){var e;return{id:t.id,title:t.title,price:0===t.prices[0].price?"Not available":t.prices[0].price+"$",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,url:t.urls[0].url,pageCount:t.pageCount||"No information about the number of pages",language:null!==(e=t.textObjects)&&void 0!==e&&e.length?t.textObjects[0].language:"en-us",description:t.description||"There is no description"}},v=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character...",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}};return{loading:e,error:a,getAllCharacters:f,getCharacter:m,clearError:o,getAllComics:p,getComic:d}}},392:function(t,e,n){t.exports=n.p+"static/media/error.42292aa12b6bc303ce99.gif"},387:function(t,e,n){t.exports=n.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png"},415:function(t,e,n){t.exports=n.p+"static/media/Avengers_logo.9eaf219344d83362e830.png"},531:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(400);var a=n(327);function c(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,a.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=748.7e381dfa.chunk.js.map