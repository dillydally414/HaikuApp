(()=>{"use strict";var e={196:(e,t,n)=>{n.r(t),n.d(t,{default:()=>X});var r=n(9526),l=n(3535),i=n(2982),o=n(885),a=n(1880),u=n(3292),s=n(7370),f=n(1553),d=n(1133),c=n(9233),h=n(3497),p=n(7695),g=n(6338),x=n.n(g);const y=JSON.parse('["dummy","stupid","idiot","loser","douche"]');var b=(0,i.default)(y),v=new(x())({placeHolder:""});v.addWords.apply(v,(0,i.default)(b));const m=function(e){var t=e.split(" ");return(t=t.filter((function(e){return!v.isProfane(e.toLowerCase())}))).join(" ")};var j,S,w=n(7557),O="#D3D3D3",T=(0,s.default)(h.default)(j||(j=(0,a.default)(["\n  align-self: center;\n  border-bottom-width: 1px;\n  display: flex;\n  margin-top: 5%;\n  padding-left: 0.5%;\n  width: 100%;\n"]))),H=(0,s.default)(c.default)(S||(S=(0,a.default)(["\n  display: flex;\n"])));const C=r.forwardRef((function(e,t){var n=e.placeholder,l=e.returnKeyType,i=void 0===l?"next":l,a=e.syllableGoal,u=e.onSubmit,s=void 0===u?function(){}:u,f=e.lineProps,d=f.text,c=f.setText,h=f.setComplete,g=(0,r.useState)(!1),x=(0,o.default)(g,2),y=x[0],b=x[1],v=(0,r.useState)(0),j=(0,o.default)(v,2),S=j[0],C=j[1];return(0,r.useEffect)((function(){h(S===a)}),[S]),(0,r.useEffect)((function(){C((0,p.syllable)(d))}),[d]),(0,r.useEffect)((function(){c(m(d))}),[y]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(T,{placeholder:n+" ("+a+" syllables)",onChangeText:function(e){return c(e.endsWith(" ")?m(e):e)},defaultValue:d,placeholderTextColor:O,returnKeyType:i,autoCapitalize:"none",onFocus:function(){return b(!0)},onBlur:function(){return b(!1)},style:{borderBottomColor:y?"blue":O},onSubmitEditing:function(){return s()},ref:t}),(0,w.jsx)(H,{style:{color:a-S>0?"black":a===S?"green":"red"},children:a-S>0?a-S+" more syllable"+(a-S>1?"s":"")+".":a===S?"Right number of syllables!":S-a+" syllable"+(S-a>1?"s":"")+" over."})]})}));var P,k=(0,s.default)(d.default)(P||(P=(0,a.default)(["\n  align-self: center;\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n"])));const _=function(e){var t=e.lines,n=(0,r.useRef)(null),l=(0,r.useRef)(null),i=(0,r.useRef)(null);return(0,w.jsxs)(k,{children:[(0,w.jsx)(C,{placeholder:"First line goes here",syllableGoal:5,onSubmit:function(){var e;return null==(e=l.current)?void 0:e.focus()},ref:n,lineProps:t[0]}),(0,w.jsx)(C,{placeholder:"Second line goes here",syllableGoal:7,onSubmit:function(){var e;return null==(e=i.current)?void 0:e.focus()},ref:l,lineProps:t[1]}),(0,w.jsx)(C,{placeholder:"Third line goes here",syllableGoal:5,returnKeyType:"done",onSubmit:function(){var e;return null==(e=i.current)?void 0:e.blur()},ref:i,lineProps:t[2]})]})};var E,F,R,z=s.default.ScrollView(E||(E=(0,a.default)(["\n  background-color: #fff;\n  display: flex;\n  height: 100%;\n  width: 100%;\n"]))),G=s.default.Text(F||(F=(0,a.default)(["\n  font-size: 30px;\n  padding: 0;\n"]))),M=s.default.View(R||(R=(0,a.default)(["\n  display: flex;\n  height: 25%;\n  justify-content: center;\n"])));const B=function(e){var t=e.navigation,n=(0,r.useState)(["","",""]),l=(0,o.default)(n,2),a=l[0],s=l[1],c=(0,r.useState)([!1,!1,!1]),h=(0,o.default)(c,2),p=h[0],g=h[1];return(0,w.jsxs)(z,{scrollEnabled:!1,contentContainerStyle:{alignItems:"center",display:"flex",height:"100%",width:"100%"},children:[(0,w.jsx)(d.default,{style:{minHeight:"12%",height:"12%",maxHeight:"12%"}}),(0,w.jsx)(G,{children:"Haiku Buddy"}),(0,w.jsx)(d.default,{style:{minHeight:"10%",height:"10%",maxHeight:"10%"}}),(0,w.jsx)(u.default,{style:"auto"}),(0,w.jsx)(_,{lines:a.map((function(e,t){return{text:e,setText:function(e){return s([].concat((0,i.default)(a.slice(0,t)),[e],(0,i.default)(a.slice(t+1))))},setComplete:function(e){return g([].concat((0,i.default)(p.slice(0,t)),[e],(0,i.default)(p.slice(t+1))))}}}))}),p.reduce((function(e,t){return e&&t}),!0)&&(0,w.jsx)(M,{children:(0,w.jsx)(f.default,{title:"Finished!",onPress:function(){return t.navigate("Finished",{haiku:a})}})})]})};var D,K,N,V,I=n(4637),W=n(8576),J=n(4419),L=((0,s.default)(d.default)(D||(D=(0,a.default)(["\n  align-items: center;\n  display: flex;\n  padding: 20%;\n"]))),(0,s.default)(c.default)(K||(K=(0,a.default)(["\n  font-size: 20px;\n  margin: 0pt 1.5% 0pt;\n"])))),q=(0,s.default)(c.default)(N||(N=(0,a.default)(["\n  color: blue;\n  text-decoration: underline blue;\n"]))),A=(0,s.default)(c.default)(V||(V=(0,a.default)(["\n  font-size: 10px;\n"])));const Q=function(e){e.navigation;var t=e.route.params.haiku,n=(0,r.useState)(!1),l=(0,o.default)(n,2),i=l[0],a=l[1],u=(0,r.useState)(0),s=(0,o.default)(u,2),f=s[0],c=s[1],h=(0,r.useState)(),p=(0,o.default)(h,2),g=p[0],x=p[1];return(0,r.useEffect)((function(){if(i){g&&clearTimeout(g);var e=setTimeout((function(){return a(!1)}),1e3);return x(e),function(){clearTimeout(e),x(void 0)}}}),[f]),(0,w.jsxs)(W.default,{scrollEnabled:!1,contentContainerStyle:{alignItems:"center",height:"100%",width:"100%",display:"flex",padding:"0% 20%"},children:[(0,w.jsx)(d.default,{style:{minHeight:"10%",height:"10%",maxHeight:"10%"}}),t.map((function(e,t){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d.default,{style:{minHeight:"1.5%",height:"1.5%",maxHeight:"1.5%"}},e+" "+t+" spacer1"),(0,w.jsx)(L,{children:e},e+t),(0,w.jsx)(d.default,{style:{minHeight:"1.5%",height:"1.5%",maxHeight:"1.5%"}},e+" "+t+" spacer2")]})})),(0,w.jsx)(d.default,{style:{minHeight:"20%",height:"20%",maxHeight:"20%"}}),(0,w.jsx)(I.default,{style:function(e){return[{opacity:e.pressed?.5:1}]},onPress:function(){J.setString(t.join("\n")),a(!0),c(f+1)},children:(0,w.jsx)(q,{children:"Copy to Clipboard!"})}),i&&(0,w.jsx)(A,{children:"Copied!"})]})};var U=(0,n(3827).default)();function X(){return(0,w.jsx)(l.default,{children:(0,w.jsxs)(U.Navigator,{children:[(0,w.jsx)(U.Screen,{name:"Home",component:B,options:{headerShown:!1}}),(0,w.jsx)(U.Screen,{name:"Finished",component:Q,options:{headerTitle:""}})]})})}}},t={};function n(r){var l=t[r];if(void 0!==l)return l.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,(()=>{var e=[];n.O=(t,r,l,i)=>{if(!r){var o=1/0;for(f=0;f<e.length;f++){for(var[r,l,i]=e[f],a=!0,u=0;u<r.length;u++)(!1&i||o>=i)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(a=!1,i<o&&(o=i));if(a){e.splice(f--,1);var s=l();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,l,i]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,l){if(1&l&&(r=this(r)),8&l)return r;if("object"===typeof r&&r){if(4&l&&r.__esModule)return r;if(16&l&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var a=2&l&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,n.d(i,o),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var l,i,[o,a,u]=r,s=0;if(o.some((t=>0!==e[t]))){for(l in a)n.o(a,l)&&(n.m[l]=a[l]);if(u)var f=u(n)}for(t&&t(r);s<o.length;s++)i=o[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0;var r=n.O(void 0,[385],(()=>n(9386)));r=n.O(r)})();
//# sourceMappingURL=main.eae4aaee.js.map