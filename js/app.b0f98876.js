(function(e){function t(t){for(var n,a,c=t[0],s=t[1],l=t[2],u=0,f=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,c=1;c<o.length;c++){var s=o[c];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},i=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vuetify-todo-pwa/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=s;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"465c":function(e,t,o){"use strict";o("f38a")},"4d99":function(e){e.exports=JSON.parse('{"name":"vuetify-todo-pwa","short_name":"vuetify-todo","icons":[{"src":"./img/icons/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"./img/icons/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}],"start_url":".","display":"standalone","background_color":"#000000","theme_color":"#4DBA87"}')},5662:function(e,t,o){"use strict";o("df80")},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",{attrs:{id:"app"}},[o("v-content",[o("v-container",{attrs:{id:"container"}},[o("router-view")],1)],1)],1)},i=[],a=(o("b54a"),o("2877")),c={},s=Object(a["a"])(c,r,i,!1,null,null,null),l=s.exports,d=o("8c4f"),u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{"text-xs-center":""}},[o("h1",{staticClass:"primary--text display-3 font-weight-medium my-3"},[e._v("TODOS")]),o("v-card",[o("v-list",{staticClass:"pa-0"},[o("v-list-tile",[o("v-list-tile-action",[e.todos.length>0?o("v-checkbox",{attrs:{"input-value":e.allChecked,color:"primary"},on:{change:function(t){return e.toggleAll(!e.allChecked)}}}):o("v-icon",{attrs:{color:"primary"}},[e._v("check")])],1),o("v-text-field",{attrs:{label:"New todo input",autofocus:"","browser-autocomplete":"off",clearable:"",color:"primary",flat:"","hide-details":"",maxlength:"1023",placeholder:"What needs to be done?",solo:""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo.apply(null,arguments)}},model:{value:e.newTodo,callback:function(t){e.newTodo=t},expression:"newTodo"}})],1)],1)],1),o("v-card",{directives:[{name:"show",rawName:"v-show",value:e.todos.length,expression:"todos.length"}],staticClass:"mt-3"},[o("v-progress-linear",{staticClass:"my-0",model:{value:e.progressPercentage,callback:function(t){e.progressPercentage=t},expression:"progressPercentage"}}),o("v-card-actions",{directives:[{name:"show",rawName:"v-show",value:e.todos.length,expression:"todos.length"}],staticClass:"px-3"},[o("span",{staticClass:"primary--text"},[e._v("\n          "+e._s(e.remaining)+" "+e._s(e._f("pluralize")(e.remaining,"item"))+" left\n        ")]),o("v-spacer"),o("v-btn-toggle",{directives:[{name:"show",rawName:"v-show",value:e.todos.length,expression:"todos.length"}],staticClass:"elevation-0",attrs:{mandatory:""},model:{value:e.visibility,callback:function(t){e.visibility=t},expression:"visibility"}},e._l(e.filters,(function(t,n){return o("v-btn",{key:n,staticClass:"mx-0",attrs:{to:n,value:n,color:"primary",flat:"",small:""}},[e._v("\n            "+e._s(e._f("capitalize")(n))+"\n          ")])})),1)],1),o("v-list",{staticClass:"pa-0"},[e._l(e.filteredTodos,(function(e){return[o("v-divider",{key:e.uid+"-divider"}),o("TodoItem",{key:e.uid,attrs:{todo:e}})]}))],2)],1),o("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.todos.length>e.remaining,expression:"todos.length > remaining"}],staticClass:"mt-3",attrs:{block:"",color:"primary",depressed:"",round:""},on:{click:e.clearCompleted}},[e._v("\n      Clear completed\n    ")]),o("footer-info")],1)],1)},f=[],p=(o("8e6e"),o("ac6a"),o("456d"),o("ade3")),v=o("2f62"),m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-list-tile",{staticClass:"todo-item",class:{editing:e.editing}},[o("v-list-tile-action",[e.editing?o("v-icon",{attrs:{color:"primary"}},[e._v("edit")]):o("v-checkbox",{attrs:{"input-value":e.todo.done,color:"primary"},on:{change:function(t){return e.toggleTodo(e.todo)}}})],1),e.editing?o("v-text-field",{directives:[{name:"focus",rawName:"v-focus",value:e.editing,expression:"editing"}],ref:"input",attrs:{value:e.todo.text,clearable:"",color:"primary",flat:"","hide-details":"",maxlength:"1023",solo:""},on:{blur:e.doneEdit,keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doneEdit.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.cancelEdit.apply(null,arguments)}]}}):[o("v-list-tile-content",{class:{"primary--text":e.todo.done},on:{dblclick:function(t){e.editing=!0}}},[e._v("\n      "+e._s(e.todo.text)+"\n    ")]),o("v-list-tile-action",[o("v-btn",{attrs:{color:"red lighten-3",flat:"",icon:""},on:{click:function(t){return e.removeTodo(e.todo)}}},[o("v-icon",[e._v("close")])],1)],1)]],2)},g=[];function h(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function b(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?h(Object(o),!0).forEach((function(t){Object(p["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var y={props:["todo"],data:function(){return{editing:!1}},directives:{focus:function(e,t,o){var n=t.value,r=o.context;n&&r.$nextTick((function(){r.$refs.input.focus()}))}},methods:b(b({},Object(v["b"])(["editTodo","removeTodo","toggleTodo"])),{},{doneEdit:function(e){var t=e.target.value.trim(),o=this.todo;t?this.editing&&(this.editTodo({todo:o,value:t}),this.editing=!1):this.removeTodo(o)},cancelEdit:function(){this.editing=!1}})},w=y,O=(o("465c"),Object(a["a"])(w,m,g,!1,null,null,null)),x=O.exports,_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("footer",{staticClass:"caption"},[o("p",[e._v("Double-click to edit a todo")]),o("p",[e._v("Inspired by "),o("a",{attrs:{href:"http://todomvc.com",target:"_blank",rel:"noopener"}},[e._v("TodoMVC")])]),o("p",[o("a",{attrs:{href:"https://github.com/davidgaroro/vuetify-todo-pwa",target:"_blank",rel:"noopener"}},[e._v("View on GitHub")])])])}],j=(o("5662"),{}),T=Object(a["a"])(j,_,k,!1,null,null,null),P=T.exports;function C(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function E(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?C(Object(o),!0).forEach((function(t){Object(p["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):C(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var S={all:function(e){return e},active:function(e){return e.filter((function(e){return!e.done}))},completed:function(e){return e.filter((function(e){return e.done}))}},D={props:["filter"],components:{TodoItem:x,FooterInfo:P},data:function(){return{newTodo:"",filters:S,visibility:this.filter}},computed:{todos:function(){return this.$store.state.todos},allChecked:function(){return this.todos.every((function(e){return e.done}))},filteredTodos:function(){return S[this.visibility](this.todos)},remaining:function(){return this.todos.filter((function(e){return!e.done})).length},progressPercentage:function(){var e=this.todos.length;return 100*(e-this.remaining)/e}},methods:E(E({},Object(v["b"])(["toggleAll","clearCompleted"])),{},{addTodo:function(){var e=this.newTodo.trim();e&&this.$store.dispatch("addTodo",e),this.newTodo=""}}),filters:{pluralize:function(e,t){return 1===e?t:t+"s"},capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}},V=D,N=(o("c219"),Object(a["a"])(V,u,f,!1,null,null,null)),$=N.exports;n["default"].use(d["a"]);var A=new d["a"]({scrollBehavior:function(){return{y:0}},routes:[{path:"/:filter",name:"home",component:$,props:!0}]});A.beforeEach((function(e,t,o){["all","active","completed"].some((function(t){return t===e.params.filter}))?o():o("/all")}));var I=A;n["default"].use(v["a"]);var z="vuetify-todos",B={todos:JSON.parse(window.localStorage.getItem(z)||"[]")},J={addTodo:function(e,t){e.todos.push(t)},removeTodo:function(e,t){e.todos.splice(e.todos.indexOf(t),1)},editTodo:function(e,t){var o=t.todo,n=t.text,r=void 0===n?o.text:n,i=t.done,a=void 0===i?o.done:i;o.text=r,o.done=a}},M={addTodo:function(e,t){var o=e.commit;o("addTodo",{uid:Date.now(),text:t,done:!1})},removeTodo:function(e,t){var o=e.commit;o("removeTodo",t)},toggleTodo:function(e,t){var o=e.commit;o("editTodo",{todo:t,done:!t.done})},editTodo:function(e,t){var o=e.commit,n=t.todo,r=t.value;o("editTodo",{todo:n,text:r})},toggleAll:function(e,t){var o=e.state,n=e.commit;o.todos.forEach((function(e){n("editTodo",{todo:e,done:t})}))},clearCompleted:function(e){var t=e.state,o=e.commit;t.todos.filter((function(e){return e.done})).forEach((function(e){o("removeTodo",e)}))}},F=[function(e){e.subscribe((function(e,t){var o=t.todos;window.localStorage.setItem(z,JSON.stringify(o))}))}],G=new v["a"].Store({state:B,mutations:J,actions:M,plugins:F}),L=o("9483");Object(L["a"])("".concat("/vuetify-todo-pwa/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("da64");var q=o("4d99"),H=o("d437"),U=o.n(H),W=o("d421"),K=o.n(W),Q=o("5d92"),R=o.n(Q),X=o("eed0"),Y=o.n(X),Z=o("c713"),ee=o.n(Z),te=o("10a1"),oe=o.n(te),ne=o("68d6"),re=o.n(ne),ie=o("d553"),ae=o.n(ie),ce=o("6a6f"),se=o.n(ce),le=o("e1f0"),de=o.n(le),ue=o("5933"),fe=o.n(ue),pe=o("db3b"),ve=o.n(pe);n["default"].use(U.a,{components:{VApp:K.a,VBtn:R.a,VBtnToggle:Y.a,VCard:ee.a,VCheckbox:oe.a,VDivider:re.a,VGrid:ae.a,VIcon:se.a,VList:de.a,VProgressLinear:fe.a,VTextField:ve.a},theme:{primary:q.theme_color}}),n["default"].config.productionTip=!1,new n["default"]({router:I,store:G,render:function(e){return e(l)}}).$mount("#app")},8811:function(e,t,o){},b54a:function(e,t,o){"use strict";o("8811")},c219:function(e,t,o){"use strict";o("e9bb")},df80:function(e,t,o){},e9bb:function(e,t,o){},f38a:function(e,t,o){}});
//# sourceMappingURL=app.b0f98876.js.map