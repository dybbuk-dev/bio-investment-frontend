(self.webpackChunkbio_invest_web=self.webpackChunkbio_invest_web||[]).push([[1983],{45649:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=r(28610)},43896:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var o=r(4942),n=r(63366),l=r(87462),i=r(72791),a=r(28182),c=r(94419),s=r(95080),u=r(14036),d=r(31402),f=r(66934),v=r(75878),b=r(21217);function p(e){return(0,b.Z)("MuiTab",e)}var h=(0,v.Z)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),m=r(80184),Z=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],w=(0,f.ZP)(s.Z,{name:"MuiTab",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.label&&r.icon&&t.labelIcon,t["textColor".concat((0,u.Z)(r.textColor))],r.fullWidth&&t.fullWidth,r.wrapped&&t.wrapped]}})((function(e){var t,r,n,i=e.theme,a=e.ownerState;return(0,l.Z)({},i.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},a.label&&{flexDirection:"top"===a.iconPosition||"bottom"===a.iconPosition?"column":"row"},{lineHeight:1.25},a.icon&&a.label&&(0,o.Z)({minHeight:72,paddingTop:9,paddingBottom:9},"& > .".concat(h.iconWrapper),(0,l.Z)({},"top"===a.iconPosition&&{marginBottom:6},"bottom"===a.iconPosition&&{marginTop:6},"start"===a.iconPosition&&{marginRight:i.spacing(1)},"end"===a.iconPosition&&{marginLeft:i.spacing(1)})),"inherit"===a.textColor&&(t={color:"inherit",opacity:.6},(0,o.Z)(t,"&.".concat(h.selected),{opacity:1}),(0,o.Z)(t,"&.".concat(h.disabled),{opacity:(i.vars||i).palette.action.disabledOpacity}),t),"primary"===a.textColor&&(r={color:(i.vars||i).palette.text.secondary},(0,o.Z)(r,"&.".concat(h.selected),{color:(i.vars||i).palette.primary.main}),(0,o.Z)(r,"&.".concat(h.disabled),{color:(i.vars||i).palette.text.disabled}),r),"secondary"===a.textColor&&(n={color:(i.vars||i).palette.text.secondary},(0,o.Z)(n,"&.".concat(h.selected),{color:(i.vars||i).palette.secondary.main}),(0,o.Z)(n,"&.".concat(h.disabled),{color:(i.vars||i).palette.text.disabled}),n),a.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},a.wrapped&&{fontSize:i.typography.pxToRem(12)})})),x=i.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiTab"}),o=r.className,s=r.disabled,f=void 0!==s&&s,v=r.disableFocusRipple,b=void 0!==v&&v,h=r.fullWidth,x=r.icon,g=r.iconPosition,S=void 0===g?"top":g,C=r.indicator,y=r.label,M=r.onChange,B=r.onClick,W=r.onFocus,E=r.selected,R=r.selectionFollowsFocus,T=r.textColor,P=void 0===T?"inherit":T,k=r.value,N=r.wrapped,F=void 0!==N&&N,z=(0,n.Z)(r,Z),L=(0,l.Z)({},r,{disabled:f,disableFocusRipple:b,selected:E,icon:!!x,iconPosition:S,label:!!y,fullWidth:h,textColor:P,wrapped:F}),I=function(e){var t=e.classes,r=e.textColor,o=e.fullWidth,n=e.wrapped,l=e.icon,i=e.label,a=e.selected,s=e.disabled,d={root:["root",l&&i&&"labelIcon","textColor".concat((0,u.Z)(r)),o&&"fullWidth",n&&"wrapped",a&&"selected",s&&"disabled"],iconWrapper:["iconWrapper"]};return(0,c.Z)(d,p,t)}(L),H=x&&y&&i.isValidElement(x)?i.cloneElement(x,{className:(0,a.Z)(I.iconWrapper,x.props.className)}):x;return(0,m.jsxs)(w,(0,l.Z)({focusRipple:!b,className:(0,a.Z)(I.root,o),ref:t,role:"tab","aria-selected":E,disabled:f,onClick:function(e){!E&&M&&M(e,k),B&&B(e)},onFocus:function(e){R&&!E&&M&&M(e,k),W&&W(e)},ownerState:L,tabIndex:E?0:-1},z,{children:["top"===S||"start"===S?(0,m.jsxs)(i.Fragment,{children:[H,y]}):(0,m.jsxs)(i.Fragment,{children:[y,H]}),C]}))}))},39124:function(e,t,r){"use strict";r.d(t,{Z:function(){return K}});var o,n=r(29439),l=r(4942),i=r(63366),a=r(87462),c=r(72791),s=(r(57441),r(28182)),u=r(94419),d=r(66934),f=r(31402),v=r(13967),b=r(83199);function p(){if(o)return o;var e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),o="reverse",e.scrollLeft>0?o="default":(e.scrollLeft=1,0===e.scrollLeft&&(o="negative")),document.body.removeChild(e),o}function h(e,t){var r=e.scrollLeft;if("rtl"!==t)return r;switch(p()){case"negative":return e.scrollWidth-e.clientWidth+r;case"reverse":return e.scrollWidth-e.clientWidth-r;default:return r}}function m(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var Z=r(17602),w=r(80184),x=["onChange"],g={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var S=r(7883),C=r(11883),y=r(95080),M=r(75878),B=r(21217);function W(e){return(0,B.Z)("MuiTabScrollButton",e)}var E,R,T=(0,M.Z)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),P=["className","direction","orientation","disabled"],k=(0,d.ZP)(y.Z,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.orientation&&t[r.orientation]]}})((function(e){var t=e.ownerState;return(0,a.Z)((0,l.Z)({width:40,flexShrink:0,opacity:.8},"&.".concat(T.disabled),{opacity:0}),"vertical"===t.orientation&&{width:"100%",height:40,"& svg":{transform:"rotate(".concat(t.isRtl?-90:90,"deg)")}})})),N=c.forwardRef((function(e,t){var r=(0,f.Z)({props:e,name:"MuiTabScrollButton"}),o=r.className,n=r.direction,l=(0,i.Z)(r,P),c="rtl"===(0,v.Z)().direction,d=(0,a.Z)({isRtl:c},r),b=function(e){var t=e.classes,r={root:["root",e.orientation,e.disabled&&"disabled"]};return(0,u.Z)(r,W,t)}(d);return(0,w.jsx)(k,(0,a.Z)({component:"div",className:(0,s.Z)(b.root,o),ref:t,role:null,ownerState:d,tabIndex:null},l,{children:"left"===n?E||(E=(0,w.jsx)(S.Z,{fontSize:"small"})):R||(R=(0,w.jsx)(C.Z,{fontSize:"small"}))}))})),F=r(89683);function z(e){return(0,B.Z)("MuiTabs",e)}var L=(0,M.Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),I=r(98301),H=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],j=function(e,t){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild},A=function(e,t){return e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild},X=function(e,t,r){for(var o=!1,n=r(e,t);n;){if(n===e.firstChild){if(o)return;o=!0}var l=n.disabled||"true"===n.getAttribute("aria-disabled");if(n.hasAttribute("tabindex")&&!l)return void n.focus();n=r(e,n)}},_=(0,d.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[(0,l.Z)({},"& .".concat(L.scrollButtons),t.scrollButtons),(0,l.Z)({},"& .".concat(L.scrollButtons),r.scrollButtonsHideMobile&&t.scrollButtonsHideMobile),t.root,r.vertical&&t.vertical]}})((function(e){var t=e.ownerState,r=e.theme;return(0,a.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&(0,l.Z)({},"& .".concat(L.scrollButtons),(0,l.Z)({},r.breakpoints.down("sm"),{display:"none"})))})),D=(0,d.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:function(e,t){var r=e.ownerState;return[t.scroller,r.fixed&&t.fixed,r.hideScrollbar&&t.hideScrollbar,r.scrollableX&&t.scrollableX,r.scrollableY&&t.scrollableY]}})((function(e){var t=e.ownerState;return(0,a.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})})),Y=(0,d.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:function(e,t){var r=e.ownerState;return[t.flexContainer,r.vertical&&t.flexContainerVertical,r.centered&&t.centered]}})((function(e){var t=e.ownerState;return(0,a.Z)({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})})),O=(0,d.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:function(e,t){return t.indicator}})((function(e){var t=e.ownerState,r=e.theme;return(0,a.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:r.transitions.create()},"primary"===t.indicatorColor&&{backgroundColor:(r.vars||r).palette.primary.main},"secondary"===t.indicatorColor&&{backgroundColor:(r.vars||r).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})})),V=(0,d.ZP)((function(e){var t=e.onChange,r=(0,i.Z)(e,x),o=c.useRef(),n=c.useRef(null),l=function(){o.current=n.current.offsetHeight-n.current.clientHeight};return c.useEffect((function(){var e=(0,b.Z)((function(){var e=o.current;l(),e!==o.current&&t(o.current)})),r=(0,Z.Z)(n.current);return r.addEventListener("resize",e),function(){e.clear(),r.removeEventListener("resize",e)}}),[t]),c.useEffect((function(){l(),t(o.current)}),[t]),(0,w.jsx)("div",(0,a.Z)({style:g,ref:n},r))}),{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),q={},G=c.forwardRef((function(e,t){var r=(0,f.Z)({props:e,name:"MuiTabs"}),o=(0,v.Z)(),d="rtl"===o.direction,x=r["aria-label"],g=r["aria-labelledby"],S=r.action,C=r.centered,y=void 0!==C&&C,M=r.children,B=r.className,W=r.component,E=void 0===W?"div":W,R=r.allowScrollButtonsMobile,T=void 0!==R&&R,P=r.indicatorColor,k=void 0===P?"primary":P,L=r.onChange,G=r.orientation,K=void 0===G?"horizontal":G,U=r.ScrollButtonComponent,J=void 0===U?N:U,Q=r.scrollButtons,$=void 0===Q?"auto":Q,ee=r.selectionFollowsFocus,te=r.TabIndicatorProps,re=void 0===te?{}:te,oe=r.TabScrollButtonProps,ne=void 0===oe?{}:oe,le=r.textColor,ie=void 0===le?"primary":le,ae=r.value,ce=r.variant,se=void 0===ce?"standard":ce,ue=r.visibleScrollbar,de=void 0!==ue&&ue,fe=(0,i.Z)(r,H),ve="scrollable"===se,be="vertical"===K,pe=be?"scrollTop":"scrollLeft",he=be?"top":"left",me=be?"bottom":"right",Ze=be?"clientHeight":"clientWidth",we=be?"height":"width",xe=(0,a.Z)({},r,{component:E,allowScrollButtonsMobile:T,indicatorColor:k,orientation:K,vertical:be,scrollButtons:$,textColor:ie,variant:se,visibleScrollbar:de,fixed:!ve,hideScrollbar:ve&&!de,scrollableX:ve&&!be,scrollableY:ve&&be,centered:y&&!ve,scrollButtonsHideMobile:!T}),ge=function(e){var t=e.vertical,r=e.fixed,o=e.hideScrollbar,n=e.scrollableX,l=e.scrollableY,i=e.centered,a=e.scrollButtonsHideMobile,c=e.classes,s={root:["root",t&&"vertical"],scroller:["scroller",r&&"fixed",o&&"hideScrollbar",n&&"scrollableX",l&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",i&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",a&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[o&&"hideScrollbar"]};return(0,u.Z)(s,z,c)}(xe);var Se=c.useState(!1),Ce=(0,n.Z)(Se,2),ye=Ce[0],Me=Ce[1],Be=c.useState(q),We=(0,n.Z)(Be,2),Ee=We[0],Re=We[1],Te=c.useState({start:!1,end:!1}),Pe=(0,n.Z)(Te,2),ke=Pe[0],Ne=Pe[1],Fe=c.useState({overflow:"hidden",scrollbarWidth:0}),ze=(0,n.Z)(Fe,2),Le=ze[0],Ie=ze[1],He=new Map,je=c.useRef(null),Ae=c.useRef(null),Xe=function(){var e,t,r=je.current;if(r){var n=r.getBoundingClientRect();e={clientWidth:r.clientWidth,scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollLeftNormalized:h(r,o.direction),scrollWidth:r.scrollWidth,top:n.top,bottom:n.bottom,left:n.left,right:n.right}}if(r&&!1!==ae){var l=Ae.current.children;if(l.length>0){var i=l[He.get(ae)];0,t=i?i.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},_e=(0,F.Z)((function(){var e,t,r=Xe(),o=r.tabsMeta,n=r.tabMeta,i=0;if(be)t="top",n&&o&&(i=n.top-o.top+o.scrollTop);else if(t=d?"right":"left",n&&o){var a=d?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;i=(d?-1:1)*(n[t]-o[t]+a)}var c=(e={},(0,l.Z)(e,t,i),(0,l.Z)(e,we,n?n[we]:0),e);if(isNaN(Ee[t])||isNaN(Ee[we]))Re(c);else{var s=Math.abs(Ee[t]-c[t]),u=Math.abs(Ee[we]-c[we]);(s>=1||u>=1)&&Re(c)}})),De=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).animation;void 0===t||t?function(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},l=o.ease,i=void 0===l?m:l,a=o.duration,c=void 0===a?300:a,s=null,u=t[e],d=!1,f=function(){d=!0};u===r?n(new Error("Element already at target position")):requestAnimationFrame((function o(l){if(d)n(new Error("Animation cancelled"));else{null===s&&(s=l);var a=Math.min(1,(l-s)/c);t[e]=i(a)*(r-u)+u,a>=1?requestAnimationFrame((function(){n(null)})):requestAnimationFrame(o)}}))}(pe,je.current,e,{duration:o.transitions.duration.standard}):je.current[pe]=e},Ye=function(e){var t=je.current[pe];be?t+=e:(t+=e*(d?-1:1),t*=d&&"reverse"===p()?-1:1),De(t)},Oe=function(){for(var e=je.current[Ze],t=0,r=Array.from(Ae.current.children),o=0;o<r.length;o+=1){var n=r[o];if(t+n[Ze]>e){0===o&&(t=e);break}t+=n[Ze]}return t},Ve=function(){Ye(-1*Oe())},qe=function(){Ye(Oe())},Ge=c.useCallback((function(e){Ie({overflow:null,scrollbarWidth:e})}),[]),Ke=(0,F.Z)((function(e){var t=Xe(),r=t.tabsMeta,o=t.tabMeta;if(o&&r)if(o[he]<r[he]){var n=r[pe]+(o[he]-r[he]);De(n,{animation:e})}else if(o[me]>r[me]){var l=r[pe]+(o[me]-r[me]);De(l,{animation:e})}})),Ue=(0,F.Z)((function(){if(ve&&!1!==$){var e,t,r=je.current,n=r.scrollTop,l=r.scrollHeight,i=r.clientHeight,a=r.scrollWidth,c=r.clientWidth;if(be)e=n>1,t=n<l-i-1;else{var s=h(je.current,o.direction);e=d?s<a-c-1:s>1,t=d?s>1:s<a-c-1}e===ke.start&&t===ke.end||Ne({start:e,end:t})}}));c.useEffect((function(){var e,t=(0,b.Z)((function(){je.current&&(_e(),Ue())})),r=(0,Z.Z)(je.current);return r.addEventListener("resize",t),"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(t),Array.from(Ae.current.children).forEach((function(t){e.observe(t)}))),function(){t.clear(),r.removeEventListener("resize",t),e&&e.disconnect()}}),[_e,Ue]);var Je=c.useMemo((function(){return(0,b.Z)((function(){Ue()}))}),[Ue]);c.useEffect((function(){return function(){Je.clear()}}),[Je]),c.useEffect((function(){Me(!0)}),[]),c.useEffect((function(){_e(),Ue()})),c.useEffect((function(){Ke(q!==Ee)}),[Ke,Ee]),c.useImperativeHandle(S,(function(){return{updateIndicator:_e,updateScrollButtons:Ue}}),[_e,Ue]);var Qe=(0,w.jsx)(O,(0,a.Z)({},re,{className:(0,s.Z)(ge.indicator,re.className),ownerState:xe,style:(0,a.Z)({},Ee,re.style)})),$e=0,et=c.Children.map(M,(function(e){if(!c.isValidElement(e))return null;var t=void 0===e.props.value?$e:e.props.value;He.set(t,$e);var r=t===ae;return $e+=1,c.cloneElement(e,(0,a.Z)({fullWidth:"fullWidth"===se,indicator:r&&!ye&&Qe,selected:r,selectionFollowsFocus:ee,onChange:L,textColor:ie,value:t},1!==$e||!1!==ae||e.props.tabIndex?{}:{tabIndex:0}))})),tt=function(){var e={};e.scrollbarSizeListener=ve?(0,w.jsx)(V,{onChange:Ge,className:(0,s.Z)(ge.scrollableX,ge.hideScrollbar)}):null;var t=ke.start||ke.end,r=ve&&("auto"===$&&t||!0===$);return e.scrollButtonStart=r?(0,w.jsx)(J,(0,a.Z)({orientation:K,direction:d?"right":"left",onClick:Ve,disabled:!ke.start},ne,{className:(0,s.Z)(ge.scrollButtons,ne.className)})):null,e.scrollButtonEnd=r?(0,w.jsx)(J,(0,a.Z)({orientation:K,direction:d?"left":"right",onClick:qe,disabled:!ke.end},ne,{className:(0,s.Z)(ge.scrollButtons,ne.className)})):null,e}();return(0,w.jsxs)(_,(0,a.Z)({className:(0,s.Z)(ge.root,B),ownerState:xe,ref:t,as:E},fe,{children:[tt.scrollButtonStart,tt.scrollbarSizeListener,(0,w.jsxs)(D,{className:ge.scroller,ownerState:xe,style:(0,l.Z)({overflow:Le.overflow},be?"margin".concat(d?"Left":"Right"):"marginBottom",de?void 0:-Le.scrollbarWidth),ref:je,onScroll:Je,children:[(0,w.jsx)(Y,{"aria-label":x,"aria-labelledby":g,"aria-orientation":"vertical"===K?"vertical":null,className:ge.flexContainer,ownerState:xe,onKeyDown:function(e){var t=Ae.current,r=(0,I.Z)(t).activeElement;if("tab"===r.getAttribute("role")){var o="horizontal"===K?"ArrowLeft":"ArrowUp",n="horizontal"===K?"ArrowRight":"ArrowDown";switch("horizontal"===K&&d&&(o="ArrowRight",n="ArrowLeft"),e.key){case o:e.preventDefault(),X(t,r,A);break;case n:e.preventDefault(),X(t,r,j);break;case"Home":e.preventDefault(),X(t,null,j);break;case"End":e.preventDefault(),X(t,null,A)}}},ref:Ae,role:"tablist",children:et}),ye&&Qe]}),tt.scrollButtonEnd]}))})),K=G},28610:function(e,t,r){"use strict";r.r(t),r.d(t,{capitalize:function(){return n.Z},createChainedFunction:function(){return l.Z},createSvgIcon:function(){return i.Z},debounce:function(){return a.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return s.Z},ownerDocument:function(){return u.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return v},unstable_ClassNameGenerator:function(){return g},unstable_useEnhancedEffect:function(){return b.Z},unstable_useId:function(){return p.Z},unsupportedProp:function(){return h},useControlled:function(){return m.Z},useEventCallback:function(){return Z.Z},useForkRef:function(){return w.Z},useIsFocusVisible:function(){return x.Z}});var o=r(55902),n=r(14036),l=r(31260),i=r(74223),a=r(83199);var c=function(e,t){return function(){return null}},s=r(19103),u=r(98301),d=r(17602);r(87462);var f=function(e,t){return function(){return null}},v=r(62971).Z,b=r(40162),p=r(67384);var h=function(e,t,r,o,n){return null},m=r(98278),Z=r(89683),w=r(42071),x=r(68221),g={configure:function(e){o.Z.configure(e)}}},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=1983.47e8a641.chunk.js.map