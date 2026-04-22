import{i as a,p as n,n as e,K as r,ak as l,x as d,al as c,r as h,s as x,t as g}from"./index-CC76IOC_.js";const p=a(n.div)`
  cursor: ${i=>i.$isClickable?"pointer":"default"};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;
  text-align: center;
`,m=a(r)`
  margin-bottom: 4px;
  opacity: 0.95;
`,j=a(r)`
  opacity: 0.85;
  line-height: 1.2;
`,u=a(l)`
  padding: 0;
`,S=({title:i="Achievement",subtitle:s,onClick:t})=>e.jsx(u,{"data-testid":"ghost-area",children:e.jsxs(p,{$isClickable:!!t,onClick:t,whileHover:t?{backgroundColor:"rgba(255,255,255,0.08)"}:{},whileTap:t?{scale:.98}:{},children:[e.jsx(m,{fontSize:"sm",color:"white",fontWeight:"800",children:i}),s&&e.jsx(j,{fontSize:"xs",color:"white",fontWeight:"500",children:s})]})}),b=({icon:i,title:s,subtitle:t,iconColor:o="#6366F1"})=>e.jsx(c,{"data-testid":"title-area",children:e.jsxs(h,{children:[e.jsxs(x,{children:[e.jsx(i,{size:40,color:o,strokeWidth:2.5}),s]}),e.jsx(g,{children:t})]})}),H=d.memo(b);export{H as C,S};
