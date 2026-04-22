import{i as l,p as d,l as A,m as W,x as o,n as t,P as F,G as L,y as T,R as I,W as z,Y as B,Z as D,_ as M,K as C,A as j,z as P,$ as G,a0 as K,a1 as N,a2 as R}from"./index-Byl_Y193.js";import{S as V}from"./SpeakIcon-TwcDU24E.js";import{C as O,S as U}from"./ChallengeHeader-BNrbxctj.js";import{r as g,g as Y}from"./index-8hKcjs1a.js";import{g as _,b as Q}from"./wordUtils-DPgh885X.js";import{c as X}from"./confetti.module-ONDKWxYZ.js";import{D as Z}from"./DifficultyPicker-Btzok_m5.js";import{S as q,C as J}from"./spell-check-BhuAZtHN.js";import{C as ee}from"./circle-question-mark-DFdeNzAw.js";import{C as te}from"./circle-check-nMrFxoem.js";const se=l.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px 0;
`,re=l(d.div)`
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
`,ie=l(d.div)`
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
`,oe=l.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`,ae=l(d.div)`
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
`,Se=()=>{const e=A(),a=W(s=>{var r,n;return((n=(r=s.alphabet.gameStats)==null?void 0:r.spelling)==null?void 0:n.streak)??0}),[c,v]=o.useState(""),[h,u]=o.useState(""),[i,x]=o.useState(null),[f,y]=o.useState(!1),[p,w]=o.useState("Easy"),[b,S]=o.useState(!1),m=o.useCallback(()=>{let s=_();p==="Easy"?s=s.filter(n=>n.length<=4):p==="Medium"?s=s.filter(n=>n.length>4&&n.length<=7):p==="Hard"&&(s=s.filter(n=>n.length>7));const r=Q(s);v(r.toUpperCase()),u(""),x(null),y(!1)},[p]);o.useEffect(()=>{m()},[m]),o.useEffect(()=>{a>0&&a%10===0&&S(!0)},[a]),o.useEffect(()=>{const s=()=>{var r;(r=document.getElementById("spelling-input"))==null||r.focus()};return window.addEventListener("click",s),()=>window.removeEventListener("click",s)},[]);const k=s=>{const r=s.target.value.toUpperCase();r.length<=c.length&&u(r)},$=()=>{if(h===c){const s=Y(a);x({message:s,isCorrect:!0}),g(s),e(N("spelling")),X({particleCount:150,spread:70,origin:{y:.6},colors:["#6366F1","#4F46E5","#FF7675"]}),setTimeout(m,2e3)}else x({message:"Almost! Try one more time! 💪",isCorrect:!1}),g("Try again"),e(R("spelling")),u("")},E=s=>{s.key==="Enter"&&$()},H=[{value:"Easy",label:"Short (3-4)"},{value:"Medium",label:"Medium (5-7)"},{value:"Hard",label:"Long (8+)"}];return t.jsxs(F,{"data-testid":"page-spelling-challenge",children:[t.jsx(oe,{id:"spelling-input",type:"text",value:h,onChange:k,onKeyDown:E,autoFocus:!0}),t.jsxs(L,{children:[t.jsx(O,{icon:q,title:"Spelling Bee",subtitle:"Listen to the word and spell it out!",streak:a}),t.jsx(U,{title:"Ready for the Big Test? 🏆",subtitle:"Once you master these words, try the 'Spelling Hero' test to win a trophy!"}),t.jsxs(T,{"data-testid":"activity-area",children:[t.jsxs(I,{children:[Array.from({length:a%10||(a>0?10:0)}).map((s,r)=>t.jsxs(z,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:r*.05},children:[t.jsx(B,{children:"⭐"}),t.jsx(D,{children:r+1})]},r)),a>=10&&t.jsx(M,{children:"+"})]}),t.jsx(ae,{$showHint:f,whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>y(!0),title:"Need a hint?",children:t.jsx(ee,{size:28})}),t.jsx(ne,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:m,title:"Skip to next",children:t.jsx(d.div,{animate:{x:[0,5,0]},transition:{repeat:1/0,duration:1.5},children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"m6 17 5-5-5-5M13 17l5-5-5-5"})})})}),t.jsxs(ie,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>g(c),children:[t.jsx(V,{text:c}),t.jsx(C,{fontSize:"base",color:"textSecondary",fontWeight:"bold",children:"Click to listen"})]}),t.jsx(se,{children:c.split("").map((s,r)=>t.jsx(re,{$isActive:h.length===r,$isError:(i==null?void 0:i.isCorrect)===!1&&h.length===c.length,$isSuccess:(i==null?void 0:i.isCorrect)===!0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:r*.1},children:h[r]||(f&&(r===0||r===c.length-1)?s:"")},r))}),t.jsx(j,{children:i&&t.jsxs(le,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0},children:[i.isCorrect?t.jsx(te,{color:"#4CAF50"}):t.jsx(J,{color:"#FF7675"}),t.jsx(C,{color:i.isCorrect?"success":"accent",fontSize:"md",children:i.message})]})})]}),t.jsx(P,{"data-testid":"settings-area",children:t.jsx(Z,{name:"complexity",options:H,currentValue:p,onChange:s=>w(s)})})]}),t.jsx(j,{children:b&&t.jsx(G,{onClose:()=>{S(!1),e(K())},challengeName:"Spelling Bee",score:a,level:p})})]})};export{Se as default};
