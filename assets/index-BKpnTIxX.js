import{i as c,p as $,m as F,r as a,n as e,K as g,q as j}from"./index-DO3JajC9.js";import{C as A,S as E,D as z}from"./DifficultyPicker-_DkQgrpu.js";import{P as G,G as P,d as H,S as T,N,e as K,f as D,g as B,i as L,j as M,k as _}from"./globalStyles-6jG7PpSt.js";import{G as q,T as I}from"./trash-2-gIRjxiiA.js";const O=c.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 450px;

  @media (max-width: 576px) {
    gap: 8px;
    max-width: 320px;
  }
`,R=c($.div)`
  aspect-ratio: 1;
  background: ${t=>t.$isFixed?"#F8F9FA":"white"};
  border: 3px solid
    ${t=>t.$isError?t.theme.colors.accent:t.$isActive?t.theme.colors.primary:"#F0F0F0"};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  font-weight: 800;
  color: ${t=>t.$isFixed?"#636E72":t.theme.colors.primary};
  font-family: ${t=>t.theme.fonts.primary};
  cursor: ${t=>t.$isFixed?"default":"pointer"};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${t=>!t.$isFixed&&t.theme.colors.primary}80;
  }
`,V=c.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  width: 100%;
`,J=c.div`
  padding: 15px;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 15px;
`,Y=()=>{const t=F(i=>{var s,o;return((o=(s=i.alphabet.gameStats)==null?void 0:s.sudoku)==null?void 0:o.streak)??0}),[x,f]=a.useState(Array(16).fill(null)),[r,S]=a.useState(Array(16).fill(!1)),[n,m]=a.useState(null),[u,b]=a.useState("Easy"),[h]=a.useState(null),p=a.useCallback(()=>{const i=Array(16).fill(null),s=Array(16).fill(!1),o=[[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]].flat(),C=u==="Easy"?8:4,w=Array.from({length:16},(d,l)=>l).sort(()=>Math.random()-.5);for(let d=0;d<C;d++){const l=w[d];i[l]=o[l],s[l]=!0}f(i),S(s),m(null)},[u]);a.useEffect(()=>{p()},[p]);const k=i=>{r[i]||m(i)},y=i=>{if(n!==null&&!r[n]){const s=[...x];s[n]=i,f(s)}},v=[{value:"Easy",label:"Easy (8 Hints)"},{value:"Hard",label:"Hard (4 Hints)"}];return e.jsx(G,{"data-testid":"view-sudoku",children:e.jsxs(P,{children:[e.jsx(A,{icon:q,title:"Kid Sudoku",subtitle:"Fill the grid so every row and block has numbers 1-4!",streak:t}),e.jsx(E,{title:"Certificate Progress",subtitle:t<10?`${10-t%10} more for a Certificate! 🏆`:"Milestone reached! 🎉"}),e.jsxs(H,{"data-testid":"activity-area",children:[e.jsxs(T,{children:[Array.from({length:t%10||(t>0?10:0)}).map((i,s)=>e.jsxs(N,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:s*.05},children:[e.jsx(K,{children:"⭐"}),e.jsx(D,{children:s+1})]},s)),t>=10&&e.jsx(B,{children:"+"})]}),e.jsx(O,{children:x.map((i,s)=>e.jsx(R,{$isActive:n===s,$isFixed:r[s],$isError:!1,onClick:()=>k(s),whileHover:r[s]?{}:{scale:1.05},whileTap:r[s]?{}:{scale:.95},children:i},s))}),e.jsxs(V,{children:[[1,2,3,4].map(i=>e.jsx(g,{title:i.toString(),onClick:()=>y(i),variant:"secondary",size:"60px",fontSize:"lg"},i)),e.jsx(g,{title:"",onClick:()=>y(null),variant:"accent",size:"60px",children:e.jsx(I,{size:24})})]}),h&&e.jsx(j,{color:"primary",fontSize:"md",children:h})]}),e.jsxs(L,{"data-testid":"settings-area",children:[e.jsx(z,{title:"Puzzle Level",name:"diff",options:v,currentValue:u,onChange:i=>b(i)}),e.jsxs(M,{children:[e.jsx(_,{children:"How to Play"}),e.jsx(J,{children:e.jsxs(j,{fontSize:"sm",color:"textSecondary",children:["• Pick a white box",e.jsx("br",{}),"• Tap a number to fill it",e.jsx("br",{}),"• Every 2x2 box must have 1, 2, 3, and 4!"]})})]})]})]})})};export{Y as default};
