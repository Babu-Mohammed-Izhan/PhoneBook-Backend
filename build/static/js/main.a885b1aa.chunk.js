(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(2),o=t(14),r=t.n(o),a=t(3),s=t(0),i=function(e){var n=e.addPerson,t=e.newName,c=e.handlePersonChange,o=e.newNumber,r=e.handleNumberChange;return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:n,children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:t,onChange:c})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{value:o,onChange:r})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})})},u=function(e){var n=e.persons,t=e.handleDelete;return Object(s.jsx)("div",{children:n.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:[e.name," ",e.number]},e.name),Object(s.jsx)("button",{onClick:function(){return t(e)},children:"Delete"},e.number)]},e.id)}))})};var l=function(e){var n=e.handleSearch,t=e.newSearch;return Object(s.jsx)("div",{children:Object(s.jsxs)("h3",{children:["filter shown with ",Object(s.jsx)("input",{value:t,onChange:n})]})})},d=t(4),j=t.n(d),b="/api/persons",h=function(){return j.a.get(b)},f=function(e){return j.a.post(b,e)},m=function(e){return j.a.delete("/api/persons".concat(e))},O=function(e,n){return console.log(e,n),j.a.put("/api/persons".concat(e),n)},v=function(e){var n=e.errormessage,t=e.message;return null===t&&null===n?null:Object(s.jsxs)("div",{children:[null!==n?Object(s.jsx)("div",{className:"error",children:n}):Object(s.jsx)("div",{}),null!==t?Object(s.jsx)("div",{className:"message",children:t}):Object(s.jsx)("div",{})]})},g=function(){var e=Object(c.useState)([]),n=Object(a.a)(e,2),t=n[0],o=n[1],r=Object(c.useState)(""),d=Object(a.a)(r,2),j=d[0],b=d[1],g=Object(c.useState)(""),x=Object(a.a)(g,2),p=x[0],w=x[1],S=Object(c.useState)(""),C=Object(a.a)(S,2),N=C[0],k=C[1],y=Object(c.useState)(null),P=Object(a.a)(y,2),T=P[0],D=P[1],E=Object(c.useState)(null),I=Object(a.a)(E,2),J=I[0],L=I[1];Object(c.useEffect)((function(){console.log("Use Effect is running"),h().then((function(e){console.log("data has arrived"),o(e.data)})).catch((function(e){console.log(e)}))}),[]);var A=t,B=""!==N?A.filter((function(e){return e.name.toLowerCase().includes(N.toLowerCase())})):A;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(v,{errormessage:T,message:J}),Object(s.jsx)(l,{handleSearch:function(e){k(e.target.value)},newSearch:N}),Object(s.jsx)("h3",{children:"add a new"}),Object(s.jsx)(i,{addPerson:function(e){if(e.preventDefault(),t.some((function(e){return e.name===j})))if(t.some((function(e){return e.number!==p}))){if(window.confirm("".concat(j," has already added to the phonebook, replace the old number with a new one?"))){var n=t.filter((function(e){return e.name===j}));console.log(n);var c=n[0],o={name:j,number:p},r=c.id;console.log(r),O(r,o).then((function(e){L("".concat(j,"'s number changed to ").concat(p)),setTimeout((function(){L(null)}),5e3)})).catch((function(e){D("Information of ".concat(j," has already been removed from server")),setTimeout((function(){D(null)}),5e3)}))}}else window.alert("".concat(j," is already added to phonebook"));else if(t.some((function(e){return e.number===p})))window.alert("".concat(p," is already added to phonebook"));else{f({name:j,number:p}).then((function(e){L("Added ".concat(j)),setTimeout((function(){L(null)}),5e3)})).catch((function(e){console.log(e)})),b(""),w("")}},handleNumberChange:function(e){w(e.target.value)},handlePersonChange:function(e){b(e.target.value)},newName:j,newNumber:p}),Object(s.jsx)("h3",{children:"Numbers"}),Object(s.jsx)(u,{persons:B,handleDelete:function(e){var n=e.id;console.log(e),window.confirm("Delete ".concat(e.name,"?"))&&m(n).then((function(n){D("".concat(e.name,"'s number has been deleted")),setTimeout((function(){D(null)}),5e3)})).catch((function(e){D("Error in deleting the number.Please Try again"),setTimeout((function(){D(null)}),5e3)}))}})]})};t(38);r.a.render(Object(s.jsx)(g,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a885b1aa.chunk.js.map