(this.webpackJsonpmoney_exchange=this.webpackJsonpmoney_exchange||[]).push([[0],{109:function(e,n,c){"use strict";c.r(n);var a=c(0),t=c.n(a),r=c(22),s=c.n(r),l=(c(89),c(57)),i=c(12),u=c(37),o=(c(90),c(129)),b=c(132),j=c(130),d=c(131),O=c(77),h=c.n(O),m=c(78),f=c(71),x=c(8),g=c(79),v=(c(93),c(4)),p=["children"],y=function(e){var n=e.isDisabled,c=e.data;return Object(v.jsx)(x.l.Option,Object(i.a)(Object(i.a)({},e),{},{className:"option ".concat("none"===c.value?"empty-option":""," ").concat(n?"disabled":""),children:"none"!==c.value?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("span",{className:"flag-icon flag-icon-".concat(c.flag)}),Object(v.jsx)("span",{className:"clabel",children:c.label}),c.balance?Object(v.jsxs)("span",{className:"balance",children:[c.unit," ",c.balance]}):null]}):null}))},N=function(e){var n=e.children,c=Object(l.a)(e,p),a=c.getValue();return a[0]?Object(v.jsxs)(x.l.ValueContainer,Object(i.a)(Object(i.a)({},c),{},{className:"value-container",children:[Object(v.jsx)("span",{className:"flag-icon flag-icon-".concat(a[0].flag)}),Object(v.jsx)("span",{children:a[0].label}),n[1]?Object(v.jsx)("div",{children:[n[1]]}):null]})):null};function C(e){return Object(v.jsx)(g.a,Object(i.a)(Object(i.a)({},e),{},{className:"currency-select",components:{ValueContainer:N,Option:y}}))}var S=["to-currency"];function k(e){return!isNaN(+e)}var E=[{currency:"usd",balance:200},{currency:"gbp",balance:150},{currency:"eur",balance:10}],V=[{label:"USD",value:"usd",unit:"$",flag:"usa"},{label:"GBP",value:"gbp",unit:"\xa3",flag:"gbr"},{label:"EUR",value:"eur",unit:"\u20ac",flag:"eun"}];function F(e){return Math.round(100*e)/100}var M=f.a.createPipe({mask:Number,scale:2,radix:".",signed:!1,unmask:"typed",thousandsSeparator:",",padFractionalZeros:!1});var T=function(){var e=t.a.useState(""),n=Object(u.a)(e,2),c=n[0],r=n[1],s=t.a.useState({}),O=Object(u.a)(s,2),f=O[0],x=O[1],g=t.a.useState("usd"),p=Object(u.a)(g,2),y=p[0],N=p[1],T=t.a.useState("none"),U=Object(u.a)(T,2),B=U[0],D=U[1],P=t.a.useState(null),R=Object(u.a)(P,2),w=R[0],I=R[1],A=t.a.useState(!1),G=Object(u.a)(A,2),J=G[0],L=G[1],Z=t.a.useState({}),_=Object(u.a)(Z,2),z=_[0],$=_[1];function q(e){$((function(n){var c=Object(i.a)({},n);return c[e]&&delete c[e],c}))}Object(a.useEffect)((function(){H["from-currency"](y),H["to-currency"](B)}),[]),Object(a.useEffect)((function(){fetch("https://api.frankfurter.app/latest?base=".concat(encodeURIComponent(y))).then((function(e){return e.json()})).then((function(e){x(e.rates),q("fetchRate")})).catch((function(e){$((function(n){return Object(i.a)(Object(i.a)({},n),{},{fetchRate:{message:"Cannot update exchange rates [ "+e+" ]"}})}))}))}),[y,B]);var H={amount:function(e){e>W.balance?$(Object(i.a)(Object(i.a)({},z),{},{amount:{message:"No sufficient balance."}})):q("amount")},"from-currency":function(e){e===B?$(Object(i.a)(Object(i.a)({},z),{},{"to-currency":{message:"Exchange can only be done in different currency."}})):q("to-currency")},"to-currency":function(e){e===y?$(Object(i.a)(Object(i.a)({},z),{},{"to-currency":{message:"Exchange can only be done in different currency."}})):q("to-currency")}};Object(a.useEffect)((function(){if(w){var e=w.rates,n=w.amount,c=w.toCurrencyVal,a=w.fromCurrencyVal,t=e[c.toUpperCase()],r=F(n*t);setTimeout((function(){var e;(e=5,Math.floor(Math.random()*e))?(E.forEach((function(e,t){e.currency===a?e.balance=F(e.balance-n):e.currency===c&&(e.balance=F(e.balance+r))})),L(!0)):($((function(e){return Object(i.a)(Object(i.a)({},e),{},{exchange:{message:"Exchange failed."}})})),setTimeout((function(){q("exchange")}),1e4),I(null))}),2e3)}}),[w]);var K=function(e){return V.find((function(n){return n.value===e}))},Q=function(e){return E.find((function(n){return n.currency===e}))},W=Q(y),X=Q(B),Y=K(y),ee="none"!==B?K(B):null,ne=(z["to-currency"],Object(l.a)(z,S)),ce=Object.values(ne).map((function(e,n){return Object(v.jsx)("div",{children:e.message},n)})),ae="none"!==B?y!==B?f[B.toUpperCase()]:1:null,te=k(c)&&c&&ae?F(c*ae):"";return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("h1",{children:"Money Exchange"}),Object(v.jsxs)("div",{className:"clearfix",children:[Object(v.jsxs)("div",{className:"from-currency",children:[Object(v.jsx)("div",{className:"tip-label noselect",children:"Sell"}),Object(v.jsxs)("div",{className:"currency-input-box",children:[Object(v.jsx)("div",{className:"type-box",children:Object(v.jsx)(C,{name:"from-currency",value:Object(i.a)(Object(i.a)({},Y),{},{balance:W.balance}),isSearchable:!1,options:E.map((function(e,n){var c=K(e.currency);return Object(i.a)(Object(i.a)({},c),{},{balance:e.balance})})),onChange:function(e){N(e.value),r(""),H["from-currency"](e.value),H.amount("")}})}),Object(v.jsxs)("div",{className:"amount-box ".concat(z.amount?"error":""),children:[Object(v.jsx)("label",{children:Y.unit}),Object(v.jsx)(m.a,{name:"amount",onAccept:function(e,n){r(n.unmaskedValue),H[n.el.input.name](n.unmaskedValue)},className:"amount",mask:Number,scale:2,radix:".",signed:!1,padFractionalZeros:!1,thousandsSeparator:",",unmask:!0,value:c,placeholder:"0.00"})]})]}),Object(v.jsxs)("div",{className:"balance",children:["Balance: ",Object(v.jsxs)("strong",{children:[Y.unit,M(W.balance.toString())]})]})]}),Object(v.jsx)("div",{className:"switch noselect",onClick:function(){if("none"!==B&&B!==y){var e=y;r(""),N(B),D(e)}},children:"<>"}),Object(v.jsxs)("div",{className:"to-currency",children:[Object(v.jsx)("div",{className:"tip-label noselect",children:"Get"}),Object(v.jsxs)("div",{className:"currency-input-box",children:[Object(v.jsx)("div",{className:"type-box ".concat(z["to-currency"]?"error":""),children:Object(v.jsx)(C,{name:"to-currency",value:ee?Object(i.a)({},ee):{value:"none"},isSearchable:!1,options:[{value:"none"}].concat(V).map((function(e,n){return Object(i.a)({},e)})),isOptionDisabled:function(e){return e.value===y},onChange:function(e){D(e.value),H["to-currency"](e.value)}})}),Object(v.jsxs)("div",{className:"amount-box",children:[Object(v.jsx)("label",{children:ee?ee.unit:""}),Object(v.jsx)("input",{className:"amount",readOnly:!0,value:M(te.toString())})]})]}),Object(v.jsxs)("div",{className:"rate ".concat(ee?"":"hide"),children:["1 ",Y.label," = ",Object(v.jsx)("strong",{children:ae})," ",ee?ee.label:"",y!==B?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("br",{}),Object(v.jsx)("span",{style:{color:"rgb(202, 120, 0)"},children:"The rate might change anytime"})]}):null]})]})]}),Object(v.jsx)("div",{className:"alert-message-box",children:ce.length?Object(v.jsx)(d.a,{severity:"error",children:ce}):null}),Object(v.jsx)("div",{children:Object(v.jsx)(o.a,{disabled:!k(c)||!c||B===y||!ee||null!==w||function(){var e=Object.keys(z).length;return(1!==e||!z.exchange)&&e>0}(),variant:"contained",disableElevation:!0,color:"primary",size:"large",className:"exchange-button",onClick:function(){I({rates:f,amount:c,toCurrencyVal:B,fromCurrencyVal:y}),L(!1),q("exchange")},children:w?"Exchanging ...":"Continue"})}),Object(v.jsxs)(b.a,{className:"exchange-notify",open:null!==w,onClick:function(){J&&(I(null),L(!1))},children:[J?null:Object(v.jsx)("div",{className:"exchange-progress",children:Object(v.jsx)(j.a,{color:"inherit"})}),J?Object(v.jsxs)("div",{className:"exchange-success-notify",children:[Object(v.jsx)(h.a,{className:"icon"}),Object(v.jsxs)("div",{className:"message",children:["Completed",Object(v.jsx)("br",{})]}),Object(v.jsxs)("div",{className:"balance",children:[Object(v.jsx)("strong",{children:ee.label})," balance:",Object(v.jsxs)("div",{className:"currency",children:[ee.unit," ",M(X.balance.toString())]})]})]}):null]})]})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,134)).then((function(n){var c=n.getCLS,a=n.getFID,t=n.getFCP,r=n.getLCP,s=n.getTTFB;c(e),a(e),t(e),r(e),s(e)}))};s.a.render(Object(v.jsx)(t.a.StrictMode,{children:Object(v.jsx)(T,{})}),document.getElementById("root")),U()},89:function(e,n,c){},90:function(e,n,c){},93:function(e,n,c){}},[[109,1,2]]]);
//# sourceMappingURL=main.895e5086.chunk.js.map