(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,n){},28:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(22),s=n.n(r),o=n(4),i=n.n(o),u=n(6),l=n(3),d=(n(28),n(13),n(0)),j=function(e){var t=e.todo,n=e.filtered,a=e.removeItem,r=e.changeStatus,s=Object(c.useState)(t.name),o=Object(l.a)(s,2),i=o[0],u=o[1],j=Object(c.useState)(!1),b=Object(l.a)(j,2),p=b[0],f=b[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"todoElement",children:[Object(d.jsxs)("div",{className:"inElement",children:[Object(d.jsx)("input",{type:"checkbox",className:"buttonComplete",defaultChecked:!0===t.done,onClick:function(){r(t)}}),p?Object(d.jsx)("input",{value:i,onKeyDown:function(e){return function(e,c,a){var r=n.find((function(e){return e.uuid===a})),s=n.findIndex((function(e){return e.uuid===a}));13===e.keyCode&&(r.name=c,n[s]=r,f(!1)),27===e.keyCode&&(e.target.blur(),f(!1),u(t.name))}(e,i,t.uuid)},className:"sideInput",onChange:function(e){return u(e.target.value)}}):Object(d.jsx)("span",{onDoubleClick:function(){return f(!0)},children:i})]}),Object(d.jsxs)("div",{className:"inElement",children:[Object(d.jsx)("div",{children:new Date(Date.parse(t.createdAt)).toLocaleString()}),Object(d.jsx)("input",{type:"button",value:"\ud83d\uddd1",className:"buttonDelete",onClick:function(){a(t.uuid)}})]})]})},t.uuid)},b=n(50),p=function(e){return Object(d.jsx)("div",{className:"todoList",children:e.filtered.slice(e.indexOfFirstTodo,e.IndexOfLastTodo).map((function(t){return Object(d.jsx)("div",{children:Object(d.jsx)(j,{removeItem:e.removeItem,todo:t,filtered:e.filtered,changeStatus:e.changeStatus})},Object(b.a)())}))})},f=n(12),h=function(e){var t=e.setFiltered,n=(e.filtered,function(e){t("Up"===e?function(e){return Object(f.a)(e).sort((function(e,t){return e.date>t.date?1:-1}))}:function(e){return Object(f.a)(e).sort((function(e,t){return e.date<t.date?1:-1}))})});return Object(d.jsxs)("div",{className:"saideInterface",children:[Object(d.jsx)("h4",{children:"Sort by date:"}),Object(d.jsx)("button",{className:"arrows",type:"button",onClick:function(){n("Up")},children:"\u290a"}),Object(d.jsx)("button",{className:"arrows",type:"button",onClick:function(){n("Down")},children:"\u290b"})]})},O=function(){return Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("h1",{children:"ToDo:"})})},m=function(e){var t=e.setFilter,n=function(e){t(e)};return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{type:"button",className:"buttons",onClick:function(){return n("")},children:"All"}),Object(d.jsx)("button",{type:"button",className:"buttons",onClick:function(){return n("done")},children:"Done"}),Object(d.jsx)("button",{type:"button",className:"buttons",onClick:function(){return n("undone")},children:"Undone"})]})},x=function(e){return Object(d.jsx)("form",{onSubmit:function(t){return function(t,n){e.handleCreateTodos(t,n)}(t,e.text)},children:Object(d.jsx)("div",{className:"mainInput",children:Object(d.jsx)("input",{type:"text",required:!0,placeholder:"I want to...",value:e.text,onChange:function(t){return e.setText(t.target.value)},className:"input"})})})},v=function(e){for(var t=e.todosPerPage,n=e.totalTodos,c=e.paginate,a=[],r=1;r<=Math.ceil(n/t);r++)a.push(r);return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"mainSelect",children:n>0?Object(d.jsxs)("div",{className:"inSelect",children:[Object(d.jsx)("button",{onClick:function(){c(1)},className:"selectArrow",children:"\u276e"}),a.map((function(e){return Object(d.jsx)("div",{select:!0,children:Object(d.jsx)("button",{onClick:function(){return c(e)},href:"!#",className:"select",children:e})},e)})),Object(d.jsx)("button",{onClick:function(){c(Math.ceil(n/t))},className:"selectArrow",children:"\u276f"})]}):""})})},g=n(7),k=n.n(g),N=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,1)[0],n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)("undone"),j=Object(l.a)(o,2),b=j[0],f=j[1],g=Object(c.useState)([]),N=Object(l.a)(g,2),C=N[0],w=N[1],y=Object(c.useState)(1),S=Object(l.a)(y,2),I=S[0],T=S[1],D=Object(c.useState)(!1),F=Object(l.a)(D,2),E=F[0],L=F[1];Object(c.useEffect)((function(){A()}),[t,b,E]);var A=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://todo-api-learning.herokuapp.com/v1/tasks/3?".concat(b?"filterBy=".concat(b):"","&order=asc"),e.next=4,k.a.get(t);case 4:n=e.sent,w(n.data),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data.message),alert(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(u.a)(i.a.mark((function e(t,n,c){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,k.a.post("https://todo-api-learning.herokuapp.com/v1/task/3",{name:n,done:!1});case 4:L(!E),s(""),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data.message),alert(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n,c){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.patch("https://todo-api-learning.herokuapp.com/v1/task/3/".concat(t.uuid),{name:t.name,done:!t.done});case 3:A(),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.response.data.message),alert(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),U=5*I,B=U-5,J=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.delete("https://todo-api-learning.herokuapp.com/v1/task/3/".concat(t));case 3:1===C.slice(B,U).length&&T(I-1),L(!E),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message),alert(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(O,{}),Object(d.jsx)("div",{className:"mainInput",children:Object(d.jsx)(x,{text:r,setText:s,handleCreateTodos:P})}),Object(d.jsxs)("div",{className:"mainInterface",children:[Object(d.jsx)(m,{setFilter:f}),Object(d.jsx)(h,{filtered:C,setFiltered:w})]}),Object(d.jsx)("div",{className:"todoList",children:Object(d.jsx)(p,{filtered:C,IndexOfLastTodo:U,indexOfFirstTodo:B,removeItem:J,changeStatus:M})}),Object(d.jsx)(v,{todosPerPage:5,totalTodos:C.length,paginate:function(e){return T(e)}})]})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.428f9d08.chunk.js.map