(()=>{"use strict";var e={5882:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var r=n(6665),l=n(6520),i=n(5458),o=n(296),a=n(7225),u=n(2267),s=n(8180),f=n(3929),d=n(6283),c=n(6773),h=n(3434),g=n(1401),p=n.n(g);const x=JSON.parse('["dummy","stupid","idiot","loser","douche"]');var y=(0,i.default)(x),m=new(p())({placeHolder:""});m.addWords.apply(m,(0,i.default)(y));const v=function(e){var t=e.split(" ");return(t=t.filter((function(e){return!m.isProfane(e.toLowerCase())}))).join(" ")};var b=n(397),j="#D3D3D3",S=(0,u.default)(c.default)`
  align-self: center;
  border-bottom-width: 1px;
  display: flex;
  padding-left: 0.5%;
  width: 100%;
  height: 40%;
`,w=(0,u.default)(d.default)`
  display: flex;
  height: 30%;
`;const H=r.forwardRef((function(e,t){var n=e.placeholder,l=e.returnKeyType,i=void 0===l?"next":l,a=e.syllableGoal,u=e.onSubmit,s=void 0===u?function(){}:u,d=e.lineProps,c=d.text,g=d.setText,p=d.setComplete,x=(0,r.useState)(!1),y=(0,o.default)(x,2),m=y[0],H=y[1],O=(0,r.useState)(0),T=(0,o.default)(O,2),C=T[0],P=T[1];return(0,r.useEffect)((function(){p(C===a)}),[C]),(0,r.useEffect)((function(){P((0,h.syllable)(c))}),[c]),(0,r.useEffect)((function(){g(v(c))}),[m]),(0,b.jsxs)(f.default,{style:{minHeight:"30%",height:"30%",maxHeight:"30%"},children:[(0,b.jsx)(f.default,{style:{minHeight:"5%",height:"5%",maxHeight:"5%"}}),(0,b.jsx)(S,{placeholder:`${n} (${a} syllables)`,onChangeText:function(e){return g(e.endsWith(" ")?v(e):e)},value:c,placeholderTextColor:j,returnKeyType:i,autoCapitalize:"none",onFocus:function(){return H(!0)},onBlur:function(){g(v(c)),H(!1)},style:{borderBottomColor:m?"blue":j},onSubmitEditing:function(){return s()},ref:t}),(0,b.jsx)(f.default,{style:{minHeight:"5%",height:"5%",maxHeight:"5%"}}),(0,b.jsx)(w,{style:{color:a-C>0?"black":a===C?"green":"red"},children:a-C>0?`${a-C} more syllable${a-C>1?"s":""}.`:a===C?"Right number of syllables!":`${C-a} syllable${C-a>1?"s":""} over.`})]})}));var O=(0,u.default)(f.default)`
  align-self: center;
  display: flex;
  justify-content: space-between;
  height: 25%;
  width: 80%;
`;const T=function(e){var t=e.lines,n=(0,r.useRef)(null),l=(0,r.useRef)(null),i=(0,r.useRef)(null);return(0,b.jsxs)(O,{children:[(0,b.jsx)(H,{placeholder:"First line goes here",syllableGoal:5,onSubmit:function(){var e;return null==(e=l.current)?void 0:e.focus()},ref:n,lineProps:t[0]}),(0,b.jsx)(H,{placeholder:"Second line goes here",syllableGoal:7,onSubmit:function(){var e;return null==(e=i.current)?void 0:e.focus()},ref:l,lineProps:t[1]}),(0,b.jsx)(H,{placeholder:"Third line goes here",syllableGoal:5,returnKeyType:"done",onSubmit:function(){var e;return null==(e=i.current)?void 0:e.blur()},ref:i,lineProps:t[2]})]})};var C=u.default.ScrollView`
  background-color: #fff;
  display: flex;
  height: 100%;
  width: 100%;
`,P=u.default.Text`
  font-size: 30px;
  padding: 0;
`,k=u.default.View`
  display: flex;
  height: 15%;
  min-width: 15%;
  justify-content: flex-end;
`;const _=function(e){var t=e.navigation,n=(0,r.useState)(["","",""]),l=(0,o.default)(n,2),u=l[0],d=l[1],c=(0,r.useState)([!1,!1,!1]),h=(0,o.default)(c,2),g=h[0],p=h[1];return(0,b.jsxs)(C,{scrollEnabled:!1,contentContainerStyle:{alignItems:"center",display:"flex",height:"100%",width:"100%"},children:[(0,b.jsx)(f.default,{style:{minHeight:"12%",height:"12%",maxHeight:"12%"}}),(0,b.jsx)(P,{children:"Haiku Buddy"}),(0,b.jsx)(f.default,{style:{minHeight:"10%",height:"10%",maxHeight:"10%"}}),(0,b.jsx)(a.StatusBar,{style:"auto"}),(0,b.jsx)(T,{lines:u.map((function(e,t){return{text:e,setText:function(e){return d([].concat((0,i.default)(u.slice(0,t)),[e],(0,i.default)(u.slice(t+1))))},setComplete:function(e){return p([].concat((0,i.default)(g.slice(0,t)),[e],(0,i.default)(g.slice(t+1))))}}}))}),(0,b.jsx)(f.default,{style:{minHeight:"10%",height:"10%",maxHeight:"10%"}}),(0,b.jsxs)(k,{children:[g.every((function(e){return e}))&&(0,b.jsx)(s.default,{title:"Finished!",onPress:function(){return t.navigate("Finished",{haiku:u})}}),(0,b.jsx)(f.default,{style:{minHeight:"15%",height:"15%",maxHeight:"15%"}}),(0,b.jsx)(s.default,{title:"Clear",color:"red",onPress:function(){return d(["","",""])}})]})]})};var E=n(5708),F=n(2772),$=n(9822),R=((0,u.default)(f.default)`
  align-items: center;
  display: flex;
  padding: 20%;
`,(0,u.default)(d.default)`
  font-size: 20px;
`),z=(0,u.default)(d.default)`
  color: blue;
  text-decoration: underline blue;
`,B=(0,u.default)(d.default)`
  font-size: 10px;
`;const G=function(e){e.navigation;var t=e.route.params.haiku,n=(0,r.useState)(!1),l=(0,o.default)(n,2),i=l[0],a=l[1],u=(0,r.useState)(0),s=(0,o.default)(u,2),d=s[0],c=s[1],h=(0,r.useState)(),g=(0,o.default)(h,2),p=g[0],x=g[1];return(0,r.useEffect)((function(){if(i){p&&clearTimeout(p);var e=setTimeout((function(){return a(!1)}),1e3);return x(e),function(){clearTimeout(e),x(void 0)}}}),[d]),(0,b.jsxs)(F.default,{scrollEnabled:!1,contentContainerStyle:{alignItems:"center",height:"100%",width:"100%",display:"flex",padding:"0% 20%"},children:[(0,b.jsx)(f.default,{style:{minHeight:"10%",height:"10%",maxHeight:"10%"}}),t.map((function(e,t){return(0,b.jsxs)(r.Fragment,{children:[(0,b.jsx)(f.default,{style:{minHeight:"1.5%",height:"1.5%",maxHeight:"1.5%"}}),(0,b.jsx)(R,{children:e}),(0,b.jsx)(f.default,{style:{minHeight:"1.5%",height:"1.5%",maxHeight:"1.5%"}})]},e+t)})),(0,b.jsx)(f.default,{style:{minHeight:"20%",height:"20%",maxHeight:"20%"}}),(0,b.jsx)(E.default,{style:function(e){return[{opacity:e.pressed?.5:1}]},onPress:function(){$.setString(t.join("\n")),a(!0),c(d+1)},children:(0,b.jsx)(z,{children:"Copy to Clipboard!"})}),i&&(0,b.jsx)(B,{children:"Copied!"})]})};var M=(0,n(9672).default)();function D(){return(0,b.jsx)(l.default,{children:(0,b.jsxs)(M.Navigator,{children:[(0,b.jsx)(M.Screen,{name:"Home",component:_,options:{headerShown:!1}}),(0,b.jsx)(M.Screen,{name:"Finished",component:G,options:{headerTitle:""}})]})})}}},t={};function n(r){var l=t[r];if(void 0!==l)return l.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,(()=>{var e=[];n.O=(t,r,l,i)=>{if(!r){var o=1/0;for(f=0;f<e.length;f++){for(var[r,l,i]=e[f],a=!0,u=0;u<r.length;u++)(!1&i||o>=i)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(a=!1,i<o&&(o=i));if(a){e.splice(f--,1);var s=l();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,l,i]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,l){if(1&l&&(r=this(r)),8&l)return r;if("object"===typeof r&&r){if(4&l&&r.__esModule)return r;if(16&l&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var a=2&l&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,n.d(i,o),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var l,i,[o,a,u]=r,s=0;if(o.some((t=>0!==e[t]))){for(l in a)n.o(a,l)&&(n.m[l]=a[l]);if(u)var f=u(n)}for(t&&t(r);s<o.length;s++)i=o[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0;var r=n.O(void 0,[309],(()=>n(5819)));r=n.O(r)})();
//# sourceMappingURL=main.b65ada9f.js.map