(window["webpackJsonpkeyboard-train"]=window["webpackJsonpkeyboard-train"]||[]).push([[0],{10:function(e,t,r){},11:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),c=r(3),a=r.n(c),i=(r(10),r(4)),l=r(1);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f="asdfghjklzxcvbnmqwertyuiop1234567890!@#$%^&*()_+-=";var p=function(){var e=Object(n.useState)(f[Math.floor(Math.random()*f.length)]),t=Object(l.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)({correct:0,incorrect:0}),i=Object(l.a)(a,2),u=i[0],p=i[1],b=Object(n.useState)(0),d=Object(l.a)(b,2),m=d[0],v=d[1];Object(n.useEffect)((function(){var e=function(e){console.log(e.key,r),e.key===r?(c(f[Math.floor(Math.random()*f.length)]),p(s({},u,{correct:u.correct+1}))):p(s({},u,{incorrect:u.incorrect+1}))};return document.addEventListener("keypress",e),function(){document.removeEventListener("keypress",e)}})),function(e,t){var r=Object(n.useRef)();Object(n.useEffect)((function(){r.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){r.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){v(m+1)}),1e3);var O=Math.floor(u.correct/(u.correct+u.incorrect)*100);return o.a.createElement("div",{className:"App"},o.a.createElement("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"200px"}},r),o.a.createElement("div",{style:{position:"fixed",bottom:0,left:0,padding:"20px"}},o.a.createElement("ul",null,o.a.createElement("li",null,"\u0412\u0440\u0435\u043c\u044f: ",m," \u0441\u0435\u043a\u0443\u043d\u0434 \u043f\u0440\u043e\u0448\u043b\u043e"),o.a.createElement("li",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e: ",u.correct),o.a.createElement("li",null,"\u041d\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e: ",u.incorrect),o.a.createElement("li",null,"\u0412\u0441\u0435\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u043e\u0432: ",u.correct+u.incorrect," - (",O," %)"))),o.a.createElement("div",{style:{position:"fixed",right:0,bottom:0,width:"20px",backgroundColor:"orange",marginRight:"20px",height:"".concat(O,"%")}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,r){e.exports=r(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.a21726c7.chunk.js.map