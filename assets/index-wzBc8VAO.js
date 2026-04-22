import{i as l,p,l as H,m as W,r as o,n as t,q as C,A as j,s as F,t as L,v as I,w as T}from"./index-DO3JajC9.js";import{P as D,G as M,d as P,S as z,N as B,e as N,f as G,g as K,i as V}from"./globalStyles-6jG7PpSt.js";import{S as R}from"./SpeakIcon-dzLiDEBu.js";import{C as U,S as Y,D as q}from"./DifficultyPicker-_DkQgrpu.js";import{r as g}from"./index-hEdiZV1j.js";import{g as O,a as Q}from"./wordUtils-Bwq53kUM.js";import{c as X}from"./confetti.module-ONDKWxYZ.js";import{S as _,C as J,a as Z}from"./spell-check-B6K4QR1o.js";import{C as ee}from"./circle-question-mark-foV359Lu.js";const te=l.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px 0;
`,se=l(p.div)`
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
`,ie=l(p.div)`
  background: ${e=>e.theme.colors.surface};
  padding: 30px;
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
`,re=l.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`,ae=l(p.div)`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  color: ${e=>e.$showHint?e.theme.colors.primary:e.theme.colors.textSecondary+"40"};
  transition: color 0.2s ease;
`,oe=l(p.div)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: ${e=>e.theme.colors.textSecondary+"40"};
  transition: color 0.2s ease;

  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`;l.div`
  text-align: center;
  padding: 20px;
  width: 100%;
`;l.div`
  margin-bottom: 10px;
`;const ne=l(p.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`,fe=()=>{const e=H(),r=W(s=>{var i,n;return((n=(i=s.alphabet.gameStats)==null?void 0:i.spelling)==null?void 0:n.streak)??0}),[c,v]=o.useState(""),[h,u]=o.useState(""),[a,x]=o.useState(null),[f,y]=o.useState(!1),[d,w]=o.useState("Easy"),[k,S]=o.useState(!1),m=o.useCallback(()=>{let s=O();d==="Easy"?s=s.filter(n=>n.length<=4):d==="Medium"?s=s.filter(n=>n.length>4&&n.length<=7):d==="Hard"&&(s=s.filter(n=>n.length>7));const i=Q(s);v(i.toUpperCase()),u(""),x(null),y(!1)},[d]);o.useEffect(()=>{m()},[m]),o.useEffect(()=>{r>0&&r%10===0&&S(!0)},[r]),o.useEffect(()=>{const s=()=>{var i;(i=document.getElementById("spelling-input"))==null||i.focus()};return window.addEventListener("click",s),()=>window.removeEventListener("click",s)},[]);const b=s=>{const i=s.target.value.toUpperCase();i.length<=c.length&&u(i)},$=()=>{h===c?(x({message:"Excellent! You spelled it right! 🌟",isCorrect:!0}),g("Excellent"),e(I("spelling")),X({particleCount:150,spread:70,origin:{y:.6},colors:["#6366F1","#4F46E5","#FF7675"]}),setTimeout(m,2e3)):(x({message:"Almost! Try one more time! 💪",isCorrect:!1}),g("Try again"),e(T("spelling")),u(""))},E=s=>{s.key==="Enter"&&$()},A=[{value:"Easy",label:"Short (3-4)"},{value:"Medium",label:"Medium (5-7)"},{value:"Hard",label:"Long (8+)"}];return t.jsxs(D,{"data-testid":"page-spelling-challenge",children:[t.jsx(re,{id:"spelling-input",type:"text",value:h,onChange:b,onKeyDown:E,autoFocus:!0}),t.jsxs(M,{children:[t.jsx(U,{icon:_,title:"Spelling Bee",subtitle:"Listen to the word and spell it out!",streak:r}),t.jsx(Y,{title:"Certificate Progress",subtitle:r<10?`${10-r%10} more for a Certificate! 🏆`:"Milestone reached! 🎉"}),t.jsxs(P,{"data-testid":"activity-area",children:[t.jsxs(z,{children:[Array.from({length:r%10||(r>0?10:0)}).map((s,i)=>t.jsxs(B,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:i*.05},children:[t.jsx(N,{children:"⭐"}),t.jsx(G,{children:i+1})]},i)),r>=10&&t.jsx(K,{children:"+"})]}),t.jsx(ae,{$showHint:f,whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>y(!0),title:"Need a hint?",children:t.jsx(ee,{size:28})}),t.jsx(oe,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:m,title:"Skip to next",children:t.jsx(p.div,{animate:{x:[0,5,0]},transition:{repeat:1/0,duration:1.5},children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"m6 17 5-5-5-5M13 17l5-5-5-5"})})})}),t.jsxs(ie,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>g(c),children:[t.jsx(R,{text:c}),t.jsx(C,{fontSize:"base",color:"textSecondary",fontWeight:"bold",children:"Click to listen"})]}),t.jsx(te,{children:c.split("").map((s,i)=>t.jsx(se,{$isActive:h.length===i,$isError:(a==null?void 0:a.isCorrect)===!1&&h.length===c.length,$isSuccess:(a==null?void 0:a.isCorrect)===!0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:i*.1},children:h[i]||(f&&(i===0||i===c.length-1)?s:"")},i))}),t.jsx(j,{children:a&&t.jsxs(ne,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0},children:[a.isCorrect?t.jsx(J,{color:"#4CAF50"}):t.jsx(Z,{color:"#FF7675"}),t.jsx(C,{color:a.isCorrect?"success":"accent",fontSize:"md",children:a.message})]})})]}),t.jsx(V,{"data-testid":"settings-area",children:t.jsx(q,{name:"complexity",options:A,currentValue:d,onChange:s=>w(s)})})]}),t.jsx(j,{children:k&&t.jsx(F,{onClose:()=>{S(!1),e(L())},challengeName:"Spelling Bee",score:r,level:d})})]})};export{fe as default};
