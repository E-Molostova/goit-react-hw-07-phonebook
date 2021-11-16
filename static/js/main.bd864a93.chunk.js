(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={contactsList:"ContactList_contactsList__2zG-R",contactsItem:"ContactList_contactsItem__a12bf",contactsDeleteBtn:"ContactList_contactsDeleteBtn__1hMzw"}},20:function(t,e,n){t.exports={inputFilter:"Filte_inputFilter__2XEkS",inputLabel:"Filte_inputLabel__Yl9x_",divFilter:"Filte_divFilter__2s5_a"}},38:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var c,a,r=n(0),o=n(14),u=n.n(o),s=n(17),b=n(2),i=n(4),l=n(3),j=Object(b.b)("phonebook/fetchContactsRequest"),p=Object(b.b)("phonebook/fetchContactsSuccess"),d=Object(b.b)("phonebook/fetchContactsError"),f=Object(b.b)("phonebook/addContactRequest"),O=Object(b.b)("phonebook/addContactSuccess"),m=Object(b.b)("phonebook/addContactError"),h=Object(b.b)("phonebook/deleteContactRequest"),x=Object(b.b)("phonebook/deleteContactSuccess"),v=Object(b.b)("phonebook/deleteContactError"),_=Object(b.b)("phonebook/changeFilter"),C=Object(b.c)([],(c={},Object(i.a)(c,p,(function(t,e){return e.payload})),Object(i.a)(c,O,(function(t,e){var n=e.payload;return[].concat(Object(s.a)(t),[n])})),Object(i.a)(c,x,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),k=Object(b.c)(!1,(a={},Object(i.a)(a,j,(function(){return!0})),Object(i.a)(a,p,(function(){return!1})),Object(i.a)(a,d,(function(){return!1})),Object(i.a)(a,f,(function(){return!0})),Object(i.a)(a,O,(function(){return!1})),Object(i.a)(a,m,(function(){return!1})),Object(i.a)(a,h,(function(){return!0})),Object(i.a)(a,x,(function(){return!1})),Object(i.a)(a,v,(function(){return!1})),a)),L=Object(b.c)("",Object(i.a)({},_,(function(t,e){return e.payload}))),F=Object(b.c)(null,{}),w=Object(l.b)({contacts:C,filter:L,loading:k,error:F}),y=n(9),N=Object(s.a)(Object(b.d)({serializableCheck:{ignoredActions:[y.a,y.f,y.b,y.c,y.d,y.e]}})),g=Object(b.a)({reducer:{phonebook:w},middleware:N}),I=(n(37),n(38),n(6)),z=n(24),A=n(15),S=function(t){return t.phonebook.items},E=function(t){return t.phonebook.filter},q=Object(A.a)([S,E],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),B=n(7),D=n.n(B),R=n(18),J=n(11),X=n.n(J);X.a.defaults.baseURL="http://localhost:3004";var Z=n(8),M=n.n(Z),G=n(1),P=function(){var t=Object(r.useState)(""),e=Object(z.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(""),o=Object(z.a)(a,2),u=o[0],s=o[1],b=Object(I.c)(S),i=Object(I.b)(),l=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":s(a);break;default:return}},j=function(t){b.some((function(e){return e.name.toLocaleLowerCase()===t.name.toLocaleLowerCase()||b.some((function(e){return e.number===t.number}))}))?alert("Friend ".concat(t.name," or number ").concat(t.number," is alredy exist")):i(function(t){var e=t.name,n=t.number;return function(){var t=Object(R.a)(D.a.mark((function t(c){var a,r,o;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:e,number:n},c(f()),t.prev=2,t.next=5,X.a.post("/contacts",a);case 5:r=t.sent,o=r.data,c(O(o)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),c(m(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))};return Object(G.jsxs)("form",{className:M.a.formContact,onSubmit:function(t){t.preventDefault(),j({name:n,number:u}),c(""),s("")},children:[Object(G.jsxs)("label",{className:M.a.inputLabel,children:["Name",Object(G.jsx)("input",{type:"text",name:"name",onChange:l,value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:M.a.contactInput})]}),Object(G.jsxs)("label",{className:M.a.inputLabel,children:["Number",Object(G.jsx)("input",{type:"tel",name:"number",onChange:l,value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:M.a.contactInput})]}),Object(G.jsx)("button",{className:M.a.buttonInput,type:"submit",children:"Add contact"})]})},U=n(19),Y=n.n(U),$=function(){var t=Object(I.c)(q),e=Object(I.b)(),n=function(t){return e((n=t,function(){var t=Object(R.a)(D.a.mark((function t(e){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(h()),t.prev=1,t.next=4,X.a.delete("/contacts/".concat(n));case 4:e(x(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e(v(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()));var n};return Object(G.jsx)("ul",{className:Y.a.contactsList,children:t.map((function(t){return Object(G.jsxs)("li",{className:Y.a.contactsItem,children:[Object(G.jsx)("p",{children:t.name+": "+t.number}),Object(G.jsx)("button",{className:Y.a.contactsDeleteBtn,id:t.id,type:"button",onClick:function(e){return n(t.id)},children:"Delete"})]},t.id)}))})},H=n(20),K=n.n(H),Q=function(){var t=Object(I.c)(E),e=Object(I.b)();return Object(G.jsx)("div",{className:K.a.divFilter,children:Object(G.jsxs)("label",{className:K.a.inputLabel,children:["Find contacts by name",Object(G.jsx)("input",{className:K.a.inputFilter,type:"text",value:t,name:"search",onChange:function(t){return e(_(t.target.value))}})]})})},T=function(){var t=Object(I.b)();return Object(r.useEffect)((function(){t(function(){var t=Object(R.a)(D.a.mark((function t(e){var n,c;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(j()),t.prev=1,t.next=4,X.a.get("/contacts");case 4:n=t.sent,c=n.data,e(p(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(d(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}),[t]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("h1",{children:"Phonebook"}),Object(G.jsx)(P,{}),Object(G.jsx)("h2",{children:"Contacts "}),Object(G.jsx)(Q,{}),Object(G.jsx)($,{})]})};u.a.render(Object(G.jsx)(I.a,{store:g,children:Object(G.jsx)(T,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={contactInput:"ContactForm_contactInput__3F4aX",buttonInput:"ContactForm_buttonInput__2jpFN",formContact:"ContactForm_formContact__1m6-5",inputLabel:"ContactForm_inputLabel__1leXm"}}},[[63,1,2]]]);
//# sourceMappingURL=main.bd864a93.chunk.js.map