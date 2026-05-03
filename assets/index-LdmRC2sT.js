import{k as x,s as _,n as E,o as F,r as c,a2 as w,p as s,P as G,R as P,W as N,a3 as B,a4 as D,a5 as H,a6 as I,a7 as L,y as C,K as v,_ as K,a0 as R,a1 as O,a9 as M,a8 as V,aa as k}from"./index-C9GQ7pMr.js";import{C as W}from"./ChallengeHeader-BrHaadvX.js";import{D as Y}from"./DifficultyPicker-C8N_GHcF.js";import{r as g,g as q}from"./index-DhGl27sY.js";import{c as z}from"./confetti.module-ONDKWxYZ.js";import{G as J}from"./grid-3x3-CFD8or27.js";import{T as Q}from"./trash-2-CCutv6h6.js";import"./info-BbesOvZG.js";const U=x.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 450px;

  @media (max-width: 576px) {
    gap: 8px;
    max-width: 320px;
  }
`,X=x(_.div)`
  aspect-ratio: 1;
  background: ${e=>e.$isFixed?e.theme.colors.cellFixedBg:e.theme.colors.surface};
  border: 3px solid
    ${e=>e.$isError?e.theme.colors.accent:e.$isActive?e.theme.colors.primary:e.theme.colors.border};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  font-weight: 800;
  color: ${e=>e.$isFixed?e.theme.colors.cellFixedText:e.theme.colors.primary};
  font-family: ${e=>e.theme.fonts.primary};
  cursor: ${e=>e.$isFixed?"default":"pointer"};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${e=>!e.$isFixed&&e.theme.colors.primary}80;
  }
`,Z=x.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  width: 100%;
`,ee=x.div`
  padding: 15px;
  background: ${e=>e.theme.colors.tipBoxBg};
  border-radius: 15px;
`,te=e=>{for(let t=0;t<4;t++){const o=e.slice(t*4,t*4+4);if(new Set(o.filter(l=>l!==null)).size!==4)return!1}for(let t=0;t<4;t++){const o=[e[t],e[t+4],e[t+8],e[t+12]];if(new Set(o.filter(l=>l!==null)).size!==4)return!1}const a=[[0,1,4,5],[2,3,6,7],[8,9,12,13],[10,11,14,15]];for(const t of a){const o=t.map(l=>e[l]);if(new Set(o.filter(l=>l!==null)).size!==4)return!1}return!0},se=e=>{const a=Array(16).fill(null),t=Array(16).fill(!1),o=[[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]].flat(),l=e==="Easy"?8:4,d=Array.from({length:16},(u,n)=>n).sort(()=>Math.random()-.5);for(let u=0;u<l;u++){const n=d[u];a[n]=o[n],t[n]=!0}return{grid:a,fixed:t}},ue=()=>{const e=E(),a=M.en,t=F(i=>{var r,y;return((y=(r=i.alphabet.gameStats)==null?void 0:r.sudoku)==null?void 0:y.streak)??0}),[o,l]=c.useState(Array(16).fill(null)),[d,u]=c.useState(Array(16).fill(!1)),[n,S]=c.useState(null),[h,$]=c.useState("Easy"),[b,f]=c.useState(null),p=c.useCallback(()=>{const{grid:i,fixed:r}=se(h);l(i),u(r),S(null)},[h]);c.useEffect(()=>{p()},[p]),c.useEffect(()=>{if(t>0&&t%10===0){f("Incredible! 10 in a row! 🌟"),g("Incredible! 10 in a row! You are a superstar!"),z({particleCount:300,spread:100,origin:{y:.6},colors:["#6366f1","#4f46e5","#818cf8"]});const i=setTimeout(()=>{e(w("sudoku")),f(null)},3e3);return()=>clearTimeout(i)}},[t,e]);const A=i=>{d[i]||S(i)},j=i=>{if(n!==null&&!d[n]){const r=[...o];if(r[n]=i,l(r),r.every(m=>m!==null))if(te(r)){const m=q(t);f(m),g(m),e(V("sudoku")),z({particleCount:150,spread:70,origin:{y:.6},colors:[k.primary,k.primaryDark,k.accentLight]}),setTimeout(p,3e3)}else f(a.sdk_almost),g(a.sdk_tryAgain),e(w("sudoku"));else f(null)}},T=[{value:"Easy",label:a.sdk_easyHints},{value:"Hard",label:a.sdk_hardHints}];return s.jsx(G,{"data-testid":"view-sudoku",children:s.jsxs(P,{children:[s.jsxs(N,{"data-testid":"activity-area",children:[s.jsx(W,{icon:J,title:a.sdk_title,subtitle:a.sdk_subtitle,streak:t}),s.jsxs(B,{children:[Array.from({length:t%10||(t>0?10:0)}).map((i,r)=>s.jsxs(D,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:r*.05},children:[s.jsx(H,{children:"⭐"}),s.jsx(I,{children:r+1})]},r)),t>=10&&s.jsx(L,{children:"+"})]}),s.jsx(U,{children:o.map((i,r)=>s.jsx(X,{$isActive:n===r,$isFixed:d[r],$isError:!1,onClick:()=>A(r),whileHover:d[r]?{}:{scale:1.05},whileTap:d[r]?{}:{scale:.95},children:i},r))}),s.jsxs(Z,{children:[[1,2,3,4].map(i=>s.jsx(C,{title:i.toString(),onClick:()=>j(i),variant:"secondary",size:"60px",fontSize:"lg"},i)),s.jsx(C,{title:"",onClick:()=>j(null),variant:"accent",size:"60px",children:s.jsx(Q,{size:24})})]}),b&&s.jsx(v,{color:"primary",fontSize:"md",children:b})]}),s.jsxs(K,{"data-testid":"settings-area",children:[s.jsx(Y,{title:a.sdk_puzzleLevel,name:"diff",options:T,currentValue:h,onChange:i=>$(i)}),s.jsxs(R,{children:[s.jsx(O,{children:a.sdk_howToPlay}),s.jsx(ee,{children:s.jsxs(v,{fontSize:"sm",color:"textSecondary",children:["• ",a.sdk_step1,s.jsx("br",{}),"• ",a.sdk_step2,s.jsx("br",{}),"• ",a.sdk_step3]})})]})]})]})})};export{ue as default};
