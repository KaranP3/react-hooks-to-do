(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{65:function(e,t,a){e.exports=a(90)},70:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=(a(70),a(13)),i=function(e,t,a){var r=Object(n.useReducer)(a,t,function(){var a;try{a=JSON.parse(window.localStorage.getItem(e)||String(t))}catch(n){a=t}return a}),c=Object(o.a)(r,2),l=c[0],i=c[1];return Object(n.useEffect)(function(){window.localStorage.setItem(e,JSON.stringify(l))},[l]),[l,i]},u=a(46),m=a(60),s=a(57),d=a.n(s),E=function(e,t){switch(t.type){case"ADD":return[].concat(Object(m.a)(e),[{id:d()(),task:t.task,completed:!1}]);case"REMOVE":return e.filter(function(e){return e.id!==t.id});case"TOGGLE":return e.map(function(e){return e.id===t.id?Object(u.a)({},e,{completed:!e.completed}):e});case"EDIT":return e.map(function(e){return e.id===t.id?Object(u.a)({},e,{task:t.newTask}):e});default:return e}},f=[{id:1,task:"Get groceries",completed:!1},{id:2,task:"Walk dog",completed:!0}],b=Object(n.createContext)(),g=Object(n.createContext)();function p(e){var t=i("todos",f,E),a=Object(o.a)(t,2),n=a[0],c=a[1];return r.a.createElement(b.Provider,{value:n},r.a.createElement(g.Provider,{value:c},e.children))}var v=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(n.useState)(e),a=Object(o.a)(t,2),r=a[0],c=a[1];return[r,function(){c(!r)}]},h=function(e){var t=Object(n.useState)(e),a=Object(o.a)(t,2),r=a[0],c=a[1];return[r,function(e){c(e.target.value)},function(){c("")}]},O=a(130),k=function(e){var t=Object(n.useContext)(g),a=e.id,c=e.task,l=e.toggleEditForm,i=h(c),u=Object(o.a)(i,3),m=u[0],s=u[1],d=u[2];return r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({type:"EDIT",id:a,newTask:m}),d(),l()},style:{marginLeft:"1rem",width:"50%"}},r.a.createElement(O.a,{margin:"normal",value:m,onChange:s,fullWidth:!0,autoFocus:!0})))},w=a(125),y=a(132),j=a(131),x=a(126),C=a(127),N=a(58),D=a.n(N),S=a(59),I=a.n(S),F=Object(n.memo)(function(e){var t=e.task,a=e.completed,c=e.id,l=Object(n.useContext)(g),i=v(!1),u=Object(o.a)(i,2),m=u[0],s=u[1];return r.a.createElement(w.a,{style:{height:"64px"},key:c},m?r.a.createElement(k,{id:c,task:t,toggleEditForm:s}):r.a.createElement(n.Fragment,null,r.a.createElement(j.a,{tabIndex:-1,checked:a,onClick:function(){return l({type:"TOGGLE",id:c})}}),r.a.createElement(y.a,{style:{textDecoration:a?"line-through":"none"}},t),r.a.createElement(C.a,null,r.a.createElement(x.a,{"aria-label":"Delete",onClick:function(){return l({type:"REMOVE",id:c})}},r.a.createElement(D.a,null)),r.a.createElement(x.a,{"aria-label":"Edit",onClick:s},r.a.createElement(I.a,null)))))}),R=a(123),T=a(124),G=a(128),J=function(){var e=Object(n.useContext)(b);return e.length?r.a.createElement(R.a,{style:{backgroundColor:"white"},elevation:12,width:75},r.a.createElement(T.a,{style:{backgroundColor:"white"}},e.map(function(t,a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement(F,Object.assign({},t,{key:t.id})),a<e.length-1&&r.a.createElement(G.a,null))}))):null},W=function(){var e=h(""),t=Object(o.a)(e,3),a=t[0],c=t[1],l=t[2],i=Object(n.useContext)(g);return r.a.createElement("div",null,r.a.createElement("div",{className:"container mt-3",id:"searchContainer"},r.a.createElement("div",{className:"card m-4 z-depth-3 mx-auto animated slideInRight",style:{borderRadius:"30px"}},r.a.createElement("div",{className:"card-body pt-0 pb-0"},r.a.createElement("div",{className:"md-form mt-2"},r.a.createElement("div",{align:"center"},r.a.createElement("i",{className:"fab fa-react mb-1 mx-auto",style:{color:"lightblue",fontSize:"50px"}})),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i({type:"ADD",task:a}),l()}},r.a.createElement("div",{align:"center"},r.a.createElement("input",{type:"text",id:"form1",className:"form-control  w-75",onChange:c,value:a})),r.a.createElement("div",{align:"center",className:"mt-3"},r.a.createElement("button",{type:"submit",className:"btn btn-md text-white",style:{borderRadius:"12px",background:"rgba(51, 210, 162, 0.8)"}},"Add task"))))))))},A=a(129),L=function(){return r.a.createElement(R.a,{style:{padding:0,margin:0,height:"100vh"}},r.a.createElement(A.a,{container:!0,justify:"center"},r.a.createElement(A.a,{item:!0,xs:10,sm:8,md:6,lg:6},r.a.createElement(p,null,r.a.createElement(W,null),r.a.createElement(J,null)))))},z=(a(89),function(){return r.a.createElement("div",{className:"app"},r.a.createElement(L,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[65,1,2]]]);
//# sourceMappingURL=main.3b80a71f.chunk.js.map