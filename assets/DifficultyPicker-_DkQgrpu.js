import{i as a,n as e,T as c,q as l,r as d}from"./index-DO3JajC9.js";import{o as x,p as h,a as p,b as g,c as f,j,k as u,O as m}from"./globalStyles-6jG7PpSt.js";const y=a(l)`
  margin-bottom: 4px;
  opacity: 0.9;
  z-index: 1;
`,b=a(l)`
  opacity: 0.8;
  z-index: 1;
  font-style: italic;
`,S=a.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 10px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`,T=a.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,k=({title:i="Achievement Progress",subtitle:t})=>e.jsxs(x,{"data-testid":"ghost-area",children:[e.jsx(S,{children:e.jsx(c,{size:24,color:"white"})}),e.jsxs(T,{children:[e.jsx(y,{fontSize:"sm",color:"white",fontWeight:"bold",children:i}),t&&e.jsx(b,{fontSize:"xs",color:"white",children:t})]})]}),v=({icon:i,title:t,subtitle:r,iconColor:n="#6366F1"})=>e.jsx(h,{"data-testid":"title-area",children:e.jsxs(p,{children:[e.jsxs(g,{children:[e.jsx(i,{size:40,color:n,strokeWidth:2.5}),t]}),e.jsx(f,{children:r})]})}),P=d.memo(v),H=({title:i="Difficulty",options:t,currentValue:r,onChange:n,name:o})=>e.jsxs(j,{children:[e.jsx(u,{children:i}),t.map(s=>e.jsxs(m,{$isActive:r===s.value,children:[e.jsx("input",{type:"radio",name:o,checked:r===s.value,onChange:()=>n(s.value)}),s.label]},s.value))]});export{P as C,H as D,k as S};
