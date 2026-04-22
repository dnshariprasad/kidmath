import{i,p as a,n as t,K as s,al as n}from"./index-DsuWshuf.js";const c=i(a.div)`
  cursor: ${o=>o.$isClickable?"pointer":"default"};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;
  text-align: center;
`,d=i(s)`
  margin-bottom: 4px;
  opacity: 0.95;
`,l=i(s)`
  opacity: 0.85;
  line-height: 1.2;
`,h=i(n)`
  padding: 0;
`,p=({title:o="Achievement",subtitle:r,onClick:e})=>t.jsx(h,{"data-testid":"ghost-area",children:t.jsxs(c,{$isClickable:!!e,onClick:e,whileHover:e?{backgroundColor:"rgba(255,255,255,0.08)"}:{},whileTap:e?{scale:.98}:{},children:[t.jsx(d,{fontSize:"sm",color:"white",fontWeight:"800",children:o}),r&&t.jsx(l,{fontSize:"xs",color:"white",fontWeight:"500",children:r})]})});export{p as S};
