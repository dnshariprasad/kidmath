import{i as l,p as d,l as A,m as W,x as a,n as t,P as F,G as L,y as T,R as I,W as z,Y as B,_ as D,$ as M,K as C,A as j,z as P,a0 as G,a1 as K,a2 as N,a3 as R}from"./index-D3dMVveu.js";import{S as V}from"./SpeakIcon-J3yoH8lr.js";import{C as O,S as U,r as g,g as Y}from"./ChallengeHeader-6TPUvztg.js";import{g as _,b as Q}from"./wordUtils-DPgh885X.js";import{c as X}from"./confetti.module-ONDKWxYZ.js";import{D as q}from"./DifficultyPicker-kjdIYDHK.js";import{S as J,C as Z}from"./spell-check-CEW9gBrb.js";import{C as ee}from"./circle-question-mark-CxMmZpoY.js";import{C as te}from"./circle-check-lp104h0n.js";const se=l.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px 0;
`,ie=l(d.div)`
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
`,re=l(d.div)`
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
`,ae=l.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`,oe=l(d.div)`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  color: ${e=>e.$showHint?e.theme.colors.primary:e.theme.colors.textSecondary+"40"};
  transition: color 0.2s ease;
`,ne=l(d.div)`
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
`;const le=l(d.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`,ye=()=>{const e=A(),o=W(s=>{var i,n;return((n=(i=s.alphabet.gameStats)==null?void 0:i.spelling)==null?void 0:n.streak)??0}),[c,v]=a.useState(""),[h,u]=a.useState(""),[r,x]=a.useState(null),[f,y]=a.useState(!1),[p,w]=a.useState("Easy"),[b,S]=a.useState(!1),m=a.useCallback(()=>{let s=_();p==="Easy"?s=s.filter(n=>n.length<=4):p==="Medium"?s=s.filter(n=>n.length>4&&n.length<=7):p==="Hard"&&(s=s.filter(n=>n.length>7));const i=Q(s);v(i.toUpperCase()),u(""),x(null),y(!1)},[p]);a.useEffect(()=>{m()},[m]),a.useEffect(()=>{o>0&&o%10===0&&S(!0)},[o]),a.useEffect(()=>{const s=()=>{var i;(i=document.getElementById("spelling-input"))==null||i.focus()};return window.addEventListener("click",s),()=>window.removeEventListener("click",s)},[]);const k=s=>{const i=s.target.value.toUpperCase();i.length<=c.length&&u(i)},$=()=>{if(h===c){const s=Y(o);x({message:s,isCorrect:!0}),g(s),e(N("spelling")),X({particleCount:150,spread:70,origin:{y:.6},colors:["#6366F1","#4F46E5","#FF7675"]}),setTimeout(m,2e3)}else x({message:"Almost! Try one more time! 💪",isCorrect:!1}),g("Try again"),e(R("spelling")),u("")},E=s=>{s.key==="Enter"&&$()},H=[{value:"Easy",label:"Short (3-4)"},{value:"Medium",label:"Medium (5-7)"},{value:"Hard",label:"Long (8+)"}];return t.jsxs(F,{"data-testid":"page-spelling-challenge",children:[t.jsx(ae,{id:"spelling-input",type:"text",value:h,onChange:k,onKeyDown:E,autoFocus:!0}),t.jsxs(L,{children:[t.jsx(O,{icon:J,title:"Spelling Bee",subtitle:"Listen to the word and spell it out!",streak:o}),t.jsx(U,{title:"Ready for the Big Test? 🏆",subtitle:"Once you master these words, try the 'Spelling Hero' test to win a trophy!"}),t.jsxs(T,{"data-testid":"activity-area",children:[t.jsxs(I,{children:[Array.from({length:o%10||(o>0?10:0)}).map((s,i)=>t.jsxs(z,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:i*.05},children:[t.jsx(B,{children:"⭐"}),t.jsx(D,{children:i+1})]},i)),o>=10&&t.jsx(M,{children:"+"})]}),t.jsx(oe,{$showHint:f,whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>y(!0),title:"Need a hint?",children:t.jsx(ee,{size:28})}),t.jsx(ne,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:m,title:"Skip to next",children:t.jsx(d.div,{animate:{x:[0,5,0]},transition:{repeat:1/0,duration:1.5},children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"m6 17 5-5-5-5M13 17l5-5-5-5"})})})}),t.jsxs(re,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>g(c),children:[t.jsx(V,{text:c}),t.jsx(C,{fontSize:"base",color:"textSecondary",fontWeight:"bold",children:"Click to listen"})]}),t.jsx(se,{children:c.split("").map((s,i)=>t.jsx(ie,{$isActive:h.length===i,$isError:(r==null?void 0:r.isCorrect)===!1&&h.length===c.length,$isSuccess:(r==null?void 0:r.isCorrect)===!0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:i*.1},children:h[i]||(f&&(i===0||i===c.length-1)?s:"")},i))}),t.jsx(j,{children:r&&t.jsxs(le,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0},children:[r.isCorrect?t.jsx(te,{color:"#4CAF50"}):t.jsx(Z,{color:"#FF7675"}),t.jsx(C,{color:r.isCorrect?"success":"accent",fontSize:"md",children:r.message})]})})]}),t.jsx(P,{"data-testid":"settings-area",children:t.jsx(q,{name:"complexity",options:H,currentValue:p,onChange:s=>w(s)})})]}),t.jsx(j,{children:b&&t.jsx(G,{onClose:()=>{S(!1),e(K())},challengeName:"Spelling Bee",score:o,level:p})})]})};export{ye as default};
