(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3999:function(e,t,n){Promise.resolve().then(n.bind(n,2466)),Promise.resolve().then(n.t.bind(n,1359,23))},7781:function(e,t,n){"use strict";n.d(t,{o:function(){return s}});let s=(0,n(2574).U)(e=>({ishome:!1,setIshome:t=>e({ishome:t})}))},2466:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var s=n(3827),i=n(4090),l=n(2169),a=n(3879),r=n(438),o=n(3417),c=n(9475),d=n(1213),u=n(7781),m=n(7907),x=n(8792),h=n(2377);let f=e=>{let{tabs:t,containerClassName:n,activeTabClassName:a,tabClassName:r,contentClassName:o}=e,[c,d]=(0,i.useState)(t[0]),[u,m]=(0,i.useState)(t),x=e=>{let n=[...t],s=n.splice(e,1);n.unshift(s[0]),m(n),d(n[0])},[f,p]=(0,i.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:(0,l.cn)("flex flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",n),children:t.map((e,t)=>(0,s.jsxs)("button",{onClick:()=>{x(t)},onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),className:(0,l.cn)("relative px-4 py-2 rounded-full",r),style:{transformStyle:"preserve-3d"},children:[c.value===e.value&&(0,s.jsx)(h.E.div,{layoutId:"clickedbutton",transition:{type:"spring",bounce:.3,duration:.6},className:(0,l.cn)("absolute inset-0  bg-zinc-800 rounded-full ",a)}),(0,s.jsx)("span",{className:"relative blocktext-white",children:e.title})]},e.title))}),(0,s.jsx)(v,{tabs:u,active:c,hovering:f,className:(0,l.cn)("mt-32",o)},c.value)]})},v=e=>{let{className:t,tabs:n,hovering:i}=e,a=e=>e.value===n[0].value;return(0,s.jsx)("div",{className:"relative w-full h-full",children:n.map((e,n)=>(0,s.jsx)(h.E.div,{layoutId:e.value,style:{scale:1-.1*n,top:i?-50*n:0,zIndex:-n,opacity:n<3?1-.1*n:0},animate:{y:a(e)?[0,40,0]:0},className:(0,l.cn)("w-full h-full absolute top-0 left-0",t),children:e.content},e.value))})};function p(){let e=[{title:"Features",value:"playground",content:(0,s.jsx)(s.Fragment,{})},{title:"Pricing",value:"content",content:(0,s.jsx)(s.Fragment,{})},{title:"Faq",value:"random",content:(0,s.jsx)(s.Fragment,{})}];return(0,s.jsx)("div",{className:" [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto w-full ",children:(0,s.jsx)(f,{tabs:e})})}var j=n(1014);let b=i.forwardRef((e,t)=>{let{className:n,orientation:i="horizontal",decorative:a=!0,...r}=e;return(0,s.jsx)(j.f,{ref:t,decorative:a,orientation:i,className:(0,l.cn)("shrink-0 bg-border","horizontal"===i?"h-[1px] w-full":"h-full w-[1px]",n),...r})});function g(){let[e,t]=(0,i.useState)("bidding");return((0,u.o)(e=>e.ishome),(0,u.o)(e=>e.setIshome),"/"===(0,m.usePathname)())?null:(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex items-center justify-center px-4 py-2  w-[500px] rounded-lg motion-preset-pop motion-duration-500 ",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(x.default,{className:"text-white hover:bg-zinc-800 p-1 rounded-md transition-colors",href:"/",children:(0,s.jsx)(a.Z,{className:"h-5 w-5"})}),(0,s.jsxs)("div",{className:"flex items-center gap-0 relative",children:[(0,s.jsx)(x.default,{onClick:()=>t("bidding"),className:(0,l.cn)("px-3 py-1 rounded-md text-sm font-medium relative transition-all duration-200 ease-in-out","bidding"===e?"bg-emerald-500 text-white scale-105":"text-zinc-400 hover:text-white hover:bg-zinc-800"),href:"/bidding",children:"Bidding"}),(0,s.jsx)(x.default,{onClick:()=>t("listing"),className:(0,l.cn)("px-3 py-1 rounded-md text-sm font-medium relative transition-all duration-200 ease-in-out","listing"===e?"bg-emerald-500 text-white scale-105":"text-zinc-400 hover:text-white "),href:"/listing",children:"Listing"}),(0,s.jsx)(x.default,{onClick:()=>t("extreme"),className:(0,l.cn)("px-3 py-1 rounded-md text-sm font-medium relative transition-all duration-200 ease-in-out","extreme"===e?"bg-emerald-500 text-white scale-105":"text-zinc-400 hover:text-white "),href:"/extremebidding",children:"Extreme"}),(0,s.jsx)(b,{orientation:"vertical",className:"bg-zinc-700   h-8 mx-2"})]}),(0,s.jsx)(p,{})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("button",{className:"text-zinc-400 hover:text-white  p-1 rounded-md transition-colors",children:(0,s.jsx)(r.Z,{className:"h-5 w-5"})}),(0,s.jsx)("button",{className:"text-zinc-400 hover:text-white  p-1 rounded-md transition-colors",children:(0,s.jsx)(o.Z,{className:"h-5 w-5"})}),(0,s.jsx)("button",{className:"text-zinc-400 hover:text-white p-1 rounded-md transition-colors",children:(0,s.jsx)(c.Z,{className:"h-5 w-5"})}),(0,s.jsx)("button",{className:"text-zinc-400 hover:text-white  p-1 rounded-md transition-colors",children:(0,s.jsx)(d.Z,{className:"h-5 w-5"})})]})]})})}b.displayName=j.f.displayName},2169:function(e,t,n){"use strict";n.d(t,{cn:function(){return l}});var s=n(3167),i=n(1367);function l(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.m6)((0,s.W)(t))}},1359:function(){}},function(e){e.O(0,[746,521,320,971,69,744],function(){return e(e.s=3999)}),_N_E=e.O()}]);