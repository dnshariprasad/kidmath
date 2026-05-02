import{k as i,r as a,p as t,K as s,aB as n}from"./index-DknSt3NM.js";const c=i(a.div)`
  cursor: ${r=>r.$isClickable?"pointer":"default"};
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
`,p=({title:r="Achievement",subtitle:o,onClick:e})=>t.jsx(h,{"data-testid":"ghost-area",children:t.jsxs(c,{$isClickable:!!e,onClick:e,whileHover:e?{backgroundColor:"rgba(255,255,255,0.08)"}:{},whileTap:e?{scale:.98}:{},children:[t.jsx(d,{fontSize:"sm",color:"white",fontWeight:"800",children:r}),o&&t.jsx(l,{fontSize:"xs",color:"white",fontWeight:"500",children:o})]})});export{p as S};
