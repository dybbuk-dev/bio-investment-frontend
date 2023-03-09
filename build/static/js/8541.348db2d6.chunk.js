"use strict";(self.webpackChunkbio_invest_web=self.webpackChunkbio_invest_web||[]).push([[8541],{8541:function(e,r,n){n.r(r),n.d(r,{default:function(){return _}});var i=n(4942),t=n(75952),s=n(11087),a=n(66934),o=n(57621),l=n(20890),d=n(50533),u=n(89164),c=n(64554),m=n(20068),f=n(17834),x=n(53861),h=n(38072),p=n(25212),Z=n(7986),j=n(5977),v=n(36474),g=n(80184),b=(0,a.ZP)("div")((function(e){var r=e.theme;return(0,i.Z)({},r.breakpoints.up("md"),{display:"flex"})})),w=(0,a.ZP)("header")((function(e){var r=e.theme;return(0,i.Z)({top:0,zIndex:9,lineHeight:0,width:"100%",display:"flex",alignItems:"center",position:"absolute",padding:r.spacing(3),justifyContent:"space-between"},r.breakpoints.up("md"),{alignItems:"flex-start",padding:r.spacing(7,5,0,7)})})),y=(0,a.ZP)(o.Z)((function(e){return{width:"100%",maxWidth:464,display:"flex",flexDirection:"column",justifyContent:"center",margin:e.theme.spacing(2,0,2,2)}})),q=(0,a.ZP)("div")((function(e){return{maxWidth:480,margin:"auto",display:"flex",minHeight:"100vh",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(12,0)}}));function _(){var e=(0,f.Z)().method,r=(0,x.Z)("up","sm"),n=(0,x.Z)("up","md");return(0,g.jsx)(p.Z,{title:"Register",children:(0,g.jsxs)(b,{children:[(0,g.jsxs)(w,{children:[(0,g.jsx)(Z.Z,{}),r&&(0,g.jsxs)(l.Z,{variant:"body2",sx:{mt:{md:-2}},children:["Already have an account?"," ",(0,g.jsx)(d.Z,{variant:"subtitle2",component:s.rU,to:h.EE.login,children:"Login"})]})]}),n&&(0,g.jsxs)(y,{children:[(0,g.jsx)(l.Z,{variant:"h3",sx:{px:5,mt:10,mb:5},children:"Manage the job more effectively with Minimal"}),(0,g.jsx)(j.Z,{alt:"register",src:"https://minimal-assets-api.vercel.app/assets/illustrations/illustration_register.png"})]}),(0,g.jsx)(u.Z,{children:(0,g.jsxs)(q,{children:[(0,g.jsxs)(c.Z,{sx:{mb:5,display:"flex",alignItems:"center"},children:[(0,g.jsxs)(c.Z,{sx:{flexGrow:1},children:[(0,g.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:"Get started absolutely free."}),(0,g.jsx)(l.Z,{sx:{color:"text.secondary"},children:"Free forever. No credit card needed."})]}),(0,g.jsx)(m.Z,{title:(0,t.I)(e),children:(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(j.Z,{disabledEffect:!0,src:"https://minimal-assets-api.vercel.app/assets/icons/auth/ic_".concat(e,".png"),sx:{width:32,height:32}})})})]}),(0,g.jsx)(v.B,{}),(0,g.jsxs)(l.Z,{variant:"body2",align:"center",sx:{color:"text.secondary",mt:3},children:["By registering, I agree to Minimal\xa0",(0,g.jsx)(d.Z,{underline:"always",color:"text.primary",href:"#",children:"Terms of Service"}),"and",(0,g.jsx)(d.Z,{underline:"always",color:"text.primary",href:"#",children:"Privacy Policy"}),"."]}),!r&&(0,g.jsxs)(l.Z,{variant:"body2",sx:{mt:3,textAlign:"center"},children:["Already have an account?"," ",(0,g.jsx)(d.Z,{variant:"subtitle2",to:h.EE.login,component:s.rU,children:"Login"})]})]})})]})})}},36474:function(e,r,n){n.d(r,{B:function(){return w}});var i=n(74165),t=n(15861),s=n(29439),a=n(62797),o=n(72791),l=n(61134),d=n(44695),u=n(36314),c=n(19658),m=n(63466),f=n(13400),x=n(59860),h=n(17834),p=n(22175),Z=n(10486),j=n(45143),v=n(26533),g=n(80184),b=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;function w(e){var r=e.mode,n=(0,v.Z)().translate,w=(0,h.Z)().register,y=(0,p.Z)(),q=(0,o.useState)(!1),_=(0,s.Z)(q,2),C=_[0],P=_[1],k=a.Ry().shape({fullname:a.Z_().required("Name field is required"),cpf:a.Z_().required("CPF field is required"),email:a.Z_().email("Email must be a valid email address").required("Email is required"),password:a.Z_().required("Password is required"),agree:a.O7().isTrue().required("You should agree terms & condition, please check")}),S=a.Ry().shape({reason:a.Z_().required("Reason Social field is required"),phone:a.Z_().required("Phone number field is required").matches(b,"Phone number is not valid"),cnpj:a.Z_().required("CNPJ field is required"),email:a.Z_().email("Email must be a valid email address").required("Email is required"),password:a.Z_().required("Password is required"),agree:a.O7().isTrue().required("You should agree terms & condition, please check")}),E=(0,l.cI)({resolver:(0,d.X)(1===r&&k||S),defaultValues:{fullname:"",email:"",cpf:"",password:"",agree:!1,cnpj:"",phone:"",reason:""}}),G=E.reset,I=E.setError,R=E.handleSubmit,M=E.formState,N=M.errors,A=M.isSubmitting,B=function(){var e=(0,t.Z)((0,i.Z)().mark((function e(r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(r);case 3:e.next=10;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0),G(),y.current&&I("afterSubmit",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(r){return e.apply(this,arguments)}}();return(0,g.jsx)(j.RV,{methods:E,onSubmit:R(B),children:(0,g.jsxs)(u.Z,{spacing:3,width:"100%",children:[!!N.afterSubmit&&(0,g.jsx)(c.Z,{severity:"error",children:N.afterSubmit.message}),1===r&&(0,g.jsx)(j.au,{sx:{flexGrow:1},name:"fullname",label:n("words.fullname")}),r>=2&&(0,g.jsx)(j.au,{sx:{flexGrow:1},name:"reason",label:n("register.social")}),(0,g.jsx)(j.au,{sx:{flexGrow:1},name:"email",label:n("words.email")}),1===r&&(0,g.jsx)(j.au,{sx:{flexGrow:1},name:"cpf",label:n("words.cpf")}),r>=2&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(j.au,{sx:{flexGrow:1},name:"phone",label:n("words.phone")}),(0,g.jsx)(j.au,{sx:{flexGrow:1},name:"cnpj",label:n("words.cnpj")})]}),(0,g.jsx)(j.au,{sx:{flexGrow:1},name:"password",label:n("words.password"),type:C?"text":"password",InputProps:{endAdornment:(0,g.jsx)(m.Z,{position:"end",children:(0,g.jsx)(f.Z,{edge:"end",onClick:function(){return P(!C)},children:(0,g.jsx)(Z.Z,{icon:C?"eva:eye-fill":"eva:eye-off-fill"})})})}}),(0,g.jsx)(j.jb,{name:"agree",label:n("register.agree-terms")}),(0,g.jsx)(x.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:A,children:n("words.continue")})]})})}},57621:function(e,r,n){n.d(r,{Z:function(){return Z}});var i=n(87462),t=n(63366),s=n(72791),a=n(28182),o=n(94419),l=n(66934),d=n(31402),u=n(35527),c=n(75878),m=n(21217);function f(e){return(0,m.Z)("MuiCard",e)}(0,c.Z)("MuiCard",["root"]);var x=n(80184),h=["className","raised"],p=(0,l.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),Z=s.forwardRef((function(e,r){var n=(0,d.Z)({props:e,name:"MuiCard"}),s=n.className,l=n.raised,u=void 0!==l&&l,c=(0,t.Z)(n,h),m=(0,i.Z)({},n,{raised:u}),Z=function(e){var r=e.classes;return(0,o.Z)({root:["root"]},f,r)}(m);return(0,x.jsx)(p,(0,i.Z)({className:(0,a.Z)(Z.root,s),elevation:u?8:void 0,ref:r,ownerState:m},c))}))},75952:function(e,r,n){n.d(r,{I:function(){return o}});var i=n(3431),t=n(17254),s=n(48652);function a(e){return(0,s.l)(e.toLowerCase())}function o(e,r){return void 0===r&&(r={}),(0,t.B)(e,(0,i.pi)({delimiter:" ",transform:a},r))}},48652:function(e,r,n){function i(e){return e.charAt(0).toUpperCase()+e.substr(1)}n.d(r,{l:function(){return i}})}}]);
//# sourceMappingURL=8541.348db2d6.chunk.js.map