(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{15:function(e,n,t){e.exports=t(29)},26:function(e,n,t){},27:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(3),c=t.n(a),i=t(2),s=t(6),l=t(14),u=(t(26),t(4)),d=t(5),h=t(8),f=t(7),b=function(e){var n=e.name,t=e.email,r=e.id;return o.a.createElement("div",{className:"tc bg-light-green dib br3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(r,"?50x50"),alt:"robots"}),o.a.createElement("div",null,o.a.createElement("h1",null,n),o.a.createElement("p",null,t)))},p=function(e){var n=e.robots,t=n.map((function(e,t){return o.a.createElement(b,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})}));return o.a.createElement("div",null,t)},E=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},g=function(e){var n=e.searchChange;e.searchField;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 bg-lightest-blue ba b--green",type:"search",placeholder:"Search Robots",onChange:n}))},v=function(e){Object(h.a)(t,e);var n=Object(f.a)(t);function t(){var e;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=n.call.apply(n,[this].concat(o))).state={hasError:!1},e.componentDidCatch=function(n,t){e.setState({hasError:!0})},e}return Object(d.a)(t,[{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Ooops. That is not good"):this.props.children}}]),t}(r.Component),m=function(){return o.a.createElement("h1",{className:"f1"},"RoboFriends")},O=(t(27),function(e){Object(h.a)(t,e);var n=Object(f.a)(t);function t(){var e;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=n.call.apply(n,[this].concat(o))).componentDidMount=function(){e.props.onRequestRobots()},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,n=e.robots,t=e.isPending,r=e.searchField,a=e.onSearchChange,c=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return t?o.a.createElement("h1",null,"Loading..."):o.a.createElement("div",{className:"tc"},o.a.createElement(m,null),o.a.createElement(g,{searchChange:a,searchField:r}),o.a.createElement(E,null,o.a.createElement(v,null,o.a.createElement(p,{robots:c}))))}}]),t}(r.Component)),w=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})}))}))}}}))(O),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(28);var R=t(1),j={searchField:""},_={isPending:!1,robots:[],error:""},C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,T=[l.a],k=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object(R.a)(Object(R.a)({},e),{},{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object(R.a)(Object(R.a)({},e),{},{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(R.a)(Object(R.a)({},e),{},{isPending:!1,robots:n.payload});case"REQUEST_ROBOTS_FAILED":return Object(R.a)(Object(R.a)({},e),{},{error:n.payload,isPending:!1});default:return e}}}),N=Object(i.e)(k,C(i.a.apply(void 0,T)));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s.a,{store:N},o.a.createElement(w,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends","/service-worker.js");S?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(n,e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.e33e550d.chunk.js.map