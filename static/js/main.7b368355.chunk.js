(this["webpackJsonpgoit-react-hw-003-phonebook"]=this["webpackJsonpgoit-react-hw-003-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={btn:"ContactListItem_btn__2vqga",textContent:"ContactListItem_textContent__3gBY2"}},12:function(t,e,n){t.exports={ul:"ContactList_ul__3sobX"}},2:function(t,e,n){t.exports={form:"ContactForm_form__GdV_7",title:"ContactForm_title__2V5Pz",inputContact:"ContactForm_inputContact__2ppVx",btn:"ContactForm_btn__2CwVz"}},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),c=n(11),r=n.n(c),s=n(13),o=n(3),l=n(4),u=n(5),m=n(7),h=n(6),b=n(22),d=n(2),j=n.n(d),p=n(0),f=function(t){Object(m.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={id:Object(b.a)(),name:"",number:""},t.handleChange=function(e){t.setState(Object(o.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.props.handleSubmit(t.state),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{className:j.a.form,onSubmit:this.onSubmit,children:[Object(p.jsx)("span",{className:j.a.title,children:"Name"}),Object(p.jsx)("input",{onChange:this.handleChange,className:j.a.inputContact,value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,placeholder:"\u0438\u043c\u044f:"}),Object(p.jsx)("span",{className:j.a.title,children:"Number"}),Object(p.jsx)("input",{className:j.a.inputContact,name:"number",type:"tel",onChange:this.handleChange,value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"\u0442\u0435\u043b:"}),Object(p.jsx)("button",{className:j.a.btn,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),O=f,x=n(8),C=n.n(x),_=function(t){var e=t.handleChange,n=t.filter;return Object(p.jsxs)("div",{className:C.a.block,children:[Object(p.jsx)("label",{className:C.a.title,htmlFor:"filter",children:"Find contacts by name:"}),Object(p.jsx)("input",{id:"filter",name:"filter",type:"text",className:C.a.input,onChange:e,value:n})]})},g=n(10),v=n.n(g),S=function(t){var e=t.item,n=t.handleDelete,a=e.name,i=e.number;return Object(p.jsx)("li",{children:Object(p.jsxs)("div",{className:v.a.textContent,children:[Object(p.jsxs)("span",{children:[a,": ",i]}),Object(p.jsx)("button",{className:v.a.btn,onClick:n,children:"X"})]})})},N=n(12),y=n.n(N),k=function(t){var e=t.items,n=t.handleDelete;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("ul",{className:y.a.ul,children:e.map((function(t){return Object(p.jsx)(S,{item:t,handleDelete:function(){return n(t.id)}},t.id)}))})})},w=function(t){Object(m.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={items:[],filter:""},t.handleDelete=function(e){t.setState((function(t){return{items:t.items.filter((function(t){return t.id!==e}))}}))},t.handleChange=function(e){t.setState(Object(o.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){if(e)if(t.state.items.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))alert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442: "+e.name+" \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 ");else{var n={id:Object(b.a)(),name:e.name,number:e.number};t.setState((function(t){return{items:[n].concat(Object(s.a)(t.items))}}))}else alert("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c!")},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("[componentDidMount]");var t=localStorage.getItem("items");if(t){var e=JSON.parse(t);this.setState({items:e})}}},{key:"componentDidUpdate",value:function(t,e){console.log("[componentDidUpdate]"),e.items!==this.state.items&&localStorage.setItem("items",JSON.stringify(this.state.items))}},{key:"render",value:function(){var t=this.state,e=t.items,n=t.filter,a=n.toLowerCase().trim(),i=e.filter((function(t){return t.name.toLowerCase().includes(a)}));return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(O,{handleSubmit:this.handleSubmit}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(_,{filter:n,handleChange:this.handleChange}),Object(p.jsx)(k,{items:i,handleDelete:this.handleDelete})]})]})}}]),n}(a.Component),D=w;n(20);r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={block:"Filter_block__1VBaR",title:"Filter_title__c_AKi",input:"Filter_input__20Yiz"}}},[[21,1,2]]]);
//# sourceMappingURL=main.7b368355.chunk.js.map