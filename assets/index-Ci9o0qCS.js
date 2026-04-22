import{i as c,p as w,m as F,x as a,n as e,P as z,G as A,y as E,W as G,Y as P,Z as H,_ as T,$ as K,v as g,K as j,z as N,F as D,H as _}from"./index-wrPVtE6q.js";import{S as B}from"./SurpriseCard-BOs-dwbb.js";import{C as L}from"./ChallengeHeader-CHEiP3Ot.js";import{D as M}from"./DifficultyPicker-DoQOtNje.js";import{G as I}from"./grid-3x3-CIE97-zb.js";import{T as O}from"./trash-2-CIXUbT3j.js";const R=c.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 450px;

  @media (max-width: 576px) {
    gap: 8px;
    max-width: 320px;
  }
`,V=c(w.div)`
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
`,W=c.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  width: 100%;
`,Y=c.div`
  padding: 15px;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 15px;
`,ee=()=>{const t=F(i=>{var s,o;return((o=(s=i.alphabet.gameStats)==null?void 0:s.sudoku)==null?void 0:o.streak)??0}),[x,f]=a.useState(Array(16).fill(null)),[r,S]=a.useState(Array(16).fill(!1)),[n,m]=a.useState(null),[u,b]=a.useState("Easy"),[h]=a.useState(null),p=a.useCallback(()=>{const i=Array(16).fill(null),s=Array(16).fill(!1),o=[[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]].flat(),C=u==="Easy"?8:4,$=Array.from({length:16},(d,l)=>l).sort(()=>Math.random()-.5);for(let d=0;d<C;d++){const l=$[d];i[l]=o[l],s[l]=!0}f(i),S(s),m(null)},[u]);a.useEffect(()=>{p()},[p]);const v=i=>{r[i]||m(i)},y=i=>{if(n!==null&&!r[n]){const s=[...x];s[n]=i,f(s)}},k=[{value:"Easy",label:"Easy (8 Hints)"},{value:"Hard",label:"Hard (4 Hints)"}];return e.jsx(z,{"data-testid":"view-sudoku",children:e.jsxs(A,{children:[e.jsx(L,{icon:I,title:"Kid Sudoku",subtitle:"Fill the grid so every row and block has numbers 1-4!",streak:t}),e.jsx(B,{title:"Certificate Progress",subtitle:t<10?`${10-t%10} more for a Certificate! 🏆`:"Milestone reached! 🎉"}),e.jsxs(E,{"data-testid":"activity-area",children:[e.jsxs(G,{children:[Array.from({length:t%10||(t>0?10:0)}).map((i,s)=>e.jsxs(P,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:s*.05},children:[e.jsx(H,{children:"⭐"}),e.jsx(T,{children:s+1})]},s)),t>=10&&e.jsx(K,{children:"+"})]}),e.jsx(R,{children:x.map((i,s)=>e.jsx(V,{$isActive:n===s,$isFixed:r[s],$isError:!1,onClick:()=>v(s),whileHover:r[s]?{}:{scale:1.05},whileTap:r[s]?{}:{scale:.95},children:i},s))}),e.jsxs(W,{children:[[1,2,3,4].map(i=>e.jsx(g,{title:i.toString(),onClick:()=>y(i),variant:"secondary",size:"60px",fontSize:"lg"},i)),e.jsx(g,{title:"",onClick:()=>y(null),variant:"accent",size:"60px",children:e.jsx(O,{size:24})})]}),h&&e.jsx(j,{color:"primary",fontSize:"md",children:h})]}),e.jsxs(N,{"data-testid":"settings-area",children:[e.jsx(M,{title:"Puzzle Level",name:"diff",options:k,currentValue:u,onChange:i=>b(i)}),e.jsxs(D,{children:[e.jsx(_,{children:"How to Play"}),e.jsx(Y,{children:e.jsxs(j,{fontSize:"sm",color:"textSecondary",children:["• Pick a white box",e.jsx("br",{}),"• Tap a number to fill it",e.jsx("br",{}),"• Every 2x2 box must have 1, 2, 3, and 4!"]})})]})]})]})})};export{ee as default};
