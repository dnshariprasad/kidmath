import{i as d,p as F,m as A,r,n as s,K as g,q as S}from"./index-NzOoTDV7.js";import{C as E,S as z,D as G,r as H}from"./DifficultyPicker-Y23e4tn9.js";import{P,G as T,d as D,S as K,e as L,f as M}from"./globalStyles-CxNgPgHO.js";import{G as B,T as N}from"./trash-2-Cwe0M_zV.js";import"./wand-sparkles-CaSBif2c.js";const q=d.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 450px;

  @media (max-width: 576px) {
    gap: 8px;
    max-width: 320px;
  }
`,I=d(F.div)`
  aspect-ratio: 1;
  background: ${e=>e.$isFixed?"#F8F9FA":"white"};
  border: 3px solid
    ${e=>e.$isError?e.theme.colors.accent:e.$isActive?e.theme.colors.primary:"#F0F0F0"};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  font-weight: 800;
  color: ${e=>e.$isFixed?"#636E72":e.theme.colors.primary};
  font-family: ${e=>e.theme.fonts.primary};
  cursor: ${e=>e.$isFixed?"default":"pointer"};
  box-shadow: ${e=>e.$isActive?"0 8px 16px rgba(99, 102, 241, 0.15)":"none"};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${e=>!e.$isFixed&&e.theme.colors.primary}80;
  }
`,O=d.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  width: 100%;
`,R=d.div`
  padding: 15px;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 15px;
`,W=()=>{const e=A(t=>t.alphabet.userStats.streak),[u,x]=r.useState(Array(16).fill(null)),[a,b]=r.useState(Array(16).fill(!1)),[o,f]=r.useState(null),[c,h]=r.useState("Easy"),[m]=r.useState(null),p=r.useCallback(()=>{const t=Array(16).fill(null),i=Array(16).fill(!1),C=[[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]].flat(),$=c==="Easy"?8:4,w=Array.from({length:16},(n,l)=>l).sort(()=>Math.random()-.5);for(let n=0;n<$;n++){const l=w[n];t[l]=C[l],i[l]=!0}x(t),b(i),f(null)},[c]),j=()=>{const t=["Easy","Hard"],i=t[Math.floor(Math.random()*t.length)];h(i),H("Sudoku Surprise!")};r.useEffect(()=>{p()},[p]);const k=t=>{a[t]||f(t)},y=t=>{if(o!==null&&!a[o]){const i=[...u];i[o]=t,x(i)}},v=[{value:"Easy",label:"Easy (8 Hints)"},{value:"Hard",label:"Hard (4 Hints)"}];return s.jsx(P,{"data-testid":"page-sudoku",children:s.jsxs(T,{children:[s.jsx(E,{icon:B,title:"Kid Sudoku",subtitle:"Fill the grid so every row and block has numbers 1-4!",streak:e}),s.jsx(z,{title:"Sudoku surprise?",onShuffle:j}),s.jsxs(D,{children:[s.jsx(q,{children:u.map((t,i)=>s.jsx(I,{$isActive:o===i,$isFixed:a[i],$isError:!1,onClick:()=>k(i),whileHover:a[i]?{}:{scale:1.05},whileTap:a[i]?{}:{scale:.95},children:t},i))}),s.jsxs(O,{children:[[1,2,3,4].map(t=>s.jsx(g,{title:t.toString(),onClick:()=>y(t),variant:"secondary",size:"60px",fontSize:"lg"},t)),s.jsx(g,{title:"",onClick:()=>y(null),variant:"accent",size:"60px",children:s.jsx(N,{size:24})})]}),m&&s.jsx(S,{color:"primary",fontSize:"md",children:m})]}),s.jsxs(K,{"data-testid":"settings-area",children:[s.jsx(G,{title:"Puzzle Level",name:"diff",options:v,currentValue:c,onChange:t=>h(t)}),s.jsxs(L,{children:[s.jsx(M,{children:"How to Play"}),s.jsx(R,{children:s.jsxs(S,{fontSize:"sm",color:"textSecondary",children:["• Pick a white box",s.jsx("br",{}),"• Tap a number to fill it",s.jsx("br",{}),"• Every 2x2 box must have 1, 2, 3, and 4!"]})})]})]})]})})};export{W as default};
