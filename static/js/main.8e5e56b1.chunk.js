(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(15),r=n.n(i),s=(n(20),n(5)),j=n(3),l=(n(21),[{id:1,img:"https://images-eu.ssl-images-amazon.com/images/I/51T8OXMiB5L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",title:"kigai",author:"Francesc Miralles"},{id:2,img:"https://images-na.ssl-images-amazon.com/images/I/41gVhoPaE5L._SX323_BO1,204,203,200_.jpg",title:"Think Like a Monk",author:"Jay Shetty"},{id:3,img:"https://images-na.ssl-images-amazon.com/images/I/31wQVUBJrFL._SX331_BO1,204,203,200_.jpg",title:"Thinking Out Loud - Keeping Nothing Behind",author:" Tapan Ghosh"}]),o=n(0),u=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"bookList",children:l.map((function(e){var t=e.img,n=e.title,c=e.author,a=e.id;return Object(o.jsxs)("article",{className:"books",children:[Object(o.jsx)("img",{src:t,alt:n}),Object(o.jsx)("h1",{children:n}),Object(o.jsx)("h4",{children:c})]},a)}))})})},b=n(2),m=[{id:1,name:"join",age:34},{id:2,name:"sam",age:24},{id:3,name:"sara",age:54},{id:4,name:"rama",age:20}],d=function(){var e=Object(c.useState)(m),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(o.Fragment,{children:[n.map((function(e){var t=e.name,c=e.age,i=e.id;return Object(o.jsxs)("div",{className:"items",children:[Object(o.jsxs)("h3",{children:[t,", ",c," "]}),Object(o.jsx)("button",{onClick:function(){return function(e){var t=n.filter((function(t){return t.id!==e}));a(t)}(i)},className:"remove",children:"remove"})]},i)})),Object(o.jsx)("button",{onClick:function(){return a([])},className:"remove",children:"Clear All items"})]})},O=function(){var e=Object(c.useState)({language:"JavaScript",extension:".js",frameWork:"React"}),t=Object(b.a)(e,2),n=(t[0],t[1],Object(c.useState)("JavaScript")),a=Object(b.a)(n,2),i=a[0],r=(a[1],Object(c.useState)(".js")),s=Object(b.a)(r,2),j=s[0],l=(s[1],Object(c.useState)("React")),u=Object(b.a)(l,2),m=u[0],d=u[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"items",children:[Object(o.jsx)("h3",{children:i}),Object(o.jsx)("p",{children:j}),Object(o.jsx)("p",{children:m})]}),Object(o.jsx)("button",{className:"remove",onClick:function(){d("React"!==m?"React":"Angular")},children:"change items"})]})};var h=function(){var e=Object(c.useState)(0),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{style:{justifyContent:"center",alignItems:"center",flexDirection:"column"},className:"items",children:[Object(o.jsx)("h1",{children:"Regluer Counter"}),Object(o.jsx)("h1",{style:{marginTop:"1.5rem"},children:n})]}),Object(o.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:[Object(o.jsx)("button",{onClick:function(){a(0)},style:{fontSize:"100%",margin:"0.5rem"},className:"remove",children:"reset"}),Object(o.jsx)("button",{onClick:function(){return a(n+1)},style:{fontSize:"100%",margin:"0.5rem"},className:"remove",children:"increase"}),Object(o.jsx)("button",{onClick:function(){return a(n-1)},style:{fontSize:"100%",margin:"0.5rem"},className:"remove",children:"decrease"})]}),Object(o.jsxs)("div",{style:{justifyContent:"center",alignItems:"center",flexDirection:"column"},className:"items",children:[Object(o.jsx)("h1",{children:"Counter useing setTimeout()"}),Object(o.jsx)("h1",{style:{marginTop:"1.5rem"},children:n})]}),Object(o.jsx)("div",{style:{margin:"1rem auto"},children:Object(o.jsx)("button",{onClick:function(){setTimeout((function(){a((function(e){return e+1}))}),2e3)},style:{fontSize:"100%"},className:"remove",children:"counter"})})]})},x=[{id:1,name:"Same",age:"25"},{id:2,name:"Rama",age:"30"},{id:3,name:"James",age:"50"},{id:4,name:"Max",age:"10"},{id:5,name:"Sara",age:"21"}],f=function(){var e=Object(c.useState)(x),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"section-birthdays",children:[Object(o.jsx)("h1",{children:"5 Birthdays Today"}),n.map((function(e){var t=e.id,n=e.name,c=e.age;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"items-birthdays",children:[Object(o.jsxs)("div",{className:"item-birthdays",children:[Object(o.jsx)("i",{className:"material-icons",children:"account_circle"}),Object(o.jsxs)("p",{children:[n," ",Object(o.jsx)("span",{children:c})]})]},t),Object(o.jsx)("button",{onClick:function(){return function(e){a((function(t){var n=t.filter((function(t){return t.id!==e}));return n}))}(t)},className:"remove",children:Object(o.jsx)("i",{className:"material-icons",children:"delete"})})]}),Object(o.jsx)("br",{})]})})),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(){return a([])},className:"remove",children:"Clear All"})]})})},p=function(){var e=Object(c.useState)(0),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){console.log("useEffect"),document.title="count ".concat(n)}),[n]),console.log("render"),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"UseEffect Basic"}),Object(o.jsx)("h1",{children:n}),Object(o.jsx)("button",{onClick:function(){return a(n+1)},className:"remove",children:"increse"})]})},g=n(9),v=n.n(g),y=n(11),N=(n(24),function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],i=function(){var e=Object(y.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),a(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){i()}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Github Users"}),Object(o.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.login,c=e.html_url,a=e.avatar_url;return Object(o.jsxs)("li",{className:"item",children:[Object(o.jsx)("img",{src:a,alt:n}),Object(o.jsxs)("p",{children:[n," ",Object(o.jsx)("a",{href:c,children:"profile "})]})]},t)}))})]})}),C=function(){var e=Object(c.useState)(!0),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),r=Object(b.a)(i,2),s=r[0],j=r[1],l=Object(c.useState)("defalt user"),u=Object(b.a)(l,2),m=u[0],d=u[1];return Object(c.useEffect)((function(){fetch("https://api.github.com/users/jyotip101").then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw a(!1),j(!0),console.log(e.statusText),new Error(e.statusText)})).then((function(e){var t=e.login;d(t),a(!1)})).catch((function(e){return console.log(e)}))}),[]),n?Object(o.jsx)("h1",{children:"Loading..."}):s?Object(o.jsx)("h1",{children:"Error..."}):Object(o.jsxs)("h1",{style:{justifyContent:"center",fontSize:"150%"},className:"item",children:["GitHub User: ",m]})},S=n(12),k=function(){var e=Object(S.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1],a=function(){return Object(o.jsx)("h1",{children:"show"})};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Show And Hide"}),Object(o.jsx)("button",{onClick:function(){c(!n)},className:"remove",children:"toggle"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),n&&Object(o.jsx)(a,{})]})};n(25);var F=function(){var e=Object(S.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1];console.log(n);var a=function(){return Object(o.jsx)("div",{className:"items",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{onClick:function(){return c(!n)},children:"Home"}),Object(o.jsx)("li",{onClick:function(){return c(!n)},children:"Contact"}),Object(o.jsx)("li",{onClick:function(){return c(!n)},children:"Projects"}),Object(o.jsx)("li",{onClick:function(){return c(!n)},children:"About"})]})})};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{onClick:function(){return c(!n)},className:"btn",children:Object(o.jsx)("i",{className:"material-icons",children:"menu"})}),n&&Object(o.jsx)(a,{})]})},E=n(8),w=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(b.a)(i,2),s=r[0],j=r[1],l=Object(c.useState)(""),u=Object(b.a)(l,2),m=u[0],d=u[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Controlled Input"}),Object(o.jsx)("div",{className:"items",children:Object(o.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),s&&m){var t={name:s,email:m,id:(new Date).getTime().toString()};a((function(e){return[].concat(Object(E.a)(e),[t])}))}else console.log("empty input");j(""),d("")},children:[Object(o.jsxs)("div",{className:"input-item",children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(o.jsx)("input",{type:"text",name:"name",id:"name",value:s,onChange:function(e){return j(e.target.value)}})]}),Object(o.jsxs)("div",{className:"input-item",children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email: "}),Object(o.jsx)("input",{type:"text",name:"email",id:"email",value:m,onChange:function(e){return d(e.target.value)}})]}),Object(o.jsx)("button",{className:"remove",children:"Submit"})]})}),n.map((function(e){var t=e.name,n=e.id,c=e.email;return Object(o.jsxs)("div",{className:"items",children:[Object(o.jsxs)("h1",{style:{fontSize:"115%"},children:["name: ",t,", Email: ",c]}),Object(o.jsx)("button",{className:"remove",onClick:function(){return function(e){console.log(e),a((function(t){var n=t.filter((function(t){return t.id!==e}));return n}))}(n)},children:Object(o.jsx)("i",{className:"material-icons",children:"delete"})})]},n)}))]})},I=n(13),M=n(4),_=function(){var e=Object(c.useState)({fName:"",age:"",email:""}),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),r=Object(b.a)(i,2),s=r[0],j=r[1],l=function(e){var t=e.target.name,c=e.target.value;a(Object(M.a)(Object(M.a)({},n),{},Object(I.a)({},t,c)))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Multiple Input"}),Object(o.jsx)("div",{className:"items",children:Object(o.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),n.fName&&n.email&&n.age){var t=Object(M.a)(Object(M.a)({},n),{},{id:(new Date).getTime().toString()});j([].concat(Object(E.a)(s),[t])),a({fName:"",age:"",email:""})}else console.log("error")},children:[Object(o.jsxs)("div",{className:"itnput-item",children:[Object(o.jsx)("label",{htmlFor:"fName",children:"Name"}),Object(o.jsx)("input",{type:"text",id:"fName",name:"fName",value:n.fName,onChange:l})]}),Object(o.jsxs)("div",{className:"input-item",children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email"}),Object(o.jsx)("input",{type:"email",name:"email",id:"email",value:n.email,onChange:l})]}),Object(o.jsxs)("div",{className:"input-item",children:[Object(o.jsx)("label",{htmlFor:"age",children:"Age"}),Object(o.jsx)("input",{type:"text",name:"age",id:"age",value:n.age,onChange:l})]}),Object(o.jsx)("button",{style:{backgroundColor:"blueviolet"},className:"remove",type:"submit",children:"Submit"})]})}),s.map((function(e){var t=e.email,n=e.fName,c=e.age,a=e.id;return Object(o.jsx)("div",{className:"items",children:Object(o.jsxs)("p",{children:[n," ",c," ",t]})},a)}))]})},R=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null);return Object(c.useEffect)((function(){console.log(e.current),e.current.focus()})),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"useRef Basic"}),Object(o.jsx)("div",{className:"item",children:Object(o.jsxs)("form",{onSubmit:function(n){n.preventDefault(),console.log(e.current.value),console.log(t.current)},children:[Object(o.jsxs)("div",{className:"input-item",children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:e,placeholder:"Enter you name...",name:"name"})]}),Object(o.jsx)("button",{ref:t,style:{backgroundColor:"blueviolet"},className:"remove",type:"submit",children:"Submit"})]})})]})},T=function(e){var t=e.closeModel,n=e.modelContent;return Object(c.useEffect)((function(){var e=setTimeout((function(){t(!1)}),1e3);return function(){return clearTimeout(e)}})),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{style:{position:"absolute",top:"10px",left:"40%",right:"auto"},children:Object(o.jsx)("h2",{children:n})})})},B=function(e,t){if("Add_Item"===t.type){var n=[].concat(Object(E.a)(e.people),[t.paylod]);return Object(M.a)(Object(M.a)({},e),{},{people:n,modelContent:"item added",isModel:!0})}if("Empty_Value"===t.type)return Object(M.a)(Object(M.a)({},e),{},{isModel:!0,modelContent:"Enter value"});if("Close_Model"===t.type)return Object(M.a)(Object(M.a)({},e),{},{isModel:!1});if("Remove_Item"===t.type){var c=e.people.filter((function(e){return e.id!=t.paylod}));return Object(M.a)(Object(M.a)({},e),{},{people:c,isModel:!0,modelContent:"item removed"})}throw new Error("error")},U={people:[{id:1,name:"join",age:34},{id:3,name:"sara",age:54},{id:4,name:"rama",age:20}],isModel:!0,modelContent:""},A=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(c.useReducer)(B,U),r=Object(b.a)(i,2),s=r[0],j=r[1];return Object(o.jsxs)(o.Fragment,{children:[s.isModel&&Object(o.jsx)(T,{closeModel:function(){j({type:"Close_Model"})},modelContent:s.modelContent}),Object(o.jsx)("div",{className:"items",children:Object(o.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),n){var t={id:(new Date).getTime().toString(),name:n};j({type:"Add_Item",paylod:t}),a("")}else j({type:"Empty_Value"})},children:[Object(o.jsx)("div",{className:"input-item",children:Object(o.jsx)("input",{type:"text",name:"age",id:"age",value:n,onChange:function(e){return a(e.target.value)}})}),Object(o.jsx)("button",{style:{backgroundColor:"blueviolet"},className:"remove",type:"submit",children:"Submit"})]})}),s.people.map((function(e){return Object(o.jsxs)("div",{className:"item",style:{minWidth:"250px"},children:[Object(o.jsx)("p",{children:e.name}),Object(o.jsx)("button",{style:{color:"blueviolet"},onClick:function(){return t=e.id,void j({type:"Remove_Item",paylod:t});var t},className:"remove",children:"remove"})]},e.id)}))]})},D=[{id:1,name:"join"},{id:3,name:"sara"},{id:4,name:"rama"}],L=function(e){var t=e.data,n=e.removeItem;return Object(o.jsx)(o.Fragment,{children:t.map((function(e){return Object(o.jsx)(z,Object(M.a)(Object(M.a)({},e),{},{removeItem:n}),e.id)}))})},z=function(e){var t=e.id,n=e.name,c=e.removeItem;return Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("p",{children:n}),Object(o.jsx)("button",{className:"remove",onClick:function(){return c(t)},children:"remove"})]})},P=function(){var e=Object(c.useState)(D),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Prop Drilling"}),Object(o.jsx)(L,{data:n,removeItem:function(e){a(n.filter((function(t){return t.id!==e})))}})]})},H=[{id:1,name:"join"},{id:3,name:"sara"},{id:4,name:"rama"}],J=a.a.createContext(),V=function(){var e=Object(c.useContext)(J);return console.log(e),Object(o.jsx)(o.Fragment,{children:e.people.map((function(e){return Object(o.jsx)(G,Object(M.a)({},e),e.id)}))})},G=function(e){var t=e.id,n=e.name,a=Object(c.useContext)(J).removeItem;return Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("p",{children:n}),Object(o.jsx)("button",{className:"remove",onClick:function(){return a(t)},children:"remove"})]})},W=function(){var e=Object(c.useState)(H),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(J.Provider,{value:{removeItem:function(e){a(n.filter((function(t){return t.id!==e})))},people:n},children:[Object(o.jsx)("h1",{children:"Context API / useContext"}),Object(o.jsx)(V,{})]})},X=function(){var e=function(e){var t=Object(c.useState)(!0),n=Object(b.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)([]),s=Object(b.a)(r,2),j=s[0],l=s[1],o=function(){var t=Object(y.a)(v.a.mark((function t(){var n,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,l(c),i(!1);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){o()}),[e]),{loading:a,user:j}}("https://api.github.com/users"),t=e.loading;e.user;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:" Customs Hooks "}),Object(o.jsx)("div",{className:"items",children:Object(o.jsx)("h1",{children:t?"Loading...":"UseFetch"})})]})},Q=(n(26),[{id:1,page:Object(o.jsx)(u,{}),path:"/Card",text:"Card Example"},{id:2,page:Object(o.jsx)(d,{}),path:"/UseStateArray",text:"UseState Array"},{id:3,page:Object(o.jsx)(O,{}),path:"/UseStateObject",text:"useState Object Example"},{id:4,page:Object(o.jsx)(h,{}),path:"/UseStateCounter",text:"useState Counter Example"},{id:5,page:Object(o.jsx)(f,{}),path:"/BirthdaysReminder",text:"Birthdays Reminder"},{id:6,page:Object(o.jsx)(p,{}),path:"/UseEffectBasic",text:"useEffect Basic"},{id:7,page:Object(o.jsx)(N,{}),path:"/GithubUser",text:"useEffect github user"},{id:8,page:Object(o.jsx)(C,{}),path:"/MultipleReturn",text:"useEffect multiple return"},{id:9,page:Object(o.jsx)(k,{}),path:"/ShowHide",text:"show and hide Example"},{id:10,page:Object(o.jsx)(F,{}),path:"/Menu",text:"Menu Example"},{id:11,page:Object(o.jsx)(w,{}),path:"/ControlledInput",text:"Controlled Input Example"},{id:12,page:Object(o.jsx)(_,{}),path:"/MultipleInput",text:"Multiple Input controls"},{id:13,page:Object(o.jsx)(R,{}),path:"/UseRefBasic",text:"useRef Basic"},{id:14,page:Object(o.jsx)(A,{}),path:"/UseReducer",text:"UseReducer"},{id:15,page:Object(o.jsx)(P,{}),path:"/PropDrilling",text:"Prop Drilling"},{id:16,page:Object(o.jsx)(W,{}),path:"/ContextAPI",text:"useContext"},{id:17,page:Object(o.jsx)(X,{}),path:"/CustomHooks",text:"Custom Hooks"}]),Z=(n(27),function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"h1-home",children:"Following are all sample projects that I make to practice reactjs"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"youtube Tutorial:",Object(o.jsx)("a",{href:"https://www.youtube.com/watch?v=iZhV0bILFb0&t=0s",children:"https://www.youtube.com/watch?v=iZhV0bILFb0&t=0s"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"icons:",Object(o.jsx)("a",{href:"https://fonts.google.com/icons?selected=Material+Icons+Outlined",children:"https://fonts.google.com/icons?selected=Material+Icons+Outlined"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"source code Github:",Object(o.jsx)("a",{href:"https://github.com/jyotip101/react-practice-projects",children:"https://github.com/jyotip101/react-practice-projects"}),Object(o.jsx)("ul",{className:"ulLinks",children:Q.map((function(e){var t=e.id,n=e.text,c=e.path;return Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:c,children:n})},t)}))})]})});var K=function(){return Object(o.jsx)("div",{className:"app",children:Object(o.jsx)(s.a,{children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",element:Object(o.jsx)(Z,{})}),Q.map((function(e){var t=e.id,n=e.page,c=e.path;return Object(o.jsx)(j.a,{exate:!0,path:c,element:n},t)}))]})})})};r.a.render(Object(o.jsx)(K,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.8e5e56b1.chunk.js.map