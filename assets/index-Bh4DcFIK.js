import{i as f,p as j,j as C,m as y,x as p,n as e,P as b,G as v,f as S,y as L,A,N as P,z as k,F as T,H as N,J as w,Q as I}from"./index-Befkp--T.js";import{S as B}from"./SpeakIcon-D2TIuKJ-.js";import{P as E,N as G}from"./PreviousIcon-B2dmu7qJ.js";import{S as D}from"./SurpriseCard-BJP_L2VG.js";import{C as H}from"./ChallengeHeader-CX0EvkHC.js";import{D as R}from"./DifficultyPicker-fjzTCykJ.js";const $=f(j.div)`
  font-size: clamp(8rem, 25vw, 16rem);
  font-weight: 900;
  color: ${a=>a.theme.colors.primary};
  font-family: ${a=>a.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`,K=()=>{const a=C(),s="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),h=y(t=>{var i,m;return((m=(i=t.alphabet.gameStats)==null?void 0:i.alphabet)==null?void 0:m.streak)??0}),[o,n]=p.useState(0),[c,d]=p.useState("big"),l=s[o],r=c==="big"?l:l.toLowerCase(),x=()=>n(t=>(t+1)%s.length),g=()=>n(t=>(t-1+s.length)%s.length),u=[{value:"big",label:"BIG LETTERS (A)"},{value:"small",label:"small letters (a)"}];return e.jsx(b,{"data-testid":"view-alphabet",children:e.jsxs(v,{children:[e.jsx(H,{icon:S,title:"ABC Alphabet",subtitle:"Learn letters and phonics with fun!",streak:h}),e.jsx(D,{title:"Time to Practice? 🎯",subtitle:"Try the practice games for this subject!",onClick:()=>a("/missing_letters")}),e.jsxs(L,{"data-testid":"activity-area",children:[e.jsx(A,{mode:"wait",children:e.jsx($,{initial:{scale:.5,opacity:0,rotate:-5},animate:{scale:1,opacity:1,rotate:0},exit:{scale:1.5,opacity:0,rotate:5},transition:{type:"spring",stiffness:260,damping:20},children:r},r)}),e.jsxs(P,{children:[e.jsx(E,{onClick:g}),e.jsx(B,{text:r}),e.jsx(G,{onClick:x})]})]}),e.jsxs(k,{"data-testid":"settings-area",children:[e.jsx(R,{title:"Letter Case",name:"case",options:u,currentValue:c,onChange:t=>d(t)}),e.jsxs(T,{children:[e.jsx(N,{children:"Pick a Letter"}),e.jsx(w,{children:s.map((t,i)=>e.jsx(I,{$isActive:o===i,onClick:()=>n(i),children:t},t))})]})]})]})})};export{K as default};
