(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(35)},27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),l=a.n(o),i=(a(27),a(3)),c=a(7),u=function(e){return{type:"REMOVE_BILL",id:e}},s=function(e,t){return{type:"EDIT_BILL",id:e,payload:{data:t}}},m=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)("Select Category"),u=Object(i.a)(l,2),s=u[0],m=u[1],d=Object(n.useState)(),p=Object(i.a)(d,2),f=p[0],v=p[1],h=Object(n.useState)(),g=Object(i.a)(h,2),b=g[0],y=g[1],E=Object(c.b)();return r.a.createElement("div",{className:"row gy-3"},r.a.createElement("h3",null,"Add Bill"),r.a.createElement("form",null,r.a.createElement("div",{className:"mb-3"},r.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput1",placeholder:"Description",value:a,onChange:function(e){o(e.target.value)}})),r.a.createElement("div",{className:"mb-3"},r.a.createElement("select",{className:"form-select","aria-label":"Default select example",value:s,onChange:function(e){m(e.target.value)}},r.a.createElement("option",{value:"Select Category"},"Select Category"),r.a.createElement("option",{value:"Food & Dining"},"Food & Dining"),r.a.createElement("option",{value:"Utility"},"Utility"),r.a.createElement("option",{value:"Shopping"},"Shopping"),r.a.createElement("option",{value:"Education"},"Education"),r.a.createElement("option",{value:"Personal Care"},"Personal Care"),r.a.createElement("option",{value:"Travel"},"Travel"))),r.a.createElement("div",{className:"mb-3"},r.a.createElement("input",{type:"number",className:"form-control",id:"exampleFormControlInput1",placeholder:"Amount",value:f,onChange:function(e){v(Number(e.target.value))}})),r.a.createElement("div",{className:"mb-3"},r.a.createElement("input",{type:"date",className:"form-control",id:"exampleFormControlInput1",placeholder:"Date",value:b,onChange:function(e){y(e.target.value)}})),r.a.createElement("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault();var t=b?new Date(b).toLocaleDateString("en-ZA"):(new Date).toLocaleDateString("en-ZA");E(function(e){return{type:"ADD_BILL",payload:{data:e}}}({description:a||"Untitled",category:"Select Category"===s?"General":s,amount:f||0,date:t}))}},"Add Bill")))},d=a(18),p=(a(34),function(e){return r.a.createElement("div",{className:"mt-3 mb-3"},r.a.createElement("h3",null,"Monthly Billing"),r.a.createElement(d.a,{data:e.data}))}),f=a(17),v=a(2);function h(){h=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(D){c=function(e,t,a){return e[t]=a}}function u(e,t,a,r){var o=t&&t.prototype instanceof d?t:d,l=Object.create(o.prototype),i=new L(r||[]);return n(l,"_invoke",{value:w(e,a,i)}),l}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(D){return{type:"throw",arg:D}}}e.wrap=u;var m={};function d(){}function p(){}function f(){}var v={};c(v,o,function(){return this});var g=Object.getPrototypeOf,b=g&&g(g(S([])));b&&b!==t&&a.call(b,o)&&(v=b);var y=f.prototype=d.prototype=Object.create(v);function E(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function N(e,t){var r;n(this,"_invoke",{value:function(n,o){function l(){return new t(function(r,l){!function n(r,o,l,i){var c=s(e[r],e,o);if("throw"!==c.type){var u=c.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,l,i)},function(e){n("throw",e,l,i)}):t.resolve(m).then(function(e){u.value=e,l(u)},function(e){return n("throw",e,l,i)})}i(c.arg)}(n,o,r,l)})}return r=r?r.then(l,l):l()}})}function w(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return C()}for(a.method=r,a.arg=o;;){var l=a.delegate;if(l){var i=O(l,a);if(i){if(i===m)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=s(e,t,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}function O(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=s(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=f,n(y,"constructor",{value:f,configurable:!0}),n(f,"constructor",{value:p,configurable:!0}),p.displayName=c(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(N.prototype),c(N.prototype,l,function(){return this}),e.AsyncIterator=N,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var l=new N(u(t,a,n,r),o);return e.isGeneratorFunction(a)?l:l.next().then(function(e){return e.done?e.value:l.next()})},E(y),c(y,i,"Generator"),c(y,o,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=S,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return l.type="throw",l.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],l=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),j(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;j(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:S(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}var g=function(){var e=Object(c.c)(function(e){return e.billReducers.bills}),t=Object(v.a)(e).sort(function(e,t){return t.amount-e.amount}),a=Object(c.b)(),o=Object(n.useState)(0),l=Object(i.a)(o,2),m=l[0],d=l[1],p=Object(n.useState)(""),g=Object(i.a)(p,2),b=g[0],y=g[1],E=Object(n.useState)("Select Category"),N=Object(i.a)(E,2),w=N[0],O=N[1],x=Object(n.useState)(0),j=Object(i.a)(x,2),L=j[0],S=j[1],C=Object(n.useState)(),D=Object(i.a)(C,2),_=D[0],k=D[1],F=Object(n.useState)(),I=Object(i.a)(F,2),T=I[0],B=I[1],A=Object(n.useState)("Select Category"),P=Object(i.a)(A,2),G=P[0],M=P[1],U=T,R=function(){var e=Object(f.a)(h().mark(function e(t){var n,r,o;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=m,r=_?new Date(_).toLocaleDateString("en-ZA"):(new Date).toLocaleDateString("en-ZA"),o={description:b||"Untitled",category:"Select Category"===w?"General":w,amount:L||0,date:r},e.next=6,a(s(n,o));case 6:return e.next=8,V.current.click();case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),V=Object(n.useRef)(null);return r.a.createElement("div",{className:"row gy-3"},r.a.createElement("h3",null,"Your Bills"),r.a.createElement("div",{className:"mb-3"},r.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput1",placeholder:"Your Budget",value:T,onChange:function(e){B(Number(e.target.value))}}),r.a.createElement("select",{className:"form-select mt-2","aria-label":"Default select example",value:G,onChange:function(e){return function(e){M(e.target.value)}(e)}},r.a.createElement("option",{value:"Select Category"},"Select Category"),r.a.createElement("option",{value:"General"},"General"),r.a.createElement("option",{value:"Food & Dining"},"Food & Dining"),r.a.createElement("option",{value:"Utility"},"Utility"),r.a.createElement("option",{value:"Shopping"},"Shopping"),r.a.createElement("option",{value:"Education"},"Education"),r.a.createElement("option",{value:"Personal Care"},"Personal Care"),r.a.createElement("option",{value:"Travel"},"Travel")),r.a.createElement("div",{className:"mt-3"},r.a.createElement("i",{className:"text-bg-danger me-2 p-2"},"Within Budget"),r.a.createElement("i",{className:"text-bg-secondary me-2 p-2"},"Out of Budget"))),t.map(function(t){return"Select Category"===G||t.category===G?(t.amount<=T&&(U-=t.amount),console.log(U),r.a.createElement("div",{className:"col-lg-3",key:t.id},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header text-white "+(U>=0&&t.amount<=T?"text-bg-danger":"text-bg-secondary")},t.description),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},"Rs. ",t.amount),r.a.createElement("li",{className:"list-group-item"},t.category),r.a.createElement("li",{className:"list-group-item"},t.date)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{className:"btn btn-warning me-2",onClick:function(){return a=t.id,d(a),y(e[a].description),S(e[a].amount),O(e[a].category),k(e[a].date),void V.current.click();var a}},"Edit"),r.a.createElement("button",{className:"btn btn-danger me-2",onClick:function(){return a(u(t.id))}}," Delete"))))):null}),r.a.createElement("button",{ref:V,type:"button",className:"btn btn-primary d-none","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},"Edit Bill"),r.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h1",{className:"modal-title fs-5",id:"exampleModalLabel"},"Edit Bill"),r.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),r.a.createElement("div",{className:"modal-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"mb-3"},r.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput1",placeholder:"Description",value:b,onChange:function(e){y(e.target.value)}})),r.a.createElement("div",{className:"mb-3"},r.a.createElement("select",{className:"form-select","aria-label":"Default select example",value:w,onChange:function(e){O(e.target.value)}},r.a.createElement("option",{value:"Select Category"},"Select Category"),r.a.createElement("option",{value:"Food & Dining"},"Food & Dining"),r.a.createElement("option",{value:"Utility"},"Utility"),r.a.createElement("option",{value:"Shopping"},"Shopping"),r.a.createElement("option",{value:"Education"},"Education"),r.a.createElement("option",{value:"Personal Care"},"Personal Care"),r.a.createElement("option",{value:"Travel"},"Travel"))),r.a.createElement("div",{className:"mb-3"},r.a.createElement("input",{type:"number",className:"form-control",id:"exampleFormControlInput1",placeholder:"Amount",value:L,onChange:function(e){S(Number(e.target.value))}})),r.a.createElement("div",{className:"mb-3"},r.a.createElement("input",{type:"date",className:"form-control",id:"exampleFormControlInput1",placeholder:"Date",value:_,onChange:function(e){k(e.target.value)}})))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(e){return R(e)}},"Save changes"),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"))))))},b=function(){var e=Object(c.c)(function(e){return e.billReducers.bills}),t=Object(n.useState)({labels:e.map(function(e){return new Date(e.date).toLocaleString("default",{month:"long"})}),datasets:[{label:"Bill Amount",data:e.map(function(e){return e.amount}),backgroundColor:["red"]}]}),a=Object(i.a)(t,2),o=a[0];a[1];return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p,{data:o}),r.a.createElement(m,null),r.a.createElement(g,null)))},y=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Carwash Bills"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home"),r.a.createElement("a",{className:"nav-link",href:"/add"},"Add"))))))},E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(b,null))},N=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,37)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),o(e),l(e)})},w=a(8),O=a(6),x={bills:[{id:0,description:"Dominoes",category:"Food & Dining",amount:430,date:"2020/01/02"},{id:1,description:"Amazon",category:"Shopping",amount:2030,date:"2020/01/13"},{id:2,description:"Car wash",category:"Utility",amount:500,date:"2020/01/03"}],ind:2},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BILL":var a=t.payload.data,n=e.ind+1;return{bills:[].concat(Object(v.a)(e.bills),[Object(O.a)({id:n},a)]),ind:n};case"REMOVE_BILL":var r=e.bills.filter(function(e){return e.id!==t.id});return Object(O.a)({},e,{bills:r});case"EDIT_BILL":return Object(O.a)({},e,{bills:[].concat(Object(v.a)(e.bills.slice(0,t.id)),[Object(O.a)({},e.bills[t.id],t.payload.data)],Object(v.a)(e.bills.slice(t.id+1)))});default:return e}},L=Object(w.a)({billReducers:j}),S=Object(w.b)(L,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:S},r.a.createElement(E,null)))),N()}},[[19,3,2]]]);
//# sourceMappingURL=main.de1aee26.chunk.js.map