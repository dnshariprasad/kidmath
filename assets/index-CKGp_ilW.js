import{k as a,s as d,n as A,o as F,r as o,a3 as j,p as t,P as I,W as T,Y as L,a4 as D,a5 as z,a6 as M,a7 as P,a8 as B,K as v,Z as K,$ as R,a9 as G}from"./index-CqNqe0_u.js";import{S as N}from"./SpeakIcon-BEUaf5iO.js";import{r as x,g as V}from"./index-B0YFU1Rv.js";import{g as Y,b as U}from"./wordUtils-DPgh885X.js";import{c as w}from"./confetti.module-ONDKWxYZ.js";import{C as O}from"./ChallengeHeader-CJHh2sOw.js";import{D as Q}from"./DifficultyPicker-C7s_2laC.js";import{S as X,C as Z}from"./spell-check-Chu_fZxB.js";import{C as _}from"./circle-question-mark-C6_27EUF.js";import{C as q}from"./circle-check-BCrdA3Fh.js";import"./info-Cd6A2b_y.js";const J=a.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
`,ee=a(d.div)`
  width: 60px;
  height: 70px;
  border-radius: 16px;
  background: ${e=>e.theme.colors.surface};
  border: 3px solid
    ${e=>e.$isSuccess?e.theme.colors.success:e.$isError?e.theme.colors.accent:e.$isActive?e.theme.colors.primary:e.theme.colors.primary+"15"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: ${e=>e.theme.colors.primary};
  font-family: ${e=>e.theme.fonts.primary};
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    width: 45px;
    height: 55px;
    font-size: 1.8rem;
    border-radius: 12px;
  }
`,te=a(d.div)`
  background: ${e=>e.theme.colors.surface};
  padding: 16px;
  border-radius: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 3px solid ${e=>e.theme.colors.primary}10;

  &:hover {
    border-color: ${e=>e.theme.colors.primary}40;
    transform: translateY(-2px);
  }
`,re=a.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`,se=a(d.div)`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  color: ${e=>e.$showHint?e.theme.colors.primary:e.theme.colors.textSecondary+"40"};
  transition: color 0.2s ease;
`,ie=a(d.div)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: ${e=>e.theme.colors.textSecondary+"40"};
  transition: color 0.2s ease;

  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`;a.div`
  text-align: center;
  padding: 16px;
  width: 100%;
`;a.div`
  margin-bottom: 0;
`;const oe=a(d.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 0;
`,fe=()=>{const e=A(),n=F(r=>{var s,c;return((c=(s=r.alphabet.gameStats)==null?void 0:s.spelling)==null?void 0:c.streak)??0}),[l,b]=o.useState(""),[m,f]=o.useState(""),[i,u]=o.useState(null),[C,S]=o.useState(!1),[h,k]=o.useState("Easy"),y=o.useRef([]),g=o.useCallback(()=>{let r=Y();h==="Easy"?r=r.filter(p=>p.length<=4):h==="Medium"?r=r.filter(p=>p.length>4&&p.length<=7):h==="Hard"&&(r=r.filter(p=>p.length>7));let s=0,c="";for(;s<10;){if(c=U(r),!y.current.includes(c)){y.current=[c,...y.current].slice(0,10);break}s++}b(c.toUpperCase()),f(""),u(null),S(!1)},[h]);o.useEffect(()=>{g()},[g]),o.useEffect(()=>{if(n>0&&n%10===0){u({message:"Incredible! 10 in a row! 🌟",isCorrect:!0}),x("Incredible! 10 in a row! You are a superstar!"),w({particleCount:300,spread:100,origin:{y:.6},colors:["#6366f1","#4f46e5","#818cf8"]});const r=setTimeout(()=>{e(j("spelling")),u(null)},3e3);return()=>clearTimeout(r)}},[n,e]),o.useEffect(()=>{const r=()=>{var s;(s=document.getElementById("spelling-input"))==null||s.focus()};return window.addEventListener("click",r),()=>window.removeEventListener("click",r)},[]);const $=r=>{const s=r.target.value.toUpperCase();s.length<=l.length&&f(s)},E=()=>{if(m===l){const r=V(n);u({message:r,isCorrect:!0}),x(r),e(G("spelling")),w({particleCount:150,spread:70,origin:{y:.6},colors:["#6366F1","#4F46E5","#FF7675"]}),setTimeout(g,2e3)}else u({message:"Almost! Try one more time! 💪",isCorrect:!1}),x("Try again"),e(j("spelling")),f("")},H=r=>{r.key==="Enter"&&E()},W=[{value:"Easy",label:"Short (3-4)"},{value:"Medium",label:"Medium (5-7)"},{value:"Hard",label:"Long (8+)"}];return t.jsxs(I,{"data-testid":"page-spelling-challenge",children:[t.jsx(re,{id:"spelling-input",type:"text",value:m,onChange:$,onKeyDown:H,autoFocus:!0}),t.jsxs(T,{children:[t.jsxs(L,{"data-testid":"activity-area",children:[t.jsx(O,{icon:X,title:"Spelling Bee",subtitle:"Listen to the word and spell it out!",streak:n}),t.jsxs(D,{children:[Array.from({length:n%10||(n>0?10:0)}).map((r,s)=>t.jsxs(z,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:s*.05},children:[t.jsx(M,{children:"⭐"}),t.jsx(P,{children:s+1})]},s)),n>=10&&t.jsx(B,{children:"+"})]}),t.jsx(se,{$showHint:C,whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>S(!0),title:"Need a hint?",children:t.jsx(_,{size:28})}),t.jsx(ie,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:g,title:"Skip to next",children:t.jsx(d.div,{animate:{x:[0,5,0]},transition:{repeat:1/0,duration:1.5},children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"m6 17 5-5-5-5M13 17l5-5-5-5"})})})}),t.jsxs(te,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>x(l),children:[t.jsx(N,{text:l}),t.jsx(v,{fontSize:"base",color:"textSecondary",fontWeight:"bold",children:"Click to listen"})]}),t.jsx(J,{children:l.split("").map((r,s)=>t.jsx(ee,{$isActive:m.length===s,$isError:(i==null?void 0:i.isCorrect)===!1&&m.length===l.length,$isSuccess:(i==null?void 0:i.isCorrect)===!0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:s*.1},children:m[s]||(C&&(s===0||s===l.length-1)?r:"")},s))}),t.jsx(K,{children:i&&t.jsxs(oe,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0},children:[i.isCorrect?t.jsx(q,{color:"#4CAF50"}):t.jsx(Z,{color:"#FF7675"}),t.jsx(v,{color:i.isCorrect?"success":"accent",fontSize:"md",children:i.message})]})})]}),t.jsx(R,{"data-testid":"settings-area",children:t.jsx(Q,{name:"complexity",options:W,currentValue:h,onChange:r=>k(r)})})]})]})};export{fe as default};
