(function(e){function t(t){for(var r,a,c=t[0],i=t[1],u=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-02ac6958":"98c2f303","chunk-3799e82a":"44e9c64d","chunk-6d54ed0d":"22620ce8","chunk-7629f83a":"33c20b2a"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-02ac6958":1,"chunk-3799e82a":1,"chunk-6d54ed0d":1,"chunk-7629f83a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-02ac6958":"55a5e7e4","chunk-3799e82a":"f97e5127","chunk-6d54ed0d":"4f03c4c1","chunk-7629f83a":"854b1016"}[e]+".css",o=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],d.parentNode.removeChild(d),n(s)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/zmax101-VueJS-tasks-SPA/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navbar"),n("div",{staticClass:"conteiner"},[n("router-view")],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"indigo darken-4"},[n("div",{staticClass:"container"},[n("div",{staticClass:"nav-wrapper"},[n("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[n("i",{staticClass:"material-icons"},[e._v("edit_location")]),n("a",{staticClass:"logo-text"},[e._v("#My-App")])]),n("ul",{staticClass:"right"},[n("li",[n("router-link",{attrs:{to:"./create"}},[n("i",{staticClass:"material-icons pulse"},[e._v("control_point")])])],1),n("li",[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"material-icons"},[e._v("view_module")])])],1),n("li",[n("router-link",{attrs:{to:"./info"}},[n("i",{staticClass:"material-icons"},[e._v("info")])])],1)])],1)])])},c=[],i={},u=i,l=(n("c280"),n("2877")),f=Object(l["a"])(u,s,c,!1,null,"9770c27a",null),d=f.exports,p={components:{navbar:d}},h=p,m=(n("9460"),Object(l["a"])(h,a,o,!1,null,"4cc5ea5d",null)),k=m.exports,v=n("9483");Object(v["a"])("".concat("/zmax101-VueJS-tasks-SPA/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var g=n("8c4f");r["a"].use(g["a"]);var b=new g["a"]({mode:"history",base:"/zmax101-VueJS-tasks-SPA/",routes:[{path:"/",name:"home",component:function(){return n.e("chunk-7629f83a").then(n.bind(null,"bb51"))}},{path:"/create",name:"create",component:function(){return n.e("chunk-02ac6958").then(n.bind(null,"5baf"))}},{path:"/task/:id",name:"task",component:function(){return n.e("chunk-6d54ed0d").then(n.bind(null,"4a2e"))}},{path:"/info",name:"info",component:function(){return n.e("chunk-3799e82a").then(n.bind(null,"13ac"))}}]}),y=b,w=(n("99af"),n("7db0"),n("c740"),n("d81d"),n("a434"),n("5530")),S=n("2f62");r["a"].use(S["a"]);var O=new S["a"].Store({state:{tasks:JSON.parse(localStorage.getItem("tasks")||"[]").map((function(e){return new Date(e.date)<new Date&&(e.status="outdated"),e}))},mutations:{createTask:function(e,t){e.tasks.push(t),localStorage.setItem("tasks",JSON.stringify(e.tasks))},completeTask:function(e,t){var n=e.tasks.findIndex((function(e){return e.id===t}));e.tasks[n].status="completed",localStorage.setItem("tasks",JSON.stringify(e.tasks))},updateTask:function(e,t){var n=t.id,r=t.desc,a=t.date,o=e.tasks.concat(),s=o.findIndex((function(e){return e.id===n})),c=o[s],i=new Date(a)>new Date?"active":"outdated";o[s]=Object(w["a"])(Object(w["a"])({},c),{},{date:a,desc:r,status:i}),e.tasks=o,localStorage.setItem("tasks",JSON.stringify(e.tasks))},removeTask:function(e,t){var n=e.tasks.findIndex((function(e){return e.id===t}));e.tasks.splice(n,1),localStorage.setItem("tasks",JSON.stringify(e.tasks))}},actions:{createTask:function(e,t){var n=e.commit;n("createTask",t)},completeTask:function(e,t){var n=e.commit;n("completeTask",t)},updateTask:function(e,t){var n=e.commit;n("updateTask",t)}},getters:{tasks:function(e){return e.tasks},taskById:function(e){return function(t){return e.tasks.find((function(e){return e.id===t}))}}},modules:{}});n("6885");r["a"].config.productionTip=!1,new r["a"]({router:y,store:O,render:function(e){return e(k)}}).$mount("#app")},9460:function(e,t,n){"use strict";var r=n("bfca"),a=n.n(r);a.a},bccc:function(e,t,n){},bfca:function(e,t,n){},c280:function(e,t,n){"use strict";var r=n("bccc"),a=n.n(r);a.a}});
//# sourceMappingURL=app.4802e4c2.js.map