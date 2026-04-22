import{i as n,p as d,l as A,m as W,x as o,n as t,P as F,G as L,y as T,W as I,Y as z,Z as B,_ as D,$ as M,K as C,A as j,z as P,a0 as G,a1 as K,a2 as N,a3 as R}from"./index-Cyde9GVd.js";import{S as V}from"./SpeakIcon-BA7XgMmR.js";import{C as Y,S as O}from"./ChallengeHeader-l7SIMbQx.js";import{r as g}from"./index-RUV2pwzt.js";import{g as U,b as _}from"./wordUtils-DPgh885X.js";import{c as Q}from"./confetti.module-ONDKWxYZ.js";import{D as X}from"./DifficultyPicker-DWLObgsg.js";import{S as Z,C as q}from"./spell-check-C15ob7i0.js";import{C as J}from"./circle-question-mark-DGmsK9Qk.js";import{C as ee}from"./circle-check-Cay8_6VV.js";const te=n.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px 0;
`,se=n(d.div)`
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
`,ie=n(d.div)`
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
`,re=n.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`,oe=n(d.div)`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  color: ${e=>e.$showHint?e.theme.colors.primary:e.theme.colors.textSecondary+"40"};
  transition: color 0.2s ease;
`,ae=n(d.div)`
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
`;const ne=n(d.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`,ye=()=>{const e=A(),l=W(s=>{var i,a;return((a=(i=s.alphabet.gameStats)==null?void 0:i.spelling)==null?void 0:a.streak)??0}),[c,v]=o.useState(""),[h,u]=o.useState(""),[r,x]=o.useState(null),[f,y]=o.useState(!1),[p,w]=o.useState("Easy"),[b,S]=o.useState(!1),m=o.useCallback(()=>{let s=U();p==="Easy"?s=s.filter(a=>a.length<=4):p==="Medium"?s=s.filter(a=>a.length>4&&a.length<=7):p==="Hard"&&(s=s.filter(a=>a.length>7));const i=_(s);v(i.toUpperCase()),u(""),x(null),y(!1)},[p]);o.useEffect(()=>{m()},[m]),o.useEffect(()=>{l>0&&l%10===0&&S(!0)},[l]),o.useEffect(()=>{const s=()=>{var i;(i=document.getElementById("spelling-input"))==null||i.focus()};return window.addEventListener("click",s),()=>window.removeEventListener("click",s)},[]);const k=s=>{const i=s.target.value.toUpperCase();i.length<=c.length&&u(i)},$=()=>{h===c?(x({message:"Excellent! You spelled it right! 🌟",isCorrect:!0}),g("Excellent"),e(N("spelling")),Q({particleCount:150,spread:70,origin:{y:.6},colors:["#6366F1","#4F46E5","#FF7675"]}),setTimeout(m,2e3)):(x({message:"Almost! Try one more time! 💪",isCorrect:!1}),g("Try again"),e(R("spelling")),u(""))},E=s=>{s.key==="Enter"&&$()},H=[{value:"Easy",label:"Short (3-4)"},{value:"Medium",label:"Medium (5-7)"},{value:"Hard",label:"Long (8+)"}];return t.jsxs(F,{"data-testid":"page-spelling-challenge",children:[t.jsx(re,{id:"spelling-input",type:"text",value:h,onChange:k,onKeyDown:E,autoFocus:!0}),t.jsxs(L,{children:[t.jsx(Y,{icon:Z,title:"Spelling Bee",subtitle:"Listen to the word and spell it out!",streak:l}),t.jsx(O,{title:"Ready for the Big Test? 🏆",subtitle:"Once you master these words, try the 'Spelling Hero' test to win a trophy!"}),t.jsxs(T,{"data-testid":"activity-area",children:[t.jsxs(I,{children:[Array.from({length:l%10||(l>0?10:0)}).map((s,i)=>t.jsxs(z,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:i*.05},children:[t.jsx(B,{children:"⭐"}),t.jsx(D,{children:i+1})]},i)),l>=10&&t.jsx(M,{children:"+"})]}),t.jsx(oe,{$showHint:f,whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>y(!0),title:"Need a hint?",children:t.jsx(J,{size:28})}),t.jsx(ae,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:m,title:"Skip to next",children:t.jsx(d.div,{animate:{x:[0,5,0]},transition:{repeat:1/0,duration:1.5},children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"m6 17 5-5-5-5M13 17l5-5-5-5"})})})}),t.jsxs(ie,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>g(c),children:[t.jsx(V,{text:c}),t.jsx(C,{fontSize:"base",color:"textSecondary",fontWeight:"bold",children:"Click to listen"})]}),t.jsx(te,{children:c.split("").map((s,i)=>t.jsx(se,{$isActive:h.length===i,$isError:(r==null?void 0:r.isCorrect)===!1&&h.length===c.length,$isSuccess:(r==null?void 0:r.isCorrect)===!0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:i*.1},children:h[i]||(f&&(i===0||i===c.length-1)?s:"")},i))}),t.jsx(j,{children:r&&t.jsxs(ne,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0},children:[r.isCorrect?t.jsx(ee,{color:"#4CAF50"}):t.jsx(q,{color:"#FF7675"}),t.jsx(C,{color:r.isCorrect?"success":"accent",fontSize:"md",children:r.message})]})})]}),t.jsx(P,{"data-testid":"settings-area",children:t.jsx(X,{name:"complexity",options:H,currentValue:p,onChange:s=>w(s)})})]}),t.jsx(j,{children:b&&t.jsx(G,{onClose:()=>{S(!1),e(K())},challengeName:"Spelling Bee",score:l,level:p})})]})};export{ye as default};
