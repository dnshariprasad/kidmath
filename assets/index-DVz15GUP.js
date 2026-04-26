import{i as x,p as T,l as F,m as E,x as c,R as C,n as s,P as G,G as P,y as H,W as N,Y as B,_ as D,$ as I,a0 as L,v as w,K as v,F as R,H as K,J as O,a2 as Y,a1 as J,a3 as y}from"./index-BP7ZCa5e.js";import{S as M}from"./SurpriseCard-DKovK8d_.js";import{C as V}from"./ChallengeHeader-CKuj-zz-.js";import{D as W}from"./DifficultyPicker-dUt9_6Vg.js";import{r as g,g as q}from"./index-dsz47keu.js";import{c as $}from"./confetti.module-ONDKWxYZ.js";import{G as Q}from"./grid-3x3-BEZPGCi8.js";import{T as U}from"./trash-2-DSZo4ph2.js";import"./info-k4ZqiUND.js";const X=x.div`
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
`,se=e=>{for(let t=0;t<4;t++){const o=e.slice(t*4,t*4+4);if(new Set(o.filter(l=>l!==null)).size!==4)return!1}for(let t=0;t<4;t++){const o=[e[t],e[t+4],e[t+8],e[t+12]];if(new Set(o.filter(l=>l!==null)).size!==4)return!1}const i=[[0,1,4,5],[2,3,6,7],[8,9,12,13],[10,11,14,15]];for(const t of i){const o=t.map(l=>e[l]);if(new Set(o.filter(l=>l!==null)).size!==4)return!1}return!0},re=e=>{const i=Array(16).fill(null),t=Array(16).fill(!1),o=[[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]].flat(),l=e==="Easy"?8:4,d=Array.from({length:16},(u,n)=>n).sort(()=>Math.random()-.5);for(let u=0;u<l;u++){const n=d[u];i[n]=o[n],t[n]=!0}return{grid:i,fixed:t}},me=()=>{const e=F(),i=Y.en,t=E(a=>{var r,k;return((k=(r=a.alphabet.gameStats)==null?void 0:r.sudoku)==null?void 0:k.streak)??0}),[o,l]=c.useState(Array(16).fill(null)),[d,u]=c.useState(Array(16).fill(!1)),[n,S]=c.useState(null),[p,_]=c.useState("Easy"),[b,f]=c.useState(null),h=c.useCallback(()=>{const{grid:a,fixed:r}=re(p);l(a),u(r),S(null)},[p]);c.useEffect(()=>{h()},[h]),c.useEffect(()=>{if(t>0&&t%10===0){f("Incredible! 10 in a row! 🌟"),g("Incredible! 10 in a row! You are a superstar!"),$({particleCount:300,spread:100,origin:{y:.6},colors:["#6366f1","#4f46e5","#818cf8"]});const a=setTimeout(()=>{e(C("sudoku")),f(null)},3e3);return()=>clearTimeout(a)}},[t,e]);const z=a=>{d[a]||S(a)},j=a=>{if(n!==null&&!d[n]){const r=[...o];if(r[n]=a,l(r),r.every(m=>m!==null))if(se(r)){const m=q(t);f(m),g(m),e(J("sudoku")),$({particleCount:150,spread:70,origin:{y:.6},colors:[y.primary,y.primaryDark,y.accentLight]}),setTimeout(h,3e3)}else f(i.sdk_almost),g(i.sdk_tryAgain),e(C("sudoku"));else f(null)}},A=[{value:"Easy",label:i.sdk_easyHints},{value:"Hard",label:i.sdk_hardHints}];return s.jsx(G,{"data-testid":"view-sudoku",children:s.jsxs(P,{children:[s.jsx(V,{icon:Q,title:i.sdk_title,subtitle:i.sdk_subtitle,streak:t}),s.jsx(M,{title:i.sdk_certProgress,subtitle:t<10?`${10-t%10} ${i.sdk_moreForCert}`:i.sdk_milestoneReached}),s.jsxs(H,{"data-testid":"activity-area",children:[s.jsxs(N,{children:[Array.from({length:t%10||(t>0?10:0)}).map((a,r)=>s.jsxs(B,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:r*.05},children:[s.jsx(D,{children:"⭐"}),s.jsx(I,{children:r+1})]},r)),t>=10&&s.jsx(L,{children:"+"})]}),s.jsx(X,{children:o.map((a,r)=>s.jsx(Z,{$isActive:n===r,$isFixed:d[r],$isError:!1,onClick:()=>z(r),whileHover:d[r]?{}:{scale:1.05},whileTap:d[r]?{}:{scale:.95},children:a},r))}),s.jsxs(ee,{children:[[1,2,3,4].map(a=>s.jsx(w,{title:a.toString(),onClick:()=>j(a),variant:"secondary",size:"60px",fontSize:"lg"},a)),s.jsx(w,{title:"",onClick:()=>j(null),variant:"accent",size:"60px",children:s.jsx(U,{size:24})})]}),b&&s.jsx(v,{color:"primary",fontSize:"md",children:b})]}),s.jsxs(R,{"data-testid":"settings-area",children:[s.jsx(W,{title:i.sdk_puzzleLevel,name:"diff",options:A,currentValue:p,onChange:a=>_(a)}),s.jsxs(K,{children:[s.jsx(O,{children:i.sdk_howToPlay}),s.jsx(te,{children:s.jsxs(v,{fontSize:"sm",color:"textSecondary",children:["• ",i.sdk_step1,s.jsx("br",{}),"• ",i.sdk_step2,s.jsx("br",{}),"• ",i.sdk_step3]})})]})]})]})})};export{me as default};
