import{k as x,r as T,n as F,o as E,t as c,a3 as C,p as s,P as G,R as P,W as N,a4 as B,a5 as D,a6 as H,a7 as I,a8 as L,y as w,K as $,$ as R,a0 as K,a1 as O,aa as M,a9 as V,ab as y}from"./index-BzFoXmKK.js";import{S as W}from"./SurpriseCard-Bo2gq3xO.js";import{C as Y}from"./ChallengeHeader-oinzm8Q3.js";import{D as q}from"./DifficultyPicker-DtGcWeAi.js";import{r as g,g as J}from"./index-vOEcMhmM.js";import{c as v}from"./confetti.module-ONDKWxYZ.js";import{G as Q}from"./grid-3x3-DemRQI3F.js";import{T as U}from"./trash-2-DRSnEORE.js";import"./info-CdaYnKwS.js";const X=x.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 450px;

  @media (max-width: 576px) {
    gap: 8px;
    max-width: 320px;
  }
`,Z=x(T.div)`
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
`,ee=x.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  width: 100%;
`,te=x.div`
  padding: 15px;
  background: ${e=>e.theme.colors.tipBoxBg};
  border-radius: 15px;
`,se=e=>{for(let t=0;t<4;t++){const l=e.slice(t*4,t*4+4);if(new Set(l.filter(o=>o!==null)).size!==4)return!1}for(let t=0;t<4;t++){const l=[e[t],e[t+4],e[t+8],e[t+12]];if(new Set(l.filter(o=>o!==null)).size!==4)return!1}const i=[[0,1,4,5],[2,3,6,7],[8,9,12,13],[10,11,14,15]];for(const t of i){const l=t.map(o=>e[o]);if(new Set(l.filter(o=>o!==null)).size!==4)return!1}return!0},re=e=>{const i=Array(16).fill(null),t=Array(16).fill(!1),l=[[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]].flat(),o=e==="Easy"?8:4,d=Array.from({length:16},(u,n)=>n).sort(()=>Math.random()-.5);for(let u=0;u<o;u++){const n=d[u];i[n]=l[n],t[n]=!0}return{grid:i,fixed:t}},me=()=>{const e=F(),i=M.en,t=E(a=>{var r,k;return((k=(r=a.alphabet.gameStats)==null?void 0:r.sudoku)==null?void 0:k.streak)??0}),[l,o]=c.useState(Array(16).fill(null)),[d,u]=c.useState(Array(16).fill(!1)),[n,S]=c.useState(null),[p,z]=c.useState("Easy"),[b,f]=c.useState(null),h=c.useCallback(()=>{const{grid:a,fixed:r}=re(p);o(a),u(r),S(null)},[p]);c.useEffect(()=>{h()},[h]),c.useEffect(()=>{if(t>0&&t%10===0){f("Incredible! 10 in a row! 🌟"),g("Incredible! 10 in a row! You are a superstar!"),v({particleCount:300,spread:100,origin:{y:.6},colors:["#6366f1","#4f46e5","#818cf8"]});const a=setTimeout(()=>{e(C("sudoku")),f(null)},3e3);return()=>clearTimeout(a)}},[t,e]);const _=a=>{d[a]||S(a)},j=a=>{if(n!==null&&!d[n]){const r=[...l];if(r[n]=a,o(r),r.every(m=>m!==null))if(se(r)){const m=J(t);f(m),g(m),e(V("sudoku")),v({particleCount:150,spread:70,origin:{y:.6},colors:[y.primary,y.primaryDark,y.accentLight]}),setTimeout(h,3e3)}else f(i.sdk_almost),g(i.sdk_tryAgain),e(C("sudoku"));else f(null)}},A=[{value:"Easy",label:i.sdk_easyHints},{value:"Hard",label:i.sdk_hardHints}];return s.jsx(G,{"data-testid":"view-sudoku",children:s.jsxs(P,{children:[s.jsx(Y,{icon:Q,title:i.sdk_title,subtitle:i.sdk_subtitle,streak:t}),s.jsx(W,{title:i.sdk_certProgress,subtitle:t<10?`${10-t%10} ${i.sdk_moreForCert}`:i.sdk_milestoneReached}),s.jsxs(N,{"data-testid":"activity-area",children:[s.jsxs(B,{children:[Array.from({length:t%10||(t>0?10:0)}).map((a,r)=>s.jsxs(D,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:r*.05},children:[s.jsx(H,{children:"⭐"}),s.jsx(I,{children:r+1})]},r)),t>=10&&s.jsx(L,{children:"+"})]}),s.jsx(X,{children:l.map((a,r)=>s.jsx(Z,{$isActive:n===r,$isFixed:d[r],$isError:!1,onClick:()=>_(r),whileHover:d[r]?{}:{scale:1.05},whileTap:d[r]?{}:{scale:.95},children:a},r))}),s.jsxs(ee,{children:[[1,2,3,4].map(a=>s.jsx(w,{title:a.toString(),onClick:()=>j(a),variant:"secondary",size:"60px",fontSize:"lg"},a)),s.jsx(w,{title:"",onClick:()=>j(null),variant:"accent",size:"60px",children:s.jsx(U,{size:24})})]}),b&&s.jsx($,{color:"primary",fontSize:"md",children:b})]}),s.jsxs(R,{"data-testid":"settings-area",children:[s.jsx(q,{title:i.sdk_puzzleLevel,name:"diff",options:A,currentValue:p,onChange:a=>z(a)}),s.jsxs(K,{children:[s.jsx(O,{children:i.sdk_howToPlay}),s.jsx(te,{children:s.jsxs($,{fontSize:"sm",color:"textSecondary",children:["• ",i.sdk_step1,s.jsx("br",{}),"• ",i.sdk_step2,s.jsx("br",{}),"• ",i.sdk_step3]})})]})]})]})})};export{me as default};
