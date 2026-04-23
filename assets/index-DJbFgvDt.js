import{i as m,p as A,l as G,m as P,x as n,n as t,P as T,G as H,y as D,R as K,W as N,Y as _,_ as B,$ as L,v as k,K as C,z as M,F as R,H as I,a2 as O,a3 as V}from"./index-DFKAu_cK.js";import{S as W}from"./SurpriseCard-CJ-2Fm2R.js";import{C as Y,g as q,r as v}from"./ChallengeHeader-BNUm6G2b.js";import{D as J}from"./DifficultyPicker-CvJ-uU1P.js";import{c as Q}from"./confetti.module-ONDKWxYZ.js";import{G as U}from"./grid-3x3-BwzREH7M.js";import{T as X}from"./trash-2-BIiwBZQe.js";const Z=m.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 450px;

  @media (max-width: 576px) {
    gap: 8px;
    max-width: 320px;
  }
`,ee=m(A.div)`
  aspect-ratio: 1;
  background: ${s=>s.$isFixed?"#F8F9FA":"white"};
  border: 3px solid
    ${s=>s.$isError?s.theme.colors.accent:s.$isActive?s.theme.colors.primary:"#F0F0F0"};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  font-weight: 800;
  color: ${s=>s.$isFixed?"#636E72":s.theme.colors.primary};
  font-family: ${s=>s.theme.fonts.primary};
  cursor: ${s=>s.$isFixed?"default":"pointer"};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${s=>!s.$isFixed&&s.theme.colors.primary}80;
  }
`,te=m.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  width: 100%;
`,se=m.div`
  padding: 15px;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 15px;
`,de=()=>{const s=G(),o=P(r=>{var e,d;return((d=(e=r.alphabet.gameStats)==null?void 0:e.sudoku)==null?void 0:d.streak)??0}),[y,g]=n.useState(Array(16).fill(null)),[c,w]=n.useState(Array(16).fill(!1)),[u,S]=n.useState(null),[x,F]=n.useState("Easy"),[b,h]=n.useState(null),p=n.useCallback(()=>{const r=Array(16).fill(null),e=Array(16).fill(!1),d=[[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]].flat(),f=x==="Easy"?8:4,l=Array.from({length:16},(i,a)=>a).sort(()=>Math.random()-.5);for(let i=0;i<f;i++){const a=l[i];r[a]=d[a],e[a]=!0}g(r),w(e),S(null)},[x]);n.useEffect(()=>{p()},[p]);const $=r=>{c[r]||S(r)},j=r=>{if(u!==null&&!c[u]){const e=[...y];if(e[u]=r,g(e),e.every(f=>f!==null))if((()=>{for(let i=0;i<4;i++){const a=e.slice(i*4,i*4+4);if(new Set(a).size!==4)return!1}for(let i=0;i<4;i++){const a=[e[i],e[i+4],e[i+8],e[i+12]];if(new Set(a).size!==4)return!1}const l=[[0,1,4,5],[2,3,6,7],[8,9,12,13],[10,11,14,15]];for(const i of l){const a=i.map(E=>e[E]);if(new Set(a).size!==4)return!1}return!0})()){const l=q(o);h(l),v(l),s(O("sudoku")),Q({particleCount:150,spread:70,origin:{y:.6},colors:["#6366F1","#4F46E5","#FF7675"]}),setTimeout(p,3e3)}else h("Almost! Some numbers are repeated. Check again! 💪"),v("Try again"),s(V("sudoku"));else h(null)}},z=[{value:"Easy",label:"Easy (8 Hints)"},{value:"Hard",label:"Hard (4 Hints)"}];return t.jsx(T,{"data-testid":"view-sudoku",children:t.jsxs(H,{children:[t.jsx(Y,{icon:U,title:"Kid Sudoku",subtitle:"Fill the grid so every row and block has numbers 1-4!",streak:o}),t.jsx(W,{title:"Certificate Progress",subtitle:o<10?`${10-o%10} more for a Certificate! 🏆`:"Milestone reached! 🎉"}),t.jsxs(D,{"data-testid":"activity-area",children:[t.jsxs(K,{children:[Array.from({length:o%10||(o>0?10:0)}).map((r,e)=>t.jsxs(N,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:e*.05},children:[t.jsx(_,{children:"⭐"}),t.jsx(B,{children:e+1})]},e)),o>=10&&t.jsx(L,{children:"+"})]}),t.jsx(Z,{children:y.map((r,e)=>t.jsx(ee,{$isActive:u===e,$isFixed:c[e],$isError:!1,onClick:()=>$(e),whileHover:c[e]?{}:{scale:1.05},whileTap:c[e]?{}:{scale:.95},children:r},e))}),t.jsxs(te,{children:[[1,2,3,4].map(r=>t.jsx(k,{title:r.toString(),onClick:()=>j(r),variant:"secondary",size:"60px",fontSize:"lg"},r)),t.jsx(k,{title:"",onClick:()=>j(null),variant:"accent",size:"60px",children:t.jsx(X,{size:24})})]}),b&&t.jsx(C,{color:"primary",fontSize:"md",children:b})]}),t.jsxs(M,{"data-testid":"settings-area",children:[t.jsx(J,{title:"Puzzle Level",name:"diff",options:z,currentValue:x,onChange:r=>F(r)}),t.jsxs(R,{children:[t.jsx(I,{children:"How to Play"}),t.jsx(se,{children:t.jsxs(C,{fontSize:"sm",color:"textSecondary",children:["• Pick a white box",t.jsx("br",{}),"• Tap a number to fill it",t.jsx("br",{}),"• Every 2x2 box must have 1, 2, 3, and 4!"]})})]})]})]})})};export{de as default};
