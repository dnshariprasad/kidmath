import{i as r,p as c,n as e,K as n,ai as d,F as h,H as x,aj as p}from"./index-BAJfjDHv.js";const g=r(c.div)`
  cursor: ${t=>t.$isClickable?"pointer":"default"};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;
  text-align: center;
`,u=r(n)`
  margin-bottom: 4px;
  opacity: 0.95;
`,f=r(n)`
  opacity: 0.85;
  line-height: 1.2;
`,b=r(d)`
  padding: 0;
`,m=({title:t="Achievement",subtitle:s,onClick:i})=>e.jsx(b,{"data-testid":"ghost-area",children:e.jsxs(g,{$isClickable:!!i,onClick:i,whileHover:i?{backgroundColor:"rgba(255,255,255,0.08)"}:{},whileTap:i?{scale:.98}:{},children:[e.jsx(u,{fontSize:"md",color:"white",fontWeight:"800",children:t}),s&&e.jsx(f,{fontSize:"xs",color:"white",fontWeight:"500",children:s})]})}),S=({title:t="Difficulty",options:s,currentValue:i,onChange:o,name:l})=>e.jsxs(h,{children:[e.jsx(x,{children:t}),s.map(a=>e.jsxs(p,{$isActive:i===a.value,children:[e.jsx("input",{type:"radio",name:l,checked:i===a.value,onChange:()=>o(a.value)}),a.label]},a.value))]});export{S as D,m as S};
