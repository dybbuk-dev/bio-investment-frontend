"use strict";(self.webpackChunkbio_invest_web=self.webpackChunkbio_invest_web||[]).push([[962],{96962:function(e,n,r){r.r(n),r.d(n,{default:function(){return g}});var t=r(4942),i=r(11087),o=r(66934),c=r(64554),a=r(24518),d=r(20890),s=r(50533),u=r(52989),l=r(38072),h=r(25212),f=r(10486),m=r(62090),x=r(29998),v=r(32331),p=r(80184),Z=(0,o.ZP)("div")((function(e){var n=e.theme;return(0,t.Z)({},n.breakpoints.up("md"),{display:"flex"})})),b=(0,o.ZP)("div")((function(e){return{maxWidth:430,display:"flex",minHeight:"100vh",flexDirection:"column",padding:e.theme.spacing(12,6),margin:"auto"}}));function g(){var e=(0,x.Z)("up","md");return(0,p.jsx)(h.Z,{title:"Verify",sx:{height:1},children:(0,p.jsxs)(Z,{children:[(0,p.jsx)(u.Z,{}),(0,p.jsx)(b,{children:(0,p.jsxs)(c.Z,{sx:{maxWidth:420,mx:"auto"},children:[(0,p.jsx)(a.Z,{size:"small",component:i.rU,to:l.EE.login,startIcon:(0,p.jsx)(f.Z,{icon:"eva:arrow-ios-back-fill",width:20,height:20}),sx:{mb:3},children:"Back"}),(0,p.jsx)(d.Z,{variant:"h3",paragraph:!0,children:"Please check your email!"}),(0,p.jsx)(d.Z,{sx:{color:"text.secondary"},children:"We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email."}),(0,p.jsx)(c.Z,{sx:{mt:5,mb:3},children:(0,p.jsx)(m.Q,{})}),(0,p.jsxs)(d.Z,{variant:"body2",align:"center",children:["Don\u2019t have a code? \xa0",(0,p.jsx)(s.Z,{variant:"subtitle2",underline:"none",onClick:function(){},children:"Resend code"})]})]})}),e&&(0,p.jsx)(v.Z,{})]})})}},62090:function(e,n,r){r.d(n,{Q:function(){return p}});var t=r(1413),i=r(74165),o=r(15861),c=r(62797),a=r(62065),d=r(57689),s=r(72791),u=r(61134),l=r(44695),h=r(36314),f=r(28029),m=r(59860),x=r(38072),v=r(80184);function p(){var e=(0,d.s0)(),n=(0,a.Ds)().enqueueSnackbar,r=c.Ry().shape({code1:c.Z_().required("Code is required"),code2:c.Z_().required("Code is required"),code3:c.Z_().required("Code is required"),code4:c.Z_().required("Code is required"),code5:c.Z_().required("Code is required"),code6:c.Z_().required("Code is required")}),p=(0,u.cI)({mode:"onBlur",resolver:(0,l.X)(r),defaultValues:{code1:"",code2:"",code3:"",code4:"",code5:"",code6:""}}),Z=p.watch,b=p.control,g=p.setValue,j=p.handleSubmit,y=p.formState,q=y.isSubmitting,k=y.isValid,w=Z();(0,s.useEffect)((function(){document.addEventListener("paste",_)}),[]);var C=function(){var r=(0,o.Z)((0,i.Z)().mark((function r(t){return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:console.log("code:",Object.values(t).join("")),n("Verify success!"),e(x.vB.root,{replace:!0}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),_=function(e){var n,r=(null===e||void 0===e||null===(n=e.clipboardData)||void 0===n?void 0:n.getData("Text"))||"";r=r.split(""),[].forEach.call(document.querySelectorAll("#field-code"),(function(e,n){e.value=r[n];var t="code".concat(n+1);g(t,r[n])}))};return(0,v.jsxs)("form",{onSubmit:j(C),children:[(0,v.jsx)(h.Z,{direction:"row",spacing:2,justifyContent:"center",children:Object.keys(w).map((function(e,n){return(0,v.jsx)(u.Qr,{name:"code".concat(n+1),control:b,render:function(e){var r=e.field;return(0,v.jsx)(f.Z,(0,t.Z)((0,t.Z)({},r),{},{id:"field-code",autoFocus:0===n,placeholder:"-",onChange:function(e){return function(e,n){var r=e.target,t=r.maxLength,i=r.value,o=r.name.replace("code",""),c=Number(o);if(i.length>=t&&c<6){var a=document.querySelector("input[name=code".concat(c+1,"]"));null!==a&&a.focus()}n(e)}(e,r.onChange)},inputProps:{maxLength:1,sx:{p:0,textAlign:"center",width:{xs:36,sm:56},height:{xs:36,sm:56}}}}))}},e)}))}),(0,v.jsx)(m.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:q,disabled:!k,sx:{mt:3},children:"Verify"})]})}}}]);
//# sourceMappingURL=962.495193bb.chunk.js.map