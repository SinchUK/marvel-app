"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[748],{421:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(387),i=t(415),a=t(184),c=function(){return(0,a.jsxs)("div",{className:"app__banner",children:[(0,a.jsx)("img",{src:r,alt:"Avengers"}),(0,a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,a.jsx)("br",{}),"Stay tuned!"]}),(0,a.jsx)("img",{src:i,alt:"Avengers logo"})]})}},519:function(e,n,t){var r=t(392),i=t(184);n.Z=function(){return(0,i.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"error img"})}},748:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(421),i=t(982),a=t(885),c=t(304),o=t(504),u=t(791),s=t(394),l=t(519),d=t(295),p=t(660),f=t(184),m=function(){var e=(0,u.useState)([]),n=(0,a.Z)(e,2),t=n[0],r=n[1],m=(0,u.useState)(1e3),h=(0,a.Z)(m,2),v=h[0],x=h[1],b=(0,u.useState)(!1),g=(0,a.Z)(b,2),y=g[0],j=g[1],Z=(0,u.useState)(!1),E=(0,a.Z)(Z,2),k=E[0],w=E[1],_=(0,c.Z)(),C=_.loading,N=_.error,S=_.getAllComics;(0,u.useEffect)((function(){A(v,!0)}),[]);var A=function(e,n){j(!n),S(e).then(O)},O=function(e){var n=!1;e.length<8&&(n=!0),j((function(e){return!1})),r([].concat((0,i.Z)(t),(0,i.Z)(e))),x((function(e){return e+8})),w((function(e){return n}))};var V=function(e){var n=e.map((function(e,n){var t=e.title,r=e.thumbnail,i=e.price,a=e.id;return(0,f.jsx)(d.Z,{in:!0,timeout:300,classNames:"comics__item",children:(0,f.jsx)("li",{className:"comics__item",children:(0,f.jsxs)(o.rU,{to:"/comics/".concat(a),children:[(0,f.jsx)("img",{src:r,alt:"ultimate war",className:"comics__item-img"}),(0,f.jsx)("div",{className:"comics__item-name",children:t}),(0,f.jsx)("div",{className:"comics__item-price",children:i})]})},n)},a)}));return(0,f.jsx)("ul",{className:"comics__grid",children:n})}(t),F=C&&!y?(0,f.jsx)(s.Z,{}):null,T=N?(0,f.jsx)(l.Z,{}):null;return(0,f.jsxs)("div",{className:"comics__list",children:[(0,f.jsxs)("div",{className:"comimcs__loading",children:[T,F]}),(0,f.jsx)(p.Z,{component:null,children:V}),(0,f.jsx)("button",{className:"button button__main button__long",style:{display:k?"none":"block"},onClick:function(){return A(v)},disabled:y,children:(0,f.jsx)("div",{className:"inner",children:"load more"})})]})},h=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r.Z,{}),(0,f.jsx)(m,{})]})}},304:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(861),i=t(687),a=t.n(i),c=t(885),o=t(791),u=function(){var e=function(){var e=(0,o.useState)(!1),n=(0,c.Z)(e,2),t=n[0],i=n[1],u=(0,o.useState)(null),s=(0,c.Z)(u,2),l=s[0],d=s[1],p=(0,o.useCallback)(function(){var e=(0,r.Z)(a().mark((function e(n){var t,r,c,o,u,s=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:"GET",r=s.length>2&&void 0!==s[2]?s[2]:null,c=s.length>3&&void 0!==s[3]?s[3]:{"Content-type":"application/json"},i(!0),e.prev=4,e.next=7,fetch(n,{method:t,body:r,headers:c});case 7:if((o=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(n,", status: ").concat(o.status));case 10:return e.next=12,o.json();case 12:return u=e.sent,i(!1),e.abrupt("return",u);case 17:throw e.prev=17,e.t0=e.catch(4),i(!1),d(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(n){return e.apply(this,arguments)}}(),[]);return{loading:t,request:p,error:l,clearError:(0,o.useCallback)((function(){return d(null)}),[])}}(),n=e.loading,t=e.request,i=e.error,u=e.clearError,s="https://gateway.marvel.com:443/v1/public/",l="ecbc50ab1d1d150b779bd5f2481d19e0",d=function(){var e=(0,r.Z)(a().mark((function e(){var n,r,i=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:0,e.next=3,t("".concat(s,"comics?limit=8&offset=").concat(n,"&apikey=").concat(l));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(h));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(s,"comics/").concat(n,"?apikey=").concat(l));case 2:return r=e.sent,e.abrupt("return",h(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(){var n,r,i=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:210,e.next=3,t("".concat(s,"characters?limit=9&offset=").concat(n,"&apikey=").concat(l));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(v));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(s,"characters/").concat(n,"?apikey=").concat(l));case 2:return r=e.sent,e.abrupt("return",v(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(e){var n;return{id:e.id,title:e.title,price:0===e.prices[0].price?"Not available":e.prices[0].price+"$",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,url:e.urls[0].url,pageCount:e.pageCount||"No information about the number of pages",language:null!==(n=e.textObjects)&&void 0!==n&&n.length?e.textObjects[0].language:"en-us",description:e.description||"There is no description"}},v=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character...",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}};return{loading:n,error:i,getAllCharacters:f,getCharacter:m,clearError:u,getAllComics:d,getComic:p}}},660:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(366),i=t(462),a=t(326),c=t(578),o=t(791),u=t(545);function s(e,n){var t=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,o.isValidElement)(e)?n(e):e}(e)})),t}function l(e,n,t){return null!=t[n]?t[n]:e.props[n]}function d(e,n,t){var r=s(e.children),i=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var r,i=Object.create(null),a=[];for(var c in e)c in n?a.length&&(i[c]=a,a=[]):a.push(c);var o={};for(var u in n){if(i[u])for(r=0;r<i[u].length;r++){var s=i[u][r];o[i[u][r]]=t(s)}o[u]=t(u)}for(r=0;r<a.length;r++)o[a[r]]=t(a[r]);return o}(n,r);return Object.keys(i).forEach((function(a){var c=i[a];if((0,o.isValidElement)(c)){var u=a in n,s=a in r,d=n[a],p=(0,o.isValidElement)(d)&&!d.props.in;!s||u&&!p?s||!u||p?s&&u&&(0,o.isValidElement)(d)&&(i[a]=(0,o.cloneElement)(c,{onExited:t.bind(null,c),in:d.props.in,exit:l(c,"exit",e),enter:l(c,"enter",e)})):i[a]=(0,o.cloneElement)(c,{in:!1}):i[a]=(0,o.cloneElement)(c,{onExited:t.bind(null,c),in:!0,exit:l(c,"exit",e),enter:l(c,"enter",e)})}})),i}var p=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},f=function(e){function n(n,t){var r,i=(r=e.call(this,n,t)||this).handleExited.bind((0,a.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,c.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,r,i=n.children,a=n.handleExited;return{children:n.firstRender?(t=e,r=a,s(t.children,(function(e){return(0,o.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:l(e,"appear",t),enter:l(e,"enter",t),exit:l(e,"exit",t)})}))):d(e,i,a),firstRender:!1}},t.handleExited=function(e,n){var t=s(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,i.Z)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,i=(0,r.Z)(e,["component","childFactory"]),a=this.state.contextValue,c=p(this.state.children).map(t);return delete i.appear,delete i.enter,delete i.exit,null===n?o.createElement(u.Z.Provider,{value:a},c):o.createElement(u.Z.Provider,{value:a},o.createElement(n,i,c))},n}(o.Component);f.propTypes={},f.defaultProps={component:"div",childFactory:function(e){return e}};var m=f},392:function(e,n,t){e.exports=t.p+"static/media/error.42292aa12b6bc303ce99.gif"},387:function(e,n,t){e.exports=t.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png"},415:function(e,n,t){e.exports=t.p+"static/media/Avengers_logo.9eaf219344d83362e830.png"},326:function(e,n,t){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},982:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(907);var i=t(181);function a(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=748.bbbcf10f.chunk.js.map