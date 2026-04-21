import{i as n,p,l as F,m as W,r as o,n as t,q as v,A as w,s as L,t as I,v as M,w as T}from"./index-NzOoTDV7.js";import{P as D,G as z,d as B,S as G}from"./globalStyles-CxNgPgHO.js";import{S as P}from"./SpeakIcon-DgGc79ve.js";import{C as K,S as V,r as m,D as N}from"./DifficultyPicker-Y23e4tn9.js";import{g as R,a as U}from"./wordUtils-Bwq53kUM.js";import{c as Y}from"./confetti.module-ONDKWxYZ.js";import{S as q,C as O,a as Q}from"./spell-check-BRS3OBBe.js";import{C as X}from"./circle-question-mark-Q7EW5rdX.js";import"./wand-sparkles-CaSBif2c.js";const J=n.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px 0;
`,Z=n(p.div)`
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
  box-shadow: ${e=>e.$isActive?`0 10px 20px ${e.theme.colors.primary}20`:"none"};
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    width: 45px;
    height: 55px;
    font-size: 1.8rem;
    border-radius: 12px;
  }
`,_=n(p.div)`
  background: ${e=>e.theme.colors.surface};
  padding: 30px;
  border-radius: 40px;
  box-shadow: 0 15px 35px ${e=>e.theme.colors.shadow};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 3px solid ${e=>e.theme.colors.primary}10;

  &:hover {
    border-color: ${e=>e.theme.colors.primary}40;
    transform: translateY(-5px);
  }
`,ee=n.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`,te=n(p.div)`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  color: ${e=>e.$showHint?e.theme.colors.primary:e.theme.colors.textSecondary+"40"};
  transition: color 0.2s ease;
`,se=n(p.div)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: ${e=>e.theme.colors.textSecondary+"40"};
  transition: color 0.2s ease;

  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`;n.div`
  text-align: center;
  padding: 20px;
  width: 100%;
`;n.div`
  margin-bottom: 10px;
`;const ie=n(p.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`,me=()=>{const e=F(),d=W(s=>s.alphabet.gameStats.spelling.streak),[a,j]=o.useState(""),[h,u]=o.useState(""),[r,x]=o.useState(null),[f,y]=o.useState(!1),[l,S]=o.useState("Easy"),[k,C]=o.useState(!1),g=o.useCallback(()=>{let s=R();l==="Easy"?s=s.filter(c=>c.length<=4):l==="Medium"?s=s.filter(c=>c.length>4&&c.length<=7):l==="Hard"&&(s=s.filter(c=>c.length>7));const i=U(s);j(i.toUpperCase()),u(""),x(null),y(!1)},[l]),b=()=>{const s=["Easy","Medium","Hard"],i=s[Math.floor(Math.random()*s.length)];S(i),m("Spelling Surprise!")};o.useEffect(()=>{g()},[l]),o.useEffect(()=>{d>0&&d%10===0&&C(!0)},[d]),o.useEffect(()=>{const s=()=>{var i;(i=document.getElementById("spelling-input"))==null||i.focus()};return window.addEventListener("click",s),()=>window.removeEventListener("click",s)},[]);const $=s=>{const i=s.target.value.toUpperCase();i.length<=a.length&&u(i)},E=()=>{h===a?(x({message:"Excellent! You spelled it right! 🌟",isCorrect:!0}),m("Excellent"),e(M("spelling")),Y({particleCount:150,spread:70,origin:{y:.6},colors:["#6366F1","#4F46E5","#FF7675"]}),setTimeout(g,2e3)):(x({message:"Almost! Try one more time! 💪",isCorrect:!1}),m("Try again"),e(T("spelling")),u(""))},H=s=>{s.key==="Enter"&&E()},A=[{value:"Easy",label:"Short (3-4)"},{value:"Medium",label:"Medium (5-7)"},{value:"Hard",label:"Long (8+)"}];return t.jsxs(D,{"data-testid":"page-spelling-challenge",children:[t.jsx(ee,{id:"spelling-input",type:"text",value:h,onChange:$,onKeyDown:H,autoFocus:!0}),t.jsxs(z,{children:[t.jsx(K,{icon:q,title:"Spelling Bee",subtitle:"Listen to the word and spell it out!",streak:d}),t.jsx(V,{title:"Spelling surprise?",onShuffle:b}),t.jsxs(B,{children:[t.jsx(te,{$showHint:f,whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>y(!0),title:"Need a hint?",children:t.jsx(X,{size:28})}),t.jsx(se,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:g,title:"Skip to next",children:t.jsx(p.div,{animate:{x:[0,5,0]},transition:{repeat:1/0,duration:1.5},children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"m6 17 5-5-5-5M13 17l5-5-5-5"})})})}),t.jsxs(_,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>m(a),children:[t.jsx(P,{text:a}),t.jsx(v,{fontSize:"base",color:"textSecondary",fontWeight:"bold",children:"Click to listen"})]}),t.jsx(J,{children:a.split("").map((s,i)=>t.jsx(Z,{$isActive:h.length===i,$isError:(r==null?void 0:r.isCorrect)===!1&&h.length===a.length,$isSuccess:(r==null?void 0:r.isCorrect)===!0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:i*.1},children:h[i]||(f&&(i===0||i===a.length-1)?s:"")},i))}),t.jsx(w,{children:r&&t.jsxs(ie,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0},children:[r.isCorrect?t.jsx(O,{color:"#4CAF50"}):t.jsx(Q,{color:"#FF7675"}),t.jsx(v,{color:r.isCorrect?"success":"accent",fontSize:"md",children:r.message})]})})]}),t.jsx(G,{"data-testid":"settings-area",children:t.jsx(N,{name:"complexity",options:A,currentValue:l,onChange:s=>S(s)})})]}),t.jsx(w,{children:k&&t.jsx(L,{onClose:()=>{C(!1),e(I())},challengeName:"Spelling Bee",score:d,level:l})})]})};export{me as default};
