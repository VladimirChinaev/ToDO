(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,n){},28:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(22),o=n.n(a),s=n(2),u=n.n(s),i=n(4),l=n(5),d=(n(28),n(13),n(6)),j=n.n(d),b=n(0),f=function(e){var t=e.todo,n=e.removeItem,r=e.changeStatus,a=e.getTodos,o=Object(c.useState)(t.name),s=Object(l.a)(o,2),d=s[0],f=s[1],p=Object(c.useState)(!1),h=Object(l.a)(p,2),x=h[0],O=h[1],m=function(){var e=Object(i.a)(u.a.mark((function e(n,c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,13!==n.keyCode){e.next=6;break}return e.next=4,j.a.patch("https://back-end-api-1.herokuapp.com/api/todos"+"/".concat(t.uuid),{name:c,done:"done"===t.done?"done":"undone"});case 4:n.target.blur(),O(!1);case 6:27===n.keyCode&&(n.target.blur(),O(!1),f(t.name)),a(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),alert(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"todoElement",children:[Object(b.jsxs)("div",{className:"inElement",children:[Object(b.jsx)("input",{type:"checkbox",className:"buttonComplete",defaultChecked:!0===t.done,onClick:function(){r(t)}}),x?Object(b.jsx)("input",{value:d,onKeyDown:function(e){return m(e,d,t.uuid)},className:"sideInput",onChange:function(e){return f(e.target.value)}}):Object(b.jsx)("span",{onDoubleClick:function(){return O(!0)},children:d})]}),Object(b.jsxs)("div",{className:"inElement",children:[Object(b.jsx)("div",{children:new Date(Date.parse(t.updatedAtt)).toLocaleString()}),Object(b.jsx)("input",{type:"button",value:"\ud83d\uddd1",className:"buttonDelete",onClick:function(){n(t.uuid)}})]})]})},t.uuid)},p=function(e){return Object(b.jsx)("div",{className:"todoList",children:e.filtered.map((function(t){return Object(b.jsx)("div",{children:Object(b.jsx)(f,{removeItem:e.removeItem,todo:t,changeStatus:e.changeStatus,getTodos:e.getTodos,IndexOfLastTodo:e.IndexOfLastTodo,indexOfFirstTodo:e.indexOfFirstTodo})},t.uuid)}))})},h=n(12),x=function(e){var t=e.setFiltered,n=(e.filtered,function(e){t("Up"===e?function(e){return Object(h.a)(e).sort((function(e,t){return e.date>t.date?1:-1}))}:function(e){return Object(h.a)(e).sort((function(e,t){return e.date<t.date?1:-1}))})});return Object(b.jsxs)("div",{className:"saideInterface",children:[Object(b.jsx)("h4",{children:"Sort by date:"}),Object(b.jsx)("button",{className:"arrows",type:"button",onClick:function(){n("Up")},children:"\u290a"}),Object(b.jsx)("button",{className:"arrows",type:"button",onClick:function(){n("Down")},children:"\u290b"})]})},O=function(){return Object(b.jsx)("div",{className:"title",children:Object(b.jsx)("h1",{children:"ToDo:"})})},m=function(e){var t=e.setFilter,n=function(e){t(e)};return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{type:"button",className:"buttons",onClick:function(){return n("")},children:"All"}),Object(b.jsx)("button",{type:"button",className:"buttons",onClick:function(){return n("done")},children:"Done"}),Object(b.jsx)("button",{type:"button",className:"buttons",onClick:function(){return n("undone")},children:"Undone"})]})},v=function(e){return Object(b.jsx)("form",{onSubmit:function(t){return function(t,n){e.handleCreateTodos(t,n)}(t,e.text)},children:Object(b.jsx)("div",{className:"mainInput",children:Object(b.jsx)("input",{type:"text",required:!0,placeholder:"I want to...",value:e.text,onChange:function(t){return e.setText(t.target.value)},className:"input"})})})},g=function(e){var t=e.todosPerPage,n=e.numbersOfTodos,c=e.setCurrentPage,r=e.getTodos,a=e.currentPage;console.log(a);for(var o=[],s=1;s<=Math.ceil(n/t);s++)o.push(s);var l=function(e){c(e),d()},d=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{r()}catch(t){console.log(t),alert(t)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(a),console.log(n),Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"mainSelect",children:n>0?Object(b.jsxs)("div",{className:"inSelect",children:[Object(b.jsx)("button",{onClick:function(){l(1)},className:"selectArrow",children:"\u276e"}),o.map((function(e){return Object(b.jsx)("div",{select:!0,children:Object(b.jsx)("button",{onClick:function(){return l(e)},href:"!#",className:"select",children:e})},e)})),Object(b.jsx)("button",{onClick:function(){l(Math.ceil(n/t))},className:"selectArrow",children:"\u276f"})]}):""})})},k="https://back-end-api-1.herokuapp.com/api/todos",N=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),o=Object(l.a)(a,2),s=o[0],d=o[1],f=Object(c.useState)([]),h=Object(l.a)(f,2),N=h[0],w=h[1],y=Object(c.useState)(1),C=Object(l.a)(y,2),T=C[0],S=C[1],I=Object(c.useState)(),D=Object(l.a)(I,2),P=D[0],F=D[1];console.log(T),Object(c.useEffect)((function(){L()}),[s,T]);var L=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s&&"filterBy=".concat(s),e.prev=1,n=k+"?".concat(t,"&page=").concat(T,"&order=asc"),e.next=5,j.a.get(n);case 5:c=e.sent,w(c.data.info),F(c.data.count),console.log(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),alert(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();console.log("132141254135133513412312312312",N);var E=function(){var e=Object(i.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,j.a.post(k,{name:n,done:"undone"});case 4:L(),r(""),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.patch(k+"/".concat(t.uuid),{name:t.name,done:"done"===t.done?"undone":"done"});case 3:n=e.sent,S(n.data.page),L(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.delete(k+"/".concat(t));case 3:return e.next=5,L();case 5:console.log(N),N.length-1===0&&S(T-1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),alert(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),U=5*T,B=U-5;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(O,{}),Object(b.jsx)("div",{className:"mainInput",children:Object(b.jsx)(v,{text:n,setText:r,handleCreateTodos:E})}),Object(b.jsxs)("div",{className:"mainInterface",children:[Object(b.jsx)(m,{setFilter:d}),Object(b.jsx)(x,{filtered:N,setFiltered:w})]}),Object(b.jsx)("div",{className:"todoList",children:Object(b.jsx)(p,{filtered:N,removeItem:M,changeStatus:A,getTodos:L,IndexOfLastTodo:U,indexOfFirstTodo:B})}),Object(b.jsx)(g,{todosPerPage:5,numbersOfTodos:P,setCurrentPage:S,getTodos:L,currentPage:T})]})};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.3eb0377d.chunk.js.map