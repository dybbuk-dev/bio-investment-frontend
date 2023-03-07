"use strict";(self.webpackChunkbio_invest_web=self.webpackChunkbio_invest_web||[]).push([[323],{64323:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(57689),i=t(11087),o=t(62711),s=t(66934),c=t(39504),a=t(64554),d=t(20890),u=t(36314),l=t(57621),f=t(50533),h=t(52989),x=t(38072),m=t(25212),p=(t(10486),t(62090),t(29998)),v=t(80184),Z=(0,s.ZP)(c.Z)((function(e){return{display:"flex",padding:32,width:230,height:200,"&:hover":{color:e.theme.palette.primary.main},cursor:"pointer"}})),g=(0,s.ZP)("div")((function(e){return{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",flexDirection:"column",padding:e.theme.spacing(0,6),margin:"auto"}}));function j(){(0,p.Z)("up","md");var e=(0,r.s0)(),n=function(n){1===n&&e("/auth/register-primary"),2===n&&e("/auth/register-legal"),3===n&&e("/auth/register-invest")};return(0,v.jsxs)(m.Z,{title:"Choose signup mode",sx:{height:1},children:[(0,v.jsx)(h.Z,{}),(0,v.jsx)(g,{children:(0,v.jsxs)(a.Z,{sx:{mx:"auto",mt:10},children:[(0,v.jsxs)(d.Z,{paragraph:!0,sx:{textAlign:"center",mb:8},fontSize:32,children:["Selecione o seu ",(0,v.jsx)("b",{children:"tipo de investidor"})]}),(0,v.jsxs)(u.Z,{direction:{xs:"column",sm:"row"},gap:2,sx:{mb:8},alignItems:"center",children:[(0,v.jsx)(l.Z,{onClick:function(){return n(1)},children:(0,v.jsx)(Z,{children:(0,v.jsxs)(u.Z,{sx:{flexGrow:1,width:"100%",height:"100%",alignItems:"center",justifyContent:"center",gap:2},children:[(0,v.jsx)(o.JO,{icon:"mdi:user",width:48}),(0,v.jsx)(d.Z,{variant:"h6",sx:{mt:2},children:"Pessoa f\xedsica"})]})})}),(0,v.jsx)(l.Z,{onClick:function(){return n(2)},children:(0,v.jsx)(Z,{sx:{display:"flex",padding:4},children:(0,v.jsxs)(u.Z,{sx:{flexGrow:1,width:"100%",height:"100%",alignItems:"center",justifyContent:"center",gap:2},children:[(0,v.jsx)(o.JO,{icon:"ri:building-line",width:48}),(0,v.jsx)(d.Z,{variant:"h6",sx:{mt:2},children:"Pessoa jur\xeddica"})]})})}),(0,v.jsx)(l.Z,{onClick:function(){return n(3)},children:(0,v.jsx)(Z,{sx:{display:"flex",padding:4},children:(0,v.jsxs)(u.Z,{sx:{flexGrow:1,width:"100%",height:"100%",alignItems:"center",justifyContent:"center",gap:2},children:[(0,v.jsx)(o.JO,{icon:"mdi:finance",width:48}),(0,v.jsx)(d.Z,{variant:"h6",sx:{textAlign:"center"},children:"Fundo de investimento"})]})})})]}),(0,v.jsxs)(d.Z,{variant:"body2",sx:{mt:3,textAlign:"center"},children:["J\xe1 tem uma conta?"," ",(0,v.jsx)(f.Z,{variant:"subtitle2",to:x.EE.login,component:i.rU,children:"Fa\xe7a Login"})]})]})})]})}},62090:function(e,n,t){t.d(n,{Q:function(){return v}});var r=t(1413),i=t(74165),o=t(15861),s=t(62797),c=t(62065),a=t(57689),d=t(72791),u=t(61134),l=t(44695),f=t(36314),h=t(28029),x=t(59860),m=t(38072),p=t(80184);function v(){var e=(0,a.s0)(),n=(0,c.Ds)().enqueueSnackbar,t=s.Ry().shape({code1:s.Z_().required("Code is required"),code2:s.Z_().required("Code is required"),code3:s.Z_().required("Code is required"),code4:s.Z_().required("Code is required"),code5:s.Z_().required("Code is required"),code6:s.Z_().required("Code is required")}),v=(0,u.cI)({mode:"onBlur",resolver:(0,l.X)(t),defaultValues:{code1:"",code2:"",code3:"",code4:"",code5:"",code6:""}}),Z=v.watch,g=v.control,j=v.setValue,C=v.handleSubmit,w=v.formState,b=w.isSubmitting,y=w.isValid,q=Z();(0,d.useEffect)((function(){document.addEventListener("paste",S)}),[]);var k=function(){var t=(0,o.Z)((0,i.Z)().mark((function t(r){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:console.log("code:",Object.values(r).join("")),n("Verify success!"),e(m.vB.root,{replace:!0}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),S=function(e){var n,t=(null===e||void 0===e||null===(n=e.clipboardData)||void 0===n?void 0:n.getData("Text"))||"";t=t.split(""),[].forEach.call(document.querySelectorAll("#field-code"),(function(e,n){e.value=t[n];var r="code".concat(n+1);j(r,t[n])}))};return(0,p.jsxs)("form",{onSubmit:C(k),children:[(0,p.jsx)(f.Z,{direction:"row",spacing:2,justifyContent:"center",children:Object.keys(q).map((function(e,n){return(0,p.jsx)(u.Qr,{name:"code".concat(n+1),control:g,render:function(e){var t=e.field;return(0,p.jsx)(h.Z,(0,r.Z)((0,r.Z)({},t),{},{id:"field-code",autoFocus:0===n,placeholder:"-",onChange:function(e){return function(e,n){var t=e.target,r=t.maxLength,i=t.value,o=t.name.replace("code",""),s=Number(o);if(i.length>=r&&s<6){var c=document.querySelector("input[name=code".concat(s+1,"]"));null!==c&&c.focus()}n(e)}(e,t.onChange)},inputProps:{maxLength:1,sx:{p:0,textAlign:"center",width:{xs:36,sm:56},height:{xs:36,sm:56}}}}))}},e)}))}),(0,p.jsx)(x.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:b,disabled:!y,sx:{mt:3},children:"Verify"})]})}},39504:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(87462),i=t(63366),o=t(72791),s=t(28182),c=t(94419),a=t(66934),d=t(31402),u=t(75878),l=t(21217);function f(e){return(0,l.Z)("MuiCardContent",e)}(0,u.Z)("MuiCardContent",["root"]);var h=t(80184),x=["className","component"],m=(0,a.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),p=o.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiCardContent"}),o=t.className,a=t.component,u=void 0===a?"div":a,l=(0,i.Z)(t,x),p=(0,r.Z)({},t,{component:u}),v=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},f,n)}(p);return(0,h.jsx)(m,(0,r.Z)({as:u,className:(0,s.Z)(v.root,o),ownerState:p,ref:n},l))}))},57621:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(87462),i=t(63366),o=t(72791),s=t(28182),c=t(94419),a=t(66934),d=t(31402),u=t(35527),l=t(75878),f=t(21217);function h(e){return(0,f.Z)("MuiCard",e)}(0,l.Z)("MuiCard",["root"]);var x=t(80184),m=["className","raised"],p=(0,a.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{overflow:"hidden"}})),v=o.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiCard"}),o=t.className,a=t.raised,u=void 0!==a&&a,l=(0,i.Z)(t,m),f=(0,r.Z)({},t,{raised:u}),v=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},h,n)}(f);return(0,x.jsx)(p,(0,r.Z)({className:(0,s.Z)(v.root,o),elevation:u?8:void 0,ref:n,ownerState:f},l))}))}}]);
//# sourceMappingURL=323.be9c3f1a.chunk.js.map