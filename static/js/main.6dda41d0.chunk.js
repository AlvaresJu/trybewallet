(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{45:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(18),c=a.n(l),o=a(24),i=(a(45),a(12)),u=a(4),s=a(8),d=a(9),m=a(10),p=a(11),E="USER_LOGIN",b=a(26),h=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.className;return r.a.createElement("h1",{className:e},r.a.createElement(b.b,null),r.a.createElement(b.a,null)," ","TrybeWallet")}}]),a}(n.Component),v=h,f=(a(50),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleEmailChange=function(t){var a=t.target.value,n=/\S+@\S+\.\S+/.test(a);e.setState({email:a,validEmail:n})},e.handlePasswordChange=function(t){var a=t.target.value.length>=6;e.setState({validPassword:a})},e.handleSubmit=function(t){t.preventDefault();var a=e.props,n=a.history;(0,a.registerEmail)(e.state.email),n.push("/carteira")},e.state={email:"",validEmail:!1,validPassword:!1},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.validEmail,n=e.validPassword;return r.a.createElement("div",{className:"login-container"},r.a.createElement("form",{className:"login-form"},r.a.createElement(v,{className:"large-logo"}),r.a.createElement("input",{type:"email","data-testid":"email-input",placeholder:"E-mail",value:t,onChange:this.handleEmailChange}),r.a.createElement("input",{type:"password","data-testid":"password-input",placeholder:"Senha",onChange:this.handlePasswordChange}),r.a.createElement("button",{type:"submit","data-testid":"login-submit-button",disabled:!(a&&n),onClick:this.handleSubmit},"Entrar")))}}]),a}(r.a.Component)),g=Object(i.b)(null,(function(e){return{registerEmail:function(t){return e(function(e){return{type:E,email:e}}(t))}}}))(f),j=a(35),O=a(34),x=(a(51),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.loggedEmail,a=e.totalExpense;return r.a.createElement("header",null,r.a.createElement(v,{className:"medium-logo"}),r.a.createElement("div",{className:"total-expense-container"},r.a.createElement(O.a,null),r.a.createElement("span",null,r.a.createElement("strong",null,"Tota de despesas:")," ","R$"," "),r.a.createElement("span",{"data-testid":"total-field"},a.toFixed(2)),r.a.createElement("span",{"data-testid":"header-currency-field"},"BRL")),r.a.createElement("div",{className:"email-container"},r.a.createElement(j.a,null),r.a.createElement("span",{"data-testid":"email-field"},t)))}}]),a}(n.Component)),y=Object(i.b)((function(e){return{loggedEmail:e.user.email,totalExpense:e.wallet.totalExpense}}),null)(x),w=a(36),D=a(37),C=a(2),k=a(16),T=a(27),N="REQUEST_DATA",R="FAILED_REQUEST",S="GET_CURRENCIES",A="ADD_EXPENSE",I="REMOVE_EXPENSE",V="EDIT_EXPENSE",F="SAVE_EDITED_EXPENSE",P="CHANGE_INPUT",_=function(){return{type:N}},M=function(e){return{type:R,requestError:e}},L=function(e,t){return{type:A,expense:e,valueBRL:t}},U=(a(52),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleRemoveExpense=function(t){var a=t.id,n=t.value,r=t.currency,l=t.exchangeRates;(0,e.props.removeExpenseItem)(a,n*l[r].ask)},e.handleEditExpense=function(t){(0,e.props.enableExpenseEditing)(t.id,{value:t.value,description:t.description,currency:t.currency,method:t.method,tag:t.tag})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.expenses;return r.a.createElement("div",{className:"expenses-table"},r.a.createElement("table",null,r.a.createElement("caption",null,"Lista de Despesas"),r.a.createElement("thead",{className:"table-tr"},r.a.createElement("tr",null,r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",null,"Tag"),r.a.createElement("th",null,"M\xe9todo de pagamento"),r.a.createElement("th",null,"Valor"),r.a.createElement("th",null,"Moeda"),r.a.createElement("th",null,"C\xe2mbio utilizado"),r.a.createElement("th",null,"Valor convertido"),r.a.createElement("th",null,"Moeda de convers\xe3o"),r.a.createElement("th",null,"Editar/Excluir"))),r.a.createElement("tbody",null,t.length>0&&t.map((function(t){var a=t.id,n=t.value,l=t.description,c=t.currency,o=t.method,i=t.tag,u=t.exchangeRates;return r.a.createElement("tr",{key:a},r.a.createElement("td",null,l),r.a.createElement("td",null,i),r.a.createElement("td",null,o),r.a.createElement("td",null,Number(n).toFixed(2)),r.a.createElement("td",null,u[c].name),r.a.createElement("td",null,Number(u[c].ask).toFixed(2)),r.a.createElement("td",null,Number(n*u[c].ask).toFixed(2)),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,r.a.createElement("button",{type:"button","data-testid":"edit-btn",className:"edit-btn",onClick:function(){return e.handleEditExpense(t)}},r.a.createElement(w.a,null)),r.a.createElement("button",{type:"button","data-testid":"delete-btn",className:"delete-btn",onClick:function(){return e.handleRemoveExpense(t)}},r.a.createElement(D.a,null))))})))))}}]),a}(n.Component)),q=Object(i.b)((function(e){return{expenses:e.wallet.expenses}}),(function(e){return{removeExpenseItem:function(t,a){return e(function(e,t){return{type:I,idToRemove:e,valueToRemove:t}}(t,a))},enableExpenseEditing:function(t,a){return e(function(e,t){return{type:V,idToEdit:e,inputsToEdit:t}}(t,a))}}}))(U),B=(a(53),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleAddExpense=function(t){t.preventDefault();var a=e.props,n=a.expenses,r=a.addExpenseItem,l=a.formData,c=n.length>0?n[n.length-1].id+1:0;r(Object(C.a)({id:c},l))},e.handleSaveEdited=function(t){t.preventDefault();var a=e.props,n=a.expenses,r=a.idToEdit,l=a.formData,c=a.editExpenseItem,o=n.find((function(e){return e.id===r})),i=o.value*o.exchangeRates[o.currency].ask,u=l.value*o.exchangeRates[l.currency].ask;c(Object(C.a)({id:r},l),i,u)},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.getCurrencies)()}},{key:"render",value:function(){var e=this.props,t=e.currencies,a=e.loading,n=e.editor,l=e.formData,c=e.handleChange,o=l.value,i=l.description,u=l.currency,s=l.method,d=l.tag;return a?r.a.createElement("span",null,"Carregando..."):r.a.createElement("form",{className:"wallet-form"},r.a.createElement("h3",null,"Cadastro de Despesa"),r.a.createElement("label",{htmlFor:"value"},"Valor:",r.a.createElement("input",{type:"number","data-testid":"value-input",id:"value",min:0,value:o,onChange:c})),r.a.createElement("label",{htmlFor:"currency"},"Moeda:",r.a.createElement("select",{"data-testid":"currency-input",id:"currency",value:u,onChange:c},t.length>0&&t.map((function(e){return r.a.createElement("option",{key:e},e)})))),r.a.createElement("label",{htmlFor:"method"},"M\xe9todo de pagamento:",r.a.createElement("select",{"data-testid":"method-input",id:"method",value:s,onChange:c},r.a.createElement("option",null,"Dinheiro"),r.a.createElement("option",null,"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",null,"Cart\xe3o de d\xe9bito"))),r.a.createElement("label",{htmlFor:"tag"},"Categoria:",r.a.createElement("select",{"data-testid":"tag-input",id:"tag",value:d,onChange:c},r.a.createElement("option",null,"Alimenta\xe7\xe3o"),r.a.createElement("option",null,"Lazer"),r.a.createElement("option",null,"Trabalho"),r.a.createElement("option",null,"Transporte"),r.a.createElement("option",null,"Sa\xfade"))),r.a.createElement("label",{htmlFor:"description"},"Descri\xe7\xe3o:",r.a.createElement("input",{type:"text","data-testid":"description-input",id:"description",value:i,onChange:c})),n?r.a.createElement("button",{type:"submit",onClick:this.handleSaveEdited},"Editar despesa"):r.a.createElement("button",{type:"submit",onClick:this.handleAddExpense},"Adicionar despesa"))}}]),a}(n.Component)),X=Object(i.b)((function(e){return{currencies:e.wallet.currencies,loading:e.wallet.loading,expenses:e.wallet.expenses,editor:e.wallet.editor,idToEdit:e.wallet.idToEdit,formData:e.wallet.formData}}),(function(e){return{getCurrencies:function(){return e(function(){var e=Object(T.a)(Object(k.a)().mark((function e(t){var a,n,r;return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(_()),e.prev=1,e.next=4,fetch("https://economia.awesomeapi.com.br/json/all");case 4:return a=e.sent,e.next=7,a.json();case 7:if(!(n=e.sent).status){e.next=12;break}throw new Error("".concat(n.code,": ").concat(n.message));case 12:r=Object.keys(n).filter((function(e){return"USDT"!==e})),t({type:S,currencies:r});case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),t(M(e.t0.message)),console.log(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}())},addExpenseItem:function(t){return e((a=t,function(){var e=Object(T.a)(Object(k.a)().mark((function e(t){var n,r,l,c,o,i;return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(_()),e.prev=1,e.next=4,fetch("https://economia.awesomeapi.com.br/json/all");case 4:return n=e.sent,e.next=7,n.json();case 7:if(!(r=e.sent).status){e.next=12;break}throw new Error("".concat(r.code,": ").concat(r.message));case 12:l=Object(C.a)(Object(C.a)({},a),{},{exchangeRates:r}),c=a.value,o=a.currency,i=c*r[o].ask,t(L(l,i));case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(1),t(M(e.t0.message)),console.log(e.t0.message);case 22:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}()));var a},editExpenseItem:function(t,a,n){return e(function(e,t,a){return{type:F,editedData:e,subValue:t,addValue:a}}(t,a,n))},handleChange:function(t){return e(function(e){var t=e.target;return{type:P,input:t.id,inputValue:t.value}}(t))}}}))(B),G=(a(54),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"wallet-content"},r.a.createElement(X,null),r.a.createElement("div",{className:"header-table"},r.a.createElement(y,null),r.a.createElement(q,null)))}}]),a}(r.a.Component)),z=G;var J=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/carteira",component:z}),r.a.createElement(u.a,{exact:!0,path:"/",component:g}))},Q=a(13),W=a(38),H=a(39),$={email:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;return t.type===E?Object(C.a)(Object(C.a)({},e),{},{email:t.email}):e},Y=a(21),Z=a(40),ee={currencies:[],expenses:[],editor:!1,idToEdit:0,loading:!1,requestError:"",totalExpense:0,formData:{value:"",description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o"}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(C.a)(Object(C.a)({},e),{},{loading:!0});case R:return Object(C.a)(Object(C.a)({},e),{},{loading:!1,requestError:t.requestError});case S:return Object(C.a)(Object(C.a)({},e),{},{loading:!1,currencies:t.currencies});case A:return Object(C.a)(Object(C.a)({},e),{},{loading:!1,expenses:[].concat(Object(Z.a)(e.expenses),[t.expense]),totalExpense:e.totalExpense+t.valueBRL,formData:Object(C.a)(Object(C.a)({},e.formData),{},{value:"",description:""})});case I:return Object(C.a)(Object(C.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.idToRemove})),totalExpense:t.valueToRemove>e.totalExpense?0:e.totalExpense-t.valueToRemove});case V:return Object(C.a)(Object(C.a)({},e),{},{editor:!0,idToEdit:t.idToEdit,formData:Object(C.a)(Object(C.a)({},e.formData),t.inputsToEdit)});case F:return Object(C.a)(Object(C.a)({},e),{},{editor:!1,expenses:e.expenses.map((function(e){return e.id!==t.editedData.id?e:{id:e.id,value:t.editedData.value,description:t.editedData.description,currency:t.editedData.currency,method:t.editedData.method,tag:t.editedData.tag,exchangeRates:e.exchangeRates}})),totalExpense:e.totalExpense-t.subValue+t.addValue,formData:Object(C.a)(Object(C.a)({},e.formData),{},{value:"",description:""})});case P:return Object(C.a)(Object(C.a)({},e),{},{formData:Object(C.a)(Object(C.a)({},e.formData),{},Object(Y.a)({},t.input,t.inputValue))});default:return e}},ae=Object(Q.combineReducers)({user:K,wallet:te}),ne=Object(Q.createStore)(ae,Object(H.composeWithDevTools)(Object(Q.applyMiddleware)(W.a)));window.Cypress&&(window.store=ne);var re=ne;c.a.render(r.a.createElement(i.a,{store:re},r.a.createElement(o.a,{basename:"/trybewallet"},r.a.createElement(J,null))),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.6dda41d0.chunk.js.map