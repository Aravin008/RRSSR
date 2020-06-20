!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=7)}([function(t,e){t.exports=require("react")},function(t,e){t.exports=require("react-router-dom")},function(t,e){t.exports=require("express")},function(t,e){t.exports=require("cors")},function(t,e){t.exports=require("react-dom/server")},function(t,e){t.exports=require("isomorphic-fetch")},function(t,e){t.exports=require("serialize-javascript")},function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),a=n(3),c=n.n(a),i=n(4),u=n(0),l=n.n(u);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=b(t);if(e){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?h(t):e}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(a,t);var e,n,r,o=y(a);function a(t){var e,n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),e=o.call(this,t),n=t.staticContext.data,e.state={repos:n,loading:!n},e.fetchRepos=e.fetchRepos.bind(h(e)),e}return e=a,(n=[{key:"fetchRepos",value:function(t){var e=this;this.setState({loading:!0}),this.props.fetchInitialData(t).then((function(t){e.setState({repos:t,loading:!1})}))}},{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.match;e.fetchInitialData,t.match.params.id!=n.params.id&&this.fetchRepos(n.params.id)}},{key:"componentDidMount",value:function(){this.state.repos||this.fetchRepos(this.props.match.params.id)}},{key:"render",value:function(){var t=this.state,e=t.repos;return t.loading?l.a.createElement("h1",null,"Loading..."):l.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap"}},e.map((function(t){var e=t.name,n=t.owner,r=t.stargazers_count,o=t.html_url;return l.a.createElement("li",{key:e,style:{margin:30}},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:o},e)),l.a.createElement("li",null,"@",n.login),l.a.createElement("li",null,r," stars")))})))}}])&&p(e.prototype,n),r&&p(e,r),a}(u.Component),v=function(){return l.a.createElement("div",null,"Select your language:")},g=n(5),O=n.n(g);function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(t,"&sort=stars&order=desc&type=Repositories"));return O()(e).then((function(t){return t.json()})).then((function(t){return t.items})).catch((function(t){return console.warn(t),null}))}var S=[{path:"/",exact:!0,component:v},{path:"/popular/:id",component:d,fetchInitialData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return j(t.split("/").pop())}}],E=n(1),_=function(){return l.a.createElement("div",null,"Four Oh Four")};function w(){return l.a.createElement("ul",null,[{name:"All",param:"all"},{name:"JavaScript",param:"javascript"},{name:"Ruby",param:"ruby"},{name:"Python",param:"python"},{name:"Java",param:"java"}].map((function(t){var e=t.name,n=t.param;return l.a.createElement("li",{key:n},l.a.createElement(E.NavLink,{activeStyle:{fontWeight:"bold"},to:"/popular/".concat(n)},e))})))}function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(){return(R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function P(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function D(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function I(t,e){return(I=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C(t);if(e){var o=C(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return q(this,n)}}function q(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&I(t,e)}(a,t);var e,n,r,o=T(a);function a(){return D(this,a),o.apply(this,arguments)}return e=a,(n=[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement(E.Switch,null,S.map((function(t){var e=t.path,n=t.exact,r=t.component,o=P(t,["path","exact","component"]);return l.a.createElement(E.Route,{key:e,path:e,exact:n,render:function(t){return l.a.createElement(r,R({},t,o))}})})),l.a.createElement(E.Route,{render:function(t){return l.a.createElement(_,t)}})))}}])&&k(e.prototype,n),r&&k(e,r),a}(u.Component),A=n(6),L=n.n(A),z=o()();z.use(c()()),z.use(o.a.static("public")),z.get("*",(function(t,e,n){var r=S.find((function(e){return Object(E.matchPath)(t.url,e)}))||{};(r.fetchInitialData?r.fetchInitialData(t.path):Promise.resolve()).then((function(n){var r={data:n},o=Object(i.renderToString)(l.a.createElement(E.StaticRouter,{location:t.url,context:r},l.a.createElement(M,{data:n})));e.send("\n    <!DOCTYPE html>\n    <html>\n    <head>\n    <title>SSR with RR</title>\n    <script src='/bundle.js' defer><\/script>\n    <script>window.__INITIAL_DATA__=".concat(L()(n),"<\/script>\n    </head>\n\n    <body>\n      <div id='app'>").concat(o,"</div>\n    </body>\n    </html>\n    "))})).catch(n)})),z.listen(3e3,(function(){console.log("Server is listening on the port: 3000")}))}]);