(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],[,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(5),s=n.n(i),a=(n(10),n(2)),r=(n(11),n(12),[{id:1,img:"https://images-eu.ssl-images-amazon.com/images/I/51T8OXMiB5L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",title:"kigai",author:"Francesc Miralles"},{id:2,img:"https://images-na.ssl-images-amazon.com/images/I/41gVhoPaE5L._SX323_BO1,204,203,200_.jpg",title:"Think Like a Monk",author:"Jay Shetty"},{id:3,img:"https://images-na.ssl-images-amazon.com/images/I/31wQVUBJrFL._SX331_BO1,204,203,200_.jpg",title:"Thinking Out Loud - Keeping Nothing Behind",author:" Tapan Ghosh"}]),l=n(0),j=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"bookList",children:r.map((function(e){var t=e.img,n=e.title,c=e.author,i=e.id;return Object(l.jsxs)("article",{className:"books",children:[Object(l.jsx)("img",{src:t,alt:n}),Object(l.jsx)("h1",{children:n}),Object(l.jsx)("h4",{children:c})]},i)}))})})},o=[{id:1,name:"join",age:34},{id:2,name:"sam",age:24},{id:3,name:"sara",age:54},{id:4,name:"rama",age:20}],m=(n(4),function(){var e=Object(c.useState)(o),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(l.jsxs)(l.Fragment,{children:[n.map((function(e){var t=e.name,c=e.age,s=e.id;return Object(l.jsxs)("div",{className:"item",children:[Object(l.jsxs)("h3",{children:[t,", ",c," "]}),Object(l.jsx)("button",{onClick:function(){return function(e){var t=n.filter((function(t){return t.id!==e}));i(t)}(s)},className:"remove",children:"remove"})]},s)})),Object(l.jsx)("button",{onClick:function(){return i([])},className:"clear",children:"Clear All items"})]})}),u=function(){var e=Object(c.useState)({language:"JavaScript",extension:".js",frameWork:"React"}),t=Object(a.a)(e,2),n=(t[0],t[1],Object(c.useState)("JavaScript")),i=Object(a.a)(n,2),s=i[0],r=(i[1],Object(c.useState)(".js")),j=Object(a.a)(r,2),o=j[0],m=(j[1],Object(c.useState)("React")),u=Object(a.a)(m,2),b=u[0],d=u[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("h3",{children:s}),Object(l.jsx)("p",{children:o}),Object(l.jsx)("p",{children:b})]}),Object(l.jsx)("button",{className:"clear",onClick:function(){d("React"!==b?"React":"Angular")},children:"change items"})]})};var b=function(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{style:{justifyContent:"center",alignItems:"center",flexDirection:"column"},className:"item",children:[Object(l.jsx)("h1",{children:"Regluer Counter"}),Object(l.jsx)("h1",{style:{marginTop:"1.5rem"},children:n})]}),Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:[Object(l.jsx)("button",{onClick:function(){i(0)},style:{fontSize:"100%",margin:"0.5rem"},className:"btn",children:"reset"}),Object(l.jsx)("button",{onClick:function(){return i(n+1)},style:{fontSize:"100%",margin:"0.5rem"},className:"btn",children:"increase"}),Object(l.jsx)("button",{onClick:function(){return i(n-1)},style:{fontSize:"100%",margin:"0.5rem"},className:"btn",children:"decrease"})]}),Object(l.jsxs)("div",{style:{justifyContent:"center",alignItems:"center",flexDirection:"column"},className:"item",children:[Object(l.jsx)("h1",{children:"Counter useing  setTimeout()"}),Object(l.jsx)("h1",{style:{marginTop:"1.5rem"},children:n})]}),Object(l.jsx)("div",{style:{margin:"1rem auto"},children:Object(l.jsx)("button",{onClick:function(){setTimeout((function(){i((function(e){return e+1}))}),2e3)},style:{fontSize:"100%"},className:"btn",children:"counter"})})]})},d=(n(14),[{id:1,name:"Same",age:"25"},{id:2,name:"Rama",age:"30"},{id:3,name:"James",age:"50"},{id:4,name:"Max",age:"10"},{id:5,name:"Sara",age:"21"}]),h=function(){var e=Object(c.useState)(d),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{className:"section-birthdays",children:[Object(l.jsx)("h1",{children:"5 Birthdays Today"}),n.map((function(e){var t=e.id,n=e.name,c=e.age;return Object(l.jsxs)("div",{className:"items-birthdays",children:[Object(l.jsxs)("div",{className:"item-birthdays",children:[Object(l.jsx)("i",{className:"material-icons",children:"account_circle"}),Object(l.jsxs)("p",{children:[n," ",Object(l.jsx)("span",{children:c})]})]},t),Object(l.jsx)("button",{onClick:function(){return function(e){i((function(t){var n=t.filter((function(t){return t.id!==e}));return n}))}(t)},className:"remove",children:Object(l.jsx)("i",{className:"material-icons",children:"delete"})})]})})),Object(l.jsxs)("button",{onClick:function(){return i([])},className:"btn",children:[Object(l.jsx)("i",{className:"material-icons",children:"clear"}),"Clear All"]})]})})},O=function(){var e=Object(c.useState)(),t=Object(a.a)(e,2),n=t[0],i=t[1],s=Object(l.jsx)(j,{});return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"projects",children:[Object(l.jsx)("div",{className:"items",children:Object(l.jsx)("h1",{children:"Projects"})}),Object(l.jsxs)("div",{className:"items",children:[Object(l.jsx)("button",{className:"btn",onClick:function(){return console.log("click"),void i(s)},children:"Card"}),Object(l.jsx)("button",{className:"btn",onClick:function(){return i(Object(l.jsx)(m,{}))},children:"UseState Array"}),Object(l.jsx)("button",{className:"btn",onClick:function(){return i(Object(l.jsx)(u,{}))},children:"UseState Object"}),Object(l.jsx)("button",{className:"btn",onClick:function(){return i(Object(l.jsx)(b,{}))},children:"UseState Counter"}),Object(l.jsx)("button",{className:"btn",onClick:function(){return i(Object(l.jsx)(h,{}))},children:"Birthdays Reminder"})]}),Object(l.jsx)("div",{style:{margin:"0.5rem auto",textAlign:"center"},children:n})]})})};var x=function(){return Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(O,{})})};s.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.dc20a0bb.chunk.js.map