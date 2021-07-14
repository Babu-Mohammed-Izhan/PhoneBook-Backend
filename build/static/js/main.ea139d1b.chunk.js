(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{59:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t(12),r=t.n(c),o=t(11),s=t(8),l=t(15),i=t(4),u=function(e){var n=e.addPerson,t=e.newName,a=e.handlePersonChange,c=e.newNumber,r=e.handleNumberChange;return Object(i.jsxs)(s.a,{onSubmit:n,children:[Object(i.jsxs)(s.a.Group,{children:[Object(i.jsx)(s.a.Label,{children:"Name: "}),Object(i.jsx)(s.a.Control,{value:t,onChange:a})]}),Object(i.jsxs)(s.a.Group,{children:[Object(i.jsx)(s.a.Label,{children:"Number:"}),Object(i.jsx)(s.a.Control,{value:c,onChange:r})]}),Object(i.jsx)(l.a,{variant:"primary",type:"submit",children:"Add New Number"})]})},d=t(21),j=function(e){var n=e.persons,t=e.handleDelete;return Object(i.jsx)("div",{children:n.map((function(e){return Object(i.jsxs)(d.a,{style:{padding:"10px"},children:[Object(i.jsxs)(d.a.Body,{children:[e.name," ",e.number]},e.name),Object(i.jsx)(l.a,{variant:"danger",onClick:function(){return t(e)},children:"Delete"},e.number)]},e.id)}))})};var b=function(e){var n=e.handleSearch,t=e.newSearch;return Object(i.jsxs)("div",{children:[Object(i.jsx)(s.a.Label,{children:"Filter:"}),Object(i.jsx)(s.a.Control,{placeholder:"Search...",value:t,onChange:n})]})},h=t(14),m=t.n(h),f="/api/persons/",O=function(){return m.a.get(f)},x=function(e){return m.a.post(f,e)},g=function(e){return m.a.delete("/api/persons/".concat(e))},p=function(e,n){return console.log(e,n),m.a.put("/api/persons/".concat(e),n)},v=t(20),w=function(e){var n=e.errormessage,t=e.message;return null===t&&null===n?null:Object(i.jsxs)("div",{children:[null!==n?Object(i.jsx)(v.a,{variant:"danger",className:"error",children:n}):Object(i.jsx)("div",{}),null!==t?Object(i.jsx)(v.a,{variant:"success",className:"message",children:t}):Object(i.jsx)("div",{})]})},y=t(31),N=t(10),C=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),l=s[0],d=s[1],h=Object(a.useState)(""),m=Object(o.a)(h,2),f=m[0],v=m[1],C=Object(a.useState)(""),S=Object(o.a)(C,2),k=S[0],T=S[1],D=Object(a.useState)(null),P=Object(o.a)(D,2),L=P[0],E=P[1],A=Object(a.useState)(null),I=Object(o.a)(A,2),B=I[0],G=I[1],J=function(){O().then((function(e){console.log("data has arrived"),c(e.data)})).catch((function(e){console.log(e)}))};Object(a.useEffect)((function(){console.log("Use Effect is running"),J()}),[]);var z=t,F=""!==k?z.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())})):z;return Object(i.jsxs)(y.a,{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(i.jsx)(N.a,{style:{margin:"20px"},children:Object(i.jsx)("h1",{style:{fontSize:"60px"},children:"Phonebook"})}),Object(i.jsx)(N.a,{children:Object(i.jsx)(w,{errormessage:L,message:B})}),Object(i.jsx)(N.a,{children:Object(i.jsx)(b,{handleSearch:function(e){T(e.target.value)},newSearch:k})}),Object(i.jsx)(N.a,{style:{margin:"10px"},children:Object(i.jsx)("h3",{children:"Add a new Number"})}),Object(i.jsx)(N.a,{children:Object(i.jsx)(u,{addPerson:function(e){if(e.preventDefault(),t.some((function(e){return e.name===l})))if(t.some((function(e){return e.number!==f}))){if(window.confirm("".concat(l," has already added to the phonebook, replace the old number with a new one?"))){var n=t.filter((function(e){return e.name===l}));console.log(n);var a=n[0],c={name:l,number:f},r=a.id;console.log(r),p(r,c).then((function(e){G("".concat(l,"'s number changed to ").concat(f)),setTimeout((function(){G(null)}),5e3),J()})).catch((function(e){E("Information of ".concat(l," has already been removed from server")),setTimeout((function(){E(null)}),5e3)}))}}else window.alert("".concat(l," is already added to phonebook"));else if(t.some((function(e){return e.number===f})))window.alert("".concat(f," is already added to phonebook"));else{x({name:l,number:f}).then((function(e){G("Added ".concat(l)),setTimeout((function(){G(null)}),5e3),J()})).catch((function(e){console.log(e),E(e.response.data),setTimeout((function(){E(null)}),5e3)})),d(""),v("")}},handleNumberChange:function(e){v(e.target.value)},handlePersonChange:function(e){d(e.target.value)},newName:l,newNumber:f})}),Object(i.jsx)(N.a,{style:{margin:"10px"},children:Object(i.jsx)("h3",{children:"Numbers"})}),Object(i.jsx)(N.a,{style:{margin:"5px"},children:Object(i.jsx)(j,{persons:F,handleDelete:function(e){var n=e.id;console.log(e),window.confirm("Delete ".concat(e.name,"?"))&&g(n).then((function(n){E("".concat(e.name,"'s number has been deleted")),setTimeout((function(){E(null)}),5e3)})).catch((function(e){E("Error in deleting the number.Please Try again"),setTimeout((function(){E(null)}),5e3)}))}})})]})};t(58),t(59);r.a.render(Object(i.jsx)(C,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.ea139d1b.chunk.js.map